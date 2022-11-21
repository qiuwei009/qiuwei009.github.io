<template>
  <div>
    <Toolbar :defaultConfig='toolbarConfig' :editor='editorRef' :mode='mode'/>
    <Editor v-model='valueHtml' :defaultConfig='editorConfig' :mode='mode' style='height: 400px; overflow-y: hidden;' @customAlert='customAlert' @customPaste='customPaste' @onBlur='handleBlur' @onChange='handleChange' @onCreated='handleCreated' @onDestroyed='handleDestroyed' @onFocus='handleFocus'/>
    <!--    <div style='margin-top: 10px;' >-->
    <!--      <textarea v-model='valueHtml' readonly style='width: 100%; height: 200px; outline: none;' ></textarea >-->
    <!--    </div >-->
  </div>
</template>

<script setup>

const mode = 'default';
const props = defineProps({
  text: {
    type: String,
    default: () => {
      return '<p>hrool123123123</p>';
    }
  }
});
// 编辑器实例，必须用 shallowRef，重要！
const editorRef = shallowRef();
// 内容 HTML
const valueHtml = ref('<p>hello</p>');
// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    // valueHtml.value = props.value;
  }, 1500);
});
const toolbarConfig = {};
const editorConfig = {
  MENU_CONF: {},
  placeholder: '请输入内容...'
};
editorConfig.MENU_CONF['uploadImage'] = {
  server: 'http://47.108.76.236:13001/gov2/common/upload',
  // form-data fieldName ，默认值 'wangeditor-uploaded-image'
  fieldName: 'files',

  // 单个文件的最大体积限制，默认为 2M
  maxFileSize: 1 * 1024 * 1024, // 1M

  // 最多可上传几个文件，默认为 100
  maxNumberOfFiles: 10,

  // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
  allowedFileTypes: ['image/*'],

  // 自定义上传参数，例如传递验证的 token 等。参数会被添加到 formData 中，一起上传到服务端。
  meta: {
    token: 'xxx',
    otherKey: 'yyy'
  },

  // 将 meta 拼接到 url 参数中，默认 false
  metaWithUrl: false,

  // 自定义增加 http  header
  headers: {
    Accept: 'text/x-json',
    otherKey: 'xxx'
  },

  // 跨域是否传递 cookie ，默认为 false
  withCredentials: true,

  // 超时时间，默认为 10 秒
  timeout: 5 * 1000, // 5 秒

  // 上传之前触发
  onBeforeUpload(file) {    // JS 语法
    // file 选中的文件，格式如 { key: file }
    return file;

    // 可以 return
    // 1. return file 或者 new 一个 file ，接下来将上传
    // 2. return false ，不上传这个 file
  },

  // 上传进度的回调函数
  onProgress(progress) {       // JS 语法
    // progress 是 0-100 的数字
    console.log('progress', progress);
  },

  // 单个文件上传成功之后
  onSuccess(file, res) {          // JS 语法
    console.log(`${file.name} 上传成功`, res);
  },

  // 单个文件上传失败
  onFailed(file, res) {           // JS 语法
    console.log(`${file.name} 上传失败`, res);
  },

  // 上传错误，或者触发 timeout 超时
  onError(file, err, res) {               // JS 语法
    console.log(`${file.name} 上传出错`, err, res);
  },
  // 自定义插入图片
  customInsert(res, insertFn) {                  // JS 语法
    // res 即服务端的返回结果
    // 从 res 中找到 url alt href ，然后插图图片
    insertFn(url, alt, href);
  },
  async customUpload(file, insertFn) {                   // JS 语法
    // file 即选中的文件
    // 自己实现上传，并得到图片 url alt href
    let url = 'http://203.57.238.132:9000/aipicture/oTvUqu16507746625280.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220808%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220808T065854Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=05f24cb398363fb05dba003fb8c6ebd5fe6c3f854db2a412fb44c5d7bfee6781',
        alt = '111',
        href = 'http://203.57.238.132:9000/aipicture/oTvUqu16507746625280.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20220808%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220808T065854Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=05f24cb398363fb05dba003fb8c6ebd5fe6c3f854db2a412fb44c5d7bfee6781';
    // 最后插入图片
    insertFn(url, alt, href);
  }
};
// 组件销毁时，也及时销毁编辑器，重要！
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});
// 编辑器回调函数
const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
const handleChange = (editor) => {
  console.log('change:', editor.getHtml());
};
const handleDestroyed = (editor) => {
  console.log('destroyed', editor);
};
const handleFocus = (editor) => {
  console.log('focus', editor);
};
const handleBlur = (editor) => {
  console.log('blur', editor);
};
const customAlert = (info, type) => {
  alert(`【自定义提示】${type} - ${info}`);
};
const customPaste = (editor, event, callback) => {
  console.log('ClipboardEvent 粘贴事件对象', event);

  // 自定义插入内容
  // editor.insertText('xxx')

  // 返回值（注意，vue 事件的返回值，不能用 return）
  // callback(false) // 返回 false ，阻止默认粘贴行为
  callback(true); // 返回 true ，继续默认的粘贴行为
};
const insertText = () => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.insertText('hello world');
};
const printHtml = () => {
  const editor = editorRef.value;
  if (editor == null) return;
  console.log(editor.getHtml());
};
const disable = () => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.disable();
};
watch(props, (n) => {
  valueHtml.value = props.text;
});
</script>

<script>
import {Editor, Toolbar} from '@wangeditor/editor-for-vue';
import '@wangeditor/editor/dist/css/style.css';

export default {
  components: {Editor, Toolbar}
};
</script>

<style lang='less'>
html.dark{
  // textarea - css vars
  --w-e-textarea-bg-color:@themeNight;
  --w-e-textarea-color:#fff;
  --w-e-textarea-border-color:@themeNight;
  --w-e-textarea-slight-border-color:@themeNight;
  --w-e-textarea-slight-color:#fff;
  --w-e-textarea-slight-bg-color:@themeNight;
  --w-e-textarea-selected-border-color:@themeNight; // 选中的元素，如选中了分割线
  --w-e-textarea-handler-bg-color:@themeNight; // 工具，如图片拖拽按钮

  // toolbar - css vars
  --w-e-toolbar-color:#ccc;
  --w-e-toolbar-bg-color:@themeNight;
  --w-e-toolbar-active-color:#fff;
  --w-e-toolbar-active-bg-color:@themeNight;
  --w-e-toolbar-disabled-color:#ccc;
  --w-e-toolbar-border-color:@themeNight;

  // modal - css vars
  --w-e-modal-button-bg-color:@themeNight;
  --w-e-modal-button-border-color:@themeNight;

  color:#ccc;
  background:@themeNight;
}
</style>
