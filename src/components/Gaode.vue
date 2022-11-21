<template>
  <div ref='wrapRef' :style='{ height, width }' class='animate__animated animate__backInUp'></div>
</template>
<script setup>
import commonStore from '~/pinia/commonStore';
import geoJsonData from '~/utils/geoJson.json';
import {useScript} from '../utils/useScript';
const A_MAP_URL = 'https://webapi.amap.com/maps?v=2.0&key=06313eb9c6563b674a8fd789db0692c3&plugin=AMap.Scale,AMap.ToolBar';
const A_MAP_URL_LOCA = 'https://webapi.amap.com/loca?v=2.0.0&key=b682d911b6c7244e2780328b2cf8b1a0';
const props = defineProps({
  width: {
    type: String,
    default: '100vw'
  },
  height: {
    type: String,
    default: '100%'
  },
  points: {
    type: Array,
    default: []
  },
  labelsLayer: {
    type: Object,
    default: {
      'points': [
        {
          'type': 'Point',
          'coordinates': [
            116.340291,
            39.947009
          ],
          'properties': {
            'name': '北京海洋馆(简单冲)',
            'address': '高梁桥斜街与交通大学路交叉口西南约120米'
          },
          'sr': 286
        }
      ],
      'lines': [],
      'polygons': [],
      'mf': []
    }
  },
  labelsLayerEvent: {
    type: Array,
    default: []
  },
  lineArr: {
    type: Array,
    default: []
  },
  hostMap: {
    type: Object,
    default: {
      'points': [
        {
          'type': 'Point',
          'coordinates': [
            116.340291,
            39.947009
          ],
          'properties': {
            'name': '北京海洋馆(简单冲)',
            'address': '高梁桥斜街与交通大学路交叉口西南约120米'
          },
          'sr': 286
        }
      ],
      'lines': [],
      'polygons': [],
      'mf': []
    }
  }
});
const emit = defineEmits();
let map = null;
let loca = null;
let infoWindow = null;
let marker = null;
let polyline = null;
let passedPolyline = null;
let heatmap = null;
let mapStyle = [
  'amap://styles/light',
  'amap://styles/grey'
];
let breathRed = null;

const wrapRef = ref(null);
const toPromise = useScript({src: A_MAP_URL});
const toPromiseLoca = useScript({src: A_MAP_URL_LOCA});
const store = commonStore();

// 初始化
const initMap = async () => {

  const wrapEl = unref(wrapRef);
  if (!wrapEl) return;
  const AMap = window.AMap;
  let is_dark = store.isDark ? 1 : 0;
  map = new AMap.Map(wrapEl, {
    zoom: 10,
    center: [104.080989, 30.657689],
    viewMode: '3D',
    mapStyle: mapStyle[is_dark],
    showLabel: false,
    pitch: 30
  });
  loca = new Loca.Container({map});
  map.on('complete', async () => {
    initInfoWindow();
    initPoint();
    initMoveAnimation();
    initLabelsLayer();
    initLabelsLayerEvent();
    initHeatMap();
    let arr = [];
    geoJsonData.features.forEach(i => {
      arr.push(i.geometry.coordinates);
    });
    arr.forEach(i => {
      initPolygon(i);
    });
  });
};

