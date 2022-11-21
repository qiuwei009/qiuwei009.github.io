<template>
  <div class='rolea flex'>
    <div class='col-4  card'>
      <p class='top-p-60 flex nowrap just-b align-c darkcolor'>
        <span :class="role.list.active ? '' : 'select'" class='cursor condition' @click='role.getRole'>角色</span>
        <Btn :info="{
            id: 3,
            name: role.list.act === 0 ? '新增角色' : '新增用户组',
            type: 'add',
            class:'Btn',
            icon:'icon-RectangleCopy52',
            title:role.list.act === 0 ? '新增角色' : '新增用户组',
        }" @handleClick='role.show'></Btn>

      </p>
      <div class='h100-60 darkcolor'>
        <Table :list='role.list' @handleCurrentChange='role.handleCurrentChange'>
          <template v-slot:rightTitle='{item}'>
            <div class='flex just-c align-c' style='flex: 0 0 100px'>编辑</div>
          </template>
          <template v-slot:rightBtn='{item}'>
            <div class='flex' style='flex: 0 0 100px'>
              <div class='cursor but text-color flex just-c' style='width: 50%;'>
                <i class='iconfont iconfontHover icon-bianji1' title='编辑' @click="role.show({type:'edit'},item)"></i>
              </div>
              <div class='cursor but text-color flex just-c' style='width: 50%;'>
                <el-popconfirm title='您是否确定删除当前角色?' @cancel='' @confirm='role.delRole(item)'>
                  <template #reference>
                    <i class='iconfont iconfontHover icon-shanchu_o' title='删除'></i>
                  </template>
                </el-popconfirm>
              </div>
            </div>
          </template>
        </Table>
      </div>
    </div>
    <div class='col-8  card'>
      <p class='top-p-60 flex nowrap just-b align-c darkcolor'>
        <span class='cursor condition select' @click='user.getUser'>用户</span> <span class='flex nowrap omit'>
          <el-input v-model='user.list.search' class='fr' placeholder='请输入用户姓名,默认当前页搜索,点击搜索全部用户搜索...' style='width: 230px;' @input='user.list.rows = JSON.parse(JSON.stringify(user.list.rows2)).filter(i => i.name.includes(user.list.search))'>
            <template #suffix>
              <i class='iconfont icon-RectangleCopy2 cursor' @click="user.getUser('search')"></i>
            </template>
          </el-input>
          <Btn :info="{
            id: 3,
            name: '新增用户',
            type: 'add',
            class:'Btn',
            icon:'',
            title:'新增用户',
        }" @handleClick="user.show({type:'add'})"></Btn>
        </span>
      </p>
      <div class='h100-60 darkcolor'>
        <Table :list='user.list' @handleCurrentChange='user.handleCurrentChange' @selectId='user.selectId'>
          <template v-slot:rightTitle>
            <div class='flex align-c omit' style='flex: 1 0 100px'>角色权限</div>
            <div class='flex just-c align-c omit' style='flex: 1 0 100px'>编辑</div>
          </template>
          <template v-slot:rightBtn='{item}'>
            <div class='cursor omit' style='flex: 1 0 100px;padding-left: 10px;box-sizing: border-box;'>
              {{ item.roles[0].code }} </div>
            <div class='cursor but text-color flex just-a align-c omit' style='flex: 1 0 100px'>
              <i class='iconfont iconfontHover icon-bianji1' title='编辑' @click="user.show({type:'edit'},item)"></i>
              <el-popconfirm title='您是否确定删除当前用户?' @cancel='' @confirm='user.delUser(item)'>
                <template #reference>
                  <i class='iconfont iconfontHover icon-shanchu_o' title='删除'></i>
                </template>
              </el-popconfirm>
            </div>
          </template>
        </Table>
      </div>
    </div>
    <popup :info='role.info' @hide='role.hideRolePop()'>
      <template v-slot:title>
        <span class='select condition'>{{ role.info.type === 'add' ? '新增角色' : '修改角色' }}</span>
      </template>
      <template v-slot:main>
        <div v-if='role.list.act === 0' class='info'>
          <el-form ref='roleForm' :model='role.form.roleForm' :rules='role.form.roleRules' class='roleForm' size='mini'>
            <el-form-item class='label' label='' prop='code'>
              <label>角色编码</label>
              <el-input v-model='role.form.roleForm.code'></el-input>
            </el-form-item>
            <el-form-item class='label' label='' prop='name'>
              <label>角色名称</label>
              <el-input v-model='role.form.roleForm.name'></el-input>
            </el-form-item>
            <el-form-item class='label' label='' prop='menuIds'>
              <Jointlevel :data='role.roleMenusInfo' @checkId='role.checkId'></Jointlevel>
            </el-form-item>
          </el-form>
        </div>
        <div v-if='role.list.act === 1' class='info'>
          <el-form ref='roleForm' :model='role.form.userForm' :rules='role.form.userRules' class='roleForm' size='mini'>
            <el-form-item class='label' label='' prop='name'>
              <label>用户组名</label>
              <el-input v-model='role.form.userForm.name'></el-input>
            </el-form-item>
          </el-form>
        </div>
      </template>
      <template v-slot:page>
        <span class='confirm_btn cursor' @click='role.edit'>确定</span>
      </template>
    </popup>
    <popup :info='user.info' @hide='user.hideRolePop()'>
      <template v-slot:title>
        <span class='select condition'>用户</span>
      </template>
      <template v-slot:main>
        <el-form ref='userForm' :model='user.form.userForm' :rules='user.form.userRules' class='userForm' size='mini' style='margin-right: 10px;'>
          <div class='flex'>
            <div class='col-7'>
              <p class='title'>基本信息</p>
              <!--              <div style="height: calc(100vh - 185px);padding: 0 0 0 10px;">-->
              <!--                <el-scrollbar :native="false" :noresize="false" tag="div">-->
              <el-form-item class='label' label='' prop='name'>
                <label>姓名</label>
                <el-input v-model='user.form.userForm.name' autocomplete='off' placeholder='请输入...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='username'>
                <label>账户</label>
                <el-input v-model='user.form.userForm.username' :disabled='user.form.isDisable' autocomplete='off' placeholder='请输入...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='password'>
                <label>密码</label>
                <el-input v-model='user.form.userForm.password' :placeholder="user.form.isDisable?
                    '如需修改请输入...':'请输入...'" autocomplete='off' size='small' type='password'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='phone'>
                <label>电话</label>
                <el-input v-model.number='user.form.userForm.phone' placeholder='请选择...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='ids'>
                <label>角色</label>
                <el-select v-model='user.form.userForm.roles[0].id' filterable placeholder='请选择...' size='small' style='width: 100%;' @change='user.roleSelect'>
                  <el-option v-for='item in role.list.rows' :key='item.id' :label='item.name' :value='item.id'></el-option>
                </el-select>
              </el-form-item>
              <el-form-item class='label label-4' prop='enterpriseIds'>
                <label>管理公司</label>
                <!--                    <el-select v-model="user.form.userForm.enterpriseId" filterable placeholder="请选择..." size="small" style="width: 100%;">-->
                <!--                      <el-option v-for="item in state.enterpriseId" :key="item.id" :label="item.name" :value="item.id"></el-option>-->
                <!--                    </el-select>-->
                <el-cascader v-model='user.form.userForm.enterpriseIds' :options='state.enterpriseId' :props="{expandTrigger: 'click', value:'id',label:'name',multiple: true }" clearable collapse-tags size='small' style='width: 100%;'>
                  <template #default='{ node, data }'>
                    <span>{{ data.name }}</span>
                  </template>
                </el-cascader>
              </el-form-item>
              <el-form-item class='label' prop='status'>
                <label>状态</label>
                <Jointlevel :data='user.form.status' style='margin:8px 0 0 85px;' @checkId='user.checkId'></Jointlevel>
              </el-form-item>
              <!--                </el-scrollbar>-->
              <!--              </div>-->
            </div>
            <div class='col-5' style='padding: 0 0 0 10px; '>
              <p class='title'>区域权限</p>
              <!--              <div style="height: calc(100vh - 185px);padding: 0 0 0 10px;">-->
              <!--                <el-scrollbar :native="false" :noresize="false" tag="div">-->
              <el-form-item class='label' prop='grid'>
                <Jointlevel :data='user.form.grid' @checkId='user.checkIdGrid'></Jointlevel>
              </el-form-item>

              <!--                </el-scrollbar>-->
              <!--              </div>-->
            </div>
            <div class='col-3' style='padding: 0 0 0 10px;display: none;'>
              <p class='title'>参数权限</p>
              <!--              <div style="height: calc(100vh - 185px);padding: 0 0 0 10px;">-->
              <!--                <el-scrollbar :native="false" :noresize="false" tag="div">-->
              <el-form-item class='label' prop='params'>
                <Jointlevel :data='user.form.params' @checkId='user.checkIdParam'></Jointlevel>
              </el-form-item>
              <!--                </el-scrollbar>-->
              <!--              </div>-->
            </div>
          </div>
        </el-form>
      </template>
      <template v-slot:page>
        <span class='confirm_btn cursor' @click='user.edit'>确定</span>
      </template>
    </popup>
    <Point :data="{show:state.pointMap,point:'104.044894,30.584891'}" @backPoint='state.backPoint'></Point>
  </div>
