<template>
  <div class='webCatalogue'>
    <div id='webCatalogue' class='col-10'>
      <div className='main-content flex align-c'>
        <div v-for='(i,index) in state.list.rows' :class="index < state.showTotal?'animate__fadeInUp':''" class='card main-item animated animate__animated' @click='state.show(i)'>
          <p class='title' @click='state.show(i)'>{{ i.title }}</p>
          <p class='author'>{{ i.author }}</p>
          <p class='introduction omit4'>{{ i.introduction }}{{ i.introduction }}{{ i.introduction }}{{
              i.introduction
            }}{{ i.introduction }}</p>
        </div>
        <div class='card main-item'>
          上一页 </div>
        <div class='card main-item'>
          下一页 </div>
        <div style='clear:both'></div>
      </div>
    </div>
    <popup :info='state.info' @hide='state.hide()'>
      <template v-slot:title>
        <span class='select condition'>{{ state.info.title }}</span>
      </template>
      <template v-slot:main>
        <div class='text'>
          {{ state.info.text }} </div>
      </template>
      <template v-slot:page></template>
    </popup>
  </div>
</template>

<script name='/webCatalogue' setup>

import {get} from '~/utils/request';

const state = reactive({
  showTotal: 0,
  list: {
    name: 'roleList',
    header: [
      {name: '书名', width: '200px', key: 'title', color: '#9495a9'},
      {name: '作者', width: '100px', key: 'author', color: '#9495a9'},
      {name: '书目编码', width: '100px', key: 'code', color: '#9495a9'},
      {name: '简介', width: '500px', key: 'introduction', color: '#9495a9'}
    ],
    rows: [],
    page: 1,
    size: 20,
    total: 1,
    currentPage: 1,
    active: 0,
    select: {
      open: false, // 是否开启多项选中
      selectAll: false, // 是否全选
      id: '', // 选择字段
      selectId: [] // 选中ID
    }
  },
  async getList(type) {
    if (type === 'search') {
      this.list.page = 1;
    }
    let res = await get('/dataManage/catalogue', {
      page: this.list.page,
      size: this.list.size
    });
    if (res.status) {
      this.list.rows = res.data.data;
      this.list.total = res.data.total;
      state.showTotal = window.document.body.clientWidth / 40;
      state.removeEvent();
      state.addEvent();
    }
  },
  animateScroll() {
    let scrollElements = document.querySelectorAll('.animated'),
        he = window.document.getElementById('webCatalogue').clientWidth + 100;
    scrollElements.forEach(e => {
      if (e.getBoundingClientRect().left < he) {
        e.classList.add('animate__fadeInUp');
      } else {
        e.classList.remove('animate__fadeInUp');
      }
    });
  },
  info: {
    show: false,
    name: 'textInfo',
    w: '50%',
    title: '详情',
    text: ''
  },
  show(i) {
    state.info.show = true;
    state.info.title = i.title;
    state.info.text = i.introduction;
  },
  hide() {
    state.info.show = false;
  },
  left: 0,
  scrollFunc(e) {
    e = e || window.event;
    if (e.wheelDelta) {
      //判断浏览器IE，谷歌滑轮事件
      if (e.wheelDelta > 0) {
        //当滑轮向上滚动时
        if (state.left > 0) state.left -= 50;
        $('#webCatalogue').animate({'scrollLeft': state.left}, 20);
      }
      if (e.wheelDelta < 0) {
        //当滑轮向下滚动时
        if (state.left < state.list.rows.length * 40) state.left += 50;
        $('#webCatalogue').animate({'scrollLeft': state.left}, 20);
      }
    } else if (e.detail) {
      //Firefox滑轮事件
      if (e.detail > 0) {
        //当滑轮向上滚动时
        if (state.left > 0) state.left -= 50;
        $('#webCatalogue').animate({'scrollLeft': state.left}, 20);
      }
      if (e.detail < 0) {
        //当滑轮向下滚动时
        if (state.left < state.list.rows.length * 40) state.left += 50;
        $('#webCatalogue').animate({'scrollLeft': state.left}, 20);
      }
    }
  },
  addEvent() {
    const dom = document.getElementById('webCatalogue');
    if (dom.addEventListener) {
      //火狐使用DOMMouseScroll绑定
      dom.addEventListener('DOMMouseScroll', state.scrollFunc, true);
    }
    //其他浏览器直接绑定滚动事件
    dom.onmousewheel = state.scrollFunc;
  },
  removeEvent() {
    const dom = document.getElementById('webCatalogue');
    if (dom.addEventListener) {
      //火狐使用DOMMouseScroll绑定
      dom.removeEventListener('DOMMouseScroll', state.scrollFunc, true);
    }
    dom.onmousewheel = null;
  }
});
onMounted(() => {
  state.getList(null);
  document.getElementById('webCatalogue').addEventListener('scroll', (e) => {
    state.animateScroll();
  });
});

</script>

<style lang='less' scoped>
.webCatalogue{
  width:100%;
  height:100%;
  background:url('../../../assets/image/webPagesImage/99230581_p0.png') no-repeat;
  background-size:cover;

  #webCatalogue{
    position:relative;
    z-index:9;
    height:calc(100% - 10px);
    margin:0 auto;
    overflow-x:auto !important;
    overflow-y:hidden !important;
    content-visibility:auto;

    .main-content{
      height:100%;
      padding:10px;
      box-sizing:border-box;

      .main-item{
        flex-shrink:0;
        width:40px;
        margin:10px;
        padding:10px;
        box-sizing:border-box;
        border-radius:10px;
      }

      .animated{
        opacity:0;
      }

      .animate__fadeInUp{
        opacity:1;
      }

      .title{
        cursor:pointer;
        font-size:20px;
        font-weight:600;
      }

      .author{
        margin:10px 0;
      }

      .introduction{
        text-indent:28px;
        font-weight:bold;
      }
    }
  }

  .text{
    content-visibility:auto;
  }
}
</style>