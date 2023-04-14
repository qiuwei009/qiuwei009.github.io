<template>
  <transition>
    <div v-show="useCommonStore().top > useCommonStore().height - 50 || route.meta['showNavs'] || useCommonStore().bottom === 0" :class="useCommonStore().top > useCommonStore().height - 50 || route.meta['showNavs'] || useCommonStore().bottom === 0?'relative':'relative h-0'" class="nav transition w-100-p z-9 overflow-h default-bg-shallow">
      <div class="show-mobile w-100-p">
        <div class="h-30 w-100-p font-w-8 flex flex-nowrap items-center" :class="route.meta['title'].includes('技术交流') ? 'justify-center' : 'justify-between'">
        <span v-show="!route.meta['title'].includes('技术交流')" class="w-50 pl-10 cursor" @click="back">
            <img alt="" class="w-10" src="../../assets/img/base/back.png"/>
        </span>
          <span>{{ route.meta['title'] }}</span>
          <span v-show="!route.meta['title'].includes('技术交流')" class="w-50 text-end pr-10">
          <span class="tomato-after cursor">信息</span>
        </span>
        </div>
      </div>
      <div class="show-pc w-100-p">
        <div class="h-50 flex justify-between items-center pr-10">
        <span class="pl-5 h-100-p flex justify-between items-center">
          <span class="font-s-20 mr-10 ml-10">qiuwei-BLOG</span>
          <router-link class="hover-tomato-bg mr-5 p-10 radius-8" to="/technology">技术交流</router-link>
          <router-link class="hover-tomato-bg mr-5 p-10 radius-8" to="/code">源码分享</router-link>
          <router-link class="hover-tomato-bg mr-5 p-10 radius-8" to="/time">时间轴</router-link>
          <router-link class="hover-tomato-bg mr-5 p-10 radius-8" to="/message">留言箱</router-link>
          <router-link class="hover-tomato-bg mr-5 p-10 radius-8" to="/self">关于本人</router-link>
        </span>
          <span>
          <span class="mr-10 relative">
            <input type="text" name="search" v-model="state.search" autofocus required=""  class="relative h-30 radius-8 indent-10"/>
            <label  class="transition absolute pb-5 font-w-6">搜索</label>
          </span>
          <span class="cursor hover-tomato-bg p-10" @click="utils.toRouter('/login')">登录</span>
          <span class="cursor hover-tomato-bg p-10" @click="useUserStore().logOut()">退出</span>
        </span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup>
import {useRoute} from "vue-router";
import {computed, reactive, ref} from "vue";
import {useUserStore} from "@/stores/user";
import utils from "@/utils/utils";
import {useCommonStore} from "@/stores/common";

const route = useRoute();

const isBack = ref(window.history.back);
const back = () => {
  if(isBack) window.history.go(-1);
};
const state = reactive({
  search:''
})
</script>

<style scoped lang="less">
input{
  &:focus+label{
    top: -1px;
    left: -30px;
  }
  &:valid+label{
    top: -1px;
    left: -30px;
  }
}
label{
  top: -1px;
  left: 10px;
}

.router-link-exact-active {
  background-color: tomato;
}
</style>

