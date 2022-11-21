<template>
  <div class='flex just-c align-c' style='width: 100%;height: 100%;'>
    <img alt='' class='logo' src='../../../../assets/svg/404.svg' style='width: 50%;height: 50%;'>
  </div>
</template>

<script setup>
import {useStore} from '~/pinia/useStore';
const store = useStore();
store.setLoading(false);
</script>

<style lang='less'>

</style>