<template>
  <md-editor v-model="state.contents" :toolbarsExclude="toolbarsExclude" :theme="useCommonStore().theme?'dark':''" :previewOnly="previewOnly"/>
</template>

<script setup>
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import {onMounted, reactive, watch} from "vue";
import {useCommonStore} from "@/stores/common";
const props = defineProps({
  modalValue:{
    type: String,
    default:''
  },
  previewOnly:{
    type: Boolean,
    default: false
  },
  toolbarsExclude:{
    type: Array,
    default: ['github']
  }
})

const emit =defineEmits(['update:modalValue'])

const state = reactive({
  contents:'',
  toobars: ['bold', 'underline', 'italic', 'strikeThrough',
    'sub','sup','quote','unorderedList', 'orderedList', 'codeRow',
    'code', 'link', 'image', 'table', 'revoke',
    'next', 'save', 'pageFullscreen', 'fullscreen',
    'preview', 'htmlPreview','github','watch'],
})
watch(() => props.modalValue,() => {
  state.contents = props.modalValue
})
watch(() => state.contents,() => {
  emit('update:modalValue',state.contents)
})
onMounted(()=>{
  state.contents = props.modalValue
})
</script>