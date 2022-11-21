<template>
  <div class='log darkcolor'>
    <div class='flex column col-12  card' style='height: 100%;'>
      <p class='top-p-40 flex align-c'>
        <span class='fl'>
          <span :class="log.list.active?'':'select'" class='cursor ' @click='log.logtype(0)'>操作日志</span>
          <!--          <span :class="log.list.active?'select':''" class="cursor" @click="log.logtype(1)">操作日志</span>-->
        </span>
      </p>
      <p class='flex align-c wrap top2'>
        <span class='fr cursor condition omit'>开始时间:
          <el-date-picker v-model='log.list.time[0]' placeholder='开始时间' type='datetime'/>
        </span> <span class='fr cursor condition omit'>结束时间:
          <el-date-picker v-model='log.list.time[1]' placeholder='结束时间' type='datetime'/>
        </span>

        <!--        <span class="fr cursor condition">查询时间类型:-->
        <!--          <span>-->
        <!--            <span :class="log.list.type === 0?'select':''" class="cursor condition" @click="log.typechange(0)">分钟</span>-->
        <!--            <span :class="log.list.type === 1?'select':''" class="cursor condition" @click="log.typechange(1)">小时</span>-->
        <!--            <span :class="log.list.type === 2?'select':''" class="cursor condition" @click="log.typechange(2)">日</span>-->
        <!--          </span>-->
        <!--        </span>-->
        <span class='fr cursor condition'>
          <span>类型:</span>
          <span v-for='i in log.list.paramsArr' :class="log.list.params.includes(i)?'select':''" class='cursor condition paramCondition' @click='log.paramschange(i)'>{{ i.split(',')[0] }}</span>
        </span>
        <Btn :info="{
            id: 3,
            name: '查询',
            type: 'look',
            class:'Btn',
            icon:'',
            title:'查询',
        }" @handleClick='log.getLog(1)'></Btn>
      </p>
      <div class='col-auto' style='padding: 0;height: calc(100% - 140px);'>
        <Table :list='log.list' @handleCurrentChange='log.handleCurrentChange' @selectId='log.selectId'>
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
        <p class='info_item flex nowrap'>ID:<span class='flex wrap'>{{ log.info.data.operId }}</span></p>
        <p class='info_item flex nowrap'>标题: <span class='flex wrap'>{{ log.info.data.title }}</span></p>
        <p class='info_item flex nowrap'>状态:<span class='flex wrap'>{{ log.info.data.title }}</span></p>
        <p class='info_item flex nowrap'>请求方法: <span class='flex wrap'>{{ log.info.data.requestMethod }}</span></p>
        <p class='info_item flex nowrap'>操作类型: <span class='flex wrap'>{{ log.info.data.operatorType }}</span></p>
        <p class='info_item flex nowrap'>访问链接: <span class='flex wrap'>{{ log.info.data.operUrl }}</span></p>
        <p class='info_item flex nowrap'>操作时间: <span class='flex wrap'>{{ log.info.data.operTime }}</span></p>
        <p class='info_item flex nowrap'>操作参数:
          <span class='flex wrap omit4' style='display: inline-block;width: calc(100% - 100px);padding-left: 10px'>{{ log.info.data.operParam }}</span>
        </p>
        <p class='info_item flex nowrap'>操作人员: <span class='flex wrap'>{{ log.info.data.operName }}</span></p>
        <p class='info_item flex nowrap'>操作IP: <span class='flex wrap'>{{ log.info.data.operIp }}</span></p>
        <p class='info_item flex nowrap'>JSON返回参数: <span class='flex wrap'>{{ log.info.data.jsonResult }}</span></p>
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
  checkId: [],
  list: {
    name: 'logTable',
    header: [
      {name: '模块', width: '120px', key: 'title', color: '#9495a9'},
      {
        name: '操作类型',
        width: '120px',
        key: 'requestMethod',
        color: '#9495a9',
        select: {'POST': '新增', 'PUT': '修改', 'DELETE': '删除', '': '其他'}
      },
      {name: '操作人', width: '120px', key: 'operName', color: '#9495a9'},
      {
        name: '操作时间',
        width: '120px',
        key: 'operTime',
        color: '#9495a9',
        rang: true
      },
      {
        name: '操作结果',
        width: '120px',
        key: 'status',
        color: '#9495a9',
        select: ['成功', '失败']
      }
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
    params: ['新增,1'],
    paramsArr: ['新增,1', '修改,2', '删除,3', '其它,0'],
    paramsindex: {
      '新增': 1,
      '修改': 1,
      '删除': 1,
      '其它': 1
    }
  },
  handleCurrentChange(obj) {
    log.list.page = obj.page;
    log.list.select.selectId = [];
    log.list.select.selectAll = false;
    log.getLog();
  },
  typechange(val) {
    log.list.type = val;
    this.getLog(1);
  },
  paramschange(val) {
    // const index = log.list.params.indexOf(val);
    // if (index !== -1) {
    //   log.list.params.splice(index, 1);
    // } else {
    //   log.list.params.push(val);
    // }
    log.list.params = [val];
    log.getLog(1);
  },
  logtype(val) {
    this.list.active = val;
    log.getLog(1);
  },
  async getLog(val) {
    if (val) {
      log.list.page = 1;
      if (this.list.active === 0) {
        let res = await get('/users/operlog/list', {
          page: log.list.page,
          size: log.list.size,
          begin: new Date(log.list.time[0]).format('yyyy-MM-dd hh:mm:ss'),
          end: new Date(log.list.time[1]).format('yyyy-MM-dd hh:mm:ss'),
          businessType: log.list.params.toString().split(',')[1]
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
        let res = await get('/users/operlog/list', {
          page: log.list.page,
          size: log.list.size,
          begin: new Date(log.list.time[0]).format('yyyy-MM-dd hh:mm:ss'),
          end: new Date(log.list.time[1]).format('yyyy-MM-dd hh:mm:ss'),
          businessType: log.list.params.toString().split(',')[1]
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
  selectId(val) {
    log.checkId = val.checkId;
  },
  info: {
    show: false,
    name: 'logPop',
    w: '40%',
    data: {
      operId: '',
      title: '',
      businessType: '',
      businessTypes: '',
      method: '',
      requestMethod: '',
      operatorType: '',
      operName: '',
      deptName: '',
      operUrl: '',
      operIp: '',
      operParam: '',
      jsonResult: '',
      status: '',
      errorMsg: '',
      operTime: ''
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
      margin-right:10px;
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
      height:40px !important;
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
