<template>
  <div class="game2">
    <div class="flex just-s align-c" style="padding: 10px;">
      <el-button type="success" @click="rendom">重排</el-button>
      <el-button type="danger" @click="canList">复原</el-button>
      <el-button type="warning" @click="change(0)">减小难度</el-button>
      <el-button type="warning" @click="change(1)">增加难度</el-button>
      <el-button type="warning" @click="changeImage()">下一关</el-button>
      <div style="padding-left: 10px">step: {{ num.value }}</div>
    </div>
    <div class="flex wrap just-a align-c">
      <transition-group :style="`--gridli:${state.gridli};--bg:${state.src}`" class="wraps" move-class="move" tag="div">
        <div v-for="(item,i) in list" :key="item.id" :class="item.id == state.grid?'disNo':''" :data-index="i" :style="`--numx:${item.numx};--numy:${item.numy};`" class="item" @mousedown="move"></div>
      </transition-group>
      <div>
        原图 <img :src="state.src" class="wraps2"/>
      </div>
    </div>
  </div>
</template>

<script name="game2" setup>
import {ElMessage} from 'element-plus';

// 拼图小游戏
const state = reactive({
  gridAll: 4, //当前宽高网格数
  grid: '15', //最后项
  gridNum: 16, //网格总数
  gridli: 4, //列数
  numRow: -1,
  falg: false,
  src: 'src/assets/image/logo.png'
});
const list = ref(Array.apply(null, {length: state.gridNum}).map((_, index) => {
  return {
    id: index.toString(),
    number: (index % state.gridli).toString(),
    numx: (index % state.gridli).toString(),
    numy: (() => {
      if (index % state.gridli === 0) {
        state.numRow++;
      }
      return state.numRow;
    })()
  };
}));
const change = (type) => {
  if (type) state.gridAll++;
  else state.gridAll--;
  state.gridNum = state.gridAll * state.gridAll;
  state.grid = state.gridNum - 1;
  state.gridli = state.gridAll;
  lastIndex.value = (state.gridNum - 1).toString();
  canList();
  rendom();
};
const rendom = () => {
  list.value = _.shuffle(list.value);
  list.value.forEach((item, i) => {
    if (item.id == state.grid) lastIndex.value = i.toString();
  });
  num.value = 0;
};
const canList = () => {
  state.numRow = -1;
  list.value = Array.apply(null, {length: state.gridNum}).map((_, index) => {
    return {
      id: index.toString(),
      number: (index % state.gridli).toString(),
      numx: (index % state.gridli).toString(),
      numy: (() => {
        if (index % state.gridli === 0) {
          state.numRow++;
        }
        return state.numRow;
      })()
    };
  });
  lastIndex.value = state.grid;
  num.value = 0;
};
const lastIndex = ref(state.grid);
const move = (e) => {
  e.target.draggable = true;
  let index = e.currentTarget.getAttribute('data-index');
  let arr = [];
  arr.push((Number(lastIndex.value) + state.gridli).toString());
  arr.push((Number(lastIndex.value) - state.gridli).toString());
  if (lastIndex.value % state.gridli !== 0) arr.push((Number(lastIndex.value) - 1).toString());
  if (lastIndex.value % state.gridli !== state.gridli - 1) arr.push((Number(lastIndex.value) + 1).toString());
  if (!arr.includes(index.toString())) {
    return;
  }
  let count = list.value[index.toString()];
  list.value[index.toString()] = list.value[lastIndex.value];
  list.value[lastIndex.value] = count;
  lastIndex.value = index.toString();

  let falg = true;
  for (let i = 0; i < state.gridNum; i++) {
    if (Number(list.value[i].id) !== i) {
      falg = false;
    }
  }
  num.value++;
  if (falg) {
    ElMessage.success('通过!');
    // state.grid = -1;
  }
};
// 动态数据
const num = reactive({
  value: 0
});
const changeImage = () => {
  const modules = import.meta.glob('../../assets/image/*.png');
  let arr = [];
  for (let key in modules) {
    arr.push(key.replace('../../', 'src/'));
  }
  state.src = `backgroundImage:url(${arr[Math.floor(Math.random() * Math.random() * 100)] || arr[Math.floor(Math.random() * 10)]})`;
};
</script>

<style lang="less" scoped>
@wh:50px;
@bg:'../../assets/image/logo.png';
.game2{
  width:100%;
  height:100%;
  overflow-y:auto;
  background:url('../../assets/image/webPagesImage/99230581_p0.png') no-repeat;
  background-size:cover;
}

.wraps{
  display:flex;
  flex-wrap:wrap;
  width:calc(@wh * var(--gridli));
  height:calc(@wh * var(--gridli));

  .item{
    width:@wh;
    height:@wh;
    line-height:@wh;
    text-align:center;
    box-shadow:0 0 1px 1px rgba(255, 255, 255, 0.5) inset;
    background-image:url(@bg);
    background-repeat:no-repeat;
    background-size:calc(@wh * var(--gridli));
    background-position:calc(-@wh * var(--numx, 0)) calc(-@wh * var(--numy, 0));
    overflow:hidden;
  }
}

.wraps2{
  display:flex;
  flex-wrap:wrap;
  width:calc(@wh * 4);
  height:calc(@wh * 4);
//  background:url(@bg) no-repeat;
  background-size:cover;
}

.move{
  transition:all 1s;
}

.disNo{
  opacity:0;
}
</style>

