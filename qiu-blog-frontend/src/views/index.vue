<script setup>
import {RouterView} from "vue-router";
import {useCommonStore} from "@/stores/common";
import {onMounted} from "vue";

onMounted(()=>{
  useCommonStore().openScrollEvent()
})
</script>

<template>
  <div class="w-100-p h-100-p flex flex-col">
    <router-view v-slot="{Component, route}">
      <navs></navs>
      <div class="col-auto relative overflow-y-auto flex " id="container">

        <transition :name="route.meta.animate">
          <component :is="Component"/>
        </transition>
        <span v-show="useCommonStore().isScroll && useCommonStore().bottom <= 300 " class="fixed back-top cursor" @click.stop="useCommonStore().setScroll(0)">
          <img src="../assets/img/base/left.png" alt="">
        </span>
      </div>
      <tabs v-show="route.meta.showTabs"></tabs>
    </router-view>
  </div>
</template>


<style lang="less" scoped>
.back-top{
  padding: 20px;
  right: 20px;
  bottom: 20px;
  transform: translate(-50%,0);
  animation: loop 2s linear  infinite;
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
  img{
    transform: rotate(90deg);
  }
  }
#container{
  scroll-behavior:smooth;
}
</style>
