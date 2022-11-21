import {acceptHMRUpdate, defineStore} from 'pinia';
import router from '../router';

const commonStore = defineStore('common', {
    state: () => {
        return {
            loading: false, // 加載動畫
            isDark: JSON.parse(localStorage.getItem('SYSTEM_ISDARK')), // 暗黑模式
            keepRouter: JSON.parse(sessionStorage.getItem('SYSTEM_KEEPROUTER')) || [], // 緩存路由
            historyRouter: JSON.parse(sessionStorage.getItem('SYSTEM_HISTORYROUTER')) || [], // 歷史路由
            currRouter: JSON.parse(sessionStorage.getItem('SYSTEM_CURRROUTER')) || '/login' // 當前路由
        };
    },
    getters: {},
    actions: {
        setLoading(val) {
            this.loading = val;
        },
        setDark(val) {
            this.isDark = val;
            localStorage.setItem('SYSTEM_ISDARK', JSON.stringify(val));
        },
        setRouter(i, type) {
            // 當前路由
            if (type !== 'remove') {
                this.currRouter = i.router || i;
                sessionStorage.setItem('SYSTEM_CURRROUTER', JSON.stringify(this.currRouter));
            }
            // 緩存頁面
            let index = this.keepRouter.indexOf(i.router || i);
            if (index === -1) {
                if (type !== 'remove') {
                    if (i.keepalive && i.router) this.keepRouter.push(i.router || i); else if (!i.router) this.keepRouter.push(i.router || i);
                }
            } else {
                if (type === 'remove') {
                    this.keepRouter.splice(index, 1);
                }
            }
            sessionStorage.setItem('SYSTEM_KEEPROUTER', JSON.stringify(this.keepRouter));
            // 歷史頁面
            let index2 = this.historyRouter.indexOf(i.router || i);
            if (index2 === -1) {
                if (type !== 'remove') {
                    this.historyRouter.push(i.router || i);
                }
            } else {
                if (type === 'remove') {
                    this.historyRouter.splice(index2, 1);
                }
            }
            sessionStorage.setItem('SYSTEM_HISTORYROUTER', JSON.stringify(this.historyRouter));
        },
        addRouter(list) {
            const modules = import.meta.glob('../views/**/*.vue');
            list.forEach((item) => {
                for (const path in modules) {
                    if (path.includes(item.router)) {
                        router.addRoute({
                            path: item.router, name: item.router, component: modules[path], meta: {
                                title: item.name,
                                enter: 'animate__backInUp',
                                leave: 'animate__backOutUp ',
                                keepAlive: true
                            }
                        });
                    }
                }
                if (item.children) {
                    item.children.forEach((k) => {
                        for (const path in modules) {
                            if (path.includes(k.router)) {
                                router.addRoute({
                                    path: k.router, name: k.router, component: modules[path], meta: {
                                        title: k.name,
                                        enter: 'animate__backInUp',
                                        leave: 'animate__backOutUp ',
                                        keepAlive: true
                                    }
                                });
                            }
                        }
                    });
                }
            });
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(commonStore, import.meta.hot));
}

export default commonStore;