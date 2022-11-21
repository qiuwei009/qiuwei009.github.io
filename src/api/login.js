import {get,post} from '../utils/request'

//登录
export function doLogin(params, config) {
    return post(doLogin_url, params, config);
}

//获取用户参数权限
export function getUserInfo(params, config) {
    return post('/jwt/user/token', params, config);
}