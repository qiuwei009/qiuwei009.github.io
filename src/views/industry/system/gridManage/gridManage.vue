<template>
  <div class='gridManage darkcolor'>
    <div class='flex column col-12 card' style='height: 100%;'>
      <p class='top-p-40 flex align-c'>
        <span class='fl getRoleBtn'>
          <span :class="grid.list.act === 0?'select':''" class='cursor' @click='grid.getGrid'>区域管理</span>
          <!--          <span :class="grid.list.act === 1?'select':''" class="cursor" @click="grid.getEnvironment">轨道历史</span>-->
          <!--          <span :class="grid.list.act === 2?'select':''" class="cursor" @click="grid.getEnvironment">运输历史</span>-->
        </span>
      </p>
      <p class='flex align-c just-b wrap top2'>
        <span class='fr cursor condition flex align-c'>
          <span style='margin-right: 5px;'>区域:</span>
          <el-select v-model='grid.list.grid' clearable collapse-tags filterable multiple placeholder='请选择区域' style='width: 200px;' @change='grid.handleGrid'>
            <el-option label='全选' value='-1' @click.stop='grid.handleGridAll(1)'/>
              <el-option v-for='item in grid.list.gridArr' :key='item.id' :label='item.name' :value='item.id'/>
            </el-select>
        </span>
        <!--        <span class="fr cursor condition">站点:-->
        <!--          <el-select v-model="grid.list.station" clearable multiple filterable collapse-tags placeholder="请选择站点 "-->
        <!--                     @change="grid.handleStation">-->
        <!--            <el-option label="全选" value="-1" @click.stop="grid.handleStationAll"/>-->
        <!--            <el-option-->
        <!--                v-for="item in grid.list.stationArr"-->
        <!--                :key="item.id"-->
        <!--                :label="item.name"-->
        <!--                :value="item.id"-->
        <!--            />-->
        <!--          </el-select>-->
        <!--        </span>-->
        <Btn :info="{
            id: 3,
            name: '',
            type: 'add',
            class: 'Btn fr',
            icon: 'icon-zengjia',
            title: '新增'
          }" @handleClick="grid.show({ type: 'add' })"></Btn>
        <!--        <span class="fr cursor condition omit">开始时间:-->
        <!--          <el-date-picker-->
        <!--              v-model="grid.list.time[0]"-->
        <!--              placeholder="开始时间"-->
        <!--              type="datetime"-->
        <!--          />-->
        <!--        </span>-->
        <!--        <span class="fr cursor condition omit">结束时间:-->
        <!--          <el-date-picker-->
        <!--              v-model="grid.list.time[1]"-->
        <!--              placeholder="结束时间"-->
        <!--              type="datetime"-->
        <!--          />-->
        <!--        </span>-->
        <!--        <span class="fr cursor condition">数据类型:-->
        <!--        <span class="getRoleBtn">-->
        <!--          <span :class="grid.list.type === 0?'select':''" class="cursor condition"-->
        <!--                @click="grid.typechange(0)">分钟值</span>-->
        <!--          <span :class="grid.list.type === 1?'select':''" class="cursor condition"-->
        <!--                @click="grid.typechange(1)">小时值</span>-->
        <!--          <span :class="grid.list.type === 2?'select':''" class="cursor condition"-->
        <!--                @click="grid.typechange(2)">日均值</span>-->
        <!--        </span>-->
        <!--        </span>-->
        <!--        <span class="fr cursor condition">-->
        <!--          <span>参数:</span>-->
        <!--           <span v-for="i in grid.list.paramsArr" :class="grid.list.params.includes(i)?'select':''"-->
        <!--                 class="cursor condition paramCondition" @click="grid.paramschange(i)">{{ i }}</span>-->
        <!--        </span>-->
      </p>
      <div class='col-auto' style='padding: 0;height: calc(100% - 140px);'>
        <Table :list='grid.list' @handleCurrentChange='grid.handleCurrentChange'>
          <template v-slot:rightTitle>
            <div class='flex just-c align-c omit' style='flex: 0 0 120px;'>编辑</div>
          </template>
          <template v-slot:rightBtn='{ item }'>
            <div class='flex just-a align-c' style='flex: 0 0 120px;'>
              <i class='iconfont iconfontHover icon-bianji1' title='编辑' @click="grid.show({ type: 'edit' }, item)"></i>
              <el-popconfirm title='您是否确定删除当前区域?' @cancel='' @confirm.stop='grid.del(item)'>
                <template #reference>
                  <i class='iconfont iconfontHover icon-shanchu_o' title='删除' @click.stop=''></i>
                </template>
              </el-popconfirm>
            </div>
          </template>
        </Table>
      </div>
    </div>
    <popup :info='grid.info' @hide='grid.hide()'>
      <template v-slot:title>
        <span class='select condition'>{{ grid.info.type === 'edit' ? '编辑' : '添加' }}</span>
      </template>
      <template v-slot:main>
        <el-form ref='gridForm' :model='grid.info.form' :rules='grid.info.formRules' class='gridForm padding-10' size='mini'>
          <div class='col-6' style='padding-right: 10px;'>
            <p class='top-p-30'>
              <span class='select condition'>基本信息</span>
            </p>
            <el-form-item class='label' label='' prop='name'>
              <label>全名</label>
              <el-input v-model='grid.info.form.name' autocomplete='off' placeholder='请输入...' size='small'></el-input>
            </el-form-item>
            <el-form-item class='label' label='' prop='alias'>
              <label>别名</label>
              <el-input v-model='grid.info.form.alias' autocomplete='off' placeholder='请输入...' size='small'></el-input>
            </el-form-item>
            <el-form-item class='label' label='' prop='level'>
              <label>区域等级</label>
              <el-select v-model='grid.info.form.level' filterable placeholder='请选择...' size='small' style='width: 100%;' @change='grid.handleLevel'>
                <el-option v-for='i in grid.level' :key='i.id' :label='i.name' :value='i.id'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class='label' label='' prop='description'>
              <label>描述</label>
              <el-input v-model='grid.info.form.description' autocomplete='off' placeholder='请输入...' size='small' type='textarea'></el-input>
            </el-form-item>
          </div>
          <div class='col-6'>
            <p class='top-p-30'>
              <span class='select condition'>上级区域</span>
            </p>
            <el-form-item class='label' label='' prop='parentId'>
              <Jointlevel :data='grid.gridTree' @checkId='grid.checkIdGrid'></Jointlevel>
            </el-form-item>
          </div>
          <div class='col-12'>
            <p class='top-p-30'>
              <span class='select condition'>区域规划</span>
            </p>
            <Jointlevel :data='grid.mapPoint' @checkId='grid.checkIdPoint'></Jointlevel>
            <el-form-item class='label' label='' prop='centrePoint'>
              <label>中心点</label>
              <el-input v-model='grid.info.form.centrePoint' :disabled='true' autocomplete='off' size='small'>
                <template #suffix>
                  <i class='iconfont rightIcon icon-dingwei cursor iconfontHover' @click='state.pointMap = true'></i>
                </template>
              </el-input>
            </el-form-item>
          </div>
        </el-form>
      </template>
      <template v-slot:page>
        <span class='confirm_btn cursor' @click='grid.edit()'>确定</span>
      </template>
    </popup>
    <Point :data='{
                    show:state.pointMap,
                    point:state.point,
                    type:grid.mapPoint.checkId.toString(),
                    line:grid.info.form.boundary
                  }' @backPoint='state.backPoint'></Point>
  </div>