</template>

<script setup>
import {ElMessage} from 'element-plus';
import _ from 'lodash';
import {onMounted, reactive, ref} from 'vue';
import {get} from '~/utils/request.js';
import {del, post, put} from '../../../../utils/request';

const state = reactive({
  pointMap: false,
  backPoint(point) {
    state.pointMap = false;
  },
  enterpriseId: [],
  async getEnterpriseId() {
    let res = await get('/users/ee/list');
    if (res.code === 200) {
      this.enterpriseId = res.data;
    }
  }
});
const roleForm = ref(null);
const role = reactive({
  form: {
    roleForm: {
      id: '',
      name: '',
      code: '',
      remark: '',
      menuIds: '',
      status: '0'
    },
    roleRules: {
      name: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入账户名！'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ],
      code: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入角色编码！'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ],
      remark: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入CODE！'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ],
      menuIds: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请选择菜单！'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ]
    },
    isDisable: false,
    userForm: {
      id: '',
      name: '',
      code: '',
      remark: '',
      checkId: []
    },
    userRules: {
      name: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入账户名！'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ],
      code: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入CODE！'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ],
      remark: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入CODE！'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ],
      checkId: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入CODE！'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ]
    }
  },
  roleMenusInfo: {
    name: 'roleMenus',
    list: [],
    checkId: [],
    key: 'name',
    value: 'id',
    child: 'children',
    column: true,
    column2: false,
    single: false
  },
  list: {
    name: 'roleList',
    header: [
      {name: '角色权限', width: '100px', key: 'name', color: '#9495a9'},
      {name: '角色编码', width: '100px', key: 'code', color: '#9495a9'}
    ],
    rows: [],
    page: 1,
    size: 20,
    total: 1,
    currentPage: 1,
    act: 0,
    select: {
      open: false, // 是否开启多项选中
      selectAll: false, //全选
      isIndeterminate: false, // 中间状态
      selectId: [] // 选中ID
    }
  },
  handleCurrentChange(obj) {
    role.list.select.selectId = [];
    role.list.select.selectAll = false;
  },
  async getAllMenus() {
    let res = await get('/users/menu/list/2');
    if (res.code === 200) {
      role.roleMenusInfo.list = res.data;
    }
  },
  async getRoleMenus(item) {
    let res = await get(`/users/menu/${item.id}`);
    if (res.code === 200) {
      role.roleMenusInfo.checkId = res.data;
      role.form.roleForm.menuIds = res.data;
    }
  },
  async getRole() {
    this.list.act = 0;
    let res = await get('/users/role/list');
    if (res.code === 200) {
      this.list.rows = res.data;
      this.list.total = res.data.length;
    }
  },
  info: {
    show: false,
    name: 'rolePop',
    w: '40%',
    type: 'add'
  },
  hideRolePop() {
    role.info.show = false;
    roleForm.value.resetFields();
    role.info.type = 'add';
  },
  checkId(val) {
    role.form.roleForm.menuIds = val.checkId;
  },
  show(obj, item) {
    role.info.show = true;
    role.info.type = obj.type;
    if (role.info.type === 'edit') {
      if (item && role.list.act === 0) {
        this.form.roleForm.code = item.code;
        this.form.roleForm.name = item.name;
        this.form.roleForm.id = item.id;
        this.getRoleMenus(item);
      } else if (item && role.list.act === 1) {
        this.form.userForm.name = item.name;
      }
    } else {
      role.roleMenusInfo.checkId = [];
      roleForm.value.resetFields();
    }
  },
  edit() {
    roleForm.value.validate(async (valid) => {
      if (valid) {
        if (role.info.type === 'add') {
          let res = await post(
              '/users/role',
              {
                code: this.form.roleForm.code,
                name: this.form.roleForm.name,
                menuIds: this.form.roleForm.menuIds,
                remark: this.form.roleForm.remark,
                roleSort: 50,
                dataScope: '1',
                status: this.form.roleForm.status

              },
              true
          );
          if (res.code === 200) {
            this.info.show = false;
            this.getRole();
            ElMessage({
              duration: 1000,
              type: 'success',
              message: res.msg
            });
          }
        } else if (role.info.type === 'edit') {
          let res = await put(
              '/users/role',
              {
                code: this.form.roleForm.code,
                name: this.form.roleForm.name,
                menuIds: this.form.roleForm.menuIds,
                id: this.form.roleForm.id
              },
              true
          );
          if (res.code === 200) {
            this.info.show = false;
            this.getRole();
            ElMessage({
              duration: 1000,
              type: 'success',
              message: res.msg
            });
          }
        }
      } else {
        console.log('不通过');
        return false;
      }
    });
  },
  async delRole(item) {
    if (this.list.act === 0) {
      let res = await del(`/users/role/${item.id}`);
      if (res.code === 200) {
        this.getRole();
        ElMessage({
          duration: 1000,
          type: 'success',
          message: res.msg
        });
      }
    } else if (this.list.act === 1) {
      alert('用户组删除');
      let res = await del(`/users/role/${item.id}`);
      if (res.code === 200) {
        this.getRole();
        ElMessage({
          duration: 1000,
          type: 'success',
          message: res.msg
        });
      }
    }
  }
});
const userForm = ref(null);
const user = reactive({
  form: {
    userForm: {
      id: '',
      name: '',
      username: '',
      password: '',
      enterpriseId: '',
      enterpriseIds: [],
      phone: '',
      roles: [
        {
          name: '',
          id: ''
        }
      ],
      roleSort: '',
      status: '',
      grid: '',
      gridIds: [],
      params: ''
    },
    userRules: {
      name: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入姓名！'));
            } else {
              let reg = value.split('').length;
              if (reg > 1 && reg < 6) {
                callback();
              } else {
                callback(new Error('请输入2-5位字符！'));
              }
            }
          },
          trigger: 'blur'
        }
      ],
      username: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入姓名！'));
            } else {
              let reg = value.split('').length;
              if (reg > 1 && reg < 6) {
                callback();
              } else {
                callback(new Error('请输入2-5位字符！'));
              }
            }
          },
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '请输入密码！',
          trigger: 'blur'
        }
      ],
      status: [
        {
          required: true,
          message: '请选择状态！',
          trigger: 'change'
        }
      ],
      phone: [
        {
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入电话！'));
            } else {
              var reg = new RegExp('^1[0-9]{10}$');
              if (!reg.test(value)) {
                callback(new Error('请输入正确电话号码！'));
              } else {
                callback();
              }
            }
          },
          trigger: 'blur',
          required: true
        }
      ],
      enterpriseIds: [
        {
          required: true,
          message: '请选择公司',
          trigger: 'change'
        }
      ],
      ids: [
        {
          required: true,
          message: '请选择角色',
          trigger: 'change'
        }
      ]
      // grid: [
      //   {
      //     required: true,
      //     message: "请选择区域权限!",
      //     trigger: "change",
      //   },
      // ],
      // params: [
      //   {
      //     required: true,
      //     message: "请选择参数!",
      //     trigger: "change",
      //   },
      // ],
    },
    isDisable: false,
    grid: {
      name: 'grid',
      list: [
        {
          alias: '1级',
          boundary: '',
          centre_point: '104.030344,30.645797',
          child: [
            {
              alias: '2级',
              boundary: '',
              centre_point: '104.030344,30.645797',
              child: [
                {
                  alias: '3级',
                  boundary: '',
                  centre_point: '104.030344,30.645797',
                  child: [],
                  createtime: '2021-12-12 20:26:54',
                  createtime_: null,
                  description: '天润时代',
                  id: 31,
                  level: 1,
                  name: '天润时代2',
                  organizationid: 186,
                  parentGridAlias: null,
                  parentGridName: null,
                  pid: -1,
                  selected: true,
                  stationCount: null,
                  status: 0
                },
                {
                  alias: '3级',
                  boundary: '',
                  centre_point: '104.030344,30.645797',
                  child: [],
                  createtime: '2021-12-12 20:26:54',
                  createtime_: null,
                  description: '天润时代',
                  id: 32,
                  level: 1,
                  name: '天润时代3',
                  organizationid: 186,
                  parentGridAlias: null,
                  parentGridName: null,
                  pid: -1,
                  selected: true,
                  stationCount: null,
                  status: 0
                },
                {
                  alias: '3级',
                  boundary: '',
                  centre_point: '104.030344,30.645797',
                  child: [],
                  createtime: '2021-12-12 20:26:54',
                  createtime_: null,
                  description: '天润时代',
                  id: 33,
                  level: 1,
                  name: '天润时代2',
                  organizationid: 186,
                  parentGridAlias: null,
                  parentGridName: null,
                  pid: -1,
                  selected: true,
                  stationCount: null,
                  status: 0
                },
                {
                  alias: '3级',
                  boundary: '',
                  centre_point: '104.030344,30.645797',
                  child: [],
                  createtime: '2021-12-12 20:26:54',
                  createtime_: null,
                  description: '天润时代',
                  id: 34,
                  level: 1,
                  name: '天润时代3',
                  organizationid: 186,
                  parentGridAlias: null,
                  parentGridName: null,
                  pid: -1,
                  selected: true,
                  stationCount: null,
                  status: 0
                }
              ],
              createtime: '2021-12-12 20:26:54',
              createtime_: null,
              description: '天润时代',
              id: 21,
              level: 1,
              name: '天润时代2',
              organizationid: 186,
              parentGridAlias: null,
              parentGridName: null,
              pid: -1,
              selected: true,
              stationCount: null,
              status: 0
            },
            {
              alias: '天润时代3',
              boundary: '',
              centre_point: '104.030344,30.645797',
              child: [],
              createtime: '2021-12-12 20:26:54',
              createtime_: null,
              description: '天润时代',
              id: 22,
              level: 1,
              name: '天润时代3',
              organizationid: 186,
              parentGridAlias: null,
              parentGridName: null,
              pid: -1,
              selected: true,
              stationCount: null,
              status: 0
            },
            {
              alias: '天润时代2',
              boundary: '',
              centre_point: '104.030344,30.645797',
              child: [],
              createtime: '2021-12-12 20:26:54',
              createtime_: null,
              description: '天润时代',
              id: 23,
              level: 1,
              name: '天润时代2',
              organizationid: 186,
              parentGridAlias: null,
              parentGridName: null,
              pid: -1,
              selected: true,
              stationCount: null,
              status: 0
            },
            {
              alias: '天润时代3',
              boundary: '',
              centre_point: '104.030344,30.645797',
              child: [],
              createtime: '2021-12-12 20:26:54',
              createtime_: null,
              description: '天润时代',
              id: 24,
              level: 1,
              name: '天润时代3',
              organizationid: 186,
              parentGridAlias: null,
              parentGridName: null,
              pid: -1,
              selected: true,
              stationCount: null,
              status: 0
            }
          ],
          createtime: '2021-12-12 20:26:54',
          createtime_: null,
          description: '天润时代',
          id: 1,
          level: 1,
          name: '天润时代',
          organizationid: 186,
          parentGridAlias: null,
          parentGridName: null,
          pid: -1,
          selected: true,
          stationCount: null,
          status: 0
        }
      ],
      checkId: [],
      key: 'alias',
      value: 'id',
      child: 'children',
      column: true,
      column2: true,
      single: false
    },
    params: {
      name: 'params',
      list: [
        {name: 'PM10', param: 'pm10'},
        {name: 'PM25', param: 'pm25'},
        {name: 'NO2', param: 'no2'},
        {name: 'SO2', param: 'so2'}
      ],
      checkId: [],
      key: 'name',
      value: 'param',
      child: 'child',
      column: false,
      single: false
    },
    status: {
      name: 'status',
      list: [
        {
          alias: '停用',
          id: 1,
          name: '停用'
        },
        {
          alias: '启用',
          id: 0,
          name: '启用'
        }
      ],
      checkId: [],
      key: 'alias',
      value: 'id',
      child: 'child',
      column: false,
      single: true,
      noAll: true
    }
  },
  list: {
    name: 'user',
    header: [
      {name: '姓名', width: '150px', key: 'name', color: '#9495a9'},
      {name: '账号', width: '150px', key: 'username', color: '#9495a9'},
      {name: '电话', width: '150px', key: 'phone', color: '#9495a9', rang: true}
    ],
    rows: [],
    rows2: [],
    page: 1,
    size: 20,
    total: 70,
    currentPage: 1,
    search: '',
    select: {
      id: 'id',
      open: true, // 是否开启多项选中
      selectAll: false, //全选
      isIndeterminate: false, // 中间状态
      selectId: [] // 选中ID
    }
  },
  async getTree() {
    let res = await get('/users/grid/tree');
    if (res.code === 200) {
      user.form.grid.list = res.data;
    }
  },
  checkId(val) {
    user.form.userForm.status = val.checkId.toString();
  },
  checkIdGrid(val) {
    user.form.grid.checkId = val.checkId;
    user.form.userForm.grid = val.checkId.toString();
  },
  checkIdParam(val) {
    user.form.params.checkId = val.checkId;
    user.form.userForm.params = val.checkId.toString();
  },
  handleCurrentChange(obj) {
    user.list.multipleSelection = [];
    user.list.selectAll = false;
    user.list.page = obj.page;
    user.getUser();
  },
  selectId(val) {
    console.log(val);
  },
  async getUser(type) {
    if (type === 'search') {
      user.list.page = 1;
    }
    let res = await get('/users/user/list', {
      page: user.list.page,
      size: user.list.size
    });
    if (res.code === 200) {
      this.list.rows = res.data.list;
      this.list.rows2 = res.data.list;
      this.list.total = res.data.total;
    }
  },
  info: {
    show: false,
    name: 'userPop',
    w: '50%',
    type: 'add'
  },
  show(obj, item) {
    user.info.show = true;
    userForm.value.resetFields();
    user.info.type = obj.type;
    if (user.info.type === 'add') {
      user.form.isDisable = false;
      user.form.userRules['password'][0].required = true;
      user.form.userForm = {
        name: '',
        username: '',
        password: '',
        enterpriseId: '',
        enterpriseIds: [],
        phone: '',
        roles: [
          {
            name: ''
          }
        ],
        status: '',
        grid: '',
        params: ''
      };
      this.form.grid.checkId = [];
      this.form.params.checkId = [];
      this.form.status.checkId = [];
    } else {
      user.form.isDisable = true;
      user.form.userRules['password'][0].required = false;
      this.form.userForm = _.clone(item);
      this.form.userForm.ids = this.form.userForm.roles[0].id;
      let arr = [];
      if (this.form.userForm.enterpriseIds) {
        this.form.userForm.enterpriseIds.split(',').forEach(i => {
          arr.push(Number(i));
        });
      }
      this.form.userForm.enterpriseIds = arr;
      this.form.userForm.grid = [1].toString();
      this.form.userForm.params = ['pm25'].toString();
      this.form.status.checkId = item.status;
      let arr2 = [];
      if (user.form.userForm.gridIds) {
        user.form.userForm.gridIds.split(',').forEach(j => {
          arr2.push(Number(j));
        });
      }
      this.form.grid.checkId = arr2;
      this.form.params.checkId = ['pm25'];
    }
  },
  hideRolePop() {
    user.info.show = false;
    userForm.value.resetFields();
    user.info.type = 'add';
    user.form.status.checkId = [];
  },
  edit() {
    userForm.value.validate(async (valid) => {
      if (valid) {
        console.log('通过');
        if (this.info.type === 'add') {
          let res = await post(
              '/users/user',
              {
                id: this.form.userForm.id,
                roles: this.form.userForm.roles,
                name: this.form.userForm.name,
                username: this.form.userForm.username,
                password: this.form.userForm.password,
                phone: this.form.userForm.phone,
                enterpriseId: this.form.userForm.enterpriseId,
                grid: user.form.userForm.grid.toString(),
                enterpriseIds: Array.isArray(this.form.userForm.enterpriseIds) ? this.form.userForm.enterpriseIds.toString() : this.form.userForm.enterpriseIds,
                status: user.form.userForm.status.toString(),
                gridIds: Array.isArray(this.form.userForm.grid) ? this.form.userForm.grid.toString() : this.form.userForm.grid
              },
              true
          );
          if (res.code === 200) {
            this.info.show = false;
            this.info.type = 'add';
            this.getUser();
          }
        } else if (this.info.type === 'edit') {
          this.form.userForm.enterpriseIds = Array.isArray(this.form.userForm.enterpriseIds) ? this.form.userForm.enterpriseIds.toString() : this.form.userForm.enterpriseIds;
          this.form.userForm.gridIds = Array.isArray(this.form.userForm.grid) ? this.form.userForm.grid.toString() : this.form.userForm.grid;
          let res = await put('/users/user', this.form.userForm, true);
          if (res.code === 200) {
            if (this.form.userForm.password) {
              let res2 = await put('/users/user/resetPwd', this.form.userForm, true);
              if (res2.code === 200) {
                this.info.show = false;
                this.info.type = 'add';
                this.getUser();
                ElMessage({
                  duration: 1000,
                  type: 'success',
                  message: res2.msg
                });
              }
            } else {
              this.info.show = false;
              this.info.type = 'add';
              this.getUser();
              ElMessage({
                duration: 1000,
                type: 'success',
                message: res.msg
              });
            }
          }
        }
      } else {
        console.log('不通过');
        return false;
      }
    });
  },
  async delUser(item) {
    let res = await del(`/users/user/${item.id}`);
    if (res.code === 200) {
      user.getUser();
      ElMessage({
        duration: 1000,
        type: 'success',
        message: res.msg
      });
    }
  },
  roleSelect() {
    user.form.userForm.ids = user.form.userForm.roles[0].id;
  }
});
onMounted(() => {
  role.getAllMenus();
  role.getRole();
  user.getUser();
  user.getTree();
  state.getEnterpriseId();
});
</script>

<style lang='less' scoped>
.rolea{
  width:100%;
  height:100%;
  overflow-y:auto;

  .col-4{
    margin:12px 12px 0;
    background:#EDF1F7;
    height:calc(100% - 24px);
  }

  .col-8{
    margin:12px 12px 12px 12px;
    background:#EDF1F7;
    height:calc(100% - 24px);
  }

  @media only screen and (min-width:1000px){
    .col-4{
      margin:12px 0 12px 12px;
      background:#EDF1F7;
      width:calc(33.33% - 24px);
    }

    .col-8{
      margin:12px;
      background:#EDF1F7;
      width:calc(66.66% - 12px);
    }
  }

  .info{
    box-sizing:border-box;
    padding:10px;
  }

  :deep(.el-cascader__tags){
    padding-left:85px;
    box-sizing:border-box;
  }
}
</style>
