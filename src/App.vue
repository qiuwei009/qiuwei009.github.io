<template>
  <el-config-provider :locale='menus.locale'>
    <div v-show='menus.showMenus' class='project'>
      <div class='logo fl flex align-c cursor'>
        <img v-show='!menus.isOpen' alt='' src='./assets/image/logo.png' style='height: 30px;' @click='menus.changeShow(!menus.isShow)'>
         <span v-show='menus.isOpen' @click='menus.changeShow(!menus.isShow)'>{{ menus.username }}_Blog博客云</span>
<!--        <span v-show='menus.isOpen' @click='menus.changeShow(!menus.isShow)'>成都质控数据大屏</span>-->
        <i :class="menus.isOpen?'activeIcon':''" class='iconfont icon-zhankaicebianlan fullBtn fl' title='左键点击隐藏/显示菜单,右键点击展开/收缩菜单' @click='menus.isOpen = !menus.isOpen' @contextmenu.prevent='menus.changeShow(!menus.isShow)'></i>
      </div>
      <div class='scrollMenus fl' @mouseenter='menus.addEvent' @mouseleave='menus.removeEvent'>
        <el-scrollbar ref='scrollbarRef' :always='true'>
          <div class='scrollbar-flex-content'>
            <div v-for='i in menus.historyMenus' :key='i.name' class='scrollbar-demo-item'>
              <router-link v-if="!i.name.includes('首页')" :title='`右键删除${i.name}`' :to='i.router' @contextmenu.prevent='menus.rightMenus(i)'>
                {{ i.name }}
              </router-link>
              <router-link v-else :to='i.router' title='默认首页不能删除' @contextmenu.prevent=''>
                {{ i.name }}
              </router-link>
              <!-- <i v-if="i.router !== '/monitor' && i.id < 9999" class='iconfont icon-guanbi' style='font-size: 12px;color: #9495a9;vertical-align: bottom;' @click.stop='menus.rightMenus(i)'></i>-->
            </div>
          </div>
        </el-scrollbar>
      </div>
      <div v-if="menus.username !== 'xxx'" class='user fr'>
        <i class='iconfont icon-RectangleCopy4'></i> <em class='omit'> 欢迎您,&nbsp;&nbsp;{{ menus.username }}&nbsp; </em>
        <i class='iconfont icon-RectangleCopy14'></i>
        <div class='out'>
          <p @click.stop='menus.user.show = true'>
            <i class='iconfont icon-RectangleCopy4'></i> 用户信息 </p>
          <p @click.stop='menus.out'>
            <i class='iconfont icon-RectangleCopy200'></i> 退出登录 </p>
        </div>
      </div>
      <div v-else class='login fr'>
        <router-link to='/login'>
          <i class='iconfont icon-RectangleCopy4'></i>Sign In
        </router-link>
      </div>
      <div class='contart flex fr just-b align-c'>
        <el-popover :width='300'>
          <template #reference>
            <i class='iconfont iconfontHover icon-RectangleCopy45' style='color: red'></i>
          </template>
          <template #default>
            <el-tabs class='demo-tabs' placement='bottom-end' style='height: 400px;' tab-position='top'>
              <el-tab-pane label='未读消息' style='height: 340px;overflow-y: auto;'>
                <p v-for='(i,index) in 100' :key='index' @click='menus.info.show = true'>{{ i }}</p>
              </el-tab-pane>
              <el-tab-pane label='已读消息' style='height: 340px;overflow-y: auto;'></el-tab-pane>
            </el-tabs>
          </template>
        </el-popover>
        <div v-if='!menus.isDark' class='fl' title='暗夜模式' @click='menus.setDark(true)'>
          <i class='iconfont iconfontHover icon-z'></i>
        </div>
        <div v-else class='fl' title='亮色模式' @click='menus.setDark(false)'>
          <i class='iconfont iconfontHover icon-taiyang'></i>
        </div>
        <div id='Fkey' class='fl' title='全屏' @click='menus.Fkey'>
          <i class='iconfont iconfontHover icon-RectangleCopy52'></i>
        </div>
        <div class='fl' title='刷新' @click='menus.refresh'>
          <i class='iconfont iconfontHover icon-RectangleCopy24'></i>
        </div>
        <div class='time flex align-c nowrap fl'>
          <div class='dsrBSL'>{{ menus.now }}</div>
          <div id='tp-weather-widget'></div>
        </div>
      </div>
    </div>
    <div id='project-main' class='project-main flex'>
      <Alise :data='{ showMenus: menus.showMenus, list:menus.list, isShow: menus.isShow, isOpen: menus.isOpen }' @handleShow='menus.changeShow'></Alise>
      <div class='col-auto'>
        <!--        <router-view v-slot='{ Component, route }'>-->
        <!--          <transition :enter-active-class="`animate__animated ${route.meta.enter || ''}`" :leave-active-class="`animate__animated ${route.meta.leave || ''}`">-->
        <!--            <keep-alive :include='store.keepRouter'>-->
        <!--              <component :is='Component'></component>-->
        <!--            </keep-alive>-->
        <!--          </transition>-->
        <!--        </router-view>-->
        <router-view v-slot='{ Component, route }' :include='store.keepRouter'>
          <!-- 使用任何自定义过渡和回退到 `fade` -->
          <transition :name="'slide-fade'">
            <keep-alive :include='store.keepRouter'>
              <component :is='Component'></component>
            </keep-alive>
          </transition>
        </router-view>
        <popup :info='menus.info' @hide='menus.info.show = false'>
          <template v-slot:title>
            <span class='select condition'>站内信息列表</span>
          </template>
          <template v-slot:main>
            <div class='flex align-c' style='height: 51px'>
              详情 </div>
            <div style='box-sizing: border-box;padding:  5px 10px;'>
              <p class='title'>信息标题</p>
              <el-input placeholder='Please input'/>
              <p class='title'>信息内容</p>
              <el-input :rows='8' placeholder='Please input' type='textarea'/>
              <p class='title'>发送人</p>
              <el-input placeholder='Please input'/>
              <p class='title'>接收人</p>
              <el-input placeholder='Please input'/>
            </div>
          </template>
          <template v-slot:page>
            <span class='confirm_btn cursor'>已读</span>
          </template>
        </popup>
        <popup :info='menus.user' @hide='menus.user.show = false'>
          <template v-slot:title>
            <span class='select condition'>用户信息</span>
          </template>
          <template v-slot:main>
            <div style='padding: 0 10px;box-sizing: border-box;'>
              <p class='title'>个人信息</p>
              <div class='flex'>
                <div class='col-4 flex just-c align-c  padding-10'>
                  <img alt='' src='./assets/image/app/headPortrait.png'>
                </div>
                <div class='col-8 flex column just-c  padding-10'>
                  <div class='flex'>
                    <label class='col-3'>参数权限 : </label> <span class='col-9' style='border: none;'>PM10,PM2.5,TSP,噪音,温度,湿度 ,风速,风向,气压,SO₂,CO,NO₂,O₃,油烟,VOC,CO2,
                      H₂S,NH₃
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-slot:page>
            <span class='confirm_btn cursor'>确定</span>
          </template>
        </popup>
      </div>
    </div>
  </el-config-provider>
  <Loadings :show='store.loading'></Loadings>
