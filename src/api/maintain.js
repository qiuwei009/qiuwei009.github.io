import {get,post} from '../utils/request'
//获取运维记录列表
export function getMaintainList(params, config) {
    return post('/task/bas-maintain/cssr/glist', params, config);
}

//添加运维记录
export function addMaintain(params, config) {
    let _config = {
        ...config,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    // config.headers['Content-Type'] = 'multipart/form-data'
    return post('/task/bas-maintain/adm/add', params, _config);
}