</template>

<script setup>
import {ElMessage} from 'element-plus';
import {onMounted, reactive, ref} from 'vue';
import {get, post} from '~/utils/request.js';
import {del, put} from '../../../../utils/request';

const gridForm = ref(null);
const state = reactive({
  pointMap: false,
  point: '',
  backPoint(point) {
    state.pointMap = false;
    if (grid.mapPoint.checkId.toString() === '') grid.info.form.centrePoint = point;
    else if (grid.mapPoint.checkId.toString() === 'rectangle') {
      grid.info.form.centrePoint = point.point;
      grid.info.form.boundary = point.boundary;

    } else if (grid.mapPoint.checkId.toString() === 'polyline') {
      grid.info.form.centrePoint = point.point;
      grid.info.form.boundary = point.boundary;
    }
  }
});
const grid = reactive({
  level: [
    {name: '第一级区域', id: 1},
    {name: '第二级区域', id: 2},
    {name: '第三级区域', id: 3}
  ],
  handleLevel() {
    grid.info.form.parentId = '';
    grid.gridTree.checkId = [];
    grid.gridTree.checkLevel = grid.info.form.level - 1;
  },
  filterGrid(list) {
    list = list.filter(i => {
      if (grid.info.form.id !== i.id) {
        if (i.children && i.children.length > 0) {
          // i.children = i.children.filter(j => grid.info.form.id !== j.id )
          grid.filterGrid(i.children);
        }
        return true;
      } else {
        return false;
      }
    });
    grid.gridTree.list = list;
  },
  menus: [],
  roleMenusInfo: {
    name: '',
    list: [],
    checkId: [],
    key: 'name',
    value: 'id',
    child: 'child',
    column: true,
    single: false
  },
  tree: [],
  list: {
    name: 'role',
    header: [
      {name: '区域名', width: '100px', key: 'name', color: '#9495a9'},
      {name: '别名', width: '100px', key: 'alias', color: '#9495a9'},
      {name: '区域等级', width: '100px', key: 'level', color: '#9495a9', select: ['', '第一级区域', '第二级区域', '第三级区域']},
      {name: '中心点', width: '180px', key: 'centrePoint', color: ''},
      {name: '描述', width: '100px', key: 'description', color: '#9495a9'},
      {name: '创建时间', width: '180px', key: 'createTime', color: '', rang: true}
    ],
    rows: [],
    page: 1,
    size: 20,
    total: 100,
    currentPage: 1,
    act: 0,
    select: {
      open: true, // 是否开启多项选中
      selectAll: false, //全选
      isIndeterminate: false,// 中间状态
      selectId: [] // 选中ID
    },
    time: [new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000), new Date()],
    station: null,
    stationArr: [],
    grid: null,
    gridArr: [],
    type: 0,
    num1: 0,
    num2: 2000,
    params: ['PM10'],
    paramsArr: ['PM10', 'PM25', 'NO2', 'SO2', 'CO', 'CO2', 'O3', 'VOC']
  },
  mapPoint: {
    name: 'mapPoint',
    list: [
      {
        name: '默认划分 只标记一个中心点视为区域区域',
        id: ''
      },
      {
        name: '自定划分 用单位距离的正方形来划分区域，每个矩形代表一个区域',
        id: 'rectangle'
      },
      {
        name: '自定划分 自己定义区域的区域，自己定义中心点位置',
        id: 'polyline'
      }
    ],
    checkId: [''],
    key: 'name',
    value: 'id',
    child: 'children',
    column: true,
    column2: true,
    single: true
  },
  checkIdPoint(obj) {
    console.log(obj, 'val');
  },
  gridTree: {
    name: 'tree',
    list: [],
    list2: [],
    checkId: [],
    checkLevel: null,
    checkLevelOpen: true,
    key: 'name',
    value: 'id',
    child: 'children2',
    column: true,
    column2: true,
    single: true
  },
  checkIdGrid(val) {
    grid.info.form.parentId = val.checkId.toString();
  },
  handleCurrentChange(obj) {
    grid.list.select.selectId = [];
    grid.list.select.selectAll = false;
    grid.list.page = obj.page;
    grid.getGrid();
  },
  typechange(val) {
    grid.list.type = val;
    if (this.list.act) {
      this.getEnvironment();
    } else {
      this.getGrid();
    }
  },
  paramschange(val) {
    const index = grid.list.params.indexOf(val);
    if (index !== -1) {
      grid.list.params.splice(index, 1);
    } else {
      grid.list.params.push(val);
    }
  },
  getTreeData(list, id) {
    if (id === 'init') {
      list.forEach(i => {
        this.list.gridArr.push(i);
        if (i.children && i.children.length > 0) {
          this.getTreeData(i.children, id);
        }
      });
    } else {
      list.forEach(i => {
        if (i.id === id) {
          if (i.stations) this.list.stationArr = this.list.stationArr.concat(i.stations);
        }
        if (i.children && i.children.length > 0) {
          this.getTreeData(i.children, id);
        }
      });
    }
  },
  async getSelect() {
    let res = await get('/users/grid/tree');
    if (res.code === 200) {
      this.gridTree.list = res.data;
      this.gridTree.list2 = res.data;
    }
  },
  falgG: true,
  handleGridAll(val) {
    if (grid.falgG) {
      grid.list.grid = ['-1'];
      grid.list.rows = grid.list.gridArr;
      grid.list.rows.forEach(i => {
        grid.list.grid.push(i.id);
        i.children2 = i.children ? i.children : i.children2;
        i.children = null;
      });
      grid.list.total = grid.list.gridArr.length;
      // grid.list.stationArr = []
      // grid.list.gridArr.forEach(i => {
      //   grid.list.grid.push(i.id)
      //   grid.getTreeData(grid.tree, i.id)
      // })
      // grid.list.rows = grid.list.stationArr
      // grid.list.total = grid.list.stationArr.length
      // grid.list.station = ['-1']
      // grid.list.rows.forEach(i => {
      //   grid.list.station.push(i.id)
      // })
    } else {
      grid.list.grid = [];
      grid.list.stationArr = [];
      grid.list.rows = [];
      grid.list.total = 0;
      grid.list.station = [];
    }
    if (val) grid.falgG = !grid.falgG;
  },
  handleGrid() {
    if (grid.list.grid.includes('-1') && grid.list.grid.length === grid.list.gridArr.length) {
      let index = grid.list.grid.indexOf('-1');
      if (index !== '-1') grid.list.grid.splice(index, 1);
      grid.falgG = true;
    } else if (!grid.list.grid.includes('-1') && grid.list.grid.length === grid.list.gridArr.length) {
      grid.list.grid.push('-1');
      grid.falgG = false;
    }
    let arr = [];
    grid.list.gridArr.forEach(i => {
      if (grid.list.grid.includes(i.id)) {
        i.children = null;
        arr.push(i);
      }
    });
    grid.list.rows = _.clone(arr);
    grid.list.total = grid.list.gridArr.length;
    // grid.list.rows = grid.list.stationArr
    // grid.list.total = grid.list.stationArr.length
    // grid.list.station = ['-1']
    // grid.list.rows.forEach(i => {
    //   grid.list.station.push(i.id)
    // })
  },
  falgS: true,
  handleStationAll() {
    if (grid.falgS) {
      grid.list.station = ['-1'];
      grid.list.stationArr.forEach(i => {
        grid.list.station.push(i.id);
      });
      grid.list.rows = grid.list.stationArr;
      grid.list.total = grid.list.stationArr.length;

    } else {
      grid.list.station = [];
      grid.list.rows = [];
      grid.list.total = 0;
    }
    grid.falgS = !grid.falgS;
  },
  handleStation() {
    if (grid.list.station.includes('-1') && grid.list.station.length === grid.list.stationArr.length) {
      let index = grid.list.station.indexOf('-1');
      if (index !== '-1') grid.list.station.splice(index, 1);
      grid.falgS = true;
    } else if (!grid.list.station.includes('-1') && grid.list.station.length === grid.list.stationArr.length) {
      grid.list.station.push('-1');
      grid.falgS = false;
    }
    grid.list.rows = grid.list.stationArr.filter(i => grid.list.station.includes(i.id));
    grid.list.total = grid.list.stationArr.filter(i => grid.list.station.includes(i.id)).length;
  },
  async getGrid() {
    this.list.act = 0;
    let res = await get('/users/grid/tree');
    if (res.code === 200) {
      this.gridTree.list = res.data;
      this.gridTree.list2 = res.data;
      this.list.gridArr = [];
      this.tree = _.clone(res.data);
      this.getTreeData(_.clone(res.data), 'init');
      this.handleGridAll();
    }
  },
  async getEnvironment() {
    this.list.act = 1;
    let res = await post('/roleuser/showUser');
    if (res.code === 200) {
      this.list.rows = res.data.rows;
      this.list.total = res.data.total;
    }
  },
  info: {
    show: false,
    name: 'historyPop',
    w: '50%',
    form: {
      'id': '',
      'organizationId': '',
      'parentId': '',
      'level': '',
      'name': '',
      'alias': '',
      'description': '',
      'centrePoint': '',
      'boundary': '',
      'createTime': ''
    },
    formRules: {
      'organizationId': [
        {
          required: true,
          message: '请输入...！',
          trigger: 'change'
        }
      ],
      'level': [
        {
          required: true,
          message: '请选择区域等级！',
          trigger: 'change'
        }
      ],
      'name': [
        {
          required: true,
          message: '请输入区域名！',
          trigger: 'change'
        }
      ],
      'alias': [
        {
          required: true,
          message: '请输入区域别名！',
          trigger: 'change'
        }
      ],
      'description': [
        {
          required: true,
          message: '请填写描述！',
          trigger: 'change'
        }
      ],
      'centrePoint': [
        {
          required: true,
          message: '请选择中心点！',
          trigger: 'change'
        }
      ],
      'boundary': [
        {
          required: true,
          message: '请选择区域范围！',
          trigger: 'change'
        }
      ],
      parentId: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (grid.info.form.level === 1) {
              callback();
            } else {
              if (value === '') {
                callback(new Error('请选择上级区域！若无可选项请先创建当前所选区域等级的上级区域！'));
              } else {
                callback();
              }
            }

          },
          trigger: 'blur'
        }
      ]
    },
    type: 'add'
  },
  getInfo() {

  },
  show(obj, item) {
    gridForm.value.resetFields();
    this.info.show = true;
    this.info.type = obj.type;
    if (this.info.type === 'edit') {
      this.info.form = _.clone(item);
      if (this.info.form.parentId) {
        this.gridTree.checkId = [this.info.form.parentId];
      } else {
        this.gridTree.checkId = [this.info.form.id];
      }
      state.point = grid.info.form.centrePoint;
    } else {
      state.point = '0,0';
      grid.info.form = {
        'id': '',
        'organizationId': '',
        'parentId': '',
        'level': '',
        'name': '',
        'alias': '',
        'description': '',
        'centrePoint': '',
        'boundary': '',
        'createTime': ''
      };
    }
    grid.filterGrid(grid.gridTree.list);
    grid.gridTree.checkLevel = grid.info.form.level - 1;
  },
  hide() {
    this.info.show = false;
    this.gridTree.checkId = [];
    gridForm.value.resetFields();
    grid.gridTree.list = grid.gridTree.list2;
  },
  edit() {
    gridForm.value.validate(async (valid) => {
      if (valid) {
        if (grid.info.form.level === 1) {
          grid.info.form.parentId = '';
        }
        if (grid.info.type === 'add') {
          grid.info.form.createTime = null;
          grid.info.form.id = null;
          grid.info.form.organizationId = null;
          let res = await post('/users/grid', grid.info.form, true);
          if (res.code === 200) {
            this.info.show = false;
            this.info.type = 'add';
            this.getGrid();
          }
        } else if (grid.info.type === 'edit') {
          let res = await put('/users/grid', grid.info.form, true);
          if (res.code === 200) {
            this.info.show = false;
            this.info.type = 'add';
            this.getGrid();
          }
        }
      } else {
        console.log('不通过');
        return false;
      }
    });
  },
  async del(item) {
    let res = await del(`/users/grid/${item.id}`);
    if (res.code === 200) {
      this.getGrid();
      item['visible'] = false;
      ElMessage({
        duration: 1000,
        type: 'success',
        message: res.msg
      });
    }
  }
});
onMounted(() => {
  grid.getGrid();
});
</script>

<style lang='less' scoped>
.gridManage{
  width:calc(100% - 24px);
  height:calc(100% - 24px);
  margin:12px;

  .top-p-40{
    padding:0 10px 0 5px;
    background:transparent;

    .getRoleBtn{
      span{
        margin-right:10px;
        display:inline-block;
        text-align:left;
        font-weight:bold;
      }
    }

    :deep(.el-input__inner){
      border-radius:0;
    }
  }

  .top-p-30{
    margin-bottom:10px;
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

    :deep(textarea){
      line-height:40px;
      border-radius:0;
      text-indent:99px;
      padding:0 10px;
    }

    :deep(input){
      height:40px;
      line-height:40px;
      border-radius:0;
      text-indent:99px;
    }
  }

  .selectIcon{
    color:#2e3141;
  }

  .padding-10{
    box-sizing:border-box;
    padding:10px;
  }


}
</style>
