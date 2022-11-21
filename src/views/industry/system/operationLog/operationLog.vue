<template>
  <div class='log darkcolor'>
    <div class='flex column col-12  card' style='height: 100%;'>
      <p class='top-p-40 flex align-c'>
        <span class='fl'>
          <span :class="log.list.active?'':'select'" class='cursor ' @click='log.logtype(0)'>登录日志</span>
          <!--          <span :class="log.list.active?'select':''" class="cursor" @click="log.logtype(1)">操作日志</span>-->
        </span>
      </p>
      <p class='flex align-c wrap top2'>
        <span class='fr cursor condition omit'>开始时间:
          <el-date-picker v-model='log.list.time[0]' placeholder='开始时间' type='datetime'/>
        </span> <span class='fr cursor condition omit'>结束时间:
          <el-date-picker v-model='log.list.time[1]' placeholder='结束时间' type='datetime'/>
        </span>
        <Btn :info="{
            id: 3,
            name: '查询',
            type: 'look',
            class:'Btn',
            icon:'',
            title:'查询',
        }" @handleClick='log.getLog(1)'></Btn>
        <!--        <span class="fr cursor condition">查询时间类型:-->
        <!--          <span>-->
        <!--            <span :class="log.list.type === 0?'select':''" class="cursor condition" @click="log.typechange(0)">分钟</span>-->
        <!--            <span :class="log.list.type === 1?'select':''" class="cursor condition" @click="log.typechange(1)">小时</span>-->
        <!--            <span :class="log.list.type === 2?'select':''" class="cursor condition" @click="log.typechange(2)">日</span>-->
        <!--          </span>-->
        <!--        </span>-->
        <!--        <span class="fr cursor condition">-->
        <!--          <span>类型:</span>-->
        <!--          <span v-for="i in log.list.paramsArr" :class="log.list.params.includes(i)?'select':''"-->
        <!--                class="cursor condition paramCondition" @click="log.paramschange(i)">{{ i }}</span>-->
        <!--        </span>-->
      </p>
      <div class='col-auto' style='padding: 0;height: calc(100% - 140px);'>
        <Table :list='log.list' @handleCurrentChange='log.handleCurrentChange'>
          <template v-slot:rightTitle='{item}'>
            <div class='flex align-c just-c' style='flex: 1 0 70px;'>详情</div>
          </template>
          <template v-slot:rightBtn='{item}'>
            <div class='flex just-a nowrap' style='flex: 1 0 70px;'>
              <i class='iconfont iconfontHover icon-RectangleCopy30' @click='log.edit(item)'></i>
            </div>
          </template>
        </Table>
      </div>
    </div>
    <popup :info='log.info' @hide='log.hide()'>
      <template v-slot:title>
        <span class='select condition'>详情</span>
      </template>
      <template v-slot:main>
        <!--        <p class='info_item flex nowrap'>ID: <span class='flex wrap'>{{ log.info.data.infoId }}</span></p>-->
        <p class='info_item flex nowrap'>用户账号: <span class='flex wrap'>{{ log.info.data.userName }}</span></p>
        <p class='info_item flex nowrap'>登录ip地址:<span class='flex wrap'>{{ log.info.data.ipaddr }}</span></p>
        <p class='info_item flex nowrap'>访问时间: <span class='flex wrap'>{{ log.info.data.accessTime }}</span></p>
        <p class='info_item flex nowrap'>提示信息: <span class='flex wrap'>{{ log.info.data.msg }}</span></p>
      </template>
      <template v-slot:page></template>
    </popup>
    <Point :data="{show:state.pointMap,point:'104.044894,30.584891'}" @backPoint='state.backPoint'></Point>
  </div>
</template>

<script setup>
import {onMounted, reactive} from 'vue';
import {get} from '~/utils/request.js';

