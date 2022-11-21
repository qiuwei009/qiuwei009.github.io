<template>
  <div id="monitor" class="monitor">
    <div ref="mapDom" class="map"></div>
    <div class="contore" @mouseleave.stop="state.contore = false">
      <div class="header darkcolor flex align-c just-c cursor" @mouseenter.stop="state.contore = true">
        <img alt="icon" src="../../../../assets/image/app/index-icon8.png" style="vertical-align: middle"> 地图展示 </div>
      <div :style="state.contore?'height:350px;transition: height .3s;overflow: hidden;':'height:0;transition: height .3s;overflow: hidden;'">
        <el-scrollbar :native="false" :noresize="false" max-height="350px" tag="div">
          <div>
            <div class="item">选择展示项目</div>
            <div class="item">
              <Jointlevel :data="state.project" @checkId="state.selectProject"></Jointlevel>
            </div>
            <div class="item">噪声区域</div>
            <div class="item">
              <Jointlevel ref="gridSelect" :data="noise.grid" @checkId="noise.selectGrid"></Jointlevel>
            </div>
            <div class="item">是否显示数值</div>
            <div class="item" style="padding-bottom: 5px;">
              <i :class="state.show?'icon-circleyuanquan':'icon-circle2yuanquan'" class="iconfont cursor" style="margin: 0 10px;" @click="state.textShow()">&nbsp;显示数值</i>
            </div>
          </div>
        </el-scrollbar>
      </div>
    </div>
    <div class="contoreSearch" @mouseenter="state.searchBtn = true" @mouseleave="state.searchBtn = false">
      <el-input v-model="state.search" clearable placeholder="站点搜索">
        <template #prefix>
          <i class="iconfont icon-RectangleCopy2" style="font-size: 20px;line-height: 42px;"></i>
        </template>
      </el-input>
      <div class="contoreSearch-item">
        <el-scrollbar :native="false" :noresize="false" max-height="300px" tag="div">
          <div>
            <p v-for="i in state.points2.filter(j => j.name.includes(state.search)&&j.stationType !== '区域')" :key="i.name" :style="state.searchBtn?'height:40px;':''" class="item" @click.prevent="state.searchClick(i)">
              {{ i.stationType === '噪声' ? i.name : i.sectionName }}</p>
          </div>
        </el-scrollbar>
      </div>
    </div>
    <div class="fl typeImg">
      <img alt="" src="../../../../assets/image/mapIcon/typeImg.png">
    </div>
    <div :class="noise.noiseTrend.show?'noiseTrendActive':'h0'" class="noiseTrend darkcolor">
      <p class="flex just-b top-p-60">
        <span class=" flex align-c transparent" style="color: #fff">噪音-趋势分析</span>
        <i class="iconfont cursor icon-guanbi hide" @click="noise.closeNoise()"></i>
      </p>
      <div class="flex">
        <div class="col-1 transparent" style="height: 35vh;">
          <el-scrollbar :native="false" :noresize="false" tag="div">
            <p v-for="i in noise.arr.list" :key="i.name" :style="i.param === noise.arr.act?'background:cornflowerblue':''" class="noise-li" @click="noise.getNoiseTrend(noise.arr.data,i)">
              {{ i.name }}</p>
          </el-scrollbar>
        </div>
        <div class="col-11 transparent" style="height: 35vh;">
          <Echart :options="noise.noiseTrend.options"></Echart>
        </div>
      </div>
    </div>
    <div :class="noise.noiseList.show?'noiseListActive':''" class="noiseList darkcolor">
      <p class="flex just-b top-p-60">
        <span class="flex align-c">
          <span>噪声列表</span>
        </span> <i class="iconfont cursor icon-guanbi hide" @click="noise.noiseList.show = false"></i>
      </p>
      <div class="h100-60 flex">
        <div class="noiseListBtn" @click="noise.getNoiseOnline">
          <span>噪声列表</span>
        </div>
        <Table :list="noise.noiseList.list">
          <template v-slot:selectAll>
            <div class="flex just-c align-c omit" style="flex: 0 0 50px">定位</div>
          </template>
          <template v-slot:selectBtn="{item}">
            <div class="cursor but text-color flex just-a align-c omit" style="flex: 0 0 50px">
              <i class="iconfont iconfontHover icon-dingwei1" @click="state.setZoomAndCenter(item,'hover')"></i>
            </div>
          </template>
        </Table>
      </div>
    </div>
    <div :class="device.section.show?'noiseTrendActive':''" class="noiseTrendS col-6 darkcolor">
      <p class="flex just-b top-p-60">
        <span class="flex align-c">
          <span>标段列表</span>
          <span style="margin-left: 20px;">{{ device.currDataS.projectName }}</span>
        </span> <i class="iconfont cursor icon-guanbi hide" @click="device.section.show = false"></i>
      </p>
      <div class="h100-60 flex">
        <Table :list="device.section.list" @handleLi="device.getStation">
          <template v-slot:selectAll>
            <div class="flex just-c align-c omit" style="flex: 0 0 50px">定位</div>
          </template>
          <template v-slot:selectBtn="{item}">
            <div class="cursor but text-color flex just-a align-c omit" style="flex: 0 0 50px">
              <i class="iconfont iconfontHover icon-dingwei1" @click="state.setZoomAndCenter(item,'hover')"></i>
            </div>
          </template>
          <template v-slot:rightTitle></template>
          <template v-slot:rightBtn="{item}">
            <div class="cursor but text-color flex just-a align-c " style="position: relative">
              <i :class="device.section.active === item.id?'activeIcon':'dis'" class="iconfont icon-you-jiantou" title=""></i>
            </div>
          </template>
        </Table>
      </div>
    </div>
    <div :class="device.station.show?'noiseTrendActive':''" class="noiseTrendD col-6 darkcolor">
      <p class="flex just-b top-p-60">
        <span class="flex align-c">
          <span>测点列表</span>
          <span style="margin-left: 20px;">{{ device.currData.sectionName || device.currData.name }}</span>
        </span> <i class="iconfont cursor icon-guanbi hide" @click="device.station.show = false"></i>
      </p>
      <div class="h100-60 flex">
        <Table :list="device.station.list">
          <template v-slot:selectAll>
            <!--            <div class="flex just-c align-c omit" style="flex: 0 0 50px">定位</div>-->
          </template>
          <template v-slot:selectBtn="{item}">
            <!--            <div class="cursor but text-color flex just-a align-c omit"-->
            <!--                 style="flex: 0 0 50px">-->
            <!--              <i class="iconfont iconfontHover icon-dingwei1" @click="state.setZoomAndCenter(item,'hover')"></i>-->
            <!--            </div>-->
          </template>
        </Table>
      </div>
    </div>
    <!--缩放按钮-->
    <div id="zoomBtn">
      <i> <img alt="icon" src="../../../../assets/image/mapControl/zoom0.png" style="width: 100%;">
        <ul>
          <li :class="state.mapType === 0 ? 'active' : ''" @click="state.setMapType(0)">
            <img alt="icon" src="../../../../assets/image/mapControl/map1.png" style="border-radius: 3px;width: 100px;">
          </li>
          <li :class="state.mapType === 1 ? 'active' : ''" @click="state.setMapType(1)">
            <img alt="icon" src="../../../../assets/image/mapControl/map2.png" style="border-radius: 3px;width: 100px;">
          </li>
          <li :class="state.mapType === 2 ? 'active' : ''" @click="state.setMapType(2)">
            <img alt="icon" src="../../../../assets/image/mapControl/map3.png" style="border-radius: 3px;width: 100px;">
          </li>
          <li>
            <img alt="icon" src="../../../../assets/image/mapControl/map5.png" style="margin-top: 10px">
          </li>
        </ul>
      </i> <i @click="state.mapZoomBtn(true)">
      <img alt="icon" src="../../../../assets/image/mapControl/zoom1.png" style="width: 100%;"> </i>
      <i @click="state.mapZoomBtn(false)">
        <img alt="icon" src="../../../../assets/image/mapControl/zoom2.png" style="width: 100%;"> </i>
    </div>
  </div>
