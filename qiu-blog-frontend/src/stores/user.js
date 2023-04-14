import {reactive, toRefs} from "vue";
import {defineStore} from "pinia";
import {getToken, removeToken, setToken} from "@/utils/auth";
import utils from "@/utils/utils";

export const useUserStore = defineStore("user", () => {
    const store = reactive({
        token: getToken(),
        user: utils.sessionCache.getJSON("user") || {},
        menus: utils.sessionCache.getJSON("menus") || [],
        permissions: [],
        roles: [],
        login(params) {
            return new Promise((resolve, reject) => {
                utils
                    .post(
                        "employee/login",
                        params,
                        {
                            headers: {
                                isToken: false
                            }
                        }
                    )
                    .then(async (res) => {
                        if (res.code) {
                            setToken(res.data.idNumber);
                            // await store.getRouters();
                            utils.toRouter("/technology");
                            resolve(res);
                        } else {
                            utils.error(res.msg);
                        }
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        },
        // getInfo() {
        //     return new Promise((resolve, reject) => {
        //         utils
        //             .get("/getInfo")
        //             .then(async (res) => {
        //                 store.permissions = res.permissions;
        //                 store.roles = res.roles;
        //                 store.user = res.user;
        //                 utils.sessionCache.setJSON("permissions", res.permissions);
        //                 utils.sessionCache.setJSON("roles", res.roles);
        //                 utils.sessionCache.setJSON("user", res.user);
        //                 resolve(res);
        //             })
        //             .catch((error) => {
        //                 reject(error);
        //             });
        //     });
        // },
        async getRouters() {
            let res = await utils.get("/personal/suser");
            if (res.status === 200) {
                // 用户信息
                store.user = res.data.info;
                utils.sessionCache.setJSON("user", res.data.info);
                //  菜单
                store.menus = utils.deepClone(res.data.menu);
                utils.sessionCache.setJSON("menus", store.menus);
                // // 动画名单
                // let animateRouter = ["/noise_detection"];
                // // 遍历菜单根据component匹配文件
                // utils.loop(store.menus, "children", (i, parent) => {
                //     Object.keys(modules).forEach((path) => {
                //         i.name = i.name.includes("/") ? i.name.split("/")[1].toLowerCase() : "/" + i.name.toLowerCase();
                //         i.path = i.path.includes("/") ? i.path : "/" + i.path;
                //         i.meta = {
                //             ...i.meta,
                //             animate: animateRouter.includes(i.path) ? "slide-left" : "fade"
                //         };
                //         if (path.split("../views/")[1].toString() === i.component.toString().trim()) {
                //             i.component = modules[path];
                //         }
                //     });
                // });
                // for (let i = 0; i < store.menus.length; i++) {
                //     router.addRoute(store.menus[i]);
                // }
            }
        },
        async logOut() {
            let res = await utils.post("/employee/logout");
            if (res.code) {
                removeToken();
                store.permissions = [];
                store.roles = [];
                store.user = {};
                store.menus = [];
                utils.toRouter("/login");
                utils.success("退出成功!");
            }
        },
        isCurrentUser(userId) {
            if (this.user?.roles[0].roleId === 1 || this.user?.roles[0].roleId === 116) {
                return false;
            }
            return this.user?.userId === userId;
        }, // 登录用户是否是当前用户
        isCurrentRole(roleId) {
            if (this.user?.roles[0].roleId === 1 || this.user?.roles[0].roleId === 116) {
                return false;
            }
            return this.user?.roles[0].roleId === roleId;
        } // 登录用户是否当前角色
    });
    return {...toRefs(store)};
});
