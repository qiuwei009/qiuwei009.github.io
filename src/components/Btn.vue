<template>
  <span :class="state.info.class,!state.list.includes(state.info.id)?'disable':''" :title='state.info.title' class='flex just-c align-c cursor nowrap' @click='state.handleClick'>
    <span class='omit'>{{ state.info.name }}</span>
    <i :class='state.info.icon' class='iconfont'></i>
  </span>
</template>

<script setup>

const props = defineProps({
  info: {
    type: Object,
    default: () => {
      return {
        id: 1,
        name: '默认按钮',
        type: 'add',
        class: 'Btn',
        icon: '',
        title: ''
      };
    }
  }
});
const emit = defineEmits();
const state = reactive({
  list: [1, 2, 3],
  info: props.info,
  handleClick(e) {
    if (!state.list.includes(state.info.id)) {
      $(e.target).addClass('animate__animated animate__jello');
      setTimeout(() => {
        $(e.target).removeClass('animate__animated animate__jello');
      }, 500);
      // ElMessage.error('暂无权限')
      return;
    }
    emit('handleClick', state.info);
  }
});

watch(props, () => {
  state.info = props.info;
});
</script>

<style lang='less' scoped>
.Btn{
  position:relative;
  height:30px;
  line-height:30px;
  padding:0 10px;
  border-radius:0;
  //background-image: linear-gradient(to right, #387DFF, #6d68ff);
  background:#0067ee;
  cursor:pointer;
  color:#FFFFFF;
  margin:0 5px;
  border:none;
  opacity:0.7;

  &:hover{
    opacity:1;
  }

  span{
    font-size:12px;
    display:inline-block;
    width:100%;
    color:#FFFFFF !important;
  }

  i{
    color:#FFFFFF;
    vertical-align:middle;
    font-size:18px;
  }
}

.disable{
  background:rgba(204, 204, 204, 0.4);
  color:#FFFFFF;
  cursor:not-allowed;
  //&:hover {
  //  &:before {
  //    content: '';
  //    position: absolute;
  //    top: 20px;
  //    left: 50%;
  //    transform: translate(-50%, 0);
  //    z-index: 9999;
  //    border-top: 10px solid transparent;
  //    border-bottom: 10px solid red;
  //    border-left: 10px solid transparent;
  //    border-right: 10px solid transparent;
  //    width: 0;
  //    height: 0;
  //  }
  //
  //  &:after {
  //    content: '暂无权限';
  //    position: absolute;
  //    top: 40px;
  //    left: 45%;
  //    transform: translate(-50%, 0);
  //    z-index: 9999;
  //    background-image: linear-gradient(to right, pink, #6d68ff);
  //    cursor: pointer;
  //    color: #FFFFFF;
  //    margin: 0 5px;
  //    border-radius: 5px;
  //    width: 100%;
  //    height: 32px;
  //    line-height: 32px;
  //  }
  //}
}
</style>
