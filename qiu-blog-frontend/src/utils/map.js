import {useCommonStore} from "@/stores/common";
import utils from "@/utils/utils";
export default class Map {
    constructor(vue, dom, getList, content) {
        this.vue = vue;
        this.dom = dom;
        this.getList = getList;
        this.content = content;
        this.map = null;
        this.massMarksIns = null; // 海量点实例
        this.type = "hover"; //鼠标事件类型
        // // 地图1.4 加载
        // let script2 = null
        // script2 = document.createElement('script');
        // script2.type = 'text/javascript';
        // // script2.src = 'https://webapi.amap.com/maps?v=1.4.15&key=b682d911b6c7244e2780328b2cf8b1a0&plugin=AMap.MapType,AMap.MouseTool';
        // script2.src = 'src/utils/mapsrc.js';
        // document.head.appendChild(script2);
        // script2.onload = () => {
        //   // 地图创建
        //   this.init();
        // };
        // 地图创建
        this.init();
    }

    init() {
        this.map = new AMap.Map(this.dom, {
            zooms: [3, 15],
            mapStyle: useCommonStore().theme ? "amap://styles/grey" : "amap://styles/darkblue",
            layers: [],
            zIndex: 10,
            zoom: this.vue.zoom || 14,
            center: this.vue.center || [104.065971, 30.657154],
            features: ["bg", "road", "building"],
            resizeEnable: true
        });
        this.map.on("complete", () => {
            this.initPoint(); // 点绘制
            this.initCanvas(this.reloadAnimation, "ctxAnimation"); // 初始化Canvas动画画布
            this.initCanvas(this.reloadText, "ctxText"); // 初始化ctxText画布
            this.initInfoBox(); // 初始化信息框
        });

        this.map.on("rightclick", (e) => {
            this.vue.handleMap();
            this.animationsIns.stopDraw();
            this.animationsIns.clear();
        });
    }

    setMapTheme() {
        this.map.setMapStyle(useCommonStore().theme ? "amap://styles/grey" : "");
    }

    initCanvas(reDrawFn, str) {
        new AMap.plugin("AMap.CustomLayer", () => {
            let canvas = (this.canvas = document.createElement("canvas"));
            let zindex = {
                ctxAnimation: 120,
                ctxText: 9999
            };
            const customLayer = new AMap.CustomLayer(canvas, {
                zooms: [3, 18],
                alwaysRender: false,
                zIndex: zindex[str]
            });
            let ctx = canvas.getContext("2d");
            if (str === "ctxAnimation") {
                this.ctxAnimation = ctx; // 选中动画
                this.animationsIns = new Animations(this); // 初始化动画
            } else if (str === "ctxText") {
                this.ctxText = ctx; // 选中动画
            }
            customLayer.render = () => {
                this.clearCanvas(canvas);
                reDrawFn.call(this, canvas);
            };
            customLayer.setMap(this.map);
        });
    }

    clearCanvas(canvas) {
        let pageSize = this.map.getSize();
        let width = pageSize.width;
        let height = pageSize.height;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        canvas.width = width;
        canvas.height = height; //清除画布
    }

    reloadAnimation() {
        if (!this.ctxAnimation) return;
        this.clearCanvas(this.ctxAnimation.canvas);
        this.animationsIns.startDraw();
    }

    reloadText() {
        if (!this.ctxText) return;
        this.clearCanvas(this.ctxText.canvas);
        this.darwText();
    }

    initPoint() {
        // 初始化点
        this.massMarksIns = new AMap.MassMarks([], {
            opacity: 1,
            zIndex: 130,
            cursor: "pointer",
            style: this.vue.style
        });
        this.massMarksIns.setMap(this.map);
        this.massMarksIns.on("click", (e) => {
            this.lnglat = e.data.lnglat;
            this.animationsIns.startDraw(this.lnglat);
            this.vue.handlePoint(e.data);
            this.openInfoBox(e.data, "click");
        });
        this.massMarksIns.on("mouseover", (e) => {
            if (this.type === "hover") {
                this.openInfoBox(e.data, "hover");
            }
        });
        this.massMarksIns.on("mouseout", () => {
            if (this.type === "hover") {
                this.closeInfoBox();
            }
        });
        this.drawPoint();
    }

