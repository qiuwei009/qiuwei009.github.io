const AMAP_SERVER_KEY = 'd920af4b2a1f7c5aefeeefe6982b0641';
import {get,post} from '../utils/request'


//获取设备树
export function getGridDeviceTree(params, config) {
    return post('basic/gridDeviceTree', params, config);
}

//根据地址获取经纬度(高德地图)
export function getLngLatByAddress(address) {
    let url = 'https://restapi.amap.com/v3/geocode/geo';
    return get(url, {
        params: {
            address,
            output: 'JSON',
            key: AMAP_SERVER_KEY
        }
    });
}

//查询下级职位用户列表
export function getLowerUser(id) {
    return post(`/system/sys-user/lowerUsers/${id}`);

}
