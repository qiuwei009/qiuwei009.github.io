<template>
  <div :class="disabled ? 'hide-card' : ''" class='my-uploader'>
    <el-upload ref='upLoader' :auto-upload='false' :before-upload='state.handleBeforeUpload' :disabled='props.disabled' :file-list='props.fileList' :limit='limit' :on-change='state.onChange' :on-exceed='state.handleExceed' :on-preview='state.onPreview' action='' list-type='picture-card'>
      <el-icon>
        <Plus/>
      </el-icon>
    </el-upload>
    <!-- 上传提示 -->
    <div v-if='showTip' class='el-upload__tip'>
      请上传
      <template v-if='fileSize'> 大小不超过 <b style='color: #f56c6c'>{{ fileSize }}MB</b></template>
      <template v-if='fileType'> 格式为 <b style='color: #f56c6c'>{{ fileType.join('/') }}</b></template>
      的文件
    </div>
    <el-image-viewer v-if='state.showViewer' :onClose='()=>{state.showViewer = false;}' :url-list='[state.dialogImageUrl]'></el-image-viewer>
  </div>
</template>

<script setup>
import {ElMessage} from 'element-plus';

const props = defineProps({
  fileList: {type: Array, default: []},
  disabled: {type: Boolean, default: false},
  limit: {type: Number, default: 5},
  showTip: {type: Boolean, default: true},
  fileSize: {type: Number, default: 5},
  fileType: {type: Array, default: ['doc', 'xls', 'docx', 'xlsx', 'ppt', 'txt', 'pdf']}
});
const emits = defineEmits(['onChange']);
let upLoader = ref('');
const number = ref(0);
let state = reactive({
  url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  onChange(file) {
    // 校检文件类型
    if (props.fileType.length) {
      let fileExtension = '';
      if (file.name.lastIndexOf('.') > -1) {
        fileExtension = file.name.slice(file.name.lastIndexOf('.') + 1);
      }
      let obj = {
        'docx': '../assets/image/word/word.png',
        'xlsx': '../assets/image/word/xls.png',
        'doc': '../assets/image/word/word.png',
        'xls': '../assets/image/word/xls.png',
        'ppt': '../assets/image/word/ppt.png',
        'txt': '../assets/image/word/txt.png',
        'pdf': '../assets/image/word/pdf.png'
      };
      if (props.fileType.includes(fileExtension)) {
        file.url = new URL(obj[fileExtension], import.meta.url).pathname;
      }
    }
    emits('onChange', props.fileList);
  },
  dialogImageUrl: '',
  dialogVisible: false,
  onPreview(uploadFile) {
    state.dialogImageUrl = uploadFile.url;
    state.showViewer = true;
  },
  showViewer: false,
  handleExceed: () => {
    ElMessage.error(`上传文件数量不能超过 ${props.limit} 个!`);
  }
});
watch(() => props.fileList, () => {
  if (props.fileList.length > 0) {
    state.showViewer = true;
  } else {
    state.showViewer = false;
  }
});
</script>

<style lang='less' scoped>
.el-upload.el-upload--picture-card{
  display:none !important;
}


.hide-card{
  :deep(.el-upload--picture-card){ display:none; }
}
</style>
