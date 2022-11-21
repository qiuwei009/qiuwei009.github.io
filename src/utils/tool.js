/**
 * 冒泡排序
 * type === 1 升序
 * type === 0 降序(默认)
 * */

export const sortFun = (arr, type = 0) => {
    if (!arr) {
        console.log('请输入数组');
        return;
    }
    //记录最后一次交换的位置
    let lastExchangeIndex = 0;
    //无序数列的边界，每次比较只需要比到这里为止
    let sortBorder = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        console.log(`第${i}次循环`);
        let bin = true;
        for (let j = 0; j < sortBorder; j++) {
            console.log('原始值：', arr[j], '对比值：', arr[j + 1]);
            if (type) {
                if (arr[j] > arr[j + 1]) {
                    bin = false;
                    console.log('出现交换：', arr[j], arr[j + 1]);
                    let res = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = res;
                    lastExchangeIndex = j;
                    console.log('交换索引：', lastExchangeIndex);
                }
            } else {
                if (arr[j] < arr[j + 1]) {
                    bin = false;
                    console.log('出现交换：', arr[j], arr[j + 1]);
                    let res = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = res;
                    lastExchangeIndex = j;
                    console.log('交换索引：', lastExchangeIndex);
                }
            }

        }
        sortBorder = lastExchangeIndex;
        console.log('二次循环length改变：', sortBorder);
        console.log('arr', arr);
        if (bin) {
            console.log('跳出循环');
            break;
        }
    }
    console.log('res', arr);
};

export function simpleDebounce(fn, delay = 100) {
    let timer = null;
    return function () {
        let args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

/*时间格式*/
Date.prototype.format = function (format) {
    var date = new Date(this);
    format = format === undefined ? 'yyyy-MM-dd hh:mm:ss' : format;
    var o = {
        'M+': date.getMonth() + 1, // month
        'd+': date.getDate(), // day
        'h+': date.getHours(), // hour
        'm+': date.getMinutes(), // minute
        's+': date.getSeconds(), // second
        'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
        S: date.getMilliseconds() // millisecond
    };
    if (/(y+)/.test(format)) {
        format = format.replace(
            RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        );
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(format)) {
            format = format.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
            );
        }
    }
    return format;
};
