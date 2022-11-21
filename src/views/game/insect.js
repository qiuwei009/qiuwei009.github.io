import {ElNotification} from 'element-plus';

export default class insect {
    constructor(w, h, left, up, right, down, fruit) {
        this.w = w;
        this.h = h;
        this.body = [1, 2, 3, 4];
        this.time = null;
        this.next = 4;
        this.direction = 3;
        // this.fruit = [Math.round(Math.random() * w * h), Math.round(Math.random() * w * h), Math.round(Math.random() * w * h), Math.round(Math.random() * w * h), Math.round(Math.random() * w * h), Math.round(Math.random() * w * h)]
        this.fruit = fruit;
        this.over = 0; //0 未开始 1 游戏中 2 暂停 3 结束 4 通关
        this.v = 100;
        this.falg = 0;
        this.control(left, up, right, down);
        this.arr = (() => {
            let arr = [];
            for (let i = 0; i < this.h; i++) {
                arr.push(this.w * i - 1);
                arr.push(this.w * i);
            }
            return arr;
        })();
    }

    loopTime(v) {
        this.time = setTimeout(() => {
            clearTimeout(this.time);
            this.time = null;
            this.rule();
            if (this.over !== 1) return;
            return this.loopTime(v);
        }, v);
    }

    rule() {
        // next数计算
        if (this.direction === 1) {
            this.next--;
        } else if (this.direction === 3) {
            this.next++;
        } else if (this.direction === 2) {
            this.next -= this.w;
        } else if (this.direction === 4) {
            this.next += this.w;
        }
        // 果子
        let index = this.fruit.indexOf(this.next);
        if (index > -1) {
            this.body.unshift(this.body[0]);
            this.fruit.splice(index, 1);
            this.fruit.push(Math.round(Math.random() * this.w * this.h));
        }
        // 无限循环 or 撞墻死亡
        if (this.next < 0) {
            clearTimeout(this.time);
            this.over = true;
            ElNotification({
                title: 'Game Over',
                message: 'you death! 游戏结束!',
                type: 'error'
            });
            return;
            if (this.direction === 2) {
                this.next += this.w * this.h;
            }
        } else if (this.next > this.w * this.h) {
            clearTimeout(this.time);
            this.over = true;
            ElNotification({
                title: 'Game Over',
                message: 'you death! 游戏结束!',
                type: 'error'
            });
            return;
            if (this.direction === 4) {
                this.next -= this.w * this.h;
            }
        } else {
            if (this.arr.includes(this.next)) {
                clearTimeout(this.time);
                this.over = true;
                ElNotification({
                    title: 'Game Over',
                    message: 'you death! 游戏结束!',
                    type: 'error'
                });
                return;
            }
        }
        // 吃自己死亡
        if (this.body.includes(this.next)) {
            clearTimeout(this.time);
            this.over = true;
            ElNotification({
                title: 'Game Over',
                message: 'you death! 游戏结束!',
                type: 'error'
            });
        }
        // 前进
        this.body.shift();
        this.body.push(this.next);
        // 通关判断
        if (this.body.length > 13) {
            if (this.time) clearTimeout(this.time);
            this.over = 4;
            ElNotification({
                title: '恭喜',
                message: '恭喜你通关成功!',
                type: 'success'
            });
        }
        // 提速判断
        if (this.body.length % 2 === 0) {
            if (this.v - 20 > 0 && this.falg !== this.body.length) {
                this.v -= 20;
                this.falg = this.body.length;
            }
        }
    }

    start() {
        this.over = 1;
        this.loopTime(this.v); // setTimeout取代计时器
        // this.time = setInterval(() => {
        //     this.rule()
        // }, this.v)
    }

    suspend() {
        this.over = 2;
        if (this.time) clearTimeout(this.time);
    }

    reload() {
        if (this.time) clearTimeout(this.time);
        this.body = [1, 2, 3, 4];
        this.time = null;
        this.next = 4;
        this.direction = 3;
        this.fruit = [Math.round(Math.random() * this.w * this.h), Math.round(Math.random() * this.w * this.h), Math.round(Math.random() * this.w * this.h)];
        this.over = 0;
        this.v = 100;
    }

    changev(val) {
        if (val) {
            this.v += 25;
        } else {
            if (this.v - 25 > 0) this.v -= 25;
        }
        this.start();
    }

    control(key1, key2, key3, key4) {
        window.addEventListener('keydown', (val) => {
            if (val.keyCode == key1) {
                this.direction = 1;
            } else if (val.keyCode == key2) {
                this.direction = 2;
            } else if (val.keyCode == key3) {
                this.direction = 3;
            } else if (val.keyCode == key4) {
                this.direction = 4;
            }
        });
    }

    destroy() {
        this.body = [];
        if (this.time) clearTimeout(this.time);
        this.time = null;
    }
}