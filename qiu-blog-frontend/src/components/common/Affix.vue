<template>
  <div :class="useCommonStore().top > props.handleTop?'fixed-card':''" :style="{top:props.offsetTop+'px'}">
    <slot></slot>
  </div>
</template>

<script setup>
import {useCommonStore} from "@/stores/common";

const props = defineProps({
  // 距离Top的距离
  handleTop: {
    type: Number,
    default: 100,
  },
  offsetTop: {
    type: Number,
    default: 0,
  },
  // 距离Left的距离
  offsetLeft: {
    type: Number,
    default: 0,
  },
})
</script>
