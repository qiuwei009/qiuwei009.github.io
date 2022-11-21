import {createRouter, createWebHistory} from 'vue-router';

// import NProgress from '~/plugins/nprogress'
const routes = [{
    path: '/', redirect: '/webHome'
}, {
    path: '/login', name: 'login', component: () => import('../views/login/login.vue'), meta: {
        title: '登录', enter: 'animate__backInUp', leave: 'animate__backOutUp '
    }
}, {
    path: '/game', name: 'game', component: () => import(`../views/game/game.vue`), meta: {
        title: 'game', enter: 'animate__backInUp', leave: 'animate__backOutUp ', root: false
    }
}, {
    path: '/webHome', name: 'webHome', component: () => import(`../views/webPages/webHome/webHome.vue`), meta: {
        title: '首页', enter: 'animate__backInUp', leave: 'animate__backOutUp ', root: false
    }
}, {
    path: '/webWord', name: 'webWord', component: () => import(`../views/webPages/webWord/webWord.vue`), meta: {
        title: '文档归类', enter: 'animate__backInUp', leave: 'animate__fadeOutRightBig ', root: false
    }
}, {
    path: '/webCatalogue',
    name: 'webCatalogue',
    component: () => import(`../views/webPages/webCatalogue/webCatalogue.vue`),
    meta: {
        title: '分类目录', enter: 'animate__backInUp', leave: 'animate__fadeOutRightBig ', root: false
    }
}, {
    path: '/webLabel', name: 'webLabel', component: () => import(`../views/webPages/webLabel/webLabel.vue`), meta: {
        title: '标签', enter: 'animate__backInUp', leave: 'animate__fadeOutRightBig ', root: false
    }
}, {
    path: '/webFriendship',
    name: 'webFriendship',
    component: () => import(`../views/webPages/webFriendship/webFriendship.vue`),
    meta: {
        title: '友情链接', enter: 'animate__backInUp', leave: 'animate__fadeOutRightBig ', root: false
    }
}, {
    path: '/404', name: '404', component: () => import(`../views/error/error.vue`), meta: {
        title: '404', enter: 'animate__backInUp', leave: 'animate__fadeOutRightBig '
    }
}, {
    path: '/:pathMatch(.*)', redirect: '/404', meta: {
        title: '404', enter: 'animate__backInUp', leave: 'animate__fadeOutRightBig '
    }
}];
const router = createRouter({
    history: createWebHistory(), routes
});

// 刷新404解决
const modules = import.meta.glob('../views/**/*.vue');
(() => {
    let menus = JSON.parse(sessionStorage.getItem('SYSTEM_MENUS')) || [];
    menus.forEach((item) => {
        for (const path in modules) {
            if (path.includes(item.router)) {
                router.addRoute({
                    path: item.router, name: item.router, component: modules[path], meta: {
                        title: item.name, enter: 'animate__backInUp', leave: 'animate__backOutUp ', keepAlive: true
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
                                enter: 'animate__backInUp ',
                                leave: 'animate__backOutUp ',
                                keepAlive: true
                            }
                        });
                    }
                }
            });
        }
    });
})();


router.beforeEach((to, from, next) => {
    document.title = '' + to.meta.title || import.meta.env.VITE_APP_TITLE;
    // NProgress.start();
    if (to.path === '/login' || to.path === '/404' || to.path === '/game' || to.path.includes('web')) {
        next();
    } else {
        let token = JSON.parse(window.sessionStorage.getItem('SYSTEM_TOKEN')) || '';
        if (!token) {
            next('/login');
        } else {
            next();
        }
    }
});
router.afterEach(() => {
    // NProgress.done();
});
export default router;