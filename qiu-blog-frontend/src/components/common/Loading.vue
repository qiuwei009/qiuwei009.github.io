<template>
    <Transition name="fade">
        <div v-if="commonStore.loading" class="loading flex flex-col justify-center items-center">
            <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5 relative">
                    <div class="inner"></div>
                    <div class="outer"></div>
                </div>
            </div>
            <span class="mt-2" style="color: #fff">{{ commonStore.message }}</span>
        </div>
    </Transition>
</template>

<script setup>
import {useCommonStore} from "@/stores/common";

const commonStore = useCommonStore();
</script>

<style lang="less" scoped>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 9999;
}

// 波浪条
.spinner {
    width: 100px;
    height: 60px;
    text-align: center;
    font-size: 10px;
}

.spinner > div {
    background-color: #00f7f9;
    height: 100%;
    width: 6px;
    display: inline-block;
    margin: 0 5px;
    -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
    animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
}

.spinner .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
}

.spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
}

.spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
    0%,
    40%,
    100% {
        -webkit-transform: scaleY(0.4);
    }
    20% {
        -webkit-transform: scaleY(1);
    }
}

@keyframes stretchdelay {
    0%,
    40%,
    100% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    }
    20% {
        transform: scaleY(1);
        -webkit-transform: scaleY(1);
    }
}

//转盘
//.spinner {
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  width: 100%;
//  height: 100%;
//}
//
//.spinner .outer {
//  border: 5px solid var(--color-active);
//  opacity: .9;
//  border-right-color: transparent;
//  border-left-color: transparent;
//  width: 50px;
//  height: 50px;
//  margin: 0 auto;
//  border-radius: 50%;
//  -webkit-box-shadow: 0 0 35px rgba(0, 76, 61, 0.9);
//  -moz-box-shadow: 0 0 35px rgba(0, 76, 61, 0.9);
//  box-shadow: 0 0 35px rgba(0, 76, 61, 0.9);
//  -webkit-animation: spin-pulse 1s linear infinite normal;
//  -moz-animation: spin-pulse 1s linear infinite normal;
//  -ms-animation: spin-pulse 1s linear infinite normal;
//  animation: spin-pulse 1s linear infinite normal;
//  -webkit-animation-delay: 0s;
//  -moz-animation-delay: 0s;
//  -o-animation-delay: 0s;
//  animation-delay: 0s;
//}
//
//.spinner .inner {
//  border: 5px solid var(--color-active);
//  opacity: .9;
//  border-left-color: transparent;
//  border-right-color: transparent;
//  border-radius: 50%;
//  -webkit-box-shadow: 0 0 15px rgba(0, 76, 61, 0.9);
//  -moz-box-shadow: 0 0 15px rgba(0, 76, 61, 0.9);
//  box-shadow: 0 0 15px rgba(0, 76, 61, 0.9);
//  width: 30px;
//  height: 30px;
//  position: absolute;
//  top: 10px;
//  left: 10px;
//  transform: translate(-50%,-50%);
//  margin: 0 auto;
//  -webkit-animation: spin-right 1s linear infinite normal;
//  -moz-animation: spin-right 1s linear infinite normal;
//  -ms-animation: spin-right 1s linear infinite normal;
//  animation: spin-right 1s linear infinite normal;
//  -webkit-animation-delay: 0s;
//  -moz-animation-delay: 0s;
//  -o-animation-delay: 0s;
//  animation-delay: 0s;
//}
//
//@keyframes spin-pulse {
//  from {
//    transform: rotate(160deg);
//    opacity: 0;
//    box-shadow: 0 0 1px rgba(0, 61, 76, 0.9);
//  }
//
//  50% {
//    transform: rotate(145deg);
//    opacity: 1;
//  }
//
//  to {
//    transform: rotate(-320deg);
//    opacity: 0;
//  }
//}
//
//@-moz-keyframes spin-pulse {
//  from {
//    -moz-transform: rotate(160deg);
//    opacity: 0;
//    box-shadow: 0 0 1px rgba(0, 61, 76, 0.9);
//  }
//
//  50% {
//    -moz-transform: rotate(145deg);
//    opacity: 1;
//  }
//
//  to {
//    -moz-transform: rotate(-320deg);
//    opacity: 0;
//  }
//}
//
//@-webkit-keyframes spin-pulse {
//  from {
//    -webkit-transform: rotate(160deg);
//    opacity: 0;
//    box-shadow: 0 0 1px rgba(0, 61, 76, 0.9);
//  }
//
//  50% {
//    -webkit-transform: rotate(145deg);
//    opacity: 1;
//  }
//
//  to {
//    -webkit-transform: rotate(-320deg);
//    opacity: 0;
//  }
//}
//
//@keyframes spin-right {
//  from {
//    transform: rotate(0deg);
//    opacity: 0.2;
//  }
//
//  50% {
//    transform: rotate(180deg);
//    opacity: 1.0;
//  }
//
//  to {
//    transform: rotate(360deg);
//    opacity: 0.2;
//  }
//}
//
//@-moz-keyframes spin-right {
//  from {
//    -moz-transform: rotate(0deg);
//    opacity: 0.2;
//  }
//
//  50% {
//    -moz-transform: rotate(180deg);
//    opacity: 1.0;
//  }
//
//  to {
//    -moz-transform: rotate(360deg);
//    opacity: 0.2;
//  }
//}
//
//@-webkit-keyframes spin-right {
//  from {
//    -webkit-transform: rotate(0deg);
//    opacity: 0.2;
//  }
//
//  50% {
//    -webkit-transform: rotate(180deg);
//    opacity: 1.0;
//  }
//
//  to {
//    -webkit-transform: rotate(360deg);
//    opacity: 0.2;
//  }
//}
</style>
