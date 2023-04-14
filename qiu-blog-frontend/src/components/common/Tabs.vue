<template>
  <div class="tabs overflow-h default-bg-shallow">
    <div class="show-mobile w-100-p">
      <div class="flex">
        <router-link class="w-20-p h-50 text-center pt-3" to="/technology">
          <img alt="" class="active m-auto" src="../../assets/img/svg/home.svg"/>
          <img alt="" class="active2 m-auto" src="../../assets/img/svg/home-no.svg"/>
          <span class="block omit">technology</span>
        </router-link>
        <router-link class="w-20-p h-50 text-center pt-3" to="/code">
          <img alt="" class="active m-auto" src="../../assets/img/svg/forecast.svg"/>
          <img alt="" class="active2 m-auto" src="../../assets/img/svg/forecast-no.svg"/>
          <span class="block omit">code</span>
        </router-link>
        <router-link class="w-20-p h-50 text-center pt-3" to="/time">
          <img alt="" class="active m-auto" src="../../assets/img/svg/city.svg"/>
          <img alt="" class="active2 m-auto" src="../../assets/img/svg/city-no.svg"/>
          <span class="block omit">time</span>
        </router-link>
        <router-link class="w-20-p h-50 text-center pt-3" to="/message">
          <img alt="" class="active m-auto" src="../../assets/img/svg/city.svg"/>
          <img alt="" class="active2 m-auto" src="../../assets/img/svg/city-no.svg"/>
          <span class="block omit">message</span>
        </router-link>
        <router-link class="w-20-p h-50 text-center pt-3" to="/self">
          <img alt="" class="active m-auto" src="../../assets/img/svg/city.svg"/>
          <img alt="" class="active2 m-auto" src="../../assets/img/svg/city-no.svg"/>
          <span class="block omit">me</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style lang="less" scoped>
.tabs {
  .active {
    display: none;
  }

  .active2 {
    display: block;
  }

  .router-link-exact-active {
    .active {
      display: block;
    }

    .active2 {
      display: none;
    }
  }
}
</style>
