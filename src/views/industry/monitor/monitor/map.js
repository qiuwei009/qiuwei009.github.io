// import geoJsonData from '~/utils/geoJson.json';
// import subway from '~/utils/subway.json';
import Animations from './Animations';
export default class Map {
    constructor(vue, mapDom, noise, device, transport) {
        this.vue = vue;
        this.noise = noise;
        this.device = device;
        this.transport = transport;
        this.mapDom = mapDom;
        this.map = null;
        this.animationsIns = null; // 动画实例
        this.ctxAnimation = null;
        this.points = null; //点数据
        this.polygon = null; //区域
        this.color = ['#999999', '#00E400', '#E6E700', '#FF7E00', '#FF0200', '#99004D', '#7E0024', '#3B78F5']; //iconcolor
        this.mapZoomLevel = 11;
        this.type = 'hover'; //鼠标事件类型
        this.subwaysPoint = {};
        this.infoData = {};

        this.init();

        window.focusInfoWindow = () => {
            this.focusInfoWindow();
        }; //特别关注
        window.closeInfoWindow1 = () => {
            this.closeInfoWindow1();
            if (this.polygon) this.map.remove(this.polygon);
        }; //信息框关闭
        window.getSelectionWindowN = () => {
            this.getSelectionWindowN();
        }; //标段详情
        window.getDevicveWindowN = () => {
            this.vue.active = null;
            this.getDevicveWindowN();
        }; //测点设备详情
        window.getSelectionWindowD = () => {
            this.getSelectionWindowD();
        }; //标段详情
        window.getDevicveWindowD = () => {
            this.vue.active = null;
            this.getDevicveWindowD();
        }; //测点设备详情
        window.getSelectionWindowT = () => {
            this.getSelectionWindowT();
        }; //标段详情
        window.getDevicveWindowT = () => {
            this.vue.active = null;
            this.getDevicveWindowT();
        }; //测点设备详情
    }

    init() {
        let dark = JSON.parse(sessionStorage.getItem('dark'));
        this.vue.mapType = (dark === 'dark') ? 1 : (dark === 'light') ? 0 : 1;
        this.map = new AMap.Map(this.mapDom, {
            zooms: [3, 15],
            mapStyle: this.vue.mapStyle[this.vue.mapType],
            layers: [],
            zIndex: 10,
            zoom: 11,
            center: [104.265971, 30.657154],
            features: ['bg', 'road', 'building'],
            resizeEnable: true
        });
        this.map.on('complete', () => {
            this.initPoint(); //事件点
            this.createCanvas('ctxAnimation'); //选中动画
            // this.createCanvas('ctxText'); //地铁文字
            this.createCanvas('ctxValue'); //
            this.initInfoBox(); //信息框
            // this.initWay();
            // this.initPro(510100, 2)//成都区域
            // this.geoPlyline() //区域事件


            this.map.on('zoomend', () => {
                this.mapZoomLevel = this.map.getZoom();
            });
            this.map.on('click', () => {
                this.device.section.show = false;
                this.device.station.show = false;
                this.noise.noiseList.show = false;
                this.noise.closeNoise();
            });
            this.map.on('rightclick', () => {
                this.closeAnimation();
                this.device.section.show = false;
                this.device.station.show = false;
                this.noise.noiseList.show = false;
                this.noise.closeNoise();
            });
            this.map.on('dragstart', () => {
            });
            this.map.on('dragend', () => {
            });
        });
    }

    createCanvas(str) {
        AMap.plugin('AMap.CustomLayer', () => {
            const canvas = document.createElement('canvas');
            let zindex = {
                ctxAnimation: 120,//选择图标
                ctxText: 90, ctxValue: 90
            };
            const customLayer = new AMap.CustomLayer(canvas, {
                zooms: [3, 18], alwaysRender: false, zIndex: zindex[str]
            });
            let ctx = canvas.getContext('2d');
            if (str === 'ctxAnimation') {
                this.ctxAnimation = ctx; // 选中动画
                this.animationsIns = new Animations(this, 'rgb(255,4,4)');// 初始化动画
            } else if (str === 'ctxText') {
                this.ctxText = ctx;  // 轨道文本
            } else if (str === 'ctxValue') {
                this.ctxValue = ctx;  // 文本
            }
            customLayer.render = () => {
                this.clearCanvas(canvas);
                this.reload(canvas);
            };
            customLayer.setMap(this.map);
        });
    }

