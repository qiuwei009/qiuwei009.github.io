<template>
  <div class='history darkcolor'>
    <div class='card flex column col-12 darkcolor' style='height: 100%;'>
      <div class='top-p-40 flex align-c'>
        <p>
          <span :class="state.type === 0?'select':''" class='condition cursor' @click='state.handleTypeChange(0)'>噪音历史</span>
          <!--          <span :class="state.type === 1?'select':''" class="condition cursor" @click="state.handleTypeChange(1)">轨道历史</span>-->
          <!--          <span :class="state.type === 2?'select':''" class="condition cursor" @click="state.handleTypeChange(2)">运输历史</span>-->
        </p>
      </div>
      <div class='flex wrap'>
        <div class='flex align-c'>
          <span class='flex condition align-c'>区域:</span>
          <el-select v-model='state.list.grid' clearable collapse-tags multiple placeholder='请选择区域' @change='state.handleGrid'>
            <el-option label='全选' value='-1' @click='state.handleGridAll(1)'/>
            <el-option v-for='item in state.list.gridArr' :key='item.id' :label='item.name' :value='item.id'/>
          </el-select>
        </div>
        <div class='flex align-c'>
          <span class='flex condition align-c'>站点:</span>
          <el-select v-model='state.list.station' clearable collapse-tags multiple placeholder='请选择站点' @change='state.handleStation'>
            <el-option label='全选' value='-1' @click='state.handleStationAll'/>
            <el-option v-for='item in state.list.stationArr' :key='item.id' :label='item.name' :value='item.id'/>
          </el-select>
        </div>
        <div class='flex align-c'>
          <span class='flex condition align-c'>开始时间:</span>
          <el-date-picker v-model='state.list.time[0]' placeholder='开始时间' type='datetime'/>
        </div>
        <div class='flex align-c'>
          <span class='flex condition align-c'>结束时间:</span>
          <el-date-picker v-model='state.list.time[1]' placeholder='结束时间' type='datetime'/>
        </div>
        <div class='flex align-c'>
          <span class='flex condition align-c'>数据类型:</span> <span class='getRoleBtn'>
            <span :class="state.list.type === 0?'select':''" class='cursor condition' @click='noise.getList(0)'>分钟值</span>
            <span :class="state.list.type === 1?'select':''" class='cursor condition' @click='noise.getList(1)'>小时值</span>
            <span :class="state.list.type === 2?'select':''" class='cursor condition' @click='noise.getList(2)'>日均值</span>
          </span>
        </div>
        <div class='flex align-c'>
          <Btn :info="{ id: 3, name: '查询', type: 'look', class: 'Btn', icon: '', title: '查询' }" @handleClick='noise.getList()'></Btn>
        </div>
        <div class='flex align-c' style='height: 50px;'>
          <Btn :info="{ id: 3, name: '下载', type: 'add', class: 'Btn', icon: 'icon-RectangleCopy36 rotatedown', title: '下载' }" @handleClick='state.down'></Btn>
        </div>
        <!--<div class="flex align-c">-->
        <!--  <span class="flex condition align-c">参数:</span>-->
        <!--  <p>-->
        <!--    <span v-for="i in state.list.paramsArr" :class="state.list.params.includes(i)?'select':''"-->
        <!--        class="condition cursor" @click="state.paramschange(i)">{{ i }}</span>-->
        <!--  </p>-->
        <!--</div>-->
      </div>
      <div class='col-auto'>
        <Table :list='state.list' @handleCurrentChange='state.handleCurrentChange'></Table>
      </div>
    </div>
    <Point :data='{show:state.pointMap,point:state.point}' @backPoint='state.backPoint'></Point>
  </div>
</template>

<script setup>
import {onMounted, reactive} from 'vue';
import {download, get} from '~/utils/request.js';

