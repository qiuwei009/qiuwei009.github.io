<template>
  <div class="board">
    <div class="flex wrap column">
      <div style="width: 400px;height: 320px;">
        <VideoPlays :id="'videoBox1'" :src="video.src"></VideoPlays>
        <div>
          <el-icon style="width: 12px;height: 12px;" @click="video.setVideo('http://203.57.238.132:1500/upload/device/SkMvoM16575336545920.mp4');">
            <ArrowLeftBold/>
          </el-icon>
          <el-icon style="width: 12px;height: 12px;" @click="video.setVideo('');">
            <ArrowRightBold/>
          </el-icon>
        </div>
      </div>
      <div style="width: 400px;height: 320px;">
        <VideoPlays :id="'videoBox2'" :src="video.src1"></VideoPlays>
      </div>
      <Tree></Tree>
      <input v-model="num.value" step="20" style="height: 20px;color: #cccccc;" type="number">
      <div>{{ num.changeValue.toFixed(0) }}</div>
    </div>
  </div>
</template>

<script name="board" setup>
import gsap from 'gsap';
//视频
const video = reactive({
  src: '',
  src1: '',
  setVideo(src) {
    video.src = src;
  }
});
// 拼图小游戏

// 动态数据
const num = reactive({
  value: 0,
  changeValue: 0
});
watch(() => num.value, (newVal) => {
  gsap.to(num, {
    duration: 1,
    changeValue: newVal
  });
});
// watch(()=>list.value, (newVal) => {
//   console.log(newVal);
//   let falg = true
//   for (let i = 0; i < newVal.length; i++) {
//     console.log(list.value[i].id,i);
//     if( Number(list.value[i].id) !== i ){
//       falg = false
//     }
//   }
//   console.log(falg);
//   if(falg){
//     console.log('通过');
//     state.grid = -1
//   }
// });
onMounted(() => {
  setTimeout(() => {
    video.setVideo('http://203.57.238.132:1500/upload/device/SkMvoM16575336545920.mp4');
    video.src1 = 'http://203.57.238.132:1500/upload/device/SkMvoM16575336545920.mp4';
  }, 3000);
});
</script>

<style lang="less">
.board{
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>