    clearCanvas(canvas) {
        let size = this.map.getSize();
        let width = size.width;
        let height = size.height;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        canvas.width = width;
        canvas.height = height;//清除画布
    }

    reload(canvas) {
        if (!canvas) return false;
        this.drawPoint();
        this.resAnimation();
    }

    resAnimation() {
        this.clearCanvas(this.ctxAnimation.canvas);
        this.animationsIns.startDraw();
    }

    closeAnimation() {
        this.animationsIns.clear();
    }

    resWayPointText() {
        if (this.mapZoomLevel > 13) {
            // 地铁默认点名称
            this.pointarr.forEach(item => {
                let pixel = this.map.lngLatToContainer(item.lnglat);
                this.ctxText.closePath();
                this.ctxText.fillStyle = 'rgba(139,139,139,0.76)';
                this.ctxText.font = '12px Arial';
                this.ctxText.fillText(item.name, pixel.x + 15, pixel.y + 5);
                this.ctxText.closePath();
            });
        }
    }

    line(arr, color) {
        this.polyline = new AMap.Polyline({
            path: arr,
            isOutline: true,
            outlineColor: 'transparent',
            borderWeight: 1,
            strokeColor: color,
            strokeOpacity: .5,
            strokeWeight: 1, // 折线样式还支持 'dashed'
            // strokeStyle: "dashed",
            zIndex: 2
        });
        this.polyline.setMap(this.map);

        // this.polyline.on('mouseover', (e) => {
        //     this.map.setDefaultCursor('pointer');
        //     this.openInfoWindow(e, 'hoverTip')
        // })
        // this.polyline.on('mouseout', (event) => {
        //     this.map.setDefaultCursor('');
        //     this.closeInfoWindow1()
        // })
        // 缩放地图到合适的视野级别
        // this.map.setFitView([polyline])

        //
        //     const object3Dlayer = new AMap.Object3DLayer();
        //     const center = {lng: 114.301803, lat: 30.599835};	//起点
        //     const points = [
        //         new AMap.LngLat(116.400433, 39.908084),
        //         new AMap.LngLat(113.52412, 34.777709),
        //         new AMap.LngLat(108.821972, 34.270829),
        //         new AMap.LngLat(104.067108, 30.65769)
        //     ];
        //     const numberOfPoints = 180;
        //     const minHeight = 20;
        //     const meshLine = new AMap.Object3D.MeshLine({
        //         path: this.computeBezier(points, numberOfPoints, minHeight),
        //         height: this.getEllipseHeight(numberOfPoints, 2000000, minHeight),
        //         color: 'rgba(55,129,240, 0.9)',
        //         width: 1										//线条宽度
        //     });
        //     meshLine.transparent = true;
        //     object3Dlayer.add(meshLine);
        //     meshLine['backOrFront'] = 'both';
        //     this.map.add(object3Dlayer);
        //     return
    }

    computeBezier(points, numberOfPoints) {
        let dt;
        let i;
        let curve = [];

        dt = 1.0 / (numberOfPoints - 1);

        for (i = 0; i < numberOfPoints; i++) {
            curve[i] = this.pointOnCubicBezier(points, i * dt);
        }

        return curve;
    }

    getEllipseHeight(count, maxHeight, minHeight) {
        let height = [];
        let radionUnit = Math.PI / 180;

        for (let i = 0; i < count; i++) {
            let radion = i * radionUnit;

            height.push(minHeight + Math.sin(radion) * maxHeight);
        }

        return height;
    }

