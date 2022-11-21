import {get,post} from '../utils/request'
let pre = '';//report

//查询AI报警事件列表
export function getAlarm(data, config) {
    return post(`${pre}/aialarm/list?pageNum=${data.pageNum}&pageSize=${data.pageSize}`, data, config);
}

//查询AI报警事件列表
export function getDust(data, config) {
    return post(pre + '/alarm/report/dust', data, config);
}

//查询AI火点识别
export function getAiFire(data, config) {
    return post(pre + '/alarm/report/fire', data, config);
}

//查询站点PM10,PM25详情
export function getStationPm(data, config) {
    return post(pre + '/alarm/report/station/pm', data, config);
}

//查询站点Api详情
export function getStationAqi(data, config) {
    return post(pre + '/alarm/report/station/aqi', data, config);
}

//查询站点Api详情
export function getAll(data, config) {
    return post(pre + '/alarm/report/all', data, config);
}


//查询扬尘报警
export function getDustAlarm(data, config) {
    return post(pre + '/alarm/report/alarm/dust', data, config);
}
