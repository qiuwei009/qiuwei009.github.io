<template>
  <div>异步组件加载</div>
  <div v-for='item in list?.data?.data'>{{ item.code }}</div>
</template>

<script setup>

// import {axi} from './axios';
import {get} from '../utils/requestAsync';
// import {nextTick} from 'vue';
// const props = defineProps({});
// const emit = defineEmits();
// const toPromise = useScript({src: '../utils/useScript'});
// await toPromise.toPromise()
// await nextTick()
const list = await get('/dataManage/home');
// const list = await axi('/dataManage/home');
</script>

<style lang='less' scoped></style>
