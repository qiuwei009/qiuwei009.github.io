<template>
  <div class="w-100-p">
    <div class="w-100-p relative h-230 flex justify-center items-center">
      <div class="relative z-2 white">
        <p class="led font-s-45 pb-50 text-center">{{ state.time }}</p>
      </div>
      <div class="absolute z-1 top-0 left-0 w-100-p h-100-p banner" :class="useCommonStore().top > useCommonStore().height?'z-1':'z-10'"></div>
    </div>
    <div class="w-100-p flex justify-center flex-reverse pt-10 pb-10">
      <div class="w-240">
        <Affix :handle-top="300" :offset-top="60" class="w-240">
          <div v-animation="'card-enter'" class="card opacity-0 m-10 p-10 radius-8">
            <div class="title mb-0 label_left_bar">关于我</div>
            <div class="w-100 h-100 relative pt-30 pl-10 pr-10 radius-60 overflow-h hover-auth">
              <div class="w-100 h-100 m-auto radius-50 border grey-bg"></div>
              <img alt="" class="absolute left-20 bottom-10 transition" height="80"
                   src="../../assets/img/base/auth.png" width="76">
            </div>
          </div>
        </Affix>
        <Affix :handle-top="300" :offset-top="224" class="w-240">
          <div v-animation="'card-enter'" class="card opacity-0 m-10 p-10 radius-8">
            <div class="title label_left_bar">联系我</div>
            <p class="mt-10 flex justify-around">
              <img alt="" height="20" src="../../assets/img/base/auth.png" width="20">
              <img alt="" height="20" src="../../assets/img/base/auth.png" width="20">
              <img alt="" height="20" src="../../assets/img/base/auth.png" width="20">
              <img alt="" height="20" src="../../assets/img/base/auth.png" width="20">
            </p>
          </div>
        </Affix>
        <Affix :handle-top="300" :offset-top="308" class="w-240">
          <div v-animation="'card-enter'" class="card opacity-0 m-10 p-10 radius-8">
            <div class="title mb-0 label_left_bar">目录</div>
            <ul class="indent-10">
              <li class="cursor" v-for="(row,index) in state.technology.records" :key="`a-${index}`"
                  @click="state.jump(`#time-${index}`)">{{ row.id }}、{{ row.title }}
              </li>
            </ul>
          </div>
        </Affix>
        <Affix :handle-top="300" :offset-top="state.technology.records.length * 20 +50 + 214 + 92" class="w-240">
          <div v-animation="'card-enter'" class="card opacity-0 m-10 p-10 radius-8">
            <div class="title mb-0 label_left_bar">文章分类</div>
            <ul class="indent-10">
              <li class="cursor" v-for="(row,index) in state.technology.records" :key="`a-${index}`"
                  @click="state.jump(`#time-${index}`)">{{ row.id }}、{{ row.title }}
              </li>
            </ul>
          </div>
        </Affix>
      </div>
      <div class="main col-16 overflow-h">
        <main class="pl-20">
          <div v-for="(row,index) in state.technology.records" :id="`time-${index}`"
               :key="`c-${index}`" v-animation="'card-enter123 animate__animated animate__backInUp'" class="card opacity-0 m-10 p-10 radius-8 line-25 line-after">
            <p class="title mb-10">{{ row.createTime }}</p>
            <p class="tabs indent-10 clear-both">
              <span class="tomato-after fl">
                {{ row.title }}
              </span>
              <span class="fr">
                {{ row.tabs }}
              </span>
            </p>