</template>

<script name="/monitor" setup>
import {computed, onActivated, onBeforeUnmount, onDeactivated, onMounted, reactive, ref, watch} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from '~/pinia/useStore';
import {get} from '../../../../utils/request';
import Map from './map';
// store - pina仓库
const store = useStore();
const route = useRouter();
let script2 = null;
// ref - dom
const mapDom = ref(null);
const gridSelect = ref(null);
// 地图实例
let mapIns = null;
// 基础数据声明
const state = reactive({
  // 地图展示显示
  contore: false,
  // 地图主题数据
  mapStyle: [
    '',
    'amap://styles/grey',
    'amap://styles/darkblue'
  ],
  // 地图主题
  mapType: 0,
  // 地图样式设置
  setMapType(val) {
    state.mapType = val;
    mapIns.map.setMapStyle(state.mapStyle[val]);
  },
  // 地图缩放
  setZoomAndCenter(row, type) {
    row['lnglat'] = {
      lng: row.stationLng || row.lng,
      lat: row.stationLat || row.lat,
      Q: row.stationLat || row.lat,
      R: row.stationLng || row.lng
    };
    mapIns.map.setZoomAndCenter(15, {
      lng: Number(row.stationLng) + 0.018 || Number(row.lng) + 0.018,
      lat: row.stationLat || row.lat,
      Q: row.stationLat || row.lat,
      R: Number(row.stationLng) + 0.018 || Number(row.lng) + 0.018
    });
    mapIns.openInfoWindow(row, type);
  },
  // 地图放大缩小
  mapZoomBtn(falg) {
    if (falg === true) {
      mapIns.map.setZoom(mapIns.map.getZoom() + 1);
    } else {
      mapIns.map.setZoom(mapIns.map.getZoom() - 1);
    }
  },
  // 地图点位总数据(绘制时的数据)
  points: computed(() => {
    console.log([...new Set([...noise.points, ...device.points, ...transport.points])], '[...new Set([...noise.points, ...device.points, ...transport.points])]');
    return [...new Set([...noise.points, ...device.points, ...transport.points])];
  }),
  points2: computed(() => {
    return _.clone([...new Set([...noise.points, ...device.points, ...transport.points])]);
  }),
  // 点位显示选择
  project: {
    name: 'project',
    list: [
      {name: '噪音', id: 1, child: []},
      {name: '运输', id: 2, child: []},
      {name: '测振', id: 3, child: []}
    ],
    key: 'name',
    value: 'id',
    checkId: [1, 2, 3],
    child: 'children',
    column: true,
    column2: true,
    single: false
  },
  selectProject: () => {
    if (!state.project.checkId.includes(1)) {
      noise.points = [];
    } else {
      noise.points = noise.points2;
    }
    if (!state.project.checkId.includes(2)) {
      device.points = [];
    } else {
      device.points = device.points2;
    }
    if (!state.project.checkId.includes(3)) {
      transport.points = [];
    } else {
      transport.points = transport.points2;
    }
    mapIns.closeInfoWindow1();
    mapIns.closeAnimation();
    mapIns.drawPoint();
  },
  // 搜索值
  search: '',
  searchBtn: false,
  // 搜索点击
  searchClick(i) {
    // noise.search = i.stationAlias
    state.searchBtn = false;
    state.setZoomAndCenter(i, 'click');
  },
  // 是否显示数值
  show: true,
  textShow() {
    if (state.points.length > 0) {
      this.show = !this.show;
      mapIns.drawValue(this.show);
    } else {
      this.show = false;
      mapIns.drawValue(this.show);
    }
  },
  time: null // 定时刷新
});
// 噪音数据fun
const noise = reactive({
  timefz: null,
  allGrid: [],
  // 点位
  points: [],
  // COPY点位
  points2: [],
  // 地图图标数据STYLE
  icon: {
    2: [0, 1, 2, 3, 4, 5, 6],
    3: [7, 8, 9, 10, 11, 12, 13]
  },
  // 噪声区域
  grid: {
    name: 'noiseGrid',
    list: [],
    key: 'name',
    value: 'id',
    checkId: [],
    child: 'children',
    column: true,
    column2: true,
    single: false
  },
  // 获取站点区域
  async getPoints() {
    let res = await get('/monitoring/noiseMonitor/map', {}, false, false);
    if (res.code === 200) {
      noise.points = [];
      noise.points2 = [];
      noise.getStation(res.data);
      noise.grid.list = res.data;
      gridSelect.value.state.all(true);
      mapIns.drawPoint();
    }
  },
  async getPoints2() {
    let res = await get('/monitoring/noiseMonitor/map', {}, false, false);
    if (res.code === 200) {
      noise.points = [];
      noise.points2 = [];
      noise.getStation(res.data);
      noise.grid.list = res.data;
      mapIns.drawPoint();
      if (mapIns.infoData && mapIns.infoData.stationType === '噪声' && mapIns.infoData.gridId) {
        mapIns.openInfoWindow(mapIns.infoData, 'click');
      }
    }
  },
  // 点位显示选择触发
  selectGrid() {
    noise.points = [];
    noise.points2 = [];
    noise.getStation(noise.grid.list);
    mapIns.closeInfoWindow1();
    mapIns.closeAnimation();
    mapIns.drawPoint();
  },
  // 噪声根据树节点获取地图点位
  getStation(data) {
    // 统计初始化
    data.forEach((i) => {
      i['num'] = 0;
      i['onlineNum'] = 0;
      i['stationType'] = '噪声';
      if (i.children && i.children.length > 0) {
        noise.getStation(i.children);
      }
      if (noise.grid.checkId.includes(i.id)) {
        // 一级区域数据处理
        i['num'] += i.stations.length;
        i.style = 34;
        i['stationType'] = '区域';
        i.lnglat = {
          lng: Number(i.centrePoint.split(',')[0]),
          lat: Number(i.centrePoint.split(',')[1]),
          Q: Number(i.centrePoint.split(',')[1]),
          R: Number(i.centrePoint.split(',')[0])
        };
        noise.points.push(i);
        noise.points2.push(i);
        // 站点数据处理
        if (i.stations && i.stations.length > 0) {
          i.stations.forEach((j) => {
            j.lnglat = {
              lng: j.lng,
              lat: j.lat,
              Q: j.lat,
              R: j.lng
            };
            j['stationType'] = '噪声';
            if (!j.status) {
              j.value = '-';
              j.style = 0;
            } else {
              i['onlineNum']++;
              j.style = 1;
            }
            if (mapIns.infoData && mapIns.infoData.id === j.id) {
              mapIns.openInfoWindow(j, 'click');
            }
            noise.points.push(j);
            noise.points2.push(j);
          });
        }
        // 子区域数据处理
        if (i.children && i.children.length > 0) {
          noise.getStation(i.children);
          // i.children.forEach((k) => {
          //   i["num"] += k.num;
          //   i["onlineNum"] += k.onlineNum;
          // });
        }
      }
    });
  },
  // 今日小时数据参数选择数据
  arr: {
    list: [
      {
        name: '噪声',
        param: 'noise'
      },
      {
        name: 'L5',
        param: 'l5'
      },
      {
        name: 'L10',
        param: 'l10'
      },
      {
        name: 'L50',
        param: 'l50'
      },
      {
        name: 'L90',
        param: 'l90'
      },
      {
        name: 'L95',
        param: 'l95'
      },
      {
        name: 'LMx',
        param: 'lmx'
      },
      {
        name: 'LMn',
        param: 'lmn'
      },
      {
        name: 'Leq',
        param: 'leq'
      }
    ],
    act: 1,
    id: '',
    data: {}
  },
  // 噪音当日小时数据
  noiseTrend: {
    show: false,
    options: {
      title: {
        text: '',
        show: false
      },
      tooltip: {
        trigger: 'axis',
        name: 'noiseTrendEcharts',
        axisPointer: {
          type: 'line',
          name: '12312312',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {
            backgroundColor: 'rgba(34,34,38,0.9)'
          }
        }
      },
      grid: {
        left: 40,
        right: 10,
        bottom: 10,
        top: 10,
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: [],
          splitLine: {
            show: false, // 区域线是否显示
            //  改变样式
            lineStyle: {
              color: '#ccc' // 修改区域线颜色
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {//坐标轴刻度标签的相关设置。
            formatter: function (params) {
              var newParamsName = '';// 最终拼接成的字符串
              var paramsNameNumber = params.length;// 实际标签的个数
              var provideNumber = 10;// 每行能显示的字的个数
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
              /**
               * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
               */
              // 条件等同于rowNumber>1
              if (paramsNameNumber > provideNumber) {
                /** 循环每一行,p表示行 */
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = '';// 表示每一次截取的字符串
                  var start = p * provideNumber;// 开始截取的位置
                  var end = start + provideNumber;// 结束截取的位置
                  // 此处特殊处理最后一行的索引值
                  if (p == rowNumber - 1) {
                    // 最后一次不换行
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    // 每一次拼接字符串并换行
                    tempStr = params.substring(start, end) + '\n';
                  }
                  newParamsName += tempStr;// 最终拼成的字符串
                }

              } else {
                // 将旧标签的值赋给新标签
                newParamsName = params;
              }
              //将最终的字符串返回
              return newParamsName;
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          splitLine: {
            //  改变样式
            lineStyle: {
              color: '#3e3f41', // 修改区域线颜色
              type: 'dashed'
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          }
        }
      ],
      series: [
        {
          type: 'line',
          itemStyle: {
            color: '#407efb'
          },
          areaStyle: {
            color: 'rgba(44,114,225, 0.5)'
          },
          lineStyle: {
            type: 'solid',
            color: '#407efb'
          },
          data: []
        }
      ]
    }
  },
  // 获取当日小时数据
  async getNoiseTrend(data, param) {
    noise.arr.act = param.param;
    noise.arr.id = data.id;
    noise.arr.data = data;
    let res = await get('/monitoring/noiseMonitor/realData', {
      stationId: data.id,
      key: param.param
    });
    if (res.code === 200) {
      let x = [],
          y = [];

      res.data.forEach((i) => {
        y.push(i.value);
        x.push(i.time);
      });
      noise.noiseTrend.show = true;
      noise.noiseList.show = false;

      device.section.show = false;
      device.station.show = false;
      this.noiseTrend.options.xAxis[0].data = x;
      this.noiseTrend.options.series[0].data = y;
    }
    window.clearInterval(state.time);
    window.clearInterval(noise.timefz);
    state.time = setInterval(() => {
      noise.getPoints2();
      device.getPoints2();
    }, 30000);
    noise.timefz = setInterval(async () => {
      let res = await get('/monitoring/noiseMonitor/realData', {
        stationId: data.id,
        key: param.param
      }, false, false);
      if (res.code === 200) {
        let x = [],
            y = [];

        res.data.forEach((i) => {
          y.push(i.value);
          x.push(i.time);

        });


        noise.noiseTrend.show = true;
        noise.noiseList.show = false;
        device.section.show = false;
        device.station.show = false;
        this.noiseTrend.options.xAxis[0].data = x;
        this.noiseTrend.options.series[0].data = y;
      }
    }, 30000);
  },
  closeNoise() {
    noise.noiseTrend.show = false;
    window.clearInterval(noise.timefz);

    noise.arr.id = '';
  },
  // 噪声在线列表
  noiseList: {
    show: false,
    list: {
      header: [
        {name: '站点', width: '120px', key: 'stationName', color: ''},
        {name: '噪声', width: '60px', key: 'noise', color: '', rang: true},
        {name: 'L5', width: '60px', key: 'l5', color: '', rang: true},
        {name: 'L10', width: '60px', key: 'l10', color: '', rang: true},
        {name: 'L50', width: '60px', key: 'l50', color: '', rang: true},
        {name: 'L90', width: '60px', key: 'l90', color: '', rang: true},
        {name: 'L95', width: '60px', key: 'l95', color: '', rang: true},
        {name: 'LMx', width: '60px', key: 'lmx', color: '', rang: true},
        {name: 'LMn', width: '60px', key: 'lmn', color: '', rang: true},
        {name: 'Leq', width: '60px', key: 'leq', color: '', rang: true}
      ],
      name: 'noiseListTable',
      rows: [],
      page: 1,
      size: 20,
      total: 0,
      currentPage: 1,
      select: {
        id: 'id',
        open: false, // 是否开启多项选中
        selectAll: false, //全选
        isIndeterminate: false, // 中间状态
        selectId: [] // 选中ID
      }
    }
  },
  // 获取噪声在线列表
  async getNoiseOnline() {
    noise.noiseTrend.show = false;
    noise.noiseList.show = true;
    noise.closeNoise();
    device.section.show = false;
    device.station.show = false;
    let res = await get('/monitoring/noiseMonitor/online', {
      sname: '',
      page: this.noiseList.list.page,
      size: this.noiseList.list.size
    });
    if (res.code === 200) {
      this.noiseList.list.rows = res.data;
      this.noiseList.list.total = res.data.length;
    }
  }
});
// 轨道数据fun
const device = reactive({
  currData: {},
  currDataS: {},
  // 点位
  points: [],
  // COPY点位
  points2: [],
  // 地图图标数据STYLE
  icon: {
    4: [0, 1, 2, 3, 4, 5, 6],
    5: [7, 8, 9, 10, 11, 12, 13]
  },
  // 获取站点区域
  async getPoints() {
    let res = await get('/monitoring/track/', {}, false, false);
    if (res.code === 200) {
      res.data.forEach(i => {
        i['lat'] = i.sectionLat;
        i['lng'] = i.sectionLng;
        i['stationType'] = '轨道';
        i['lnglat'] = {
          Q: i.sectionLat,
          R: i.sectionLng,
          lat: i.sectionLat,
          lng: i.sectionLng
        };
        i['style'] = 14;
        i['name'] = i.projectName;
      });
      this.points = res.data;
      this.points2 = _.clone(this.points);
      mapIns.drawPoint();
    }
  },
  async getPoints2() {
    let res = await get('/monitoring/track/', {}, false, false);
    if (res.code === 200) {
      res.data.forEach(i => {
        i['lat'] = i.sectionLat;
        i['lng'] = i.sectionLng;
        i['stationType'] = '轨道';
        i['lnglat'] = {
          Q: i.sectionLat,
          R: i.sectionLng,
          lat: i.sectionLat,
          lng: i.sectionLng
        };
        i['style'] = 14;
        i['name'] = i.projectName;
      });
      this.points = res.data;
      this.points2 = _.clone(this.points);
      mapIns.drawPoint();
    }
  },
  // 获取项目下测点标段
  async getPointsNum(data) {
    let res = await get(`/monitoring/track/device`, {
      sectionId: data.sectionId,
      page: 1,
      size: 20,
      begin: new Date(new Date()).format('yyyy-MM-dd ' + '00:00:00'),
      end: new Date(new Date()).format('yyyy-MM-dd ' + '23:59:59')
    });
    if (res.code === 200) {
      //'canvasS',
      let arr = ['canvasD'], color = ['#00ff2a', '#42C7FF'],
          data = [
            // {
            //   num: res.data.sCount,
            //   name: '标段数',
            //   nuit: '',
            //   total: 100
            // },
            {
              num: res.data.total,
              name: '测点数',
              nuit: '',
              total: 100
            }
          ];
      mapIns.drawRaing(arr, color, data);
      device.station.list.rows = res.data.list;
      device.station.list.total = res.data.total;
    }
  },
  // 标段列表
  section: {
    show: false,
    active: '',
    list: {
      header: [
        {name: '标段名', width: '120px', key: 'name', color: ''},
        {name: '经度', width: '120px', key: 'lng', color: ''},
        {name: '纬度', width: '120px', key: 'lat', color: ''},
        {name: '设备数', width: '60px', key: 'deviceCount', color: ''},
        {name: '负责人', width: '60px', key: 'admin', color: ''},
        {name: '时间', width: '160px', key: 'createTime', color: ''}
      ],
      name: 'sectionTable',
      rows: [],
      page: 1,
      size: 20,
      total: 0,
      currentPage: 1,
      select: {
        id: 'id',
        open: false, // 是否开启多项选中
        selectAll: false, //全选
        isIndeterminate: false, // 中间状态
        selectId: [] // 选中ID
      }
    }
  },
  async getSection(data) {
    device.currDataS = data;
    let res = await get(`/monitoring/track/section/${data.projectId}`);
    if (res.code === 200) {
      noise.closeNoise();
      noise.noiseList.show = false;
      device.section.show = true;

      device.section.list.rows = res.data;
      device.section.list.total = res.data.length;
    }
  },
  // 测点列表
  station: {
    show: false,
    list: {
      header: [
        // {name: "项目名", width: "120px", key: "projectName", color: ""},
        // {name: "标段名", width: "120px", key: "sectionName", color: ""},
        // {name: "测点名", width: "120px", key: "stationName", color: ""},
        {name: '测点编码', width: '120px', key: 'device', color: ''},
        {name: 'x峰值', width: '60px', key: 'x', color: ''},
        {name: 'x2峰值', width: '60px', key: 'x2', color: ''},
        {name: 'y峰值', width: '60px', key: 'y', color: ''},
        {name: 'y2峰值', width: '60px', key: 'y2', color: ''},
        {name: 'z峰值', width: '60px', key: 'z', color: ''},
        {name: 'z2峰值', width: '60px', key: 'z2', color: ''},
        {name: '创建时间', width: '160px', key: 'createDate', color: ''}
      ],
      name: 'stationTable',
      rows: [],
      page: 1,
      size: 20,
      total: 0,
      currentPage: 1,
      select: {
        id: 'id',
        open: false, // 是否开启多项选中
        selectAll: false, //全选
        isIndeterminate: false, // 中间状态
        selectId: [] // 选中ID
      }
    }
  },
  async getStation(data) {
    device.section.active = data.id;
    device.currData = data;
    let res = await get(`/monitoring/track/device`, {
      enterpriseId: data.id ? data.enterpriseId : '',
      sectionId: data.id ? data.id : data.sectionId,
      page: 1,
      size: 20,
      begin: new Date(new Date()).format('yyyy-MM-dd ' + '00:00:00'),
      end: new Date(new Date()).format('yyyy-MM-dd ' + '23:59:59')
    });
    if (res.code === 200) {
      noise.closeNoise();
      noise.noiseList.show = false;
      device.station.show = true;

      device.station.list.rows = res.data.list;
      device.station.list.total = res.data.total;
    }
  }
});
// 运输数据fun
const transport = reactive({
  // 点位
  points: [],
  // COPY点位
  points2: [],
  // 地图图标数据STYLE
  icon: {
    4: [14, 15, 16, 17, 18, 19, 20],
    5: [21, 22, 23, 24, 25, 26, 27]
  },
  // 获取站点区域
  async getPoints() {
    let res = await get('/monitoring/noiseMonitor/map');
    if (res.code === 200) {
    }
  }
});
// 暗黑模式监听
watch(() => store.dark, (n) => {
  if (n === 'dark') state.setMapType(1);
  else state.setMapType(0);
});
// 路由监听
watch(() => route.currentRoute.value.path, (n) => {
      if (n === '/monitor') {
        state.time = setInterval(() => {
          noise.getPoints2();
          device.getPoints2();
        }, 30000);
        if (noise.arr.id) {
          noise.timefz = setInterval(async () => {
            let res = await get('/monitoring/noiseMonitor/realData', {
              stationId: noise.arr.id,
              key: noise.arr.act
            }, false, false);
            if (res.code === 200) {
              let x = [],
                  y = [];

              res.data.forEach((i) => {
                y.push(i.value);
                x.push(i.time);
              });
              noise.noiseTrend.show = true;
              noise.noiseList.show = false;

              device.section.show = false;
              device.station.show = false;
              this.noiseTrend.options.xAxis[0].data = x;
              this.noiseTrend.options.series[0].data = y;
            }
          }, 30000);
        }
      } else {
        window.clearInterval(state.time);
        window.clearInterval(noise.timefz);
        noise.arr.id = '';
      }
    }
);
// 生命周期 - 挂载完成（可以访问DOM元素）
onMounted(() => {
  // // 地图1.4 加载
  // script2 = document.createElement('script');
  // script2.type = 'text/javascript';
  // script2.src = 'https://webapi.amap.com/maps?v=1.4.15&key=b682d911b6c7244e2780328b2cf8b1a0&plugin=AMap.MapType,AMap.MouseTool';
  // document.head.appendChild(script2);
  // script2.onload = () => {
  //   // 地图创建
  //   mapIns = new Map(state, mapDom.value, noise, device, transport);
  //   state.time = setInterval(() => {
  //     noise.getPoints2();
  //     device.getPoints2();
  //   }, 30000);
  // };
  // 地图创建
  mapIns = new Map(state, mapDom.value, noise, device, transport);
  state.time = setInterval(() => {
    noise.getPoints2();
    device.getPoints2();
  }, 30000);
});


onBeforeUnmount(() => {
  script2 && script2.remove();
});
// 生命周期 - 销毁前（可以访问DOM元素）
onBeforeUnmount(() => {
  // 地图销毁
  mapIns.destroy();
  window.clearInterval(state.time);
  window.clearInterval(noise.timefz);
  noise.arr.id = '';
});
// 生命周期keep-alive - 进入页面（keep-alive独有）
onActivated(() => {
  store.setLoading(false);
  state.time = setInterval(() => {
    noise.getPoints2();
    device.getPoints2();
  }, 30000);
  if (noise.arr.id) {
    noise.timefz = setInterval(async () => {
      let res = await get('/monitoring/noiseMonitor/realData', {
        stationId: noise.arr.id,
        key: noise.arr.act
      }, false, false);
      if (res.code === 200) {
        let x = [],
            y = [];
        res.data.forEach((i) => {
          y.push(i.value);
          x.push(i.time);
        });
        noise.noiseTrend.show = true;
        noise.noiseList.show = false;
        device.section.show = false;
        device.station.show = false;
        this.noiseTrend.options.xAxis[0].data = x;
        this.noiseTrend.options.series[0].data = y;
      }
    }, 1000);
  }
});
//生命周期keep - alive - 离开（keep - alive独有）
onDeactivated(() => {
  window.clearInterval(state.time);
  window.clearInterval(noise.timefz);
});
</script>

<style lang="less" scoped>
.monitor{

  width:100%;
  height:100%;
  overflow:hidden;

  .map{
    width:100vw;
    height:100vh;
  }

  [class*='top-']{
    box-sizing:border-box;
    padding:0 15px;
  }

  .contore{
    position:absolute;
    top:15px;
    left:15px;
    z-index:3;
    width:190px;
    height:auto;
    box-shadow:5px 5px 12px 0 rgba(0, 0, 0, 0.5);
    background-color:rgba(29, 31, 43, 0.9);


    .header{
      height:40px;
      line-height:40px;
      font-size:15px;
      color:green;
      font-weight:bold;

      img{
        margin-right:5px;
      }
    }

    .item{
      position:relative;
      width:100%;
      min-height:40px;
      line-height:40px;
      border-bottom:1px solid rgba(0, 0, 0, 0.1);
      color:#cccccc;
      box-sizing:border-box;
      padding:0 10px;

      :deep(.icon-circle2yuanquan){
        &:before{
          color:#387dff !important;
        }
      }

      :deep(.icon-circleyuanquan){
        color:#387dff !important;
      }

      :deep(.Jointlevel){
        //border-left: 1px solid #387DFF;

        i{
          color:rgba(56, 125, 255, 0.5);
        }

        .line{
          &:after{
            border-left:1px solid #387dff;
          }
        }

        .childP{
          .child-line{
            &:after{
              border-bottom:1px solid #387dff;
            }
          }
        }
      }
    }
  }

  .contoreSearch{
    position:absolute;
    top:65px;
    left:15px;
    width:240px;
    background-color:rgba(29, 31, 43, 0.9);
    box-shadow:5px 5px 12px 0 rgba(0, 0, 0, 0.5);
    color:#fff;

    :deep(.el-scrollbar){
      box-sizing:border-box;
      padding:0 5px;
    }

    :deep(.el-input__inner){
      height:40px;
      line-height:40px;
      border-radius:0;
      text-indent:10px;
    }

    .contoreSearch-item{
      .item{
        height:0;
        line-height:40px;
        text-indent:10px;
        cursor:pointer;
        transition:all 0.2s;

        &:hover{
          background:#3d4157;
        }
      }

      i{
        font-size:20px;
        margin:4px 0 0;
      }

      :deep(.el-input__prefix){
        position:absolute;
        left:7px;
      }
    }
  }

  .typeImg{
    position:absolute;
    bottom:15px;
    left:10px;
  }

  .noiseTrend{
    position:absolute;
    left:0;
    bottom:-100%;
    width:100%;
    transition:all 0.4s;
    background:rgba(0, 0, 0, 0.7);
    z-index:997;

    .noise-li{
      height:40px;
      line-height:40px;
      text-align:center;
      color:#ffffff;
      cursor:pointer;
      margin:0 10px;
    }
  }

  .noiseTrendS{
    position:absolute;
    left:0;
    bottom:-100%;
    height:50%;
    transition:all 0.4s;
    background:rgba(0, 0, 0, 0.7);
    z-index:9;
    //    .darkcolor;

    .noise-li{
      height:40px;
      line-height:40px;
      text-align:center;
      color:#ffffff;
      cursor:pointer;
      margin:0 10px;
    }

    //:deep(.tableHeaderBox) {
    //  background: rgba(0, 0, 0, 0.3);
    //  .tableHeader {
    //    background: transparent;
    //  }
    //}
    //:deep(.table .tableContent .li:nth-child(2n - 1) .li_item div){
    //  background: rgba(0, 0, 0, 0.3);
    //}

  }

  .noiseTrendD{
    position:absolute;
    right:0;
    bottom:-100%;
    height:50%;
    transition:all 0.4s;
    background:rgba(0, 0, 0, 0.7);
    z-index:9;
    //    .darkcolor;

    .noise-li{
      height:40px;
      line-height:40px;
      text-align:center;
      color:#ffffff;
      cursor:pointer;
      margin:0 10px;
    }

    //:deep(.tableHeaderBox) {
    //  background: rgba(0, 0, 0, 0.3);
    //  .tableHeader {
    //    background: transparent;
    //  }
    //}
    //:deep(.table .tableContent .li:nth-child(2n - 1) .li_item div){
    //  background: rgba(0, 0, 0, 0.3);
    //}

  }

  .noiseTrendActive{
    bottom:0;
  }

  .noiseList{
    position:absolute;
    right:-100%;
    top:0;
    width:100%;
    height:100%;
    transition:all 0.4s;
    z-index:997;
  }

  @media only screen and (min-width:1000px){
    .noiseList{
      position:absolute;
      right:-50%;
      top:0;
      width:50%;
      height:100%;
      transition:all 0.4s;
      z-index:8;
    }
  }

  .noiseListBtn{
    position:absolute;
    left:-35px;
    top:50%;
    width:35px;
    height:160px;
    transform:translate(0, -50%);
    background:url('../../../../assets/image/mapIcon/monitor-bg.png') no-repeat;
    background-size:100% auto;
    display:flex;
    flex-wrap:wrap;
    color:#cccccc;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    z-index:9;

    span{
      font-size:14px;
      color:#fff;
      width:20px;
      text-align:center;
      display:inline-block;
      margin-top:5px;
      margin-left:5px;
    }
  }

  .noiseListActive{
    right:0;
  }

  .h0{
    //height: 0;
  }

  .activeIcon{
    font-size:12px !important;
    position:absolute;
    right:2px;
    color:#2e6fff;
  }

  .dis{
    position:absolute;
    right:0;
    opacity:0;
  }
}
</style>
