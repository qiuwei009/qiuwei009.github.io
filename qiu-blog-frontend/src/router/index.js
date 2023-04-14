import {createRouter, createWebHistory} from "vue-router";
import {getToken} from "@/utils/auth";
import {useUserStore} from "@/stores/user";
import {nextTick} from "vue";
import view from "../views/index.vue";
import {useCommonStore} from "@/stores/common";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: view,
      redirect: "/technology",
      children: [
        {
          path: "technology",
          name: "technology",
          component: () => import("../views/technology/index.vue"),
          meta: {
            title: "技术交流",
            animate: "slide-left",
            showTabs: true,
            showNavs: false,
          }
        },
        {
          path: "code",
          name: "code",
          component: () => import("../views/code/index.vue"),
          meta: {
            title: "源码分享",
            animate: "slide-left",
            showTabs: true,
            showNavs: true,
          }
        },
        {
          path: "time",
          name: "time",
          component: () => import("../views/time/index.vue"),
          meta: {
            title: "时间轴",
            animate: "slide-left",
            showTabs: true,
            showNavs: true,
          }
        },
        {
          path: "info/:id",
          name: "info",
          component: () => import("../views/info/index.vue"),
          meta: {
            title: "详情页",
            animate: "slide-left",
            showTabs: true,
            showNavs: true,
          }
        },
        {
          path: "message",
          name: "message",
          component: () => import("../views/message/index.vue"),
          meta: {
            title: "留言箱",
            animate: "slide-left",
            showTabs: true,
            showNavs: true,
          }
        },
        {
          path: "self",
          name: "self",
          component: () => import("../views/self/index.vue"),
          meta: {
            title: "关于本人",
            animate: "slide-left",
            showTabs: true,
            showNavs: true,
          }
        },
      ]
    },
    {
      path: "/login",
      component: ()=>import('../views/login/index.vue'),
      meta: {
        title: "登录",
        animate: "slide-left",
        showTabs: false,
        showNavs: false,
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#container',
      top: 0,
      behavior: 'smooth',
    }
  },
});

router.beforeEach(async (to, from, next) => {
  // 路由跳转清空events
  // useCommonStore().events = []
  // setTimeout(()=>{
    useCommonStore().setScroll(0)
  // },1000)
  if (to.path === "/login") {
    next();
  } else {
    if (getToken()) {
      next();
    } else {
      await nextTick(async () => {
        let res = await useUserStore().login({username: 'admin', password: '123456'});
        if (res.status) await next();
      })
    }
  }
});
export default router;
