<template>
  <div :class="info.name, info.show?'animate__fadeIn PopupActive':'animate__backOutDown'" class='Popup  animate__animated ' @click='state.hide'>
    <div :class="info.show ? state.inStyle[Math.floor(Math.random()*4)]:'animate__backOutDown'" :style="{'--width':info.w}" class='Popup-content animate__animated darkcolor' @click.stop=''>
      <div class='Pop-title flex just-b align-c'>
        <slot name='title'></slot>
        <div class='flex just-c align-c'><i class='iconfont icon-guanbi hide' @click='state.hide'></i></div>
      </div>
      <div class='Popup-text'>
        <el-scrollbar ref='scrollbar' :native='false' :noresize='false' class='Popup-item' view-style='height:100%'>
          <slot name='main'></slot>
        </el-scrollbar>
      </div>
      <div class='pop-page Popup-item'>
        <span class='cancel_btn cursor' @click='state.hide'>取消</span>
        <slot name='page'></slot>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  info: {
    type: Object,
    default: () => {
      return {
        show: false,
        name: 'pop',
        w: '1000px'
      };
    }
  }
});
const emit = defineEmits();
const state = reactive({
  scrollbarTop(value) {
    $(`.${props.info.name} .el-scrollbar__wrap`).animate({scrollTop: value}, 200);
  },
  hide() {
    this.scrollbarTop(0);
    emit('hide', false);
  },
  inStyle: [
    'animate__bounceInDown',
    'animate__bounceInUp',
    'animate__fadeInUp',
    'animate__slideInRight'

    // "animate__backInDown",
    // "animate__backInRight",
    // "animate__backInUp",

    // "animate__bounceInLeft",
    // "animate__bounceInRight",

    // "animate__lightSpeedInRight",
    // "animate__lightSpeedInLeft",
    // "animate__rotateInDownLeft",
    // "animate__rotateInDownRight",
    // "animate__jackInTheBox",
    // "animate__zoomInDown",
    // "animate__zoomInUp",
    // "animate__rotateInUpLeft",
  ]
});

watch(() => props.info, (newValue) => {
  if (!newValue) {
    $('.Popup').fadeOut(200);
  } else {
    $('.Popup').fadeIn(200);
  }
}, {
  deep: true
});
</script>

<style lang='less' scoped>
.Popup{
  display:none;
  position:absolute;
  top:0;
  right:-110%;
  width:100%;
  height:100%;
  transition:all 0.4s;
  z-index:997;

  :deep(*){
    color:#9495a9;
  }

  .Popup-content{
    position:absolute;
    top:0;
    right:0;
    height:100%;
    width:100%;
    box-shadow:0 0 5px 5px rgba(0, 0, 0, 0.1);

    .Pop-title{
      width:100%;
      height:50px;
      line-height:50px;
      padding:0 10px;
      box-sizing:border-box;
      font-size:16px;
      border-bottom:1px dashed #ccc;
      background:#F4F8FF;

      .hide{
        transition:all 0.5s;
        font-size:25px;
        cursor:pointer;
      }
    }

    .Popup-text{
      height:calc(100% - 90px);
    }

    .Popup-item{
      //background: rgba(255, 255, 255, 0.7);
      background:#F4F8FF;
    }

    .pop-page{
      width:100%;
      height:40px;
      text-align:right;
      padding:0 20px;
      box-sizing:border-box;
      background:#edf1f7;
      display:flex;
      justify-content:flex-end;
      align-items:center;
    }
  }
}

:deep(.Popup-text>.el-scrollbar){
  box-sizing:border-box;
  padding:10px 10px;
  height:100%;
}

.PopupActive{
  right:0 !important;
}

@media only screen and (min-width:1000px){
  .Popup-content{
    top:1px;
    right:1px;
    width:var(--width) !important;
  }
}

.animate__backOutDown{
  animation:show 2s ease;
}

.dark{
  .Popup{

    .Pop-title{
      background:@themeNightDeep !important;
      border-bottom:1px dashed #727385 !important;
    }

    .Popup-item{
      background:@themeNightDeep !important;
    }

    .pop-page{
      background:@themeNightDeep !important;
    }
  }
}
</style>