const state = reactive({
  pointMap: false,
  backPoint(point) {
    state.pointMap = false;
  }
});
const log = reactive({
  menus: [],
  list: {
    name: 'logTable',
    header: [
      {name: '用户', width: '120px', key: 'userName', color: '#9495a9'},
      {name: 'IP地址', width: '120px', key: 'ipaddr', color: '#9495a9'},
      {
        name: '登录时间',
        width: '120px',
        key: 'accessTime',
        color: '#9495a9',
        rang: true
      },
      {name: '登录结果', width: '120px', key: 'msg', color: '#9495a9'}
    ],
    rows: [],
    page: 1,
    size: 20,
    total: 100,
    currentPage: 1,
    active: 0,
    select: {
      id: 'operId',
      open: false, // 是否开启多项选中
      selectAll: false, //全选
      isIndeterminate: false, // 中间状态
      selectId: [] // 选中ID
    },
    time: [
      new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
      new Date()
    ],
    station: '',
    stationArr: [
      {
        value: 'Option1',
        label: 'Option1'
      },
      {
        value: 'Option2',
        label: 'Option2'
      },
      {
        value: 'Option3',
        label: 'Option3'
      },
      {
        value: 'Option4',
        label: 'Option4'
      },
      {
        value: 'Option5',
        label: 'Option5'
      }
    ],
    grid: '',
    gridArr: [
      {
        value: 'Option1',
        label: 'Option1'
      },
      {
        value: 'Option2',
        label: 'Option2'
      },
      {
        value: 'Option3',
        label: 'Option3'
      },
      {
        value: 'Option4',
        label: 'Option4'
      },
      {
        value: 'Option5',
        label: 'Option5'
      }
    ],
    type: 0,
    num1: 0,
    num2: 2000,
    params: ['登录'],
    paramsArr: ['登录', '操作', '新增', '修改', '删除']
  },
  handleCurrentChange(obj) {
    log.list.page = obj.page;
    log.list.select.selectId = [];
    log.list.select.selectAll = false;
    log.getLog();
  },
  typechange(val) {
    log.list.type = val;
    this.getLog();
  },
  paramschange(val) {
    const index = log.list.params.indexOf(val);
    if (index !== -1) {
      log.list.params.splice(index, 1);
    } else {
      log.list.params.push(val);
    }
    log.getLog();
  },
  logtype(val) {
    this.list.active = val;
    log.getLog();
  },
  async getLog(val) {
    if (val) {
      log.list.page = 1;
      if (this.list.active === 0) {
        let res = await get('/users/logininfor/list', {
          page: log.list.page,
          size: log.list.size,
          begin: new Date(log.list.time[0]).format('yyyy-MM-dd hh:mm:ss'),
          end: new Date(log.list.time[1]).format('yyyy-MM-dd hh:mm:ss')
        });
        if (res.code === 200) {
          this.list.rows = res.rows;
          this.list.total = res.total;
        }
      } else {
        let res = await get('/users/operlog/list', {
          page: log.list.page,
          size: log.list.size,
          begin: new Date(log.list.time[0]).format('yyyy-MM-dd hh:mm:ss'),
          end: new Date(log.list.time[1]).format('yyyy-MM-dd hh:mm:ss')
        });
        if (res.code === 200) {
          this.list.rows = res.data.rows;
          this.list.total = res.data.total;
        }
      }
    } else {
      if (this.list.active === 0) {
        let res = await get('/users/logininfor/list', {
          page: log.list.page,
          size: log.list.size,
          begin: new Date(log.list.time[0]).format('yyyy-MM-dd hh:mm:ss'),
          end: new Date(log.list.time[1]).format('yyyy-MM-dd hh:mm:ss')
        });
        if (res.code === 200) {
          this.list.rows = res.rows;
          this.list.total = res.total;
        }
      } else {
        let res = await get('/users/operlog/list', {
          page: log.list.page,
          size: log.list.size,
          begin: new Date(log.list.time[0]).format('yyyy-MM-dd hh:mm:ss'),
          end: new Date(log.list.time[1]).format('yyyy-MM-dd hh:mm:ss')
        });
        if (res.code === 200) {
          this.list.rows = res.data.rows;
          this.list.total = res.data.total;
        }
      }
    }

  },
  info: {
    show: false,
    name: 'logPop',
    w: '40%',
    data: {
      accessTime: '',
      infoId: '',
      ipaddr: '',
      msg: '',
      status: '',
      userName: ''
    }
  },
  getInfo() {
  },
  show() {
    this.info.show = true;
  },
  hide() {
    this.info.show = false;
  },
  edit(row) {
    this.getInfo(row);
    this.show();
    this.info.data = row;
  },
  del(row) {
  }
});

onMounted(() => {
  log.getLog();
});
</script>

<style lang='less' scoped>
.log{
  width:calc(100% - 24px);
  height:calc(100% - 24px);
  margin:12px;

  .top-p-40{
    padding:0 10px 0 5px;
    background:transparent;

    :deep(.el-input__inner){
      border-radius:0;
    }
  }

  .top2{
    background:transparent;

    span{
      margin:10px;
      font-weight:bold;
    }

    .select{
      color:#1e8b56;
    }
  }

  .label{
    position:relative;

    label{
      position:absolute;
      left:0;
      top:10px;
      z-index:3;
      border-right:1px solid #cccccc;
      height:20px;
      line-height:20px;
      padding:0 10px;
    }

    :deep(input){
      width:400px;
      height:40px;
      line-height:40px;
      border-radius:0;
      text-indent:50px;
    }
  }

  .selectIcon{
    color:#2e3141;
  }

  .info_item{
    line-height:30px;
    text-indent:10px;
  }
}
</style>
