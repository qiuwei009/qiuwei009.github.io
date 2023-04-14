import {ref, toRefs} from "vue";
import request from "./request";
// import {showNotify} from "vant";
import {Message} from "@arco-design/web-vue";
import {useCommonStore} from "@/stores/common";
import {useDictStore} from "@/stores/dict";
import {useUserStore} from "@/stores/user";
import router from "@/router";
import {saveAs} from "file-saver";
import axios from "axios";
import {useRouter} from "vue-router";

let globalTime;
let globalPrev = Date.now();
export default class utils {
    static getPixelRatio(context) {
        let backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }
    static toRouter(name = "", isReplace = false, params = {}, isQuery = false) {
        let isPath = name.indexOf("/") === -1;
        if (isReplace) {
            if (isQuery) {
                isPath ? router.replace({name, query: params}) : router.replace({path: name, query: params});
            } else {
                isPath ? router.replace({name, params}) : router.replace({path: name, params});
            }
        } else {
            if (isQuery) {
                isPath ? router.push({name, query: params}) : router.push({path: name, query: params});
            } else {
                isPath ? router.push({name, params}) : router.push({path: name, params});
            }
        }
    }
    static getRouter(type) {
        if (type === "params") {
            return useRouter()?.currentRoute.value.params;
        } else {
            return useRouter()?.currentRoute.value.query;
        }
    }
    static deepClone(source) {
        if (!source && typeof source !== "object") {
            throw new Error("error arguments", "deepClone");
        }
        const targetObj = source.constructor === Array ? [] : {};
        Object.keys(source).forEach((keys) => {
            if (source[keys] && typeof source[keys] === "object") {
                targetObj[keys] = this.deepClone(source[keys]);
            } else {
                targetObj[keys] = source[keys];
            }
        });
        return targetObj;
    }
    static hasClass(ele, cls) {
        return !!ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
    }
    static addClass(ele, cls) {
        if (!this.hasClass(ele, cls)) ele.className += " " + cls;
    }
    static removeClass(ele, cls) {
        if (this.hasClass(ele, cls)) {
            const reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
            ele.className = ele.className.replace(reg, " ");
        }
    }
    static tansParams(params) {
        let result = "";
        for (const propName of Object.keys(params)) {
            const value = params[propName];
            let part = encodeURIComponent(propName) + "=";
            if (value !== null && value !== "" && typeof value !== "undefined") {
                if (typeof value === "object") {
                    for (const key of Object.keys(value)) {
                        if (value[key] !== null && value[key] !== "" && typeof value[key] !== "undefined") {
                            let params = propName + "[" + key + "]";
                            let subPart = encodeURIComponent(params) + "=";
                            result += subPart + encodeURIComponent(value[key]) + "&";
                        }
                    }
                } else {
                    result += part + encodeURIComponent(value) + "&";
                }
            }
        }
        return result;
    }
    static handleTree(data, id, parentId, children) {
        let config = {
            id: id || "id",
            parentId: parentId || "parentId",
            childrenList: children || "children"
        };

        let childrenListMap = {};
        let nodeIds = {};
        let tree = [];

        for (let d of data) {
            let parentId = d[config.parentId];
            if (childrenListMap[parentId] == null) {
                childrenListMap[parentId] = [];
            }
            nodeIds[d[config.id]] = d;
            childrenListMap[parentId].push(d);
        }

        for (let d of data) {
            let parentId = d[config.parentId];
            if (nodeIds[parentId] == null) {
                tree.push(d);
            }
        }

        for (let t of tree) {
            adaptToChildrenList(t);
        }

        function adaptToChildrenList(o) {
            if (childrenListMap[o[config.id]] !== null) {
                o[config.childrenList] = childrenListMap[o[config.id]];
            }
            if (o[config.childrenList]) {
                for (let c of o[config.childrenList]) {
                    adaptToChildrenList(c);
                }
            }
        }
        return tree;
    }
    static handleTreeSaveStatus(data, id = "id", parentId = "parentId", children = "children", oldData, show = "show") {
        let config = {
            id: id || "id",
            parentId: parentId || "parentId",
            childrenList: children || "children",
            show: show || "show"
        };
        let childrenListMap = {};
        let nodeIds = {};
        let tree = [];
        let oldDataList = [];

        // 获取所有数据list
        function loop(arr) {
            arr.forEach((i) => {
                oldDataList.push(i);
                if (i[children] && i[children].length > 0) {
                    loop(i[children]);
                }
            });
        }

        loop(oldData);

        for (let d of data) {
            let parentId = d[config.parentId];
            if (childrenListMap[parentId] == null) {
                childrenListMap[parentId] = [];
            }
            nodeIds[d[config.id]] = d;

            oldDataList.forEach((i) => {
                if (d[config.id] === i[config.id]) {
                    d[config.show] = i[config.show];
                }
            });
            childrenListMap[parentId].push(d);
        }

        for (let e of data) {
            let parentId = e[config.parentId];
            if (nodeIds[parentId] == null) {
                tree.push(e);
            }
        }

        for (let f of tree) {
            adaptToChildrenList(f);
        }

        function adaptToChildrenList(j) {
            if (childrenListMap[j[config.id]] !== null) {
                j[config.childrenList] = childrenListMap[j[config.id]];
            }
            if (j[config.childrenList]) {
                for (let c of j[config.childrenList]) {
                    adaptToChildrenList(c);
                }
            }
        }

        return tree;
    }
    static handleTreeChildStatus(data, key, flag) {
        data.forEach((item) => {
            item[key] = flag;
            if (item.children && item.children.length > 0) {
                this.handleTreeChildStatus(item.children, key, flag);
            }
        });
    }
    static loop(arr, key, fun, parent) {
        arr.forEach((i) => {
            fun(i, parent);
            if (i[key] && i[key].length > 0) {
                this.loop(i[key], key, fun, i);
            }
        });
    }