const state = reactive({
  pointMap: false,
  point: '104.044894,30.584891',
  backPoint(point) {
    state.pointMap = false;
  },
  // 项目切换
  type: 0,
  handleTypeChange(type) {
    state.type = type;
    state.list.select.selectId = []; // 清空选中数据
    state.list.select.selectAll = false; // 清空全选
    if (state.type === 0) { // 噪声查询
      noise.getList();
    } else if (state.type === 1) { // 轨道查询
      device.getList();
    } else if (state.type === 2) { // 运输查询
      transport.getList();
    }
  },
  // 表格数据
  list: {
    name: 'noiseList',
    header: [],
    rows: [],
    page: 1,
    size: 20,
    total: 100,
    currentPage: 1,
    select: {
      open: false, // 是否开启多项选中
      selectAll: false, //全选
      isIndeterminate: false,// 中间状态
      selectId: [] // 选中ID
    },
    grid: null,
    gridArr: [],
    station: null,
    stationArr: [],
    time: [new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), new Date()],
    type: 0,
    typeArr: ['dur', 'hour', 'day'],
    num1: 0,
    num2: 2000,
    params: ['PM10'],
    paramsArr: ['PM10', 'PM25', 'NO2', 'SO2', 'CO', 'CO2', 'O3', 'VOC']
  },
  handleCurrentChange(obj) {
    if (state.type === 0) { // 噪声查询
      state.list.select.selectId = []; // 清空选中数据
      state.list.select.selectAll = false; // 清空全选
      state.list.page = obj.page;
      noise.getList();
    } else if (state.type === 1) { // 轨道查询

    } else if (state.type === 2) { // 运输查询

    }
  },
  // 参数
  paramschange(val) {
    const index = state.list.params.indexOf(val);
    if (index !== -1) {
      state.list.params.splice(index, 1);
    } else {
      state.list.params.push(val);
    }
  },
  // 区域
  tree: [],
  getTreeData(list, id) {
    // 初始化
    if (id === 'init') {
      list.forEach(i => {
        state.list.gridArr.push(i);
        if (i.children && i.children.length > 0) {
          state.getTreeData(i.children, id);
        }
      });
    } else {
      list.forEach(i => {
        if (i.id === id) {
          state.list.stationArr = state.list.stationArr.concat(i.stations);
        }
        if (i.children && i.children.length > 0) {
          state.getTreeData(i.children, id);
        }
      });
    }
  },
  async getGrid() {
    let res = await get('/monitoring/noiseMonitor/map');
    if (res.code === 200) {
      state.list.gridArr = [];
      state.tree = res.data;
      state.getTreeData(res.data, 'init');
    }
  },
  falgG: true,
  handleGridAll(val) {
    if (state.falgG) {
      state.list.grid = ['-1'];
      state.list.stationArr = [];
      state.list.gridArr.forEach(i => {
        state.list.grid.push(i.id);
        state.getTreeData(state.tree, i.id);
      });
      state.list.station = ['-1'];
      state.list.stationArr.forEach(i => {
        state.list.station.push(i.id);
      });
    } else {
      state.list.grid = [];
      state.list.stationArr = [];
      state.list.station = [];
    }
    if (val) state.falgG = !state.falgG;
  },
  handleGrid() {
    if (state.list.grid.includes('-1') && state.list.grid.length === state.list.gridArr.length) {
      let index = state.list.grid.indexOf('-1');
      if (index !== '-1') state.list.grid.splice(index, 1);
      state.falgG = true;
    } else if (!state.list.grid.includes('-1') && state.list.grid.length === state.list.gridArr.length) {
      state.list.grid.push('-1');
      state.falgG = false;
    }
    state.list.stationArr = [];
    state.list.station = [];
    state.list.grid.forEach(i => {
      state.getTreeData(state.tree, i);
    });
    state.list.stationArr.forEach(i => {
      state.list.station.push(i.id);
    });
    if (state.list.stationArr.length === state.list.station.length) state.list.station.push('-1');
  },
  falgS: true,
  handleStationAll() {
    if (state.falgS) {
      state.list.station = ['-1'];
      state.list.stationArr.forEach(i => {
        state.list.station.push(i.id);
      });
    } else {
      state.list.station = [];
    }
    state.falgS = !state.falgS;
  },
  handleStation() {
    if (state.list.station.includes('-1') && state.list.station.length === state.list.stationArr.length) {
      let index = state.list.station.indexOf('-1');
      if (index !== '-1') state.list.station.splice(index, 1);
      state.falgS = true;
    } else if (!state.list.station.includes('-1') && state.list.station.length === state.list.stationArr.length) {
      state.list.station.push('-1');
      state.falgS = false;
    }
  },
  // 下载
  async down() {
    if (state.type === 0) { // 噪声下载
      noise.down();
    } else if (state.type === 1) { // 轨道下载

    } else if (state.type === 2) { // 运输下载

    }
  }
});

