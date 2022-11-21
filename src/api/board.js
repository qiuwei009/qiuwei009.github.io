import {get,post} from '../utils/request'

let pre = '';//report

/**
 AI智能识别
 */

//查询AI智能识别
export function getAiView(data, config) {
    return post(pre + '/alarm/report/cart', data, config);
}

//查询AI火点识别
export function getAiFire(data, config) {
    return post(pre + '/alarm/report/fire', data, config);
}

//查询AI火点识别
export function getAiFireTime(data, config) {
    return post(pre + '/alarm/report/cart/time', data, config);
}

//查询AI报警事件列表
export function getAlarm(data, config) {
    return post(`${pre}/aialarm/list?pageNum=${data.pageNum}&pageSize=${data.pageSize}`, data, config);
}
export function getDust(data, config) {
    return post(`${pre}/alarm/report/station/dust?pageNum=${data.pageNum}&pageSize=${data.pageSize}`, data, config);
}



//查询AI地图点位
export function getPoints(data, config) {
    return post(pre + '/alarm/report/station', data, config);
}

//查询设备实时视频
export function getVideo(data, config) {
    return post(pre + '/alarm/report/video', data, config);
}