    pointOnCubicBezier(cp, t) {
        let ax, bx, cx;
        let ay, by, cy;
        let tSquared, tCubed;

        cx = 3.0 * (cp[1].lng - cp[0].lng);
        bx = 3.0 * (cp[2].lng - cp[1].lng) - cx;
        ax = cp[3].lng - cp[0].lng - cx - bx;

        cy = 3.0 * (cp[1].lat - cp[0].lat);
        by = 3.0 * (cp[2].lat - cp[1].lat) - cy;
        ay = cp[3].lat - cp[0].lat - cy - by;

        tSquared = t * t;
        tCubed = tSquared * t;

        let lng = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].lng;
        let lat = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].lat;

        return new AMap.LngLat(lng, lat);
    }

    closeLine() {
        this.map.remove(this.polyline);
    }

    initPro(code, dep) {
        dep = typeof dep == 'undefined' ? 2 : dep;
        this.disProvince && this.disProvince.setMap(null);
        this.disProvince = new AMap.DistrictLayer.Province({
            zIndex: 5, adcode: [code], depth: dep, styles: {
                'fill': () => '', 'province-stroke': 'cornflowerblue', 'city-stroke': 'white', // 中国地级市边界
                'county-stroke': 'rgba(228,232,234,0.2)' // 中国区县边界
            }
        });
        this.disProvince.setMap(this.map);
    }

    geoPlyline() {
        let geoJson = new AMap.GeoJSON({
            geoJSON: geoJsonData,   // GeoJSON对象
            getPolygon: function (geojson, lnglats) {//还可以自定义getMarker和getPolyline
                return new AMap.Polygon({
                    path: lnglats, fillOpacity: .4, strokeColor: '#6AA5E7', fillColor: '#091F58', strokeWeight: 1
                });
            }
        });
        //图层点击
        geoJson.on('click', e => {
            let px = e.pixel;
            let currentprops = this.disProvince.getDistrictByContainerPos(px);
            currentprops.lnglat = e.lnglat;
            this.openInfoWindow(currentprops, 'grid');
            if (this.polygon) this.map.remove(this.polygon);
            geoJsonData.features.forEach(item => {
                if (item.properties.name === currentprops.NAME_CHN) {
                    this.polygon = new AMap.Polygon({
                        strokeWeight: 1,
                        path: item.geometry.coordinates,
                        fillOpacity: 0.4,
                        fillColor: '#80d8ff',
                        strokeColor: '#0091ea'
                    });
                    this.polygon.on('click', (e) => {
                        if (this.vue.edit === false) {
                            currentprops.lnglat = e.lnglat;
                            this.openInfoWindow(currentprops, 'grid');
                        }
                    });
                    this.polygon.on('rightclick', () => {
                        this.map.remove(this.polygon);
                        // this.closeInfoWindow1()
                    });
                    this.map.add(this.polygon);
                }
            });
        });

        geoJson.on('rightclick', () => {
            this.vue.full = false;
        });
        this.map.add(geoJson);
    }

    initInfoBox() {
        this.infoWindow = null;
        let offset = new AMap.Pixel(0, -17);
        this.infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: null, offset: offset
        });
    }

    openInfoWindow(data, type) {
        this.type = type;
        this.infoData = data; // 获取关注数据
        console.log(this.infoData, 'this.infoData');
        let content = null;
        switch (data.stationType) {
            case '区域':
                if (type === 'hover') {
                    content = `<div class='infoWindowBoxHover'>
                                <p class='flex just-c beyond_eip' style='color: #fff;margin-bottom: 10px;'>${data.name || data.stationName}</p>
                                <p class='flex just-c beyond_eip' style='color: #fff;font-size: 12px;'>${data.value ? data.stationType : data.stationName ? '-' : '区域下设备数'} : ${data.value && data.value !== '离线' ? data.value + ' dB' : data.num ? data.num : '-'}</p>
                            </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);
                } else if (type === 'grid') {
                    content = `<div class='infoWindowBoxHover'>
                        <p class='flex just-b' >
                            <i onclick='focusInfoWindow()' class='iconfont icon-RectangleCopy19 cursor'></i>
                            <span class='beyond_eip' style='flex: 1;margin: 0 10px;' title='区域数据'>区域数据</span>
                            <i onclick='closeInfoWindow1()' class='iconfont icon-guanbi cursor'></i>
                        </p>
                        <div >
                            区域数据
                        </div>
                     </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);
                } else if (type === 'click') {
                    content = `<div class='infoWindowBox'>
                        <p class='flex just-b' style='border-bottom: 1px dashed rgba(255,255,255,0.7)'>
                            <span class='beyond_eip' style='flex: 1;margin: 0 10px;' title='${data.name}'>${data.name} </span>
                            <i onclick='closeInfoWindow1()' class='iconfont icon-guanbi cursor'></i>
                        </p>
                        <div class='flex just-a'>
                            <div class=' flex just-c' v-if='${!data.value}'  onclick='getSelectionWindowN()'>
                                <canvas id='canvasS'  width='100' height='100'></canvas >
                            </div>
                             <div class=' flex just-c align-c'  style='${data.status ? 'color:#00ff2a;' : 'color:red;'}font-weight: bold;' v-if='${data.value}' onclick='getDevicveWindowN()'>
                                ${data.status ? '设备在线' : '设备离线'}
                            </div>
                        </div>
                     </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);
                    setTimeout(() => {
                        let arr = ['canvasS'], color = ['#00ff2a', '#42C7FF'], data = [{
                            num: this.infoData.value ? (this.infoData.value === '离线' ? '--' : this.infoData.value) : this.infoData.onlineNum,
                            name: this.infoData.value ? this.infoData.stationType : '设备在线数',
                            nuit: this.infoData.value ? (this.infoData.value === '离线' ? '' : 'dB') : '台',
                            total: this.infoData.value ? 100 : this.infoData.num
                        }, {
                            num: this.infoData.value ? 1 : this.infoData.num,
                            name: this.infoData.value ? (this.infoData.value === '离线' ? '设备离线' : '设备在线') : '总设备数',
                            nuit: this.infoData.value ? '' : '台',
                            total: this.infoData.value ? 0 : this.infoData.num
                        }];
                        this.drawRaing(arr, color, data);
                    }, 150);
                } else if (type === 'hoverTip') {
                    content = `<div class='infoWindowBoxHover'>
<!--                            <p class="leftWTop"></p>-->
<!--                            <p class="rightWBottom"></p>-->
                            <div class='flex-b flex-cc' >
                                <span class='beyond_eip' style='flex: 1;margin: 0 10px;color: #fff;' >${data.target.w.path[0].name}</span>
                            </div>
                     </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);
                }
                break;
            case '噪声':
                if (type === 'hover') {
                    content = `<div class='infoWindowBoxHover'>
                                <p class='flex just-c beyond_eip' style='color: #fff;margin-bottom: 10px;'>${data.name || data.stationName}</p>
                                <p class='flex just-c beyond_eip' style='color: #fff;font-size: 12px;'>${data.value ? data.stationType : data.stationName ? '-' : '区域下设备数'} : ${data.value && data.value !== '离线' ? data.value + ' dB' : data.num ? data.num : '-'}</p>
                            </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);
                } else if (type === 'grid') {
                    content = `<div class='infoWindowBoxHover'>
                        <p class='flex just-b' >
                            <i onclick='focusInfoWindow()' class='iconfont icon-RectangleCopy19 cursor'></i>
                            <span class='beyond_eip' style='flex: 1;margin: 0 10px;' title='区域数据'>区域数据</span>
                            <i onclick='closeInfoWindow1()' class='iconfont icon-guanbi cursor'></i>
                        </p>
                        <div >
                            区域数据
                        </div>
                     </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);
                } else if (type === 'click') {
                    content = `<div class='infoWindowBox'>
                        <p class='flex just-b' style='border-bottom: 1px dashed rgba(255,255,255,0.7)'>
                            <span class='beyond_eip' style='flex: 1;margin: 0 10px;' title='${data.name}'>${data.name} </span>
                            <i onclick='closeInfoWindow1()' class='iconfont icon-guanbi cursor'></i>
                        </p>
                        <div class='flex just-a'>
                            <div class=' flex just-c' v-if='${!data.value}'  onclick='getSelectionWindowN()'>
                                <canvas id='canvasS'  width='100' height='100'></canvas >
                            </div>
                             <div class=' flex just-c align-c'  style='${data.status ? 'color:#00ff2a;' : 'color:red;'}font-weight: bold;' v-if='${data.value}' onclick='getDevicveWindowN()'>
                                ${data.status ? '设备在线' : '设备离线'}
                            </div>
                        </div>
                     </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);
                    setTimeout(() => {
                        let arr = ['canvasS'], color = ['#00ff2a', '#42C7FF'], data = [{
                            num: this.infoData.value ? (this.infoData.value === '离线' ? '--' : this.infoData.value) : this.infoData.onlineNum,
                            name: this.infoData.value ? this.infoData.stationType : '设备在线数',
                            nuit: this.infoData.value ? (this.infoData.value === '离线' ? '' : 'dB') : '台',
                            total: this.infoData.value ? 100 : this.infoData.num
                        }, {
                            num: this.infoData.value ? 1 : this.infoData.num,
                            name: this.infoData.value ? (this.infoData.value === '离线' ? '设备离线' : '设备在线') : '总设备数',
                            nuit: this.infoData.value ? '' : '台',
                            total: this.infoData.value ? 0 : this.infoData.num
                        }];
                        this.drawRaing(arr, color, data);
                    }, 150);
                } else if (type === 'hoverTip') {
                    content = `<div class='infoWindowBoxHover'>
<!--                            <p class="leftWTop"></p>-->
<!--                            <p class="rightWBottom"></p>-->
                            <div class='flex-b flex-cc' >
                                <span class='beyond_eip' style='flex: 1;margin: 0 10px;color: #fff;' >${data.target.w.path[0].name}</span>
                            </div>
                     </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);
                }
                break;
            case '轨道':
                if (type === 'hover') {
                    content = `<div class='infoWindowBoxHover'>
                                <p class='flex just-c beyond_eip' style='color: #fff;margin-bottom: 10px;'>${data.sectionName}</p>
                                <p class='flex just-c beyond_eip' style='color: #fff;font-size: 12px;'>${data.stationType}</p>
                            </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);
                } else if (type === 'click') {
                    //<div class="flex just-c cursor"  v-if="${!data.value}" >
                    //                                 <canvas id="canvasS"  width="100" height="100"></canvas >
                    //                             </div>
                    content = `<div class='infoWindowBox'>
                        <p class='flex just-b'  style='border-bottom: 1px dashed rgba(255,255,255,0.7)'>
                            <span class='beyond_eip' style='flex: 1;' title='${data.sectionName}'>标段名: ${data.sectionName}</span>
                            <i onclick='closeInfoWindow1()' class='iconfont icon-guanbi cursor'></i>
                        </p>
                        <div class='flex just-a' style='padding-bottom: 0;'>
                             <div class='flex just-c cursor'   v-if='${data.value}' onclick='getDevicveWindowD()'>
                                <canvas id='canvasD' width='100' height='100'></canvas >
                            </div>
                        </div>
                        <p class='flex just-c beyond_eip' style='color: #fff;font-size: 12px;padding: 0 10px 0 10px;box-sizing: border-box;display: flex;justify-content: space-between;'>所属项目: ${data.projectName} <span style='font-size: 12px;color: cyan;cursor: pointer;margin-left: 10px;' onclick='getSelectionWindowD()'>(项目标段列表)</span></p>
                     </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);
                    this.device.getPointsNum(data);
                }
                break;
            case '运输':
                if (type === 'hover') {
                    content = `<div class='infoWindowBoxHover'>
                                <p class='flex just-c beyond_eip' style='color: #fff;margin-bottom: 10px;'>${data.name || data.stationName}</p>
                                <p class='flex just-c beyond_eip' style='color: #fff;font-size: 12px;'>${data.value ? data.stationType : data.stationName ? '-' : '区域下设备数'} : ${data.value && data.value !== '离线' ? data.value + ' dB' : data.num ? data.num : '-'}</p>
                            </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);
                } else if (type === 'grid') {
                    content = `<div class='infoWindowBoxHover'>
                        <p class='flex just-b' >
                            <i onclick='focusInfoWindow()' class='iconfont icon-RectangleCopy19 cursor'></i>
                            <span class='beyond_eip' style='flex: 1;margin: 0 10px;' title='区域数据'>区域数据</span>
                            <i onclick='closeInfoWindow1()' class='iconfont icon-guanbi cursor'></i>
                        </p>
                        <div >
                            区域数据
                        </div>
                     </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);
                } else if (type === 'click') {
                    content = `<div class='infoWindowBox'>
                        <p class='flex just-b' >
                            <span class='beyond_eip' style='flex: 1;margin: 0 10px;' title='${data.name}'>${data.name} </span>
                            <i onclick='closeInfoWindow1()' class='iconfont icon-guanbi cursor'></i>
                        </p>
                        <div class='flex just-a'>
                            <div class=' flex just-c' v-if='${!data.value}'  onclick='getSelectionWindowT()'>
                                <canvas id='canvasS'  width='100' height='100'></canvas >
                            </div>
                             <div class=' flex just-c'  v-if='${data.value}' onclick='getDevicveWindowT()'>
                                <canvas id='canvasD' width='100' height='100'></canvas >
                            </div>
                        </div>
                     </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);

                    setTimeout(() => {
                        let arr = ['canvasS', 'canvasD'], color = ['#00ff2a', '#42C7FF'], data = [{
                            num: this.infoData.value ? (this.infoData.value === '离线' ? '--' : this.infoData.value) : this.infoData.onlineNum,
                            name: this.infoData.value ? this.infoData.stationType : '设备在线数',
                            nuit: this.infoData.value ? (this.infoData.value === '离线' ? '' : 'dB') : '台',
                            total: this.infoData.value ? 100 : this.infoData.num
                        }, {
                            num: this.infoData.value ? 1 : this.infoData.num,
                            name: this.infoData.value ? (this.infoData.value === '离线' ? '设备离线' : '设备在线') : '总设备数',
                            nuit: this.infoData.value ? '' : '台',
                            total: this.infoData.value ? 0 : this.infoData.num
                        }];
                        this.drawRaing(arr, color, data);
                    }, 150);


                } else if (type === 'hoverTip') {
                    content = `<div class='infoWindowBoxHover'>
<!--                            <p class="leftWTop"></p>-->
<!--                            <p class="rightWBottom"></p>-->
                            <div class='flex-b flex-cc' >
                                <span class='beyond_eip' style='flex: 1;margin: 0 10px;color: #fff;' >${data.target.w.path[0].name}</span>
                            </div>
                     </div>`;
                    this.infoWindow.setContent(content);
                    this.infoWindow.open(this.map, data.lnglat);
                }
                break;
        }
    }

    closeInfoWindow1() {
        this.infoData = {};
        this.infoWindow.close();
        this.type = 'hover';
    }

    initWay() {
        //处理数据
        let subways = subway['l'];
        this.subwaysPoint = {
            '科学城-韦家碾': [],
            '五根松-韦家碾': [],
            '2号线': [],
            '3号线': [],
            '4号线': [],
            '5号线': [],
            '6号线': [],
            '7号线': [],
            '8号线': [],
            '9号线': [],
            '10号线': [],
            '11号线': [],
            '12号线': [],
            '13号线': [],
            '14号线': [],
            '15号线': [],
            '16号线': [],
            '17号线': [],
            '18号线': [],
            '19号线': [],
            '地铁1号线科学城-韦家碾': [],
            '地铁1号线五根松-韦家碾': [],
            '地铁2号线': [],
            '地铁3号线': [],
            '地铁4号线': [],
            '地铁5号线': [],
            '地铁6号线': [],
            '地铁7号线': [],
            '地铁8号线': [],
            '地铁9号线': [],
            '地铁10号线': [],
            '地铁11号线': [],
            '地铁12号线': [],
            '地铁13号线': [],
            '地铁14号线': [],
            '地铁15号线': [],
            '地铁16号线': [],
            '地铁17号线': [],
            '地铁18号线': [],
            '地铁19号线': []
        };
        subways.forEach(i => {
            i.st.forEach(j => {
                if (i.ln === '1号线') {
                    this.subwaysPoint[i.la].push({
                        name: j.n, lnglat: {
                            lng: j.sl.split(',')[0],
                            lat: j.sl.split(',')[1],
                            Q: j.sl.split(',')[1],
                            R: j.sl.split(',')[0]
                        }
                    });
                    this.subwaysPoint[i.kn].push({
                        lng: j.sl.split(',')[0],
                        lat: j.sl.split(',')[1],
                        Q: j.sl.split(',')[1],
                        R: j.sl.split(',')[0],
                        name: i.kn
                    });
                } else {
                    this.subwaysPoint[i.ln].push({
                        name: j.n, lnglat: {
                            lng: j.sl.split(',')[0],
                            lat: j.sl.split(',')[1],
                            Q: j.sl.split(',')[1],
                            R: j.sl.split(',')[0]
                        }
                    });
                    this.subwaysPoint[i.kn].push({
                        lng: j.sl.split(',')[0],
                        lat: j.sl.split(',')[1],
                        Q: j.sl.split(',')[1],
                        R: j.sl.split(',')[0],
                        name: i.kn
                    });
                }
            });
        });

        //绘制线条
        this.line(this.subwaysPoint['地铁1号线五根松-韦家碾'], '#007bfd');
        this.line(this.subwaysPoint['地铁1号线科学城-韦家碾'], '#007bfd');
        this.line(this.subwaysPoint['地铁2号线'], 'rgba(255,147,5,1)');
        this.line(this.subwaysPoint['地铁3号线'], '#f82167');
        this.line(this.subwaysPoint['地铁4号线'], 'rgba(5,255,63,1)');
        this.line(this.subwaysPoint['地铁5号线'], 'rgba(5,234,255,1)');
        this.line(this.subwaysPoint['地铁6号线'], '#ff6700');
        this.line(this.subwaysPoint['地铁7号线'], 'rgba(5,255,244,1)');
        this.line(this.subwaysPoint['地铁8号线'], 'rgba(255,5,197,1)');
        this.line(this.subwaysPoint['地铁9号线'], '#ffb900');
        this.line(this.subwaysPoint['地铁11号线'], 'rgba(184,255,5,1)');

        //点
        this.pointarr = [...this.subwaysPoint['五根松-韦家碾'], ...this.subwaysPoint['科学城-韦家碾'], ...this.subwaysPoint['2号线'], ...this.subwaysPoint['3号线'], ...this.subwaysPoint['4号线'], ...this.subwaysPoint['5号线'], ...this.subwaysPoint['6号线'], ...this.subwaysPoint['7号线'], ...this.subwaysPoint['8号线'], ...this.subwaysPoint['9号线'], ...this.subwaysPoint['11号线']];

        this.wayPoint.setData(this.pointarr);
    }

    initPoint() {
        // 初始化点
        this.points = new AMap.MassMarks([], {
            opacity: 1, zIndex: 130, cursor: 'pointer', style: [{
                url: new URL(`../../../../assets/image/mapIcon/mapicon1-00.png`, import.meta.url),
                anchor: new AMap.Pixel(23, 23),
                size: new AMap.Size(46, 46)
            }, //0
                {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon1-01.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon1-02.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon1-03.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon1-04.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon1-05.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon1-06.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-00.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-01.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-02.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-03.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-04.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-05.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-06.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                },

                //测振icon
                {
                    url: new URL(`../../../../assets/image/deviceMapIcon/mapicon1-00.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                },//14
                {
                    url: new URL(`../../../../assets/image/deviceMapIcon/mapicon1-00.png`, import.meta.url),
                    anchor: new AMap.Pixel(20, 20),
                    size: new AMap.Size(40, 40)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon1-02.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon1-03.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon1-04.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon1-05.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon1-06.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-00.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-01.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-02.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-03.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-04.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-05.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/mapicon3-06.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                },


                // 网格1
                {
                    url: new URL(`../../../../assets/image/mapIcon/grid1-01.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                },//28
                {
                    url: new URL(`../../../../assets/image/mapIcon/grid1-02.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid1-03.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid1-04.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid1-05.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid1-06.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid1-07.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                },

                // 网格2
                {
                    url: new URL(`../../../../assets/image/mapIcon/grid2-01.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid2-02.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid2-03.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid2-04.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid2-05.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid2-06.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid2-07.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                },

                // 网格3
                {
                    url: new URL(`../../../../assets/image/mapIcon/grid3-01.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid3-02.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid3-03.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid3-04.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid3-05.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid3-06.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }, {
                    url: new URL(`../../../../assets/image/mapIcon/grid3-07.png`, import.meta.url),
                    anchor: new AMap.Pixel(23, 23),
                    size: new AMap.Size(46, 46)
                }]
        });
        this.bindEvent(this.points);
        this.noise.getPoints();
        this.device.getPoints();
        this.transport.getPoints();

        // 初始化轨道
        this.wayPoint = new AMap.MassMarks([], {
            opacity: 1, zIndex: 120, cursor: 'pointer', // style: icon,
            style: {
                // url: new URL(`../../../../assets/svg/station.svg`, import.meta.url),
                anchor: new AMap.Pixel(6, 6), size: new AMap.Size(12, 12)
            }
        });
        this.wayPoint.setMap(this.map);
    }

    bindEvent(mass) {
        mass.on('click', e => {
            this.animationsIns.startDraw(e.data.lnglat, this.color[e.data.style]);
            if (e.data.stationType === '噪声' && e.data.gridId) {
                this.openInfoWindow(e.data, 'click');
                this.noise.getNoiseTrend(e.data, {param: 'noise'});
            } else if (e.data.stationType === '轨道') {
                this.openInfoWindow(e.data, 'click');
            } else if (e.data.stationType === '运输') {
                this.openInfoWindow(e.data, 'click');
            }
        });
        mass.on('mouseover', e => {
            if (this.type === 'hover') {
                this.openInfoWindow(e.data, 'hover');
            }
        });
        mass.on('mouseout', e => {
            if (this.type === 'hover') {
                this.closeInfoWindow1();
            }
        });
        mass.setMap(this.map);
    }

    //绘制事件点
    drawPoint() {
        this.points.setData(this.vue.points);
        this.drawValue(this.vue.show);
    }

    drawValue(val) {
        this.clearCanvas(this.ctxValue.canvas);
        if (val) {
            this.noise.points.forEach(item => {
                if (item.value) {
                    let pixel = this.map.lngLatToContainer(item.lnglat);
                    this.ctxValue.beginPath(); // 新建一条路径
                    this.ctxValue.fillStyle = 'rgba(52, 52, 52, 0.8)';
                    this.ctxValue.moveTo(pixel.x, pixel.y + 11); // 画笔移动到（10,10）
                    this.ctxValue.lineTo(pixel.x + 5, pixel.y + 18);
                    this.ctxValue.lineTo(pixel.x - 5, pixel.y + 18);
                    this.ctxValue.fill();
                    this.ctxValue.closePath();
                    this.ctxValue.beginPath();
                    this.ctxValue.fillRect(pixel.x - 17, pixel.y + 18, 34, 20);
                    this.ctxValue.fillStyle = '#fff';
                    this.ctxValue.font = '12px Arial';
                    this.ctxValue.textAlign = 'center';
                    this.ctxValue.fillText(item.value, pixel.x, pixel.y + 33);
                    this.ctxValue.closePath();
                }

            });
            this.resWayPointText();
        }
    }

    drawRaing(arr, color, data) {
        for (let i = 0; i < arr.length; i++) {
            let canvas = document.querySelector(`#${arr[i]}`);
            let ctx = canvas.getContext('2d');
            let width = canvas.width;
            let height = canvas.height;
            let r = (height - 10) / 2;
            // ctx.setLineDash([15]);
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#D1C3E9';
            ctx.arc(width / 2, height / 2, r, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.setLineDash([0]);
            let g = ctx.createLinearGradient(0, width / 2 - r, 0, width / 2 + r);
            g.addColorStop(0, color[i]); //添加颜色点
            g.addColorStop(1, 'rgb(77,171,226)');
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.stroke();
            ctx.beginPath();
            ctx.lineWidth = 8;
            ctx.strokeStyle = g;
            ctx.arc(width / 2, height / 2, r, 1.5 * Math.PI, 1.5 * Math.PI + `${data[i].num}` / `${data[i].total || 100}` * 2 * Math.PI, false);
            ctx.stroke();
            ctx.beginPath();
            ctx.textAlign = 'center';
            ctx.font = '20px 微软雅黑 bold';
            ctx.fillStyle = '#4DABE2';
            if (data[i].total) {
                // ctx.fillText(`${((data[i].num / data[i].total) * 100).toFixed(2)}` + `${data[i].nuit || ''}`, width / 2, height / 2);
                ctx.fillText(`${data[i].num}` + `${data[i].nuit || ''}`, width / 2, height / 2);
                ctx.beginPath();
                ctx.textAlign = 'center';
                ctx.font = '14px 微软雅黑 bold';
                ctx.fillStyle = '#fff';
                ctx.fillText(`${data[i].name}`, width / 2, height / 2 + 30);
            } else {
                ctx.beginPath();
                ctx.textAlign = 'center';
                ctx.font = '16px 微软雅黑 bold';
                ctx.fillStyle = '#fff';
                ctx.fillText(`${data[i].name}`, width / 2, height / 2 + 7);
            }

        }
    }

    // 噪声弹框事件
    async getSelectionWindowN() {

    }

    async getDevicveWindowN() {

    }

    // 轨道弹框事件
    async getSelectionWindowD() {
        this.device.getSection(this.infoData);
    }

    async getDevicveWindowD() {
        this.device.getStation(this.infoData);
    }

    // 运输弹框事件
    async getSelectionWindowT() {

    }

    async getDevicveWindowT() {

    }

    focusInfoWindow() {
        console.log('关注', this.infoData);
    }

    destroy() {
        this.map.destroy();
        this.map = null;
    }
}
