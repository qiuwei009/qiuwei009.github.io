<template>
  <!--  <transition name="animate__backInUp">-->
  <div v-show='state.info.show' :class="state.info.name, state.info.show?'animate__fadeIn':'animate__backOutDown'" class='PopupCopy flex just-c align-c animate__animated ' @click='state.hide'>
    <div :class="state.info.show?state.inStyle[Math.floor(Math.random()*20)]:'animate__backOutDown'" :style='`width:${state.info.w};`' class='Popup-content animate__animated' @click.stop=''>
      <div class='Pop-title flex just-b'>
        <slot name='title'></slot>
        <div class='flex just-c align-c'><i class='iconfont icon-guanbi hide' @click='state.hide'></i></div>
      </div>
      <el-scrollbar ref='scrollbar' :native='false' :noresize='false' class='Popup-item' max-height='calc(100vh - 120px)'>
        <slot name='main'></slot>
      </el-scrollbar>
      <div class='pop-page Popup-item'>
        <slot name='page'></slot>
      </div>
      <!--      <div class="leftWTop"></div>-->
      <!--      <div class="rightWTop"></div>-->
      <!--      <div class="rightWBottom"></div>-->
      <!--      <div class="leftWBottom"></div>-->
    </div>
  </div>
  <!--  </transition>-->
</template>

<script setup>

const props = defineProps({
  info: {
    type: Object,
    default: () => {
      return {
        show: true,
        name: 'pop',
        w: '1000px'
      };
    }
  }
});
const emit = defineEmits();
const state = reactive({
  info: props.info,
  scrollbarTop(value) {
    $(`.${state.info.name} .el-scrollbar__wrap`).animate({
      'scrollTop': value
    }, 200);
  },
  hide() {
    this.scrollbarTop(0);
    emit('hide', false);
  },
  inStyle: [
    'animate__backInDown',
    'animate__backInRight',
    'animate__backInUp',
    'animate__bounceInDown',
    'animate__bounceInLeft',
    'animate__bounceInRight',
    'animate__bounceInUp',
    'animate__fadeInUp',
    'animate__flipInX',
    'animate__flipInY',
    'animate__lightSpeedInRight',
    'animate__lightSpeedInLeft',
    'animate__rotateInDownLeft',
    'animate__rotateInDownRight',
    'animate__rollIn',
    'animate__jackInTheBox',
    'animate__zoomInDown',
    'animate__slideInRight',
    'animate__zoomInUp',
    'animate__rotateInUpLeft'
  ]

});

</script>

<style lang='less' scoped>
.PopupCopy{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0, 0, 0, 0.5);
  z-index:9;


  .Popup-content{

    border-radius:2px;
    box-shadow:5px 5px 12px 0 rgba(0, 0, 0, 0.5);
    overflow:hidden;

    .Popup-item{
      background:rgba(255, 255, 255, 0.7);
    }

    .leftWTop{
      position:absolute;
      top:-2px;
      left:-2px;
      width:205px;
      height:126px;
      background-position:-909px -60px;
      z-index:-1;
      border:none;
    }

    .leftWBottom{
      position:absolute;
      bottom:-2px;
      left:-2px;
      width:205px;
      height:126px;
      //border-bottom: 3px solid rgba(0, 0, 0, .5);
      //border-left: 3px solid rgba(0, 0, 0, .5);
      background-position:-910px -180px;
      z-index:-1;
      border:none;
    }

    .rightWTop{
      position:absolute;
      top:-2px;
      right:-2px;
      width:205px;
      height:126px;
      //border-top: 3px solid rgba(0, 0, 0, 0.5);
      //border-right: 3px solid rgba(0, 0, 0, 0.5);
      background-position:-1106px -60px;
      z-index:-1;
      border:none;
    }

    .rightWBottom{
      position:absolute;
      bottom:-2px;
      right:-2px;
      width:205px;
      height:126px;
      //border-bottom: 3px solid rgba(0, 0, 0, .5);
      //border-right: 3px solid rgba(0, 0, 0, .5);
      background-position:-1108px -180px;
      z-index:-1;
      border:none;
    }

    .Pop-title{
      width:100%;
      height:50px;
      line-height:50px;
      box-sizing:border-box;
      padding:0 10px 0 30px;
      background-image:linear-gradient(to right, #2e3141, transparent);
      //background: #2e3141;
      font-size:16px;
      color:#ffffff;
      //border-bottom: 3px solid rgb(62, 153, 196);
      border-left:none;
      border-right:none;
      border-top:none;

      .hide{
        transition:all .5s;
        font-size:25px;
        cursor:pointer;
        color:#ccc;
      }

      &:after{
        content:' ';
        position:absolute;
        left:10px;
        top:15px;
        width:5px;
        height:20px;
        background-color:#ccc;
      }
    }

    .pop-page{
      line-height:50px;
      text-align:right;
      padding:0 20px;
      box-sizing:border-box;
    }
  }

  .Popup-content{
    width:100% !important;
  }

  @media only screen and (min-width:703px){
    .Popup{
      display:flex;
      justify-content:center;
      align-items:center;
    }

    .Popup-content{

      width:50% !important;
    }
  }
}

.animate__backOutDown{
  animation:show 2s ease;
}
</style>