// 初始海量点
const initPoint = () => {
  const wrapEl = unref(wrapRef);
  if (!wrapEl) return;
  const AMap = window.AMap;
  // JSAPI 2.0 支持显示设置 zIndex, zIndex 越大约靠前，默认按顺序排列
  let style = [
    {
      url: 'https://a.amap.com/Loca/static/loca-v2/demos/images/accident.png',
      anchor: new AMap.Pixel(15, 15),
      size: new AMap.Size(30, 30),
      zIndex: 3
    },
    {
      url: 'https://a.amap.com/Loca/static/loca-v2/demos/images/traffic-control.png',
      anchor: new AMap.Pixel(15, 15),
      size: new AMap.Size(30, 30),
      zIndex: 2
    },
    {
      url: 'https://a.amap.com/Loca/static/loca-v2/demos/images/jam.png',
      anchor: new AMap.Pixel(15, 15),
      size: new AMap.Size(30, 30),
      zIndex: 1
    }
  ];

  let mass = new AMap.MassMarks(props.points, {
    // opacity: 0.8,
    zIndex: 110,
    cursor: 'pointer',
    style: style
  });
  mass.on('click', (e) => {
    openInfoWindow(e);
    if (breathRed) loca.remove(breathRed);
    let geoLevelF = new Loca.GeoJSONSource({
      data: {
        'type': 'FeatureCollection',
        'features': [
          {
            'type': 'Feature',
            'properties': {
              rawData: e.data
            },
            'geometry': {
              'type': 'Point',
              'coordinates': e.data.lnglat
            }
          }
        ]
      }
    });
    breathRed = new Loca.ScatterLayer({
      loca,
      zIndex: 1,
      opacity: 1,
      visible: true,
      zooms: [2, 22]
    });
    breathRed.setSource(geoLevelF);
    breathRed.setStyle({
      // unit: 'meter',
      // size: [4600, 4600],
      unit: 'px',
      size: [90, 90],
      borderWidth: 0,
      texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_red.png',
      duration: 700,
      animate: true
    });
    // 启动渲染动画
    loca.animate.start();
  });
  // mass.on('mousemove', (e) => {
  //   openInfoWindow(e);
  // });
  // mass.on('mouseout', (e) => {
  //   infoWindow.close();
  // });
  mass.setMap(map);


  //
  // let layer = new Loca.ScatterPointLayer({
  //   map: map
  // });
  //
  // // 传入原始数据
  // layer.setData(props.points, {
  //   lnglat: 'lnglat'   // 指定坐标数据的来源，数据格式: 经度在前，维度在后，数组格式。
  // });
  //
  // // 配置样式
  // layer.setOptions({
  //   unit: 'px',
  //   style: {
  //     radius: 1.2,     // 圆形半径，单位像素
  //     color: '#14B4C9', // 填充颜色
  //     borderWidth: 0.5,   // 边框宽度
  //     borderColor: '#14B4C9'  // 边框颜色
  //   }
  // });
  //
  // layer.render();
};

// 初始化自定义信息框
const initInfoWindow = () => {
  infoWindow = new AMap.InfoWindow({
    isCustom: true,  //使用自定义窗体
    content: null,
    offset: new AMap.Pixel(0, -20)
  });
  window.closeInfoWindow = closeInfoWindow;
};

// 打开信息框
const openInfoWindow = (e) => {
  let info = `<div class='infoWindowBox'>
                        <p class='flex just-b' style='border-bottom: 1px dashed rgba(255,255,255,0.7)'>
                            <span class='beyond_eip' style='flex: 1;margin: 0 10px;' title='${e.data.name}'>${e.data.name} </span>
                            <i onclick='closeInfoWindow()' class='iconfont icon-guanbi cursor'></i>
                        </p>
                        <div class='flex just-b'>
                            <div class='cardCricle flex just-c align-c' style='--clr:${'green'};--num:${60};'>
                              <div class='dot'></div>
                              <svg>
                                <circle cx='50' cy='50' r='50'></circle>
                                <circle cx='50' cy='50' r='50'></circle>
                              </svg>
                              <div class='num flex just-c align-c'> 标签数: 90 条 </div>
                            </div>
                            <div class='flex just-c align-c' style='width: 40%;'>
                                设备离线
                            </div>
                        </div>
                       </div>`;

  //构建信息窗体中显示的内容
  infoWindow.setContent(info);
  infoWindow.open(map, e.coordinates || e.data.lnglat || e.data.data.position);
};

// 关闭信息框
const closeInfoWindow = () => {
  infoWindow.close();
};

