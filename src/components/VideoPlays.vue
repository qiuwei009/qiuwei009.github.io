<template>
  <div :id='props.id' class='videoPlay'></div>
</template>

<script setup>
import JMuxer from 'jmuxer';
import {useScript} from '../utils/useScript';

let jmuxer = null,
    ws = null,
    player = null,
    socetTime = null;
const props = defineProps({
  src: {
    type: String,
    default: () => ''
  },
  id: {
    type: String,
    default: () => 'my_videoBox'
  }
});
const toPromise = useScript({src: 'https://open.ys7.com/sdk/js/1.3/ezuikit.js'});
const initVideo = async () => {
  await toPromise.toPromise();
};
const play = (src) => {
  let div = document.getElementById(props.id);
  console.log(div, 'div');
  // 暂停m3u8
  if (player) {
    player.stop();
  }
  // 销毁webSocet
  if (jmuxer) jmuxer.destroy();
  if (ws) ws.close();
  if (socetTime) clearInterval(socetTime);
  // 销毁video
  if (div) div.innerHTML = '';
  // 创建video
  let x = document.createElement('video');
  x.setAttribute('id', props.id + 'myPlayer');
  x.setAttribute('width', '100%');
  x.setAttribute('height', '100%');
  x.setAttribute('autoplay', 'autoplay');
  x.setAttribute('controls', 'controls');
  x.setAttribute('playsInline', 'playsInline');
  x.setAttribute('webkit-playsinline', 'webkit-playsinline');
  //m3u8
  x.setAttribute('type', 'application/x-mpegURL');
  if (src) x.setAttribute('src', src);
  div.innerHTML = '';
  div.appendChild(x);
  // 判断视频类型
  if (src.includes('.m3u8')) {
    let time = setInterval(() => {
      if (document.getElementById(props.id + 'myPlayer') !== undefined) {
        player = new EZUIPlayer(props.id + 'myPlayer');
        player.on('error', () => {
          console.log('error');
        });
        player.on('play', () => {
          console.log('play');
          player.play();
        });
        player.on('pause', () => {
          console.log('pause');
          player.stop();
        });
        clearInterval(time);
      }
      setTimeout(() => {
        clearInterval(time);
        try {
          player.play();
        } catch (e) {
        }
      }, 2000);
    });
  } else if (src.includes('ws://')) {
    jmuxer = new JMuxer({
      node: props.id + 'myPlayer',
      mode: 'video',
      flushingTime: 500,
      autoplay: true,
      fps: 15,
      onError: function (data) {
        if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
          jmuxer.reset();
        }
      }
    });
    ws = new WebSocket(src);
    ws.binaryType = 'arraybuffer';
    ws.addEventListener('message', (event) => {
      jmuxer.feed({
        video: new Uint8Array(event.data)
      });
    });
    ws.addEventListener('error', function (e) {
      console.log('Socket Error');
    });
    ws.addEventListener('open', (event) => {
      ws.send(src);
      socetTime = setInterval(() => {
        ws.send(1);
      }, 1000);
    });
  }
};
const distory = () => {
  let div = document.getElementById(props.id);
  // 暂停m3u8
  if (player) {
    player.stop();
  }
  // 销毁webSocet
  if (jmuxer) jmuxer.destroy();
  if (ws) ws.close();
  if (socetTime) clearInterval(socetTime);
  // 销毁元素
  if (div) div.innerHTML = '暂无视频!请联系管理员!';
};

watch(() => props.src, (n) => {
  play(props.src);
});
onBeforeMount(() => {
  initVideo();
});
onBeforeUnmount(() => {
  distory();
});
</script>

<style lang='less' scoped>
.videoPlay{
  width:100%;
  height:100%;
  background-color:#000000;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
