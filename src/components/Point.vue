<template>
  <div class='PointComponent' @click.stop=''>
    <div ref='mapPoint' class='mapPoint'></div>
    <p class='flex align-c just-e'>
      <button v-show='state.type' class='cursor fl drawBtn' @click='draw(state.type)'>点击绘制</button>
      <span class=' card_text'>经纬度:</span>
      <input v-model='state.point' class='fl' placeholder='请选择地图点位...' type='text'/>
      <button class='cursor fl' style='background: #cccccc;' @click='cancel'>取消</button>
      <button class='cursor fl' @click='confirm'>确认</button>
    </p>
    <!-- <i class="iconfont icon-RectangleCopy22 hide" @click="cancel"></i> -->
  </div>
</template>

<script setup>

const props = defineProps({
  data: {
    type: Object,
    default() {
      return {
        show: true,
        point: '104.044894,30.584891',
        type: '',
        line: ''
      };
    }
  }
});
const emit = defineEmits();
let script2 = null;
let mapIns = null;
let mouseTool = null;
const mapPoint = ref(null);
const state = reactive({
  dark: JSON.parse(sessionStorage.getItem('dark')),
  mapType: 0,
  mapStyle: [
    'amap://styles/light',
    'amap://styles/grey',
    'amap://styles/darkblue'
  ],
  mapIns: null,
  marker: null,
  point: props.data.point,
  oldPoint: props.data.point,
  show: props.data.show,
  setMapType() {
    state.dark = JSON.parse(sessionStorage.getItem('dark'));
    state.mapType = state.dark === 'dark' ? 1 : state.dark === 'light' ? 0 : 1;
    mapIns.setMapStyle(state.mapStyle[state.mapType]);
  },
  boundary: [],
  polyline: null,
  type: ''
});
//初始化
const init = () => {
  state.mapType =
      state.dark === 'dark' ? 1 : state.dark === 'light' ? 0 : 1;
  mapIns = new AMap.Map(mapPoint.value, {
    resizeEnable: true, //是否监控地图容器尺寸变化
    zoom: 11, //初始化地图层级
    center: [104.06, 30.5642], //初始化地图中心点
    // mapStyle: 'amap://styles/darkblue',
    isHotspot: false,
    mapStyle: state.mapStyle[state.mapType]
  });
  mapIns.setDefaultCursor('crosshair');
  mapIns.on('complete', () => {
    initPoint();

  });
  mapIns.on('click', (e) => {
    if (state.type) {
      if ($('.drawBtn').text() === '选择中心点') {
        drawPoint(e);
        $('.drawBtn').text('重新绘制');
      }
    } else {
      drawPoint(e);
    }
  });
};
const initPoint = () => {
  state.marker = new AMap.MassMarks([], {
    opacity: 1,
    zIndex: 999,
    cursor: 'pointer',
    // 创建海量点图标
    style: {
      url: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png' /*https://a.amap.com/jsapi_demos/static/images/mass0.png',*/,
      anchor: new AMap.Pixel(10, 30),
      size: new AMap.Size(20, 30)
    }
  });
  state.marker.setMap(mapIns);
};
//绘制点
const drawPoint = (e) => {
  let arr = [];
  if (typeof e === 'string') {
    arr = [
      {
        lng: e.split(',')[0],
        lat: e.split(',')[1],
        lnglat: {
          lng: e.split(',')[0],
          lat: e.split(',')[1],
          Q: e.split(',')[1],
          R: e.split(',')[0]
        }
      }
    ];
    state.point = e;
  } else {
    arr = [
      {
        lng: e.lnglat.lng,
        lat: e.lnglat.lat,
        lnglat: {
          lng: e.lnglat.lng,
          lat: e.lnglat.lat,
          Q: e.lnglat.lat,
          R: e.lnglat.lng
        }
      }
    ];
    state.point = `${e.lnglat.lng},${e.lnglat.lat}`;
  }
  if (!state.marker) {
    mapIns.on('complete', () => {
      state.marker.setData(arr);
    });
  } else {
    state.marker.setData(arr);
  }
};
// 绘制线
const drawLine = (value) => {
  if (value) {
    if (state.polyline) mapIns.remove(state.polyline);
    state.boundary = [];
    let arr = value.split(';');
    arr.forEach((i) => {
      if (i) {
        state.boundary.push([i.split(',')[0], i.split(',')[1]]);
      }
    });
    state.polyline = new AMap.Polygon({
      path: state.boundary,
      fillColor: '#ccebc5',
      strokeOpacity: 1,
      fillOpacity: 0.5,
      strokeColor: '#2b8cbe',
      strokeWeight: 1,
      strokeStyle: 'dashed',
      strokeDasharray: [5, 5],
      zIndex: -1,
      bubble: true
    });
    // state.polyline = new AMap.Polyline({
    //   path: state.boundary,
    //   isOutline: true,
    //   outlineColor: "transparent",
    //   borderWeight: 1,
    //   strokeColor: "#387DFF",
    //   strokeOpacity: 0.7,
    //   strokeWeight: 2, // 折线样式还支持 'dashed'
    //   strokeStyle: "line",
    //   strokeDasharray: [10, 5],
    //   lineJoin: "round",
    //   lineCap: "round",
    //   zIndex: 50,
    // });
    mapIns.add(state.polyline);
    mapIns.setFitView([state.polyline]);
  }
  // 缩放地图到合适的视野级别
  // this.map.setFitView([polyline])
};
//完成
const confirm = () => {
  $('.drawBtn').text('点击绘制');
  clear();
  if (state.type) {
    let str = '';
    state.boundary.forEach(i => {
      str += i.R + ',' + i.Q + ';';
    });
    emit('backPoint', {point: state.point, boundary: str});
  } else {
    emit('backPoint', state.point);
  }
};
//取消
const cancel = () => {
  if (state.type) {
    emit('backPoint', {point: state.oldPoint, boundary: state.oldBoundary});
  } else {
    emit('backPoint', state.oldPoint);
  }
  clear();
};
//绘制
const draw = (type) => {
  clear();
  drawPoint('0, 0');
  if ($('.drawBtn').text() === '重新绘制') {
    $('.drawBtn').text('开始绘制');
  } else if ($('.drawBtn').text() === '选择中心点') {
    return false;
  } else if ($('.drawBtn').text() === '点击绘制') {
    $('.drawBtn').text('开始绘制');
  }
  initMouseTool();
  switch (type) {
    case 'marker': {
      mouseTool.marker({
        opacity: 1,
        zIndex: 999,
        cursor: 'pointer',
        // 创建海量点图标
        style: {
          url: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png' /*https://a.amap.com/jsapi_demos/static/images/mass0.png',*/,
          anchor: new AMap.Pixel(10, 30),
          size: new AMap.Size(20, 30)
        }
      });
      break;
    }
    case 'polyline': {
      mouseTool.polyline({
        fillColor: '#ccebc5',
        strokeOpacity: 1,
        fillOpacity: 0.5,
        strokeColor: '#2b8cbe',
        strokeWeight: 1,
        strokeStyle: 'dashed',
        strokeDasharray: [5, 5],
        zIndex: -1,
        bubble: true
        //同Polyline的Option设置
      });
      break;
    }
    case 'polygon': {
      mouseTool.polygon({
        fillColor: '#ccebc5',
        strokeOpacity: 1,
        fillOpacity: 0.5,
        strokeColor: '#2b8cbe',
        strokeWeight: 1,
        strokeStyle: 'dashed',
        strokeDasharray: [5, 5],
        zIndex: -1,
        bubble: true
        //同Polygon的Option设置
      });
      break;
    }
    case 'rectangle': {
      mouseTool.rectangle({
        fillColor: '#ccebc5',
        strokeOpacity: 1,
        fillOpacity: 0.5,
        strokeColor: '#2b8cbe',
        strokeWeight: 1,
        strokeStyle: 'dashed',
        strokeDasharray: [5, 5],
        zIndex: -1,
        bubble: true
        //同Polygon的Option设置
      });
      break;
    }
    case 'circle': {
      mouseTool.circle({
        fillColor: '#00b0ff',
        strokeColor: '#80d8ff'
        //同Circle的Option设置
      });
      break;
    }
  }
};
//鼠标事件
const initMouseTool = () => {
  mouseTool = new AMap.MouseTool(mapIns);
  //监听draw事件可获取画好的覆盖物
  let overlays = [];
  mouseTool.on('draw', (e) => {
    overlays.push(e.obj);
    state.boundary = e.obj.getPath();
    mouseTool.close();
    $('.drawBtn').text('选择中心点');
  });
  mapIns.add(overlays);
};
//清除
const clear = () => {
  if (mouseTool) mouseTool.close(true);
  if (state.polyline) state.polyline.hide();
};
watch(props, () => {
  state.oldPoint = props.data.point;
  state.oldBoundary = props.data.line;
  state.type = props.data.type;
  if (props.data.show) {
    $('.PointComponent').fadeIn(200);
    drawPoint(props.data.point);
    // drawLine(props.data.line)
    state.setMapType();
  } else {
    $('.PointComponent').fadeOut(200);
  }
});
onMounted(() => {
  // 地图1.4 加载
  script2 = document.createElement('script');
  script2.type = 'text/javascript';
  script2.src = 'https://webapi.amap.com/maps?v=1.4.15&key=b682d911b6c7244e2780328b2cf8b1a0&plugin=AMap.MapType,AMap.MouseTool';
  document.head.appendChild(script2);
  script2.onload = () => {
    // 地图创建
    init();
  };
});
onBeforeUnmount(() => {
  mapIns.destroy();
  script2 && script2.remove();
});
</script>

<style lang='less' scoped>
.PointComponent{
  display:none;
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(31, 45, 61, 0.25);
  z-index:9;

  .mapPoint{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    width:calc(100% - 15px);
    height:calc(100% - 15px);
  }

  p{
    position:absolute;
    top:15px;
    right:15px;

    input{
      flex:1;
      height:25px;
      outline:none;
      background:#F4F8FF;
      color:#333;
      box-shadow:none;
      padding:0 10px 0;
      border:1px solid #cccccc;
      max-width:175px;
    }

    button{
      width:50px;
      height:25px;
      background:#387dff;
      border:none;
      color:#fff;
    }
  }

  .hide{
    position:absolute;
    top:50px;
    left:50px;
    font-size:25px;
    color:#ffffff;
    cursor:pointer;
  }
}
</style>