// car动画轨迹
const initMoveAnimation = () => {
  // JSAPI2.0 使用覆盖物动画必须先加载动画插件
  new AMap.plugin('AMap.MoveAnimation', () => {
    let lineArr = props.lineArr;
    if (marker) {
      map.remove(marker);
      marker = null;
    }
    marker = new AMap.Marker({
      map: map,
      position: props.lineArr[0],
      icon: 'https://a.amap.com/jsapi_demos/static/demo-center-v2/car.png',
      offset: new AMap.Pixel(-13, -26)
    });
    // 绘制轨迹
    if (polyline) {
      map.remove(polyline);
      polyline = null;
    }
    polyline = new AMap.Polyline({
      map: map,
      path: lineArr,
      showDir: true,
      strokeColor: '#28F',  //线颜色
      // strokeOpacity: 1,     //线透明度
      strokeWeight: 6      //线宽
      // strokeStyle: "solid"  //线样式
    });
    if (passedPolyline) {
      map.remove(passedPolyline);
      passedPolyline = null;
    }
    passedPolyline = new AMap.Polyline({
      map: map,
      strokeColor: '#AF5',  //线颜色
      strokeWeight: 6      //线宽
    });
    marker.on('moving', (e) => {
      passedPolyline.setPath(e.passedPath);
      // map.setCenter(e.target.getPosition(), true);
    });
    marker.on('click', (e) => {
      marker.moveAlong(lineArr, {
        // 每一段的时长
        duration: 1000,//可根据实际采集时间间隔设置
        // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
        autoRotation: true
      });
    });
    // map.setFitView();
    window.startAnimation = () => {
      marker.moveAlong(lineArr, {
        // 每一段的时长
        duration: 1000,//可根据实际采集时间间隔设置
        // JSAPI2.0 是否延道路自动设置角度在 moveAlong 里设置
        autoRotation: true
      });
    };
    window.pauseAnimation = () => {
      marker.pauseMove();
    };
    window.resumeAnimation = () => {
      marker.resumeMove();
    };
    window.stopAnimation = () => {
      marker.stopMove();
    };
  });
};

// 标签点初始化
const initLabelsLayer = async () => {
  let geo = new Loca.GeoJSONSource({
    data: props.labelsLayer
  });
  let labelsLayer = (window.labelsLayer = new Loca.LabelsLayer({
    zooms: [10, 20]
  }));
  labelsLayer.setSource(geo);

  // labelsLayer.setStyle的配置项即AMap.LabelMarker的配置项
  labelsLayer.setStyle({
    icon: {
      type: 'image',
      image: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/charging_pile.png',
      size: [30, 50],
      offset: [0, 25],
      anchor: 'center'
    },
    text: {
      // 每项配置都可使用回调函数来动态配置
      content: (index, feat) => {
        return feat.properties.name;
      },
      style: {
        fontSize: 12,
        fontWeight: 'normal',
        fillColor: '#5CDE8E',
        strokeColor: '#000',
        strokeWidth: 2
      },
      direction: 'bottom'
    },
    extData: (index, feat) => {
      return feat.properties;
    }
  });
  loca.add(labelsLayer);

  labelsLayer.on('complete', () => {
    let normalMarker = new AMap.Marker({
      offset: [70, -15]
    });
    let labelMarkers = labelsLayer.getLabelsLayer().getAllOverlays();
    for (let marker of labelMarkers) {
      marker.on('click', (e) => {
        openInfoWindow(e);
      });
      // marker.on('mouseout', () => {
      //   map.remove(normalMarker);
      // });
    }
  });
};

// 动画点初始化
const initLabelsLayerEvent = async () => {
  let _events = props.labelsLayerEvent;
  let list = _events.map(e => {
    let ll = e.lngLat.split(',');
    let arr = [parseFloat(ll[0]), parseFloat(ll[1])];
    return {
      'type': 'Feature',
      'properties': {
        rawData: e
      },
      'geometry': {
        'type': 'Point',
        'coordinates': arr
      }
    };
  });

  let data = {
    'type': 'FeatureCollection',
    'features': list
  };
  let geo = new Loca.GeoJSONSource({
    data: data
  });
  let layer = new Loca.IconLayer({
    zIndex: 10,
    opacity: 1,
    visible: false
  });

  let trafficIcons = {
    0: 'https://a.amap.com/Loca/static/loca-v2/demos/images/accident.png',
    1: 'https://a.amap.com/Loca/static/loca-v2/demos/images/traffic-control.png',
    2: 'https://a.amap.com/Loca/static/loca-v2/demos/images/jam.png',
    3: 'https://a.amap.com/Loca/static/loca-v2/demos/images/construction.png',
    4: 'https://a.amap.com/Loca/static/loca-v2/demos/images/close.png',
    5: 'https://a.amap.com/Loca/static/loca-v2/demos/images/fog.png'
  };
  layer.setSource(geo);
  layer.setStyle({
    unit: 'px',
    icon: (index, feature) => {
      let data = feature.properties.rawData;
      let url = trafficIcons[data.type % Object.keys(trafficIcons).length];
      return url;
    },
    iconSize: [40, 40],
    rotation: 0,
    duration: 500,
    animate: true
  });

  loca.add(layer);
  setTimeout(() => {
    layer.show();
    layer.addAnimate({
      key: 'offset',
      value: [0, 1],
      easing: 'Linear',
      transform: 500,
      random: true,
      delay: 9000
    });
    layer.addAnimate({
      key: 'iconSize',
      value: [0, 1],
      easing: 'Linear',
      transform: 500,
      random: true,
      delay: 9000
    });
  }, 500);
  loca.animate.start();
};