    darwText() {
        if (this.vue.noText) return;
        if (this.rows && !this.vue.noText) {
            let ratio = utils.getPixelRatio(this.ctxText);
            this.ctxText.canvas.style.width = this.ctxText.canvas.width + "px";
            this.ctxText.canvas.style.height = this.ctxText.canvas.height + "px";

            this.ctxText.canvas.width = this.ctxText.canvas.width * ratio;
            this.ctxText.canvas.height = this.ctxText.canvas.height * ratio;
            this.ctxText.scale(ratio, ratio);

            this.rows.forEach((item) => {
                let pixel = this.map.lngLatToContainer(item.lnglat);

                this.ctxText.beginPath(); //开始绘制
                if (item.style === 0) {
                } //arc 的意思是“弧”
                else this.ctxText.arc(pixel.x, pixel.y - 4, 9, 0, 2 * Math.PI); //arc 的意思是“弧”
                this.ctxText.fillStyle = "#39B1F9";
                this.ctxText.fill();
                this.ctxText.closePath();
                this.ctxText.closePath();
                this.ctxText.font = "50px";
                this.ctxText.fillStyle = "#fff";
                //             this.ctxText.fillStyle = utils.paramIsOverproof('aqi',item['aqi']||item['value'],1).color;
                this.ctxText.textAlign = "center";
                if (item.style === 0) {
                    // this.ctxText.fillText(item.value || '--', pixel.x , pixel.y+20 );
                } else this.ctxText.fillText(item.value || "--", pixel.x, pixel.y);
                this.ctxText.closePath();
            });
        }
    }

    async drawPoint() {
        let {rows} = await this.getList();
        this.rows = rows;
        rows.forEach((i) => {
            i.lnglat = [i.lng, i.lat];
        });
        this.map.setCenter(this.vue.center);
        this.massMarksIns.setData(rows);
        this.darwText();
    }

    initInfoBox() {
        this.infoWindow = null;
        this.infoWindow = new AMap["InfoWindow"]({
            isCustom: true, //使用自定义窗体
            content: null,
            offset: new AMap.Pixel(0, -17)
        });
    }

    openInfoBox(data, type) {
        this.type = type;
        if (type === "hover") {
            this.infoWindow["setContent"](this.vue.content(data));
            this.infoWindow.open(this.map, data.lnglat);
        } else if (type === "click") {
            this.infoWindow["setContent"](this.vue.content(data));
            this.infoWindow.open(this.map, data.lnglat);
        }
    }

    closeInfoBox() {
        this.infoWindow.close();
    }

    destroy() {
        this.map.destroy();
        this.map = null;
    }
}

class Animations {
    constructor(mapIns) {
        this.radius = 0;
        this.ctx = mapIns.ctxAnimation;
        this.canvas = mapIns.canvas;
        this.map_ = mapIns;
        this.amap = mapIns.map;
        this.vue = mapIns.vue;
        this.timer = null;
        this.point = null;
        this.color = "red";
    }

    resetPoint() {
        this.pixel = this.amap.lngLatToContainer(this.point);
    }

    drawCircle() {
        if (!this.point) return;
        const pixel = this.pixel;
        this.ctx.beginPath();
        this.ctx.arc(pixel.x - 1, pixel.y - 1, this.radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = "rgba(0,103,238,0.7)";
        this.ctx.stroke();
        this.radius += 0.5;
        if (this.radius > 30) {
            this.radius = 0;
        }
    }

    render() {
        let prev = this.ctx.globalCompositeOperation;
        this.ctx.globalCompositeOperation = "destination-in";
        this.ctx.globalAlpha = 0.95;
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.globalCompositeOperation = prev;
        this.drawCircle();
        this.timer = requestAnimationFrame(this.render.bind(this));
    }

    startDraw(point, color) {
        if (point) {
            this.point = point;
            this.color = color;
            let size = this.amap.getSize();
            let width = size.width;
            let height = size.height;
            this.canvas.style.width = width + "px";
            this.canvas.style.height = height + "px";
            this.canvas.width = width;
            this.canvas.height = height;
        }
        if (!this.point) return;
        this.resetPoint();
        this.stopDraw();
        this.render();
    }

    stopDraw() {
        cancelAnimationFrame(this.timer);
    }

    //清除画布
    clear() {
        if (!this.ctx) return;
        this.point = null;
        this.canvas.width = 0;
        this.canvas.height = 0; //清除画布
    }
}