</template>

<script setup>
import {ElMessage, ElMessageBox} from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import {useRouter} from 'vue-router';
import commonStore from './pinia/commonStore';

const route = useRouter();
const store = commonStore();
const scrollbarRef = ref(null);

const menus = reactive({
  num: 0,
  locale: zhCn,
  isDark: JSON.parse(localStorage.getItem('SYSTEM_ISDARK')) || false,
  setDark(val) {
    this.isDark = val;
    if (this.isDark) document.documentElement.classList.toggle('dark', true);
    else document.documentElement.classList.toggle('dark', false);
    store.setDark(val);
  },
  showMenus: false,
  isShow: true,
  isOpen: true,
  list: JSON.parse(sessionStorage.getItem('SYSTEM_MENUS')) || [],
  currMenus: '',
  historyMenus: JSON.parse(sessionStorage.getItem('historyMenus')) || [
    // {
    //   searchValue: null,
    //   createTime: null,
    //   updateTime: null,
    //   id: 10000,
    //   name: '首页',
    //   parentName: null,
    //   parentId: 5,
    //   orderNum: '0',
    //   router: '/webHome',
    //   component: null,
    //   menuType: 'C',
    //   status: '0',
    //   perms: '',
    //   icon: null,
    //   children: null
    // },
    // {
    //   searchValue: null,
    //   createTime: null,
    //   updateTime: null,
    //   id: 20000,
    //   name: '分类目录',
    //   parentName: null,
    //   parentId: 5,
    //   orderNum: '1',
    //   router: '/webCatalogue',
    //   component: null,
    //   menuType: 'C',
    //   status: '0',
    //   perms: '',
    //   icon: null,
    //   children: null
    // },
    // {
    //   searchValue: null,
    //   createTime: null,
    //   updateTime: null,
    //   id: 30000,
    //   name: '文章',
    //   parentName: null,
    //   parentId: 5,
    //   orderNum: '2',
    //   router: '/webWord',
    //   component: null,
    //   menuType: 'C',
    //   status: '0',
    //   perms: '',
    //   icon: null,
    //   children: null
    // },
    // {
    //   searchValue: null,
    //   createTime: null,
    //   updateTime: null,
    //   id: 40000,
    //   name: '标签',
    //   parentName: null,
    //   parentId: 5,
    //   orderNum: '3',
    //   router: '/webLabel',
    //   component: null,
    //   menuType: 'C',
    //   status: '0',
    //   perms: '',
    //   icon: null,
    //   children: null
    // },
    // {
    //   searchValue: null,
    //   createTime: null,
    //   updateTime: null,
    //   id: 50000,
    //   name: '友情链接',
    //   parentName: null,
    //   parentId: 5,
    //   orderNum: '4',
    //   router: '/webFriendship',
    //   component: null,
    //   menuType: 'C',
    //   status: '0',
    //   perms: '',
    //   icon: null,
    //   children: null
    // },
    // {
    //   searchValue: null,
    //   createTime: null,
    //   updateTime: null,
    //   id: 60000,
    //   name: '游戏',
    //   parentName: null,
    //   parentId: 5,
    //   orderNum: '4',
    //   router: '/game',
    //   component: null,
    //   menuType: 'C',
    //   status: '0',
    //   perms: '',
    //   icon: null,
    //   children: null
    // }
  ],
  username: 'xxx',
  now: '--',
  time: null,
  clock(v) {
    this.time = setTimeout(() => {
      clearTimeout(this.time);
      this.time = null;
      let weekday = new Date().getDay();
      let week = null;
      switch (weekday) {
        case 0:
          week = '周日';
          break;
        case 1:
          week = '周一';
          break;
        case 2:
          week = '周二';
          break;
        case 3:
          week = '周三';
          break;
        case 4:
          week = '周四';
          break;
        case 5:
          week = '周五';
          break;
        case 6:
          week = '周六';
          break;
      }
      this.now = new Date().format('yyyy年MM月dd日 hh:mm:ss') + ' ' + week;
      return this.clock(v);
    }, v);
  },
  weather() {
    (function (a, h, g, f, e, d, c, b) {
      b = function () {
        d = h.createElement(g);
        c = h.getElementsByTagName(g)[0];
        d.src = e;
        d.charset = 'utf-8';
        d.async = 1;
        c.parentNode.insertBefore(d, c);
      };
      a['SeniverseWeatherWidgetObject'] = f;
      a[f] ||
      (a[f] = function () {
        (a[f].q = a[f].q || []).push(arguments);
      });
      a[f].l = +new Date();
      if (a.attachEvent) {
        a.attachEvent('onload', b);
      } else {
        a.addEventListener('load', b, false);
      }
    })(
        window,
        document,
        'script',
        'SeniverseWeatherWidget',
        '//cdn.sencdn.com/widget2/static/js/bundle.js?t=' +
        parseInt((new Date().getTime() / 100000000).toString(), 10)
    );
    window.SeniverseWeatherWidget('show', {
      flavor: 'slim',
      location: 'WM6N2PM3WY2K',
      geolocation: false,
      language: 'zh-Hans',
      unit: 'c',
      theme: 'auto',
      token: '4fb647f9-438d-47e1-88a7-65f6c09fbba0',
      hover: 'disabled',
      container: 'tp-weather-widget'
    });
  },
  Fkey() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      // menus.isOpen = true
      $('#Fkey').removeClass('active').find('em').text('全屏');
    } else {
      document.documentElement.requestFullscreen();
      menus.isOpen = false;
      $('#Fkey').addClass('active').find('em').text('退出全屏');
    }
  },
  out() {
    ElMessageBox.confirm('请问是否退出当前账号?', '信息', {
      confirmButtonText: '退出',
      cancelButtonText: '取消',
      type: 'success'
    })
    .then(() => {
      let isDark = JSON.parse(sessionStorage.getItem('SYSTEM_ISDARK'));
      sessionStorage.clear();
      sessionStorage.setItem('SYSTEM_ISDARK', JSON.stringify(isDark));
      menus.username = 'xxx';
      route.push('/login');
    })
    .catch(() => {
      ElMessage({
        duration: 1000,
        type: 'info',
        message: '已取消!'
      });
    });
  },
  info: {
    show: false,
    name: 'appinfo',
    w: '45%',
    list: []
  },
  user: {
    show: false,
    name: 'user-pop',
    w: '50%',
    info: {}
  },
  left: 0,
  scrollFunc(e) {
    e = e || window.event;
    scrollbarRef.value.update();
    if (e.wheelDelta) {
      //判断浏览器IE，谷歌滑轮事件
      if (e.wheelDelta > 0) {
        //当滑轮向上滚动时
        if (menus.left > 0) menus.left -= 50;
        scrollbarRef.value.setScrollLeft(menus.left);
        $(`.scrollMenus .el-scrollbar__wrap`).animate(
            {scrollLeft: menus.left},
            0
        );
      }
      if (e.wheelDelta < 0) {
        //当滑轮向下滚动时
        if (
            menus.left + $('.scrollMenus .el-scrollbar__wrap').innerWidth() <
            menus.historyMenus.length * 100 + 100
        )
          menus.left += 50;
        scrollbarRef.value.setScrollLeft(menus.left);
        $(`.scrollMenus .el-scrollbar__wrap`).animate(
            {scrollLeft: menus.left},
            0
        );
      }
    } else if (e.detail) {
      //Firefox滑轮事件
      if (e.detail > 0) {
        //当滑轮向上滚动时
        if (menus.left > 0) menus.left -= 50;
        scrollbarRef.value.setScrollLeft(menus.left);
        $(`.scrollMenus .el-scrollbar__wrap`).animate(
            {scrollLeft: menus.left},
            0
        );
      }
      if (e.detail < 0) {
        //当滑轮向下滚动时
        if (
            menus.left + $('.scrollMenus .el-scrollbar__wrap').innerWidth() <
            menus.historyMenus.length * 100
        ) {
          menus.left += 60;
        }

        scrollbarRef.value.setScrollLeft(menus.left);
        $(`.scrollMenus .el-scrollbar__wrap`).animate(
            {scrollLeft: menus.left},
            0
        );
      }
    }
  },
  addEvent() {
    const dom = document.querySelector('.scrollMenus');
    if (dom.addEventListener) {
      //火狐使用DOMMouseScroll绑定
      dom.addEventListener('DOMMouseScroll', menus.scrollFunc, true);
    }
    //其他浏览器直接绑定滚动事件
    dom.onmousewheel = menus.scrollFunc;
  },
  removeEvent() {
    const dom = document.querySelector('.scrollMenus');
    if (dom.addEventListener) {
      //火狐使用DOMMouseScroll绑定
      dom.removeEventListener('DOMMouseScroll', menus.scrollFunc, true);
    }
    dom.onmousewheel = null;
  },
  rightMenus(i) {
    store.setRouter(i, 'remove');
    menus.historyMenus = [
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 10000,
      //   name: '首页',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '0',
      //   router: '/webHome',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 20000,
      //   name: '分类目录',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '1',
      //   router: '/webCatalogue',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 30000,
      //   name: '文章',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '2',
      //   router: '/webWord',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 40000,
      //   name: '标签',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '3',
      //   router: '/webLabel',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 50000,
      //   name: '友情链接',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '4',
      //   router: '/webFriendship',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 60000,
      //   name: '游戏',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '4',
      //   router: '/game',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // }
    ];
    menus.list.forEach((i) => {
      if (store.historyRouter.includes(i.router)) menus.historyMenus.push(i);
      if (i.children) {
        i.children.forEach((j) => {
          if (store.historyRouter.includes(j.router))
            menus.historyMenus.push(j);
        });
      }
    });
    if (store.currRouter === i.router) {
      route.push('/webHome');
    }
  },
  refresh() {
    location.reload();
  },
  changeShow(falg) {
    if (menus.username === 'xxx') {
      ElMessage({
        duration: 1000,
        type: 'info',
        message: '请登录哦!!'
      });
      return false;
    }
    menus.isShow = falg;
  },
  music() {
    let div = document.createElement('div');
    div.id = 'player';
    div.class = 'aplayer';
    document.body.appendChild(div);
  }
});
const info = reactive({
  list: {
    name: 'role',
    header: [],
    rows: [
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      },
      {
        i_num: 1,
        device: 136.1,
        level: 1.1,
        main: 'pm2.5',
        value: 123,
        address: 49.3,
        timeS: '2021-01-04 00:00:00'
      }
    ],
    page: 1,
    size: 20,
    total: 100,
    currentPage: 1,
    select: {
      open: true, // 是否开启多项选中
      selectAll: false, //全选
      isIndeterminate: false, // 中间状态
      selectId: [] // 选中ID
    }
  }
});
// 路由监听
watch(() => route.currentRoute.value.path, (n) => {
  menus.list = JSON.parse(sessionStorage.getItem('SYSTEM_MENUS')) || [];
  if (n === '/login' || n === '/404') {
    menus.showMenus = false;
    document.getElementById('project-main').style.height = '100%';
  } else if (n.includes('web') || n === '/game') {//n.includes('web') ||
    menus.showMenus = true;
    menus.isShow = false;
    document.getElementById('project-main').style.height = '100%';
    menus.username = sessionStorage.getItem('SYSTEM_USER')
        ? JSON.parse(sessionStorage.getItem('SYSTEM_USER')).name
        : 'xxx';
    //初始数据
    menus.keepAliveArr = [];
  }  else if ( n === '/board' ||  n === '/report') {//n.includes('web') ||
    menus.showMenus = true;
    menus.isShow = false;
    store.setRouter(n);
    menus.historyMenus = [
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 10000,
      //   name: '首页',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '0',
      //   router: '/webHome',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 20000,
      //   name: '分类目录',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '1',
      //   router: '/webCatalogue',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 30000,
      //   name: '文章',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '2',
      //   router: '/webWord',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 40000,
      //   name: '标签',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '3',
      //   router: '/webLabel',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 50000,
      //   name: '友情链接',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '4',
      //   router: '/webFriendship',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 60000,
      //   name: '游戏',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '4',
      //   router: '/game',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // }
    ];
    menus.list.forEach((i) => {
      if (store.historyRouter.includes(i.router)) menus.historyMenus.push(i);
      if (i.children) {
        i.children.forEach((j) => {
          if (store.historyRouter.includes(j.router))
            menus.historyMenus.push(j);
        });
      }
    });
    document.getElementById('project-main').style.height = 'calc(100% - 50px)';
    //屏幕宽度判断
    if (document.body.clientWidth < 1000) menus.isShow = false;
    //用户名
    menus.username = sessionStorage.getItem('SYSTEM_USER')
        ? JSON.parse(sessionStorage.getItem('SYSTEM_USER')).name
        : '';
    //滚动条刷新
    if (scrollbarRef.value) scrollbarRef.value.update();
  }else {
    menus.showMenus = true;
    store.setRouter(n);
    menus.historyMenus = [
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 10000,
      //   name: '首页',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '0',
      //   router: '/webHome',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 20000,
      //   name: '分类目录',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '1',
      //   router: '/webCatalogue',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 30000,
      //   name: '文章',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '2',
      //   router: '/webWord',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 40000,
      //   name: '标签',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '3',
      //   router: '/webLabel',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 50000,
      //   name: '友情链接',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '4',
      //   router: '/webFriendship',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // },
      // {
      //   searchValue: null,
      //   createTime: null,
      //   updateTime: null,
      //   id: 60000,
      //   name: '游戏',
      //   parentName: null,
      //   parentId: 5,
      //   orderNum: '4',
      //   router: '/game',
      //   component: null,
      //   menuType: 'C',
      //   status: '0',
      //   perms: '',
      //   icon: null,
      //   children: null
      // }
    ];
    menus.list.forEach((i) => {
      if (store.historyRouter.includes(i.router)) menus.historyMenus.push(i);
      if (i.children) {
        i.children.forEach((j) => {
          if (store.historyRouter.includes(j.router))
            menus.historyMenus.push(j);
        });
      }
    });
    document.getElementById('project-main').style.height = 'calc(100% - 50px)';
    //屏幕宽度判断
    if (document.body.clientWidth < 1000) menus.isShow = false;
    //用户名
    menus.username = sessionStorage.getItem('SYSTEM_USER')
        ? JSON.parse(sessionStorage.getItem('SYSTEM_USER')).name
        : '';
    //滚动条刷新
    if (scrollbarRef.value) scrollbarRef.value.update();
  }
});
onMounted(() => {
  menus.clock(500);
  menus.weather();
  // window.addEventListener('resize', () => {
  //   if (document.body.clientWidth < 1000) menus.isShow = false;
  //   else menus.isShow = true;
  // });
});
</script>

