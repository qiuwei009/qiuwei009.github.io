<template>
  <div class='webWord'>
    <div id='webWord'>
      <div class='main-content col-9'>
        <div v-for='(i,index) in state.list.rows' :class="index < 10?'animate__fadeInUp':''" class='card main-item animated animate__animated'>
          <p class='title' @click='state.show(i)'>{{ i.title }}</p>
          <p class='author'>{{ i.author }}</p>
          <p class='introduction omit4'>{{ i.introduction }}</p>
        </div>
        <div class='card main-item flex just-c align-c'>
          技术支持: @qiuwei </div>
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

<script name='/webWord' setup>

import {get} from '~/utils/request';

let last = new Date();

const state = reactive({
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
    let res = await get('/dataManage/word', {
      page: this.list.page,
      size: this.list.size
    });
    if (res.status) {
      this.list.rows = res.data.data;
      this.list.total = res.data.total;
    }
  },
  animateScroll() {
    let scrollElements = document.querySelectorAll('.animated'),
        he = window.document.body.clientHeight + 100;
    scrollElements.forEach(e => {
      if (e.getBoundingClientRect().top < he) {
        e.classList.add('animate__fadeInUp');
      } else {
        e.classList.remove('animate__fadeInUp');
      }
    });
    let now = new Date().getTime();
    if (now - last > 10 || now - last === 0) {
      last = new Date().getTime();

    }
  },
  info: {
    show: false,
    name: 'textInfo',
    w: '100%',
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
  }
});
onMounted(() => {
  state.getList(null);
  document.getElementById('webWord').addEventListener('scroll', (e) => {
    state.animateScroll();
  });
});

</script>

<style lang='less' scoped>
.webWord{
  width:100%;
  height:100%;
  background:url('../../../assets/image/webPagesImage/99286125_p0.jpg') no-repeat;
  background-size:cover;

  #webWord{
    position:relative;
    z-index:9;
    width:100%;
    height:100%;
    overflow-y:auto !important;
    content-visibility:auto;

    .main-content{
      height:auto !important;
      margin:0 auto;
      padding:1px 0;
      background:rgba(0, 0, 0, 0.3);

      .main-item{
        width:calc(100% - 20px);
        height:200px;
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