// 热力图
const initHeatMap = async () => {
  let geo = new Loca.GeoJSONSource({
    data: props.hostMap
  });
  if (heatmap) {
    loca.remove(heatmap);
    heatmap = null;
  }
  heatmap = new Loca.HeatMapLayer({
    // loca,
    zIndex: 10,
    opacity: 1,
    visible: true,
    zooms: [2, 22]
  });

  heatmap.setSource(geo, {
    radius: 200000,
    unit: 'meter',
    height: 300000,
    //radius: 35,
    //unit: 'px',
    //height: 100,
    gradient: {
      0.1: '#2A85B8',
      0.2: '#16B0A9',
      0.3: '#29CF6F',
      0.4: '#5CE182',
      0.5: '#7DF675',
      0.6: '#FFF100',
      0.7: '#FAA53F',
      1: '#D04343'
    },
    value: function (index, feature) {
      return feature.properties.avg;
      let value = feature.properties.mom.slice(0, -1);
      return value + 10 * Math.random();
    },
    // min: -100,
    // max: 100,
    heightBezier: [0, .53, .37, .98]
  });
  loca.add(heatmap);

  heatmap.addAnimate({
    key: 'height',
    value: [0, 1],
    duration: 2000,
    easing: 'BackOut'
    // yoyo: true,
    // repeat: 2,
  });
  heatmap.addAnimate({
    key: 'radius',
    value: [0, 1],
    duration: 2000,
    easing: 'BackOut',
    // 开启随机动画
    transform: 1000,
    random: true,
    delay: 5000
  });
  // map.on('click', function (e) {
  //   let feat = heatmap.queryFeature(e.pixel.toArray());
  //   if(feat){
  //     map.clearMap();
  //     map.add(new AMap.Marker({
  //       position:feat.lnglat,
  //       anchor: 'bottom-center',
  //       content: '<div style="margin-bottom: 15px; border:1px solid #fff; border-radius: 4px;color: #fff; width: 150px; text-align: center;">热力值: '+ feat.value.toFixed(2) +'</div>'
  //     }));
  //   }
  // });
};

// 区域初始化
const initPolygon = async (data) => {
  let polygon = new AMap.Polygon({
    path: data,
    fillColor: '#1A232C',
    strokeOpacity: 1,
    fillOpacity: 0,
    strokeColor: '#2b8cbe',
    strokeWeight: 1,
    strokeStyle: 'dashed',
    strokeDasharray: [5, 5]
  });
  polygon.on('mouseover', () => {
    polygon.setOptions({
      fillOpacity: 0,
      fillColor: '#334456'
    });
  });
  polygon.on('mouseout', () => {
    polygon.setOptions({
      fillOpacity: 0,
      fillColor: '#1A232C'
    });
  });
  map.add(polygon);
};

// 监听数据变化更新
watch(() => props.points, (n) => {
  initPoint();
});
watch(() => props.lineArr, (n) => {
  initMoveAnimation();
});
watch(() => props.labelsLayer, (n) => {
  initLabelsLayer();
});
watch(() => props.labelsLayerEvent, (n) => {
  initLabelsLayerEvent();
});
watch(() => props.hostMap, (n) => {
  initHeatMap();
});
watch(() => store.isDark, (n) => {
  let type = store.isDark ? 1 : 0;
  map.setMapStyle(mapStyle[type]);
});
onBeforeMount(async () =>{
  await toPromise.toPromise();
  await toPromiseLoca.toPromise();
  nextTick();
  initMap();
})

onBeforeUnmount(() => {
  if (map) map.destroy();
});
</script>

