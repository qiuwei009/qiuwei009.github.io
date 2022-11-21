export default class Animations {
    constructor(mapIns, color) {
        this.radius = 0;
        this.ctx = mapIns.ctxAnimation;
        this.canvas = mapIns.ctxAnimation.canvas;
        this.amap = mapIns.map;
        this.vue = mapIns.vue;
        this.timer = null;
        this.point = null;
        this.pixel = {};
        this.color = null;
    }

    resetPoint() {
        if (!this.point) return;
        this.pixel = this.amap.lngLatToContainer(this.point);
    }

    drawCircle() {
        if (!this.point) return;
        const pixel = this.pixel;
        this.ctx.beginPath();
        this.ctx.arc(pixel.x, pixel.y, this.radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.lineWidth = 2;
        this.ctx.strokeStyle = this.color || 'rgba(0,196,255,0.7)';
        this.ctx.stroke();
        this.radius += 0.5;
        if (this.radius > 30) {
            this.radius = 0;
        }
    };

    render() {
        let prev = this.ctx.globalCompositeOperation;
        this.ctx.globalCompositeOperation = 'destination-in';
        this.ctx.globalAlpha = 0.95;
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.globalCompositeOperation = prev;
        this.drawCircle();
        this.timer = requestAnimationFrame(this.render.bind(this));
    };

    startDraw(point, color) {
        if (point) {
            this.point = point;
            this.color = color;
        }

        let size = this.amap.getSize();
        let width = size.width;
        let height = size.height;
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';
        this.canvas.width = width;
        this.canvas.height = height;

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
    };
};