<!--            <Editor v-model="row.contents" :previewOnly="true"></Editor>-->
            <p v-markdown="row.contents" :class="{'omit-4':!row.omit}" class="indent-10"></p>
            <div class="clear-both">
              <p class="more-contents fr cursor" @click="row.omit = !row.omit">更多</p>
            </div>
          </div>
        </main>
        <Pagination class="p-10" :total="Number(state.technology.total)" @handleChange="state.handlePage"></Pagination>
        <div class="relative discuss-box">
          <div class="title label_left_bar mb-10 absolute discuss-title top-5 left-10 z-3">评论</div>
          <Editor class="discuss m-10 mb-0" v-model="state.contents" :toolbarsExclude="[
            'bold',
            'underline',
            'italic',
            'strikeThrough',
            '-',
            'title',
            'sub',
            'sup',
            'quote',
            'unorderedList',
            'orderedList',
            'task',
            '-',
            'codeRow',
            'code',
            'link',
            'image',
            'table',
            'mermaid',
            'katex',
            '-',
            'revoke',
            'next',
            'save',
            '=',
            'prettier',
            'pageFullscreen',
            'fullscreen',
            'preview',
            'htmlPreview',
            'catalog',
            'github'
        ]"></Editor>
        </div>
        <p class="clear-both p-10">
          <a-button type="primary" class="fr pl-10 pr-10">Primary</a-button>
        </p>
      </div>
      <div class="w-240 flex justify-end">
        <Affix :handle-top="300" :offset-top="60" class="w-240">
          <div v-animation="'card-enter'" class="card opacity-0 m-10 p-10 radius-8">
            <div class="title mb-0 label_left_bar">日历</div>
            <Calendar></Calendar>
          </div>
        </Affix>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, reactive} from 'vue';
import {useCommonStore} from "@/stores/common";
import utils from "@/utils/utils";
import dayjs from "dayjs";

let date = null
const state = reactive({
  time: dayjs().format('YYYY年MM月DD日 hh时mm分ss秒'),
  technology: {
    "records": [],
    "total": 1,
    "size": 40,
    "current": 1,
    "orders": [],
    "optimizeCountSql": true,
    "hitCount": false,
    "countId": null,
    "maxLimit": null,
    "searchCount": true,
    "pages": 1
  },
  async getTechnology() {
    let {code, data} = await utils.get('/technology/page', {page: state.technology.current, pageSize: state.technology.size})
    if (code) {
      state.technology = data
    }
  },
  handlePage(val){
    console.log(val,'val')
  },
  jump(id) {
    const jump = document.querySelector(id);
    jump.scrollIntoView();
  }
})

onMounted(() => {
  state.getTechnology()
  date = setInterval(() => {
    state.time = dayjs().format('YYYY年MM月DD日 hh时mm分ss秒')
  }, 1000)
})

onBeforeUnmount(() => {
  if (date) clearInterval(date)
})
</script>

<style lang="less" scoped>
.h-230{
  height: 230px;
  overflow: hidden;
}

.banner {
  background: url("../../assets/img/base/login3.jpg") no-repeat center;
  background-size: 100vw 100vh;
}

.more {
  padding: 20px;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, 0);
  animation: loop 2s linear infinite;
  @keyframes loop {
    0% {
      bottom: 20px;
    }
    50% {
      bottom: 50px;
    }
    100% {
      bottom: 20px;
    }
  }

  img {
    transform: rotate(-90deg);
  }
}

.hover-auth {
  margin: -20px auto 0;
  overflow: hidden;
  box-sizing: content-box;

  &:hover img {
    transform: scale(1.5);
  }
}

.main {
  width: 100%;
  max-width: 1200px;
}

.w-240 {
  width: 100%;
}

@media only screen and (min-width: 720px) {
  .main {
    width: 1200px;
  }

  .w-240 {
    width: 240px;
  }
}
.discuss-box{
  .discuss{
    height: 200px;
    width: calc(100% - 20px);
  }
  .discuss-title{
    position: absolute !important;
  }
  :deep(#md-editor-v3-preview-wrapper){
    display: none;
  }
  :deep(.md-editor-footer-right){
    display: none;
  }
}


.line-after {
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: -20px;
    top: 22px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #13ce66;
    transform: translate(0, -50%);
  }

  &:after {
    content: '';
    position: absolute;
    left: -15px;
    top: 32px;
    width: 1px;
    height: calc(100% - 10px);
    background-color: #13ce66;
  }

  &:last-child {
    &:after {
      display: none;
    }
  }
}
</style>


