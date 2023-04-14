<template>
  <transition>
    <p ref="markContent"></p>
  </transition>
</template>
<script setup>
import {marked} from 'marked'
import {onMounted, ref, watch} from "vue";
import hljs from "highlight.js";

const props = defineProps({
  contents:{
    type:String,
    default:()=>''
  }
})
const markContent = ref()
watch(()=>props.contents,()=>{
  markContent.value.innerHTML= marked(props.contents);
  let blocks = markContent.value.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
onMounted(()=>{
  markContent.value.innerHTML= marked(props.contents);
  let blocks = markContent.value.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
</script>