const noise = reactive({
  async getList(type) {
    state.list.header = [
      {name: '区域', width: '60px', key: 'gridName', color: '#9495a9'},
      {name: '站点', width: '60px', key: 'stationName', color: '#9495a9'},
      {name: '设备', width: '160px', key: 'deviceId', color: '#9495a9'},
      {name: '噪声', width: '60px', key: 'noise', color: '', rang: true},
      {name: 'L5', width: '60px', key: 'l5', color: '', rang: true},
      {name: 'L10', width: '60px', key: 'l10', color: '', rang: true},
      {name: 'L50', width: '60px', key: 'l50', color: '', rang: true},
      {name: 'L90', width: '60px', key: 'l90', color: '', rang: true},
      {name: 'L95', width: '60px', key: 'l95', color: '', rang: true},
      {name: 'LMx', width: '60px', key: 'lmx', color: '', rang: true},
      {name: 'LMn', width: '60px', key: 'lmn', color: '', rang: true},
      {name: 'Leq', width: '60px', key: 'leq', color: '', rang: true},
      {name: '时间', width: '180px', key: 'avgDate', color: '', rang: true}
    ];
    // 重新点击type查询 OR 刷新查询
    if (type === 0 || type) {
      state.list.page = 1;
      state.list.type = type;
    }
    let arrStation = _.clone(state.list.station),
        arrGrid = _.clone(state.list.grid);
    if (arrStation.includes('-1')) arrStation.splice(arrStation.indexOf('-1'), 1);
    if (arrGrid.includes('-1')) arrGrid.splice(arrGrid.indexOf('-1'), 1);
    let res = await get('/monitoring/his/data', {
      page: state.list.page,
      size: state.list.size,
      begin: new Date(state.list.time[0]).format('yyyy-MM-dd hh:mm:ss'),
      end: new Date(state.list.time[1]).format('yyyy-MM-dd hh:mm:ss'),
      type: state.list.typeArr[state.list.type],
      key: arrStation.toString(),
      grid: arrGrid.toString()
    });
    if (res.code === 200) {
      state.list.rows = res.rows;
      state.list.total = res.total;
    }
  },
  async down() {
    let arrStation = _.clone(state.list.station),
        arrGrid = _.clone(state.list.grid);
    if (arrStation.includes('-1')) arrStation.splice(arrStation.indexOf('-1'), 1);
    if (arrGrid.includes('-1')) arrGrid.splice(arrGrid.indexOf('-1'), 1);
    await download(`/monitoring/his/upload`, {
      page: state.list.page,
      size: state.list.size,
      begin: new Date(state.list.time[0]).format('yyyy-MM-dd hh:mm:ss'),
      end: new Date(state.list.time[1]).format('yyyy-MM-dd hh:mm:ss'),
      type: state.list.typeArr[state.list.type],
      key: arrStation.toString(),
      grid: arrGrid.toString()
    }, `${new Date(state.list.time[1]).format('yyyy年MM月dd日hh时mm分ss秒')}历史数据`);
  }
});
const device = reactive({
  async getList(type) {
    state.list.header = [
      {name: '区域', width: '80px', key: 'gridName', color: '#9495a9'},
      {name: '站点', width: '140px', key: 'stationName', color: '#9495a9'},
      {name: '噪声', width: '60px', key: 'noise', color: '', rang: true},
      {name: 'L5', width: '60px', key: 'l5', color: '', rang: true},
      {name: 'L10', width: '60px', key: 'l10', color: '', rang: true},
      {name: '时间', width: '180px', key: 'avgDate', color: '', rang: true}
    ];
    // 重新点击type查询 OR 刷新查询
    if (type === 0 || type) {
      state.list.page = 1;
      state.list.type = type;
    }
    let arrStation = _.clone(state.list.station),
        arrGrid = _.clone(state.list.grid);
    if (arrStation.includes('-1')) arrStation.splice(arrStation.indexOf('-1'), 1);
    if (arrGrid.includes('-1')) arrGrid.splice(arrGrid.indexOf('-1'), 1);
    let res = await get('/monitoring/his/data', {
      page: state.list.page,
      size: state.list.size,
      begin: new Date(state.list.time[0]).format('yyyy-MM-dd hh:mm:ss'),
      end: new Date(state.list.time[1]).format('yyyy-MM-dd hh:mm:ss'),
      type: state.list.typeArr[state.list.type],
      key: arrStation.toString(),
      grid: arrGrid.toString()
    });
    if (res.code === 200) {
      state.list.rows = res.rows;
      state.list.total = res.total;
    }
  },
  async down() {
    let arrStation = _.clone(state.list.station),
        arrGrid = _.clone(state.list.grid);
    if (arrStation.includes('-1')) arrStation.splice(arrStation.indexOf('-1'), 1);
    if (arrGrid.includes('-1')) arrGrid.splice(arrGrid.indexOf('-1'), 1);
    await download(`/monitoring/his/upload`, {
      page: state.list.page,
      size: state.list.size,
      begin: new Date(state.list.time[0]).format('yyyy-MM-dd hh:mm:ss'),
      end: new Date(state.list.time[1]).format('yyyy-MM-dd hh:mm:ss'),
      type: state.list.typeArr[state.list.type],
      key: arrStation.toString(),
      grid: arrGrid.toString()
    }, `${new Date(state.list.time[1]).format('yyyy年MM月dd日hh时mm分ss秒')}历史数据`);
  }
});
const transport = reactive({
  async getList(type) {
    state.list.header = [
      {name: '区域', width: '80px', key: 'gridName', color: '#9495a9'},
      {name: '站点', width: '140px', key: 'stationName', color: '#9495a9'},
      {name: '噪声', width: '60px', key: 'noise', color: '', rang: true},
      {name: '时间', width: '180px', key: 'avgDate', color: '', rang: true}
    ];
    // 重新点击type查询 OR 刷新查询
    if (type === 0 || type) {
      state.list.page = 1;
      state.list.type = type;
    }
    let arrStation = _.clone(state.list.station),
        arrGrid = _.clone(state.list.grid);
    if (arrStation.includes('-1')) arrStation.splice(arrStation.indexOf('-1'), 1);
    if (arrGrid.includes('-1')) arrGrid.splice(arrGrid.indexOf('-1'), 1);
    let res = await get('/monitoring/his/data', {
      page: state.list.page,
      size: state.list.size,
      begin: new Date(state.list.time[0]).format('yyyy-MM-dd hh:mm:ss'),
      end: new Date(state.list.time[1]).format('yyyy-MM-dd hh:mm:ss'),
      type: state.list.typeArr[state.list.type],
      key: arrStation.toString(),
      grid: arrGrid.toString()
    });
    if (res.code === 200) {
      state.list.rows = res.rows;
      state.list.total = res.total;
    }
  },
  async down() {
    let arrStation = _.clone(state.list.station),
        arrGrid = _.clone(state.list.grid);
    if (arrStation.includes('-1')) arrStation.splice(arrStation.indexOf('-1'), 1);
    if (arrGrid.includes('-1')) arrGrid.splice(arrGrid.indexOf('-1'), 1);
    await download(`/monitoring/his/upload`, {
      page: state.list.page,
      size: state.list.size,
      begin: new Date(state.list.time[0]).format('yyyy-MM-dd hh:mm:ss'),
      end: new Date(state.list.time[1]).format('yyyy-MM-dd hh:mm:ss'),
      type: state.list.typeArr[state.list.type],
      key: arrStation.toString(),
      grid: arrGrid.toString()
    }, `${new Date(state.list.time[1]).format('yyyy年MM月dd日hh时mm分ss秒')}历史数据`);
  }
});

onMounted(() => {
  noise.getList();
  state.getGrid();
  setTimeout(() => {
    state.handleGridAll();
  }, 1000);
});
</script>

<style lang='less' scoped>
.history{
  width:calc(100% - 24px);
  height:calc(100% - 24px);
  margin:12px;
}
</style>
