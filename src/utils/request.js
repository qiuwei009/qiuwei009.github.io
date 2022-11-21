/*
 * axios二次封装
 * */
import axios from 'axios';
import {ElLoading, ElMessage, ElMessageBox} from 'element-plus';
import qs from 'qs';
import commonStore from '../pinia/commonStore';
import useDictStore from '../pinia/dict';

const store = commonStore();

let baseURL = import.meta.env.VITE_BASE; // mock
// let baseURL = 'http://192.168.1.7:8000'; // yhy
// let baseURL = 'http://119.3.27.196:8000'; //服务器
// let baseURL = 'http://203.57.238.132:8081'; //服务器

let now = new Date().getTime(), last = new Date().getTime(), time = null;
let downloadLoadingInstance;
let num = 0;

// axios
const axiosInstance = axios.create({
    baseURL, timeout: 15000
});

// 请求拦截器
axiosInstance.interceptors.request.use((config) => {
    /**配置get请求头*/
    if (config.method === 'get') {
        config.data = true;
    }
    let token = JSON.parse(window.sessionStorage.getItem('SYSTEM_TOKEN')) || '';
    if (token) {
        config.headers['Authorization'] = token;
        if (config.method === 'get') {
            let params = config.params;
            config.params = {
                ...params, token: token
            };
        } else {
            config.data = qs.stringify({
                ...qs.parse(config.data), token: token
            });
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
// 响应拦截器
axiosInstance.interceptors.response.use((response) => {
    /**节流防抖
     * 大于200ms则开启关闭loading加载计时器
     * 小于两秒清除计时器,重置计时器
     * */
    now = new Date().getTime();
    if (now - last > 2000 || now - last === 0) {
        last = new Date().getTime();
        time = setTimeout(() => {
            store.setLoading(false);
        }, 1000);
    } else {
        if (time) clearTimeout(time);
        time = setTimeout(() => {
            store.setLoading(false);
        }, 1000);
    }
    switch (response.data.code) {
        case 400:
            response.data.message = '请求错误(400)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 401:
            num++;
            if (num === 1) {
                ElMessageBox.confirm('您的登录验证已失效,为保证安全,请重新登录!', '登录验证已失效未授权(401)', {
                    confirmButtonText: '退出', cancelButtonText: '取消', type: 'success'
                })
                .then(() => {
                    location.href = '/login';
                })
                .catch(() => {
                    location.href = '/login';
                });
            }
            break;
        case 403:
            response.data.message = '拒绝访问(403)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 404:
            response.data.message = '请求出错(404)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 408:
            response.data.message = '请求超时(408)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 500:
            response.data.message = '服务器错误(500)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 501:
            response.data.message = '服务未实现(501)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 502:
            response.data.message = '网络错误(502)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 503:
            response.data.message = '服务不可用(503)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 504:
            response.data.message = '网络超时(504)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 505:
            response.data.message = 'HTTP版本不受支持(505)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        default:
            break;
    }
    return response;
}, (error) => {
    switch (error.code) {
        case 400:
            response.data.message = '请求错误(400)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 401:
            num++;
            if (num === 1) {
                ElMessageBox.confirm('您的登录验证已失效,为保证安全,请重新登录!', '登录验证已失效未授权(401)', {
                    confirmButtonText: '退出', cancelButtonText: '取消', type: 'success'
                })
                .then(() => {
                    location.href = '/login';
                })
                .catch(() => {
                    location.href = '/login';
                });
            }
            break;
        case 403:
            response.data.message = '拒绝访问(403)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 404:
            response.data.message = '请求出错(404)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 408:
            response.data.message = '请求超时(408)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 500:
            response.data.message = '服务器错误(500)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 501:
            response.data.message = '服务未实现(501)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 502:
            response.data.message = '网络错误(502)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 503:
            response.data.message = '服务不可用(503)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 504:
            response.data.message = '网络超时(504)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        case 505:
            response.data.message = 'HTTP版本不受支持(505)';
            ElMessage({
                duration: 1000, type: 'error', message: response.data.msg
            });
            break;
        default:
            break;
    }
    store.setLoading(false);
    return Promise.reject(error);
});

const headerJSON = {
    'Content-Type': 'application/json'
};
const headerFormData = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};

// 通用方法
export const post = (url, params = {}, isjson = false, isloading = true) => {
    return new Promise((resolve, reject) => {
        if (isloading) store.setLoading(true);
        axiosInstance.post(url, isjson ? JSON.stringify(params) : qs.stringify(params), {
            headers: isjson ? headerJSON : headerFormData
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        });
    });
};
export const get = (url, params = {}, isjson = false, isloading = true) => {
    return new Promise((resolve, reject) => {
        if (isloading) store.setLoading(true);
        axiosInstance.get(url, isjson ? JSON.stringify(params) : {params: params}, {
            headers: isjson ? headerJSON : headerFormData
        }).then(res => {
            // setTimeout(() =>{
            resolve(res.data);
            // },2000)
        }).catch(err => {
            reject(err.data);
        });
    });
};
export const put = (url, params = {}, isjson = false, isloading = true) => {
    return new Promise((resolve, reject) => {
        if (isloading) store.setLoading(true);
        axiosInstance.put(url, isjson ? JSON.stringify(params) : qs.stringify(params), {
            headers: isjson ? headerJSON : headerFormData
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        });
    });
};
export const del = (url, params = {}, isjson = false, isloading = true) => {
    return new Promise((resolve, reject) => {
        if (isloading) store.setLoading(true);
        axiosInstance.delete(url, isjson ? {params: params} : qs.stringify(params), {
            headers: isjson ? headerJSON : headerFormData
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        });
    });
};
export const patch = (url, params = {}, isjson = false, isloading = true) => {
    return new Promise((resolve, reject) => {
        if (isloading) store.setLoading(true);
        axiosInstance.patch(url, isjson ? JSON.stringify(params) : qs.stringify(params), {
            headers: isjson ? headerJSON : headerFormData
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data);
        });
    });
};
// 队列
export const queue = new class Queue {
    constructor() {
        let waitingQueue = [];//执行队列
        let isRunning = false;//记录是否有未完成的任务
        function execute(type, url, params, isjson, isloading, resolve, reject) {
            if (isloading) store.commit('showLoading');
            if (type === 'post') axiosInstance.post(url, isjson ? JSON.stringify(params) : qs.stringify(params), {
                headers: isjson ? headerJSON : headerFormData
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.data);
            }).finally(() => {
                //等待任务队列中如果有任务，则触发它；否则设置isRunning = false,表示无任务状态
                if (waitingQueue.length) {
                    const next = waitingQueue.shift();
                    execute(next.type, next.url, next.params, next.isjson, next.isloading, next.resolve, next.reject);
                } else {
                    isRunning = false;
                }
            }); else if (type === 'get') axiosInstance.get(url, isjson ? JSON.stringify(params) : {params: params}, {
                headers: isjson ? headerJSON : headerFormData
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.data);
            }).finally(() => {
                //等待任务队列中如果有任务，则触发它；否则设置isRunning = false,表示无任务状态
                if (waitingQueue.length) {
                    const next = waitingQueue.shift();
                    execute(next.type, next.url, next.params, next.isjson, next.isloading, next.resolve, next.reject);
                } else {
                    isRunning = false;
                }
            });
            if (type === 'put') axiosInstance.put(url, isjson ? JSON.stringify(params) : qs.stringify(params), {
                headers: isjson ? headerJSON : headerFormData
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.data);
            }).finally(() => {
                //等待任务队列中如果有任务，则触发它；否则设置isRunning = false,表示无任务状态
                if (waitingQueue.length) {
                    const next = waitingQueue.shift();
                    execute(next.type, next.url, next.params, next.isjson, next.isloading, next.resolve, next.reject);
                } else {
                    isRunning = false;
                }
            });
            if (type === 'delete') axiosInstance.delete(url, isjson ? {params: params} : qs.stringify(params), {
                headers: isjson ? headerJSON : headerFormData
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.data);
            }).finally(() => {
                //等待任务队列中如果有任务，则触发它；否则设置isRunning = false,表示无任务状态
                if (waitingQueue.length) {
                    const next = waitingQueue.shift();
                    execute(next.type, next.url, next.params, next.isjson, next.isloading, next.resolve, next.reject);
                } else {
                    isRunning = false;
                }
            });
            if (type === 'patch') axiosInstance.patch(url, isjson ? JSON.stringify(params) : qs.stringify(params), {
                headers: isjson ? headerJSON : headerFormData
            }).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err.data);
            }).finally(() => {
                //等待任务队列中如果有任务，则触发它；否则设置isRunning = false,表示无任务状态
                if (waitingQueue.length) {
                    const next = waitingQueue.shift();
                    execute(next.type, next.url, next.params, next.isjson, next.isloading, next.resolve, next.reject);
                } else {
                    isRunning = false;
                }
            });
        }

        return function (type, url, params = {}, isjson = false, isloading = true) {
            return new Promise((resolve, reject) => {
                if (isRunning) {
                    waitingQueue.push({type, url, params, isjson, isloading, resolve, reject});
                } else {
                    isRunning = true;
                    execute(type, url, params, isjson, isloading, resolve, reject);
                }
            });
        };
    }
};
// 通用下载方法
export const download = (url, params, filename) => {
    downloadLoadingInstance = ElLoading.service({
        text: '正在下载数据，请稍候', spinner: 'el-icon-loading', background: 'rgba(0, 0, 0, 0.7)'
    });
    return axiosInstance.post(url, params, {
        transformRequest: [(params) => qs.stringify(params)],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        responseType: 'blob'
    }).then(async (res) => {
        try {
            const blob = res.data;
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = (e) => {
                const a = document.createElement('a');
                a.download = filename;
                a.href = e.target.result;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            };

            // let blobUrl = URL.createObjectURL(new Blob([data],{type: 'application/vnd.ms-excel;charset=UTF-8'}));
            // const a = document.createElement('a')
            // a.style.display = 'none'
            // a.download = filename
            // a.href = blobUrl
            // a.click()
            // document.body.removeChild(a)
            // // 在内存中移除URL 对象
            // URL.revokeObjectURL(blobUrl)
            // const blob = new Blob([data],{type: 'application/vnd.ms-excel;charset=UTF-8'})
            // saveAs(blob, filename)
        } catch (e) {
            const resText = await data.text();
            const rspObj = JSON.parse(resText);
            const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default'];
            ElMessage.error(errMsg);
        }
        setTimeout(() => {
            downloadLoadingInstance.close();
        }, 200);
    }).catch((error) => {
        console.error(error);
        ElMessage.error('下载文件出现错误，请联系管理员！');
        setTimeout(() => {
            downloadLoadingInstance.close();
        }, 200);
    });
};
// 字典获取
export const useDict = (...args) => {
    const res = ref({});
    return (() => {
        args.forEach(async (dictType, index) => {
            res.value[dictType] = [];
            const dicts = useDictStore().getDict(dictType);
            if (dicts) {
                res.value[dictType] = dicts;
            } else {
                axiosInstance.get(dictType).then((resp) => {
                    console.log(resp, 'resp');
                    res.value[dictType] = resp.data.data.data.map(p => ({
                        label: p.label, value: p.value, elTagType: p.elTagType, elTagClass: p.elTagClass
                    }));
                    useDictStore().setDict(dictType, res.value[dictType]);
                });

                // $.ajax({
                //     method: 'get', url: dictType, success: (resp) => {
                //         console.log(resp, 'resp');
                //         res.value[dictType] = resp.data.data.map(p => ({
                //             label: p.label,
                //             value: p.value,
                //             elTagType: p.elTagType,
                //             elTagClass: p.elTagClass
                //         }));
                //         useDictStore().setDict(dictType, res.value[dictType]);
                //     }
                // });
            }
        });
        return toRefs(res.value);
    })();
};