<style lang='less' scoped>
.project{
  width:100%;
  min-height:50px;
  background:#f4f8ff;
  position:relative;
  z-index:99;

  .logo{
    height:50px;
    margin:0;
    box-sizing:border-box;
    padding:0 5px;
    position:relative;
    user-select:none;

    span{
      font-size:18px;
      color:#0a5fcd;
      font-weight:700;
    }

    .fullBtn{
      font-size:16px;
      margin-top:1.7px;
      color:#0a5fcd;
      margin-left:9px !important;
    }

    .activeIcon{
      display:block;
      position:relative;
      transform:rotate(180deg);
    }
  }

  .scrollMenus{
    height:50px;
    width:calc(100% - 780px);
    padding:0;

    .scrollbar-flex-content{
      display:flex;
      padding:0;
      margin:0;
    }

    .scrollbar-demo-item{
      flex-shrink:0;
      display:flex;
      align-items:center;
      justify-content:center;
      height:30px;
      padding:0 10px;
      margin:11px 5px 9px;
      text-align:center;
      border-radius:4px;
      background:rgba(55, 69, 86, 0.25);
      color:#fff !important;
      font-weight:bold;

      a{
        color:#fff;
      }

      i{
        font-size:12px !important;
        margin-left:8px;
        cursor:pointer;
        color:#fff !important;
      }
    }

    :deep(.el-scrollbar__bar.is-horizontal){
      height:2px;
    }

    :deep(.el-scrollbar){
      box-sizing:border-box;
      padding:0 5px;
    }
  }

  .user{
    position:relative;
    box-sizing:border-box;
    padding-right:30px;
    height:50px;
    z-index:3;
    font-size:12px;
    display:flex;
    align-items:center;
    cursor:pointer;
    margin:0 0 0 10px;

    .icon-RectangleCopy4{
      font-size:18px;
      vertical-align:bottom;
    }

    .icon-RectangleCopy14{
      transform:rotate(90deg);
      transition:all 0.2s;
      font-size:25px;
      vertical-align:bottom;
      display:inline-block;
      position:absolute;
      right:5px;
    }

    .out{
      width:100%;
      height:0;
      text-align:center;
      background:#dce8fc;
      position:absolute;
      top:50px;
      left:0;
      transition:all 0.2s;
      overflow:hidden;
      box-shadow:5px 5px 5px 0 rgba(0, 0, 0, 0.5);
      font-weight:bold;

      i{
        font-size:16px;
        font-weight:bold;
        vertical-align:bottom;
      }

      p{
        &:hover{
          color:#0a5fcd;
          cursor:pointer;

          i{
            color:#0a5fcd;
          }
        }
      }
    }

    &:hover{
      .icon-RectangleCopy14{
        display:inline-block;
        transform:rotate(180deg) !important;
      }

      .out{
        display:block;
        height:100px;
        line-height:50px;
      }
    }
  }

  .login{
    height:50px;
    line-height:50px;
    margin-right:15px !important;

    i{
      vertical-align:bottom;
    }

    a{
      color:#333;
    }
  }

  .contart{
    min-width:380px;
    background:transparent;
    margin:0;
    height:100%;
    overflow:hidden;
  }

  .time{
    :deep(.dsrBSL){
      line-height:51px;
      font-size:12px;
      margin:0 5px;
    }

    :deep(#tp-weather-widget){
      position:relative;

      img{
        height:20px;
        vertical-align:middle;
        margin:0 5px;
      }
    }
  }

  a{
    text-decoration:none;
    font-size:12px;

    &:hover{
      color:#387dff !important;
    }

    &.router-link-exact-active{
      color:#387dff !important;
      position:relative;
      transition:all 0.5s;
    }
  }

  .icon-guanbi{
    display:block;
    height:16px;
    width:16px;
    line-height:16px;
    font-weight:bold;
    text-align:center;
    border-radius:10px;
    background:rgba(10, 95, 205, 0.3);

    &:hover{
      background:rgba(10, 95, 205, 0.5);
      color:#ffffff !important;
    }
  }
}

.project-main{
  position:relative;
  width:100%;
  height:calc(100vh - 102px) !important;
}

#Fkey{
  display:none;
}

@media only screen and (min-width:703px){
  #Fkey{
    display:inline-block;
  }

  .project-main{
    height:calc(100vh - 50px) !important;
  }
}

.dark{
  .login{
    a{
      color:#ffffff;
    }
  }
}
</style>
