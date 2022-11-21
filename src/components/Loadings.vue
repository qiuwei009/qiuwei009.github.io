<script setup>

const props = defineProps({
  show: Boolean
});
const isLoading = ref(props.show);
watch(
    () => props.show,
    (n) => {
      if (n) $('.box').fadeIn(300);
      else $('.box').fadeOut(300);
      // if (n) isLoading.value = true
      // else isLoading.value = false
    }
);
</script>

<template>
  <!--  <transition name="fade">-->
  <div class='box'>
    <!-- <div class="flexbox">
      <div>
        <div class="hm-spinner"></div>
      </div>
      <div>
        <div class="triple-spinner"></div>
      </div>
    </div> -->
    <div class='spinnerBox'>
      <div class='spinner'>
        <div class='rect1'></div>
        <div class='rect2'></div>
        <div class='rect3'></div>
        <div class='rect4'></div>
        <div class='rect5'></div>
        <div class='rect6'></div>
        <div class='rect7'></div>
      </div>
    </div>
  </div>
  <!--  </transition>-->
</template>

<style lang='less' scoped>
.box{
  display:none;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  min-height:595px;
  z-index:10000;

  .flexbox{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -ms-flex-wrap:wrap;
    flex-wrap:wrap;
    justify-content:center;
    align-content:center;
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:10;
    background:rgba(0, 0, 0, 0.3);

    & > div{
      width:300px;
      height:300px;
      -webkit-box-flex:0;
      -ms-flex:0 0 25%;
      flex:0 0 25%;
      -webkit-box-sizing:border-box;
      box-sizing:border-box;
      margin:0;
      position:relative;
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-pack:center;
      -ms-flex-pack:center;
      justify-content:center;
      -webkit-box-align:center;
      -ms-flex-align:center;
      align-items:center;
      overflow:hidden;
      -webkit-animation:full 1.5s linear infinite;
      animation:full 1.5s linear infinite;
    }

    /* TRIPLE SPINNER */

    .triple-spinner{
      display:block;
      position:relative;
      width:70px;
      height:70px;
      border-radius:50%;
      border:4px solid transparent;
      /*border-top: 4px solid #0A5FCD;*/
      /*!*box-shadow: 0 0 10px 10px rgba(46, 49, 65, 0.5);*!*/
      -webkit-animation:spin 4s linear infinite;
      animation:spin 4s linear infinite;
    }

    .triple-spinner::before,
    .triple-spinner::after{
      content:'';
      position:absolute;
      border-radius:50%;
      /*box-shadow: 0 0 10px 10px rgba(46, 49, 65, 0.5);*/
      border:3px solid transparent;
    }

    .triple-spinner::before{
      top:5px;
      left:5px;
      right:5px;
      bottom:5px;
      border-top-color:#ffc107;
      border-bottom-color:#ffc107;
      box-shadow:0 0 10px 10px rgba(46, 49, 65, 0.5);
      -webkit-animation:spin 1s linear infinite;
      animation:spin 1s linear infinite;
    }

    .triple-spinner::after{
      top:15px;
      left:15px;
      right:15px;
      bottom:15px;
      border-top-color:#0a5fcd;
      border-bottom-color:#0a5fcd;
      -webkit-animation:spin 3s linear infinite;
      animation:spin 3s linear infinite;
    }

    /* HM SPINNER */

    .hm-spinner{
      height:70px;
      width:70px;
      border:5px solid transparent;
      border-top-color:#0a5fcd;
      border-bottom-color:#ffc107;
      border-radius:50%;
      position:relative;
      box-shadow:0 0 10px 10px rgba(46, 49, 65, 0.5);
      -webkit-animation:spin 3s linear infinite;
      animation:spin 3s linear infinite;
    }

    .hm-spinner::before{
      content:'';
      position:absolute;
      top:10px;
      right:10px;
      bottom:10px;
      left:10px;
      border:5px solid transparent;
      border-top-color:#0a5fcd;
      border-bottom-color:#ffc107;
      border-radius:50%;
      box-shadow:0 0 10px 10px rgba(46, 49, 65, 0.5);
      -webkit-animation:spin 2s linear infinite;
      animation:spin 2s linear infinite;
    }

    @keyframes spin{
      from{
        -webkit-transform:rotate(0deg);
        -ms-transform:rotate(0deg);
        transform:rotate(0deg);
      }
      to{
        -webkit-transform:rotate(360deg);
        -ms-transform:rotate(360deg);
        transform:rotate(360deg);
      }
    }

    @keyframes full{
      0%{
        -webkit-transform:scale(1);
        -ms-transform:scale(1);
        transform:scale(1);
        opacity:0.1;
      }
      50%{
        -webkit-transform:scale(1.4);
        -ms-transform:scale(1.4);
        transform:scale(1.4);
        opacity:1;
      }
      100%{
        -webkit-transform:scale(1);
        -ms-transform:scale(1);
        transform:scale(1);
        opacity:0.1;
      }
    }
  }

  .spinnerBox{
    height:100%;
    width:100%;
    position:fixed;
    top:0;
    left:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(0, 0, 0, 0.15);
    z-index:9;

    .spinner{
      margin:100px auto;
      width:80px;
      height:35px;
      text-align:center;
      font-size:10px;
    }

    .spinner > div{
      background-image:linear-gradient(to bottom, #387dff, #6d68ff);
      height:100%;
      width:5px;
      display:inline-block;
      margin-left:5px;

      -webkit-animation:stretchdelay 1.2s infinite ease-in-out;
      animation:stretchdelay 1.2s infinite ease-in-out;
    }

    .spinner .rect2{
      -webkit-animation-delay:-1s;
      animation-delay:-1s;
    }

    .spinner .rect3{
      -webkit-animation-delay:-0.9s;
      animation-delay:-0.9s;
    }

    .spinner .rect4{
      -webkit-animation-delay:-0.8s;
      animation-delay:-0.8s;
    }

    .spinner .rect5{
      -webkit-animation-delay:-0.7s;
      animation-delay:-0.7s;
    }

    .spinner .rect6{
      -webkit-animation-delay:-0.6s;
      animation-delay:-0.6s;
    }

    .spinner .rect7{
      -webkit-animation-delay:-0.5s;
      animation-delay:-0.5s;
    }

    @-webkit-keyframes stretchdelay{
      0%{
        -webkit-transform:scaleY(0.4);
      }
      10%{
        -webkit-transform:scaleY(0.6);
      }
      20%{
        -webkit-transform:scaleY(0.8);
      }
      30%{
        -webkit-transform:scaleY(1);
      }
      40%{
        -webkit-transform:scaleY(1.2);
      }
      50%{
        -webkit-transform:scaleY(1.4);
      }
      60%{
        -webkit-transform:scaleY(1.2);
      }
      70%{
        -webkit-transform:scaleY(1);
      }
      80%{
        -webkit-transform:scaleY(0.8);
      }
      90%{
        -webkit-transform:scaleY(0.6);
      }
      100%{
        -webkit-transform:scaleY(0.4);
      }
    }

    @keyframes stretchdelay{
      0%{
        -webkit-transform:scaleY(0.4);
      }
      10%{
        -webkit-transform:scaleY(0.6);
      }
      20%{
        -webkit-transform:scaleY(0.8);
      }
      30%{
        -webkit-transform:scaleY(1);
      }
      40%{
        -webkit-transform:scaleY(1.2);
      }
      50%{
        -webkit-transform:scaleY(1.4);
      }
      60%{
        -webkit-transform:scaleY(1.2);
      }
      70%{
        -webkit-transform:scaleY(1);
      }
      80%{
        -webkit-transform:scaleY(0.8);
      }
      90%{
        -webkit-transform:scaleY(0.6);
      }
      100%{
        -webkit-transform:scaleY(0.4);
      }
    }
  }
}
</style>