    // 验证是否为blob格式
    // 构造树型结构数据 保存展开状态
    static sessionCache = {
        set(key, value) {
            if (!sessionStorage) {
                return;
            }
            if (key != null && value != null) {
                sessionStorage.setItem(key, value);
            }
        },
        get(key) {
            if (!sessionStorage) {
                return null;
            }
            if (key == null) {
                return null;
            }
            return sessionStorage.getItem(key);
        },
        setJSON(key, jsonValue) {
            if (jsonValue != null) {
                this.set(key, JSON.stringify(jsonValue));
            }
        },
        getJSON(key) {
            const value = this.get(key);
            if (value != null) {
                return JSON.parse(value);
            }
        },
        remove(key) {
            sessionStorage.removeItem(key);
        }
    };
    static localCache = {
        set(key, value) {
            if (!localStorage) {
                return;
            }
            if (key != null && value != null) {
                localStorage.setItem(key, value);
            }
        },
        get(key) {
            if (!localStorage) {
                return null;
            }
            if (key == null) {
                return null;
            }
            return localStorage.getItem(key);
        },
        setJSON(key, jsonValue) {
            if (jsonValue != null) {
                this.set(key, JSON.stringify(jsonValue));
            }
        },
        getJSON(key) {
            const value = this.get(key);
            if (value != null) {
                return JSON.parse(value);
            }
        },
        remove(key) {
            localStorage.removeItem(key);
        }
    };
    static errorCode = {
        401: "认证失败，无法访问系统资源",
        403: "当前操作没有权限",
        404: "访问资源不存在",
        default: "系统未知错误，请反馈给管理员"
    };
    // 常用验证
    static checkType(val, type) {
        switch (type) {
            case "phone": // 手机号码
                return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(val);
            case "tel": // 座机
                return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(val);
            case "card": // 身份证
                return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(val);
            case "pwd": // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
                return /^[a-zA-Z]\w{5,17}$/.test(val);
            case "postal": // 邮政编码
                return /[1-9]\d{5}(?!\d)/.test(val);
            case "qq": // QQ号
                return /^[1-9][0-9]{4,9}$/.test(val);
            case "email": // 邮箱
                return /^[\w-]+(.[\w-]+)*@[\w-]+(.[\w-]+)+$/.test(val);
            case "ip": // IP
                return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(val);
            case "date": // 日期时间
                return /^(\d{4})-(\d{2})-(\d{2}) (\d{2})(?::\d{2}|:(\d{2}):(\d{2}))$/.test(val) || /^(\d{4})-(\d{2})-(\d{2})$/.test(val);
            case "english": // 英文
                return /^[a-zA-Z]+$/.test(val);
            case "chinese": // 中文
                return /^[\u4E00-\u9FA5]+$/.test(val);
            case "lower": // 小写
                return /^[a-z]+$/.test(val);
            case "upper": // 大写
                return /^[A-Z]+$/.test(val);
            case "html": // HTML标记
                return /<("[^"]*"|'[^']*'|[^'">])*>/.test(val);
            case "array": // 是否Array
                return Object.prototype.toString.call(val) === "[object Array]";
            case "object": // 是否Object
                return Object.prototype.toString.call(val) === "[object Object]";
            case "emptyObject": // 是否空对象
                return this.checkType(val, "object") && Object.keys(val).length === 0;
            case "string": // 是否String
                return Object.prototype.toString.call(val) === "[object String]";
            case "number": // 是否Number
                return Object.prototype.toString.call(val) === "[object Number]" && val === val; // eslint-disable-line
            case "regExp": // 是否RegExp
                return Object.prototype.toString.call(val) === "[object RegExp]";
            case "file": // 是否File
                return Object.prototype.toString.call(val) === "[object File]";
            case "blob": // 是否Blob
                return Object.prototype.toString.call(val) === "[object Blob]";
            case "undefined": // 是否undefined
                return val === undefined;
            case "null": // 是否null
                return val === null;
            case "function": // 是否function
                return typeof val === "function";
            case "window": // 是否window
                return val === window;
            default:
                return true;
        }
    }
    static success(msg, time = 1000,position='bottom') {
        // 3 秒后自动关闭
        // showNotify({
        //     type: "success",
        //     message: msg,
        //     duration: time
        // });
        Message.success({
            content: msg,
            duration: time,
            position
        })
    }
    static error(msg, time = 1000,position='bottom') {
        // showNotify({
        //     type: "danger",
        //     message: msg,
        //     duration: time
        // });
        Message.error({
            content: msg,
            duration: time,
            position
        })
    }
    // 防抖(首次触发不执行,某个时间段,多次触发只执行最后一次触发)
    static debounce(func, wait) {
        let timeout;
        //每次触发，先清除定时器
        if (timeout) clearTimeout(timeout);
        //指定多少秒后触发事件操作handler
        timeout = setTimeout(func, wait);
    }
    static debounceGlobal(func, wait) {
        //每次触发，先清除定时器
        if (globalTime) clearTimeout(globalTime);
        //指定多少秒后触发事件操作handler
        globalTime = setTimeout(func, wait);
    }
    // 节流(首次触发执行,某个时间段只能触发一次)
    static throttle(func, delay) {
        let now = Date.now();
        if (now - globalPrev >= delay) {
            func();
            globalPrev = Date.now();
        }
    }
    // -------------------------------------------------------------------请求
    static get(url, params={}, loading = true) {
        if (loading) {
            useCommonStore().setLoading(true);
        }
        return request({
            method: "get",
            url,
            params
        });
    }
    static post(url, data = {}, configs, loading = true) {
        if (loading) {
            useCommonStore().setLoading(true);
        }
        return request.post(url, data, configs);
    }
    static delete(url, configs, loading = true) {
        if (loading) {
            useCommonStore().setLoading(true);
        }
        return request.delete(url, configs);
    }
    static put(url, data, configs, loading = true) {
        if (loading) {
            useCommonStore().setLoading(true);
        }
        return request.put(url, data, configs);
    }
    // 通用下载方法
    static async blobValidate(data) {
        try {
            const text = await data.text();
            JSON.parse(text);
            return false;
        } catch (error) {
            return true;
        }
    }
    static download(url, params, filename, config) {
        useCommonStore().setLoading(true, "下载中");
        request
            .post(url, params, {
                transformRequest: [
                    (params) => {
                        return this.tansParams(params);
                    }
                ],
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                responseType: "blob",
                ...config
            })
            .then(async (data) => {
                const isLogin = await this.blobValidate(data);
                if (isLogin) {
                    const blob = new Blob([data]);
                    saveAs(blob, filename);
                } else {
                    const resText = await data.text();
                    const rspObj = JSON.parse(resText);
                    const errMsg = this.errorCode[rspObj.code] || rspObj.msg || this.errorCode["default"];
                    this.error(errMsg);
                }
                useCommonStore().loading = false;
            })
            .catch((r) => {
                this.error(r);
            });
    }
    static async lngLatOrAddress(location, type) {
        if (!type) {
            let url = "https://restapi.amap.com/v3/geocode/geo";
            return await axios.get(url, {
                params: {
                    address: location,
                    output: "JSON",
                    key: "d920af4b2a1f7c5aefeeefe6982b0641"
                }
            });
        } else {
            let url = "https://restapi.amap.com/v3/geocode/regeo";
            return await axios.get(url, {
                params: {
                    location,
                    poitype: "",
                    radius: 1000,
                    extensions: "all",
                    batch: false,
                    roadlevel: 0,
                    key: "d920af4b2a1f7c5aefeeefe6982b0641"
                }
            });
        }
    }
    /**
     * 字典获取
     * @param {*} url 数据url
     * @param {*} type 数据dictValue字段类型
     */
    static useDict = (...args) => {
        const res = ref({});
        return (() => {
            // const useDictStore() = useDictStore();
            args.forEach(async ({url, type = "number"}, index) => {
                res.value[url] = {};
                const has = useDictStore()["getDict"](url);
                if (has) {
                    if (type) {
                        has.forEach((i) => {
                            if (type === "number") i.dictValue = Number(i.dictValue);
                            else if (type === "string") i.dictValue = String(i.dictValue);
                        });
                    }
                    res.value[url] = has;
                } else {
                    this.get("system/dict/data/type/" + url).then((resp) => {
                        if (type) {
                            resp.data.forEach((i) => {
                                if (type === "number") i.dictValue = Number(i.dictValue);
                                else if (type === "string") i.dictValue = String(i.dictValue);
                            });
                        }
                        res.value[url] = resp.data;
                        useDictStore()["setDict"](url, res.value[url]);
                    });
                }
            });
            return toRefs(res.value);
        })();
    };
    /**
     * 数据字典
     * @param {*} url 数据url
     * @param {*} type 数据dictValue字段类型
     * @param {*} always 数据源刷新重新请求
     * @param {*} dataKey 数据源字段 'data' or 'rows'
     * @param {*} dictLabel 数据显示字典名
     * @param {*} dictValue 数据显示字典Id
     * @param {*} dataType 数据结构类型 默认 'list' or 'tree'
     */
    static dataDict = (...args) => {
        const res = ref({});
        return (() => {
            // const useDictStore() = useDictStore();
            args.forEach(async ({url, type = "number", always = false, dataKey = "data", dictLabel = "dictLabel", dictValue = "dictValue", dataType = "list"}, index) => {
                let dictName = url.toString().replace(/\//g, "_");
                res.value[dictName] = {};
                const has = useDictStore()["getDict"](dictName);
                if (has && always !== true) {
                    has.forEach((i) => {
                        i["dictLabel"] = i[dictLabel];
                        if (type === "number") i["dictValue"] = Number(i[dictValue]);
                        else if (type === "string") i["dictValue"] = String(i[dictValue]);
                        else i["dictValue"] = i[dictValue];
                    });
                    res.value[dictName] = has;
                } else {
                    let resp = await this.get(url, {}, false);
                    if (resp["code"] === 200) {
                        resp[dataKey].forEach((i) => {
                            i["dictLabel"] = i[dictLabel];
                            if (type === "number") i["dictValue"] = Number(i[dictValue]);
                            else if (type === "string") i["dictValue"] = String(i[dictValue]);
                            else i["dictValue"] = i[dictValue];
                        });
                        if (dataType === "list") {
                            res.value[dictName] = resp[dataKey];
                        } else if (dataType === "tree") {
                            res.value[dictName] = this.handleTree(resp[dataKey], dictValue);
                        }
                        useDictStore()["setDict"](dictName, res.value[dictName]);
                    }
                }
            });
            return toRefs(res.value);
        })();
    };
    // -------------------------------------------------------------------权限
    static authPermission(permission) {
        const all_permission = "*:*:*";
        const permissions = useUserStore()["permissions"];
        if (permission && permission.length > 0) {
            return permissions.some((v) => {
                return all_permission === v || v === permission;
            });
        } else {
            return false;
        }
    }
    static authRole(role) {
        const super_admin = "admin";
        const roles = useUserStore()["roles"];
        if (role && role.length > 0) {
            return roles.some((v) => {
                return super_admin === v || v === role;
            });
        } else {
            return false;
        }
    }
    // 验证用户是否具备某权限
    static hasPermi(permission) {
        return this.authPermission(permission);
    }
    // 验证用户是否含有指定权限，只需包含其中一个
    static hasPermiOr(permissions) {
        return permissions.some((item) => {
            return this.authPermission(item);
        });
    }
    // 验证用户是否含有指定权限，必须全部拥有
    static hasPermiAnd(permissions) {
        return permissions.every((item) => {
            return this.authPermission(item);
        });
    }
    // 验证用户是否具备某角色
    static hasRole(role) {
        return this.authRole(role);
    }
    // 验证用户是否含有指定角色，只需包含其中一个
    static hasRoleOr(roles) {
        return roles.some((item) => {
            return this.authRole(item);
        });
    }
    // 验证用户是否含有指定角色，必须全部拥有
    static hasRoleAnd(roles) {
        return roles.every((item) => {
            return this.authRole(item);
        });
    }

    static paramIsOverproof(param, value, ap) {
        let allParamLevel = {
            aqi: [0, 80, 120],
            pm10: [0, 50, 150, 250, 350, 420],
            pm25: [0, 35, 75, 115, 150, 250],
            "pm2.5": [0, 35, 75, 115, 150, 250],
            so2: [0, 150, 500, 650, 800],
            noise: [0, 50, 65, 80, 100, 120],
            co: [0, 5, 10, 35, 60, 90],
            no2: [0, 100, 200, 700, 1200, 2340],
            o3: [0, 160, 200, 300, 400, 800],
            o3_8: [0, 100, 160, 215, 265, 800],
            tsp: [0, 50, 150, 250, 350, 420],
            zh: [0, 50, 100, 150, 200, 300],
            no: [0, 100, 200, 700, 1200, 2340],
            nox: [0, 100, 200, 700, 1200, 2340],
            compositeIndex: [0, 50, 100, 150, 200, 300]
        };
        value = Number(value);
        let len = allParamLevel[param].length;
        for (let i = 0; i < len; i++) {
            if (isNaN(value)) return this.getLevelInfo(999, ap);
            if (value === 0) return this.getLevelInfo(0, ap);
            let row = allParamLevel[param][i];
            if (value <= row) {
                return this.getLevelInfo(i, ap);
            }
        }
        return this.getLevelInfo(len, ap);
    }
    static getLevelInfo(level, ap = 1) {
        if (level === 0) {
            return {
                color: "#C2C3CC",
                text: "—",
                level: 0,
                fillStyle: "rgba(194,195,204, " + ap + " )"
            };
        } else if (level === 1 || level === "Ⅰ" || level === "优") {
            return {
                color: "#00E400",
                text: "优",
                level: 1,
                level_c: "一级",
                levelCn: "Ⅰ",
                fillStyle: "rgba(0,228,0, " + ap + " )",
                width: "10%"
            };
        } else if (level === 2 || level === "Ⅱ" || level === "良") {
            return {
                color: "#F1C700",
                text: "良",
                level: 2,
                level_c: "二级",
                levelCn: "Ⅱ",
                fillStyle: "rgba(241,199,0, " + ap + " )",
                width: "20%"
            };
        } else if (level === 3 || level === "Ⅲ" || level === "轻度污染") {
            return {
                color: "rgba(255,0,0,1)",
                text: "轻度污染",
                level_c: "三级",
                levelCn: "Ⅲ",
                fillStyle: "rgba(255,0,0, " + ap + " )",
                width: "40%"
            };
        } else if (level === 4 || level === "Ⅳ" || level === "中度污染") {
            return {
                color: "#FF0000",
                text: "中度污染",
                level: 4,
                level_c: "四级",
                levelCn: "Ⅳ",
                fillStyle: "rgba(255,0,0, " + ap + " )",
                width: "60%"
            };
        } else if (level === 5 || level === "Ⅴ" || level === "重度污染") {
            return {
                color: "#99004C",
                text: "重度污染",
                level_c: "五级",
                level: 5,
                levelCn: "Ⅴ",
                fillStyle: "rgba(153,0,76, " + ap + " )",
                width: "80%"
            };
        } else if (level === 6 || level === "Ⅵ" || level === "严重污染") {
            return {
                color: "#7E0023",
                text: "严重污染",
                level_c: "六级",
                level: 6,
                levelCn: "Ⅵ",
                fillStyle: "rgba(126,0,35, " + ap + " )",
                width: "100%"
            };
        } else {
            return {
                color: "#none",
                text: "—",
                level: "—",
                level_c: "—",
                levelCn: "—",
                fillStyle: "rgba(0,0,0,0)",
                width: "0%"
            };
        }
    }
}
