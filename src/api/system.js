import {get,post} from '../utils/request'
/**
 角色
 */
//添加角色
export function addRole(params, config) {
    return post('/system/sys-role/add', params, config);
}

//修改角色
export function updateRole(params, config) {
    return post('/system/sys-role/update', params, config);
}

//查询角色
export function selectRole(params, config) {
    return post('/system/sys-role/select', params, config);
}

//删除角色
export function deleteRole(params, config) {
    return post('/system/sys-role/del', params, config);
}

//模糊查询角色
export function dimRole(params, config) {
    return post('/system/sys-role/dim', params, config);
}

//添加角色权限树
export function treeRole(params, config) {
    return post('/system/sys-permission/tree', params, config);
}

// 角色权限详情
//添加角色
export function selectOneRole(params, config) {
    return post('/system/sys-role/selectOne', params, config);
}

/**
 用户
 */

//添加用户
export function addUser(params, config) {
    return post('/system/sys-user/add', params, config);
}

//修改用户
export function updateUser(params, config) {
    return post('/system/sys-user/update', params, config);
}

//查询用户
export function selectUser(params, config) {
    return post('/system/sys-user/select', params, config);
}

//删除用户
export function deleteUser(params, config) {
    return post('/system/sys-user/del', params, config);
}

//模糊查询用户
export function dimUser(params, config) {
    return post('/system/sys-user/dim', params, config);
}

//查询单个用户
export function oneUser(params, config) {
    return post('/system/sys-user/one', params, config);
}


/**
 区域
 */

//模糊查询区域
export function dimReg(params, config) {
    return post('/system/sys-region/dim', params, config);
}

//删除区域
export function delReg(params, config) {
    return post('/system/sys-region/del', params, config);
}

//添加区域
export function addReg(params, config) {
    return post('/system/sys-region/add', params, config);
}

//查询区域
export function selectReg(params, config) {
    return post('/system/sys-region/select', params, config);
}

//修改区域
export function updateReg(params, config) {
    return post('/system/sys-region/update', params, config);
}


/**
 项目
 */
// 模糊查询项目
export function dimPro(params, config) {
    return post('/system/sys-station/dim', params, config);
}

// 模糊查询项目
export function selectPro(params, config) {
    return post('/system/sys-station/select', params, config);
}

// 添加项目
export function addPro(params, config) {
    return post('/system/sys-station/add', params, config);
}

// 修改项目
export function updatePro(params, config) {
    return post('/system/sys-station/update', params, config);
}

// 修改项目
export function delPro(params, config) {
    return post('/system/sys-station/del', params, config);
}


/**
 职位
 */
// 添加职位
export function addPos(params, config) {
    return post('/system/sys-position/add', params, config);
}

// 删除职位
export function delPos(params, config) {
    return post('/system/sys-position/del', params, config);
}

// 模糊查询职位
export function dimPos(params, config) {
    return post('/system/sys-position/dim', params, config);
}

// 查询单个职位
export function onePos(params, config) {
    return post('/system/sys-position/one', params, config);
}

// 修改职位
export function updatePos(params, config) {
    return post('/system/sys-position/update', params, config);
}

// 职位树形图
export function treePos(params, config) {
    return post('/system/sys-position/tree', params, config);
}

/**
 设备
 */

// 设备添加
export function addDev(params, config) {
    return post('/system/sys-device/add', params, config);
}

// 设备修改
export function updateDev(params, config) {
    return post('/system/sys-device/update', params, config);
}

// 设备模糊查询
export function dimDev(params, config) {
    return post('/system/sys-device/dim', params, config);
}

// 设备删除
export function delDev(params, config) {
    return post('/system/sys-device/del', params, config);
}

// 获取协议 获取站点类型  获取设备参数
export function dimProtocol(params, config) {
    return post('/system/sys-dictionary/dim', params, config);
}