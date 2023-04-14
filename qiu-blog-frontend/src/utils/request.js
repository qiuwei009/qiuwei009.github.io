import axios from "axios";
import {getToken, removeToken} from "@/utils/auth";
import {useCommonStore} from "@/stores/common";
import utils from "@/utils/utils";
import {useUserStore} from "@/stores/user";

const ENV = process.env.NODE_ENV;
let _GLOBAL_IP = "";
if (ENV === "development") {
    //开发环境
    _GLOBAL_IP = 'http://192.168.3.90:8088';// 本地
} else {
    //生产环境
    _GLOBAL_IP = "http://203.57.238.132:8081"; //正式服务器
}

// 创建axios实例
const request = axios.create({
    baseURL: _GLOBAL_IP,
    timeout: 10000
});

// request拦截器
request.interceptors.request.use(
    (config) => {
        // 是否需要设置 token
        const isToken = (config.headers || {}).isToken === false;
        // 是否需要防止数据重复提交
        const isRepeatSubmit = (config.headers || {}).repeatSubmit === false;
        if (getToken() && !isToken) {
            config.headers["Authorization"] = "Bearer " + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        // 默认表单数据提交
        // config.headers["content-type"] = "application/x-www-form-urlencoded";
        // get请求映射params参数 参数默认携带token
        if (config.method === "get") {
            let url = config.url + "?" + utils.tansParams({...config.params, token: getToken()});
            url = url.slice(0, -1);
            config.params = {};
            config.url = url;
        }
        if (!isRepeatSubmit && (config.method === "post" || config.method === "put")) {
            const requestObj = {
                url: config.url,
                data: typeof config.data === "object" ? JSON.stringify({...config.data, token: getToken()}) : {...config.data, token: getToken()},
                time: new Date().getTime(),
                headers: {"content-type": "application/x-www-form-urlencoded"}
            };
            const sessionObj = utils.sessionCache.getJSON("sessionObj");
            if (sessionObj === undefined || sessionObj === null || sessionObj === "") {
                utils.sessionCache.setJSON("sessionObj", requestObj);
            } else {
                const s_url = sessionObj.url; // 请求地址
                const s_data = sessionObj.data; // 请求数据
                const s_time = sessionObj.time; // 请求时间
                const interval = 1000; // 间隔时间(ms)，小于此时间视为重复提交
                if (s_data === requestObj.data && requestObj.time - s_time < interval && s_url === requestObj.url) {
                    const message = "数据正在处理，请勿重复提交";
                    console.warn(`[${s_url}]: ` + message);
                    return Promise.reject(new Error(message));
                } else {
                    utils.sessionCache.setJSON("sessionObj", requestObj);
                }
            }
        }
        return config;
    },
    (error) => {
        utils.debounceGlobal(() => useCommonStore().setLoading(true), 1000);
        return Promise.reject(error);
    }
);

// 响应拦截器
request.interceptors.response.use(
    (res) => {
        console.log(res,'res')
        // 未设置状态码则默认成功状态
        const code = res.data.code || 0;
        // 获取错误信息
        const msg = utils.errorCode[code] || res.data["msg"] || utils.errorCode["default"];
        // 二进制数据则直接返回
        if (res.request.responseType === "blob" || res.request.responseType === "arraybuffer") {
            return res.data;
        }
        if (code === 401) {
            utils.debounceGlobal(() => {
                useCommonStore().setLoading(false);
                utils.error("登录状态已过期，请重新登录", 2000);
                removeToken();
                utils.toRouter("/login");
            }, 1000);
            return Promise.reject(res.data);
        } else if (code === 500) {
            utils.debounceGlobal(() => {
                useCommonStore().setLoading(false);
                utils.error(msg, 1000);
            }, 1500);
            return Promise.reject(new Error(msg));
        } else if (code === 601) {
            utils.debounceGlobal(() => {
                useCommonStore().setLoading(false);
                utils.error(msg, 1000);
            }, 1500);
            return Promise.reject(new Error(msg));
        } else if (code !== 1) {
            utils.debounceGlobal(() => {
                useCommonStore().setLoading(false);
                utils.error(msg, 1000);
            }, 1500);
            return Promise.reject("error");
        } else {
            utils.debounceGlobal(() => {
                useCommonStore().setLoading(false);
            }, 500);
            return Promise.resolve(res.data);
        }
    },
    (error) => {
        let {message} = error;
        if (message === "Network Error") {
            message = "后端接口连接异常";
        } else if (message.includes("timeout")) {
            message = "系统接口请求超时";
        } else if (message.includes("Request failed with status code")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常";
        }
        utils.debounceGlobal(() => {
            useCommonStore().setLoading(false);
            utils.error(message, 1000);
        }, 1500);
        return Promise.reject(error);
    }
);

export default request;
