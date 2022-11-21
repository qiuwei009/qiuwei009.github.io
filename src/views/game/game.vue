<template>
  <div class="game">
    <div class="content">
      <el-scrollbar :native="false" :noresize="false" tag="div">
        <div class="flex nowrap">
          <el-button type="success" @click="state.start(1)">开始</el-button>
          <el-button type="danger" @click="state.start(0)">暂停</el-button>
          <el-button type="warning" @click="state.reset">重新开始</el-button>
          <!--      <el-button class="col-1" round type="primary" @click="state.it.changev(0)">速度-</el-button>-->
          <!--      <el-button class="col-1" round type="primary" @click="state.it.changev(1)">速度+</el-button>-->
          <el-button type="danger">虫1速度: {{ state.it.v }}</el-button>
          <el-button type="danger">虫2速度: {{ state.it2.v }}</el-button>
          <!--            <el-button type="primary" @click="state.it2.changev(0)" round>虫2-</el-button>-->
          <!--            <el-button type="primary" @click="state.it2.changev(1)" round>虫2+</el-button>-->
          <el-button round type="success">虫1分数: {{ state.it.body.length * 10 - 40 }}</el-button>
          <el-button round type="success">虫2分数: {{ state.it2.body.length * 10 - 40 }}</el-button>
          <!--      <el-button class="col-1"><i>状态: {{ state.status[state.it.over] }}</i></el-button>-->
          <!--            <el-button type="warning" plain round>虫2: {{ state.status[state.it2.over] }}</el-button>-->
          <!--            <button @click="back" active="scale-90 transform" class="col-5 errorbtn">-->
          <!--              👉 Go Home-->
          <!--            </button>-->
        </div>
      </el-scrollbar>
    </div>
    <div id="gameBox">
      <span v-for="i in state.w*state.h" :key="i" :class="{
                          it:state.it.body.includes(i)||state.it.fruit.includes(i),
                          itf:state.it.body[0] === i,
                          ith:state.it.body[state.it.body.length - 1] === i,
                          it2:state.it2.body.includes(i)||state.it2.fruit.includes(i),
                          it2f:state.it2.body[0] === i,
                          it2h:state.it2.body[state.it2.body.length - 1] === i,
                        }" class="block"></span>
    </div>
    <div class="content flex just-b" style="padding: 0 15%;box-sizing: border-box">
      <div>
        <p class="flex just-c align-c">
          <el-button style="width: 80px;" type="success" @click="state.it.direction = 2">up</el-button>
        </p>
        <p class="flex just-c align-c">
          <el-button style="width: 80px;" type="primary" @click="state.it.direction = 1">left</el-button>
          <el-button style="width: 80px;" type="warning" @click="state.it.direction = 3">right</el-button>
        </p>
        <p class="flex just-c align-c">
          <el-button style="width: 80px;" type="danger" @click="state.it.direction = 4">down</el-button>
        </p>
      </div>
      <div>
        <p class="flex just-c align-c">
          <el-button style="width: 80px;" type="success" @click="state.it2.direction = 2">up</el-button>
        </p>
        <p class="flex just-c align-c">
          <el-button style="width: 80px;" type="primary" @click="state.it2.direction = 1">left</el-button>
          <el-button style="width: 80px;" type="warning" @click="state.it2.direction = 3">right</el-button>
        </p>
        <p class="flex just-c align-c">
          <el-button style="width: 80px;" type="danger" @click="state.it2.direction = 4">down</el-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import insect from './insect';

const state = reactive({
  w: 60,
  h: 30,
  it: {
    body: [1, 2, 3],
    w: 0,
    h: 0,
    time: null,
    next: 0,
    direction: 0,
    fruit: [7, 8, 9],
    over: 0,
    v: 0,
    destroy() {
    },
    start() {
    },
    suspend() {
    },
    changev() {
    }
  },
  it2: {
    body: [1, 2, 3, 4],
    w: 0,
    h: 0,
    time: null,
    next: 0,
    direction: 0,
    fruit: [7, 8, 9],
    over: 0,
    v: 0,
    destroy() {

    },
    start() {

    },
    suspend() {

    },
    changev() {

    }
  },
  status: ['未开始', '游戏中', '暂停', '结束', '通关'],
  fruit: [111, 23, 4, 55, 65],
  init() {
    state.w = Math.floor(document.getElementById('gameBox').offsetWidth / 20);
    state.h = Math.floor(document.getElementById('gameBox').offsetHeight / 20);
    state.it = new insect(state.w, state.h, 37, 38, 39, 40, this.fruit);
    state.it2 = new insect(state.w, state.h, 65, 87, 68, 83, this.fruit);
  },
  start(bool) {
    if (bool) {
      state.it.start();
      state.it2.start();
    } else {
      state.it.suspend();
      state.it2.suspend();
    }
  },
  reset() {
    state.it.reload();
    state.it2.reload();
  },
  now: new Date().getTime(),
  last: new Date().getTime()
});
onMounted(() => {
  state.init();
  window.addEventListener('resize', () => {
    state.now = new Date().getTime();
    if (state.now - state.last > 100 || state.now - state.last === 0) {
      state.last = new Date().getTime();
      state.init();
    }
  });
});
onBeforeUnmount(() => {
  console.log('销毁');
  state.it.destroy();
  state.it2.destroy();
});
</script>

<style lang="less" scoped>
.game {
  width: 100%;
  height: 100%;
  background: url('../../assets/image/webPagesImage/99230581_p0.png') no-repeat;
  background-size: cover;

  #gameBox {
    position: relative;
    z-index: 9;
    width: calc(100% - 40px);
    height: calc(100% - 300px);
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 1px 1px #15294B inset;

    .block {
      display: inline-block;
      width: 20px;
      height: 20px;
      box-shadow: 0 0 1px 0 rgba(222, 215, 215, 0.1);
    }

    .ith {
      //background: rgba(163, 66, 185, 0.83) !important;
      background: url('../../assets/image/404/it2.png') no-repeat center !important;
    }

    .it {
      background: coral;
      background-size: 100% !important;
      border-radius: 10px;
    }

    .itf {
      //background: #35243DD3 !important;
    }

    .it2h {
      //background: #d2a038d3 !important;
      background: url('../../assets/image/404/it2.png') no-repeat center !important;
    }

    .it2 {
      background: rgba(127, 185, 66, 0.83);
      border-radius: 10px;
    }

    .it2f {
      //background: #242C3DD3 !important;
    }
  }

  .content {
    position: relative;
    z-index: 9;
    width: 100%;
    padding-top: 20px;
    overflow: hidden;
    margin-bottom: 10px;


    .el-button {
      margin: 0 0 5px 10px !important;
      padding: 0 10px;
    }

    .el-button > span {
      color: #ccc;
    }

    .center {
      display: flex;
      justify-content: center;
    }

    .errorbtn {
      float: right;
      box-sizing: border-box;
      max-height: 40px;
      font-size: 20px;
      padding: 2px 20px;
      margin: 0 auto;
      --tw-shadow-color: 8, 145, 178;
      --tw-shadow: 0 4px 6px -1px rgba(var(--tw-shadow-color), 0.1),
      0 2px 4px -1px rgba(var(--tw-shadow-color), 0.06);
      box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, var(--tw-shadow);
    }
  }
}
</style>
