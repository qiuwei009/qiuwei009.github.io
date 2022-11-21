import {get,post} from '../utils/request'
//获取任务列表
export function getTaskList(params, config) {
    return post('/task/bas-task/cssr/glist', params, config);
}

//添加任务
export function addTask(params, config) {
    /*let _config = {
     ...config,
     headers: {
     'Content-Type': 'multipart/form-data'
     }
     }*/
    return post('/task/bas-task/adm/add', params, config);
}

//处理任务
export function dealTask(params, config) {
    return post('/task/bas-task/adm/ahand', params, config);
}

//获取任务任务人员列表
export function getUserList(params, config) {
    return post('/task/bas-task/adm/ahand', params, config);
}