<template>
  <div class='contentBox'>
    <div class='role flex wrap just-b'>
      <div class='col-4 card'>
        <p class='h60 flex nowrap just-b align-c'>
          <span class='select' @click='list1.getList()'>角色</span>
          <Btn :info="{
                      id: 3,
                      name: list1.list.active === 0 ? '新增角色' : '新增用户组',
                      type: 'add',
                      class:'Btn',
                      icon:'icon-RectangleCopy52',
                      title:list1.list.active === 0 ? '新增角色' : '新增用户组',
                  }" @handleClick='list1.getInfo(null)'></Btn>
        </p>
        <div class='h100-60'>
          <Table :list='list1.list' @handleCurrentChange='list1.handleCurrentChange'>
            <template v-slot:rightTitle='{}'>
              <div class='flex just-c align-c' style='flex: 0 0 100px'>编辑</div>
            </template>
            <template v-slot:rightBtn='{item}'>
              <div class='flex' style='flex: 0 0 100px'>
                <div class='cursor but text-color flex just-c' style='width: 50%;'>
                  <i class='iconfont iconfontHover icon-bianji1' title='编辑' @click='list1.getInfo(item)'></i>
                </div>
                <div class='cursor but text-color flex just-c' style='width: 50%;'>
                  <el-popconfirm title='您是否确定删除当前角色?' @confirm='list1.del(item)'>
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
      <div class='col-8 card'>
        <p class='h60 flex nowrap just-b align-c'>
          <span class='select' @click='list2.getList()'>用户</span>
          <!--        <Btn :info="{-->
          <!--            id: 3,-->
          <!--            name: list2.list.active === 0 ? '新增用户' : '新增用户组',-->
          <!--            type: 'add',-->
          <!--            class:'Btn',-->
          <!--            icon:'icon-RectangleCopy52',-->
          <!--            title:list2.list.active === 0 ? '新增用户' : '新增用户组',-->
          <!--        }" @handleClick="list2.getInfo(null)"></Btn>-->
        </p>
        <div class='h100-60'>
          <Table :list='list2.list' @handleCurrentChange='list2.handleCurrentChange'>
            <template v-slot:rightTitle='{}'>
              <div class='flex just-c align-c' style='flex: 0 0 100px'>编辑</div>
            </template>
            <template v-slot:rightBtn='{item}'>
              <div class='flex' style='flex: 0 0 100px'>
                <div class='cursor but text-color flex just-c' style='width: 50%;'>
                  <i class='iconfont iconfontHover icon-bianji1' title='编辑' @click='list2.getInfo(item)'></i>
                </div>
                <div class='cursor but text-color flex just-c' style='width: 50%;'>
                  <el-popconfirm title='您是否确定删除当前角色?' @confirm='list2.del(item)'>
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
    </div>
    <popup :info='list1.info' @hide='list1.hide()'>
      <template v-slot:title>
        <span class='select condition'>{{ list1.info.type === 'add' ? '新增角色' : '修改角色' }}</span>
      </template>
      <template v-slot:main>
        <el-form ref='formIns' :model='list1.form' :rules='list1.rules' class='formIns'>
          <el-form-item class='label' prop='name'>
            <label for='name'>角色权限</label>
            <el-input id='name' v-model='list1.form.role' type='input'></el-input>
          </el-form-item>
          <BasicEditor :text='list1.form.role'></BasicEditor>
        </el-form>
      </template>
      <template v-slot:page>
        <span class='confirm_btn cursor' @click='list1.submit()'>确定</span>
      </template>
    </popup>
    <popup :info='list2.info' @hide='list2.hide()'>
      <template v-slot:title>
        <span class='select condition'>{{ list2.info.type === 'add' ? '新增用户' : '修改用户' }}</span>
      </template>
      <template v-slot:main>
        <el-form ref='formIns2' :model='list2.form' :rules='list2.rules' class='formIns flex column' style='height: 100%;'>
          <el-form-item class='label' prop='name'>
            <label for='name'>用户组名</label>
            <el-input id='name' v-model='list2.form.name' type='input'></el-input>
          </el-form-item>
          <el-form-item class='label' prop='introduction'>
            <label for='name'>组织描述</label>
            <el-input id='name' v-model='list2.form.introduction' type='input'></el-input>
          </el-form-item>
          <Table :list="{
               name: 'roleList',
               header: [
                 {name: '角色权限', width: '20%', key: 'name'},
                 {name: '角色编码', width: '20%', key: 'introduction'},
               ],
               rows: list2.form.groupUsers  || [],
               page: 1,
               size: 10000000,
               total: 1,
               currentPage: 1,
               active: 0,
               select: {
                 open: false, // 是否开启多项选中
                 selectAll: false, // 是否全选
                 id: '', // 选择字段
                 selectId: [], // 选中ID
               }
             }" @handleCurrentChange='list2.handleCurrentChange'>
            <template v-slot:rightTitle='{}'>
              <div class='flex just-c align-c' style='flex: 0 0 100px'>编辑</div>
            </template>
            <template v-slot:rightBtn='{item}'>
              <div class='flex' style='flex: 0 0 100px;'>
                <div class='cursor but text-color flex just-c' style='width: 100%;'>
                  <el-popconfirm title='您是否确定删除当前角色?' @confirm='list2.del(item)'>
                    <template #reference>
                      <i class='iconfont iconfontHover icon-shanchu_o' title='删除'></i>
                    </template>
                  </el-popconfirm>
                </div>
              </div>
            </template>
          </Table>
        </el-form>
      </template>
      <template v-slot:page>
        <span class='confirm_btn cursor' @click='list2.submit()'>确定</span>
      </template>
    </popup>
    <Point :data='{show: state.show, point: state.point}' @backPoint='state.backPoint'></Point>
  </div>
</template>

<script name='/roleManage' setup>

import {del, get, post, put} from '~/utils/request';
import {ElMessage} from 'element-plus';

const state = reactive({
  show: false,
  point: '0,0',
  backPoint(val) {
    console.log(val, '点');
  }
});

const formIns = ref(null);
const list1 = reactive({
  // 查询展示
  list: {
    name: 'roleList',
    header: [
      {name: '角色权限', width: '20%', key: 'name', color: '#9495a9'},
      {name: '角色编码', width: '20%', key: 'code', color: '#9495a9'}
    ],
    rows: [],
    page: 1,
    size: 20,
    total: 1,
    currentPage: 1,
    active: 0,
    select: {
      open: false, // 是否开启多项选中
      selectAll: false, // 是否全选
      id: '', // 选择字段
      selectId: [] // 选中ID
    }
  },
  menus: {
    name: 'menus',
    list: [],
    checkId: [],
    key: 'menu',
    value: 'functionId',
    child: 'child',
    column: false,
    single: false
  },
  async getList(type) {
    if (type === 'search') {
      this.list.page = 1;
    }
    let res = await get('/system/roleManage', {
      page: this.list.page,
      size: this.list.size
    });
    if (res.status) {
      this.list.rows = res.data.data;
      this.list.total = res.data.total;
    }
  },
  handleCurrentChange(obj) {
    list1.list.select.selectId = [];
    list1.list.select.selectAll = false;
    list1.list.page = obj.page;
    list1.getList(null);
  },
  // 新增修改
  form: {
    id: '',
    name: '',
    code: '',
    remark: '',
    menuIds: '',
    status: '0'
  },
  rules: {
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
    ]
  },
  isDisable: false,
  info: {
    show: false,
    name: 'roleInfo',
    w: '50%',
    type: 'add'
  },
  async getInfo(row) {
    if (row) {
      // 修改
      this.form = JSON.parse(JSON.stringify(row));
      this.info.type = 'edit';
      this.info.show = true;
      return;
      let res = await get(`/system/roleManage/${row.id}`);
      if (res.status) {
        this.form = JSON.parse(JSON.stringify(row));
        res.data.sort((a, b) => {
          return a['functionId'] - b['functionId'];
        });
        this.menus.list = res.data;
        this.menus.checkId = [];
        res.data.forEach((i) => {
          if (i.bind) this.menus.checkId.push(i.functionId);
        });
        this.info.type = 'edit';
        this.info.show = true;
      }
    } else {
      // 新增
      // let res = await get(`/manage/rrole/sfunc`);
      // if (res.status) {
      //   res.data.sort((a, b) => {
      //     return a['functionId'] - b['functionId'];
      //   });
      //   this.menus.list = res.data;
      // }
      this.form = {};
      this.menus.checkId = [];
      this.info.type = 'add';
      this.info.show = true;
    }
  },
  submit() {
    formIns.value.validate(async (valid) => {
      if (valid) {
        if (this.info.type === 'add') {
          let res = await post('/system/roleManage', {
            name: this.form.name,
            functions: this.menus.checkId.toString()
          });
          if (res.status) {
            this.info.show = false;
            this.info.type = 'add';
            this.getList();
            ElMessage({
              duration: 1000,
              type: 'success',
              message: '新增成功'
            });
          }
        } else if (this.info.type === 'edit') {
          let res = await put('/system/roleManage', {
            name: this.form.name,
            functions: this.menus.checkId.toString(),
            id: this.form.id
          });
          if (res.status) {
            this.info.show = false;
            this.info.type = 'add';
            this.getList();
            ElMessage({
              duration: 1000,
              type: 'success',
              message: '修改成功'
            });
          }
        }
      } else {
        return false;
      }
    });
  },
  hide() {
    formIns.value.resetFields();
    this.info.show = false;
  },
  async del(row) {
    let res = await del(`/system/roleManage`, {
      roleId: row.id
    });
    if (res.status) {
      this.getList();
      ElMessage({
        duration: 1000,
        type: 'success',
        message: '删除成功'
      });
    }
  }
});

const formIns2 = ref(null);
const list2 = reactive({
  // 查询展示
  list: {
    name: 'roleList',
    header: [
      {name: '角色权限', width: '20%', key: 'name', color: '#9495a9'},
      {name: '角色编码', width: '20%', key: 'code', color: '#9495a9'}
    ],
    rows: [],
    page: 1,
    size: 10000000,
    total: 1,
    currentPage: 1,
    active: 0,
    select: {
      open: false, // 是否开启多项选中
      selectAll: false, // 是否全选
      id: '', // 选择字段
      selectId: [] // 选中ID
    }
  },
  async getList(type) {
    if (type === 'search') {
      this.list.page = 1;
    }
    let res = await get('/system/userManage', {
      page: this.list.page,
      size: this.list.size
    });
    if (res.status) {
      this.list.rows = res.data.data;
      this.list.total = res.data.total;
    }
  },
  handleCurrentChange(obj) {
    list2.list.select.selectId = [];
    list2.list.select.selectAll = false;
    list2.list.page = obj.page;
    list2.getList(null);
  },
  // 新增修改
  form: {
    id: '',
    name: '',
    code: '',
    introduction: '',
    menuIds: '',
    status: '0',
    groupUsers: []
  },
  rules: {
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
    ]
  },
  isDisable: false,
  info: {
    show: false,
    name: 'roleInfo',
    w: '40%',
    type: 'add'
  },
  async getInfo(row) {
    if (row) {
      // 修改
      let res = await get(`/system/userManage/group`);
      if (res.status) {
        this.form = JSON.parse(JSON.stringify(row));
        this.form.groupUsers = res.data.data;
        this.info.type = 'edit';
        this.info.show = true;
      }
    } else {
      // 新增
      let res = await get(`/manage/rrole/notBindList`);
      if (res.status) {
        this.userList = res.user;
      }
      this.form = {};
      this.info.type = 'add';
      this.info.show = true;
    }
  },
  submit() {
    formIns2.value.validate(async (valid) => {
      if (valid) {
        if (this.info.type === 'add') {
          let res = await post('/system/userManage', {
            name: this.form.name,
            userid: this.form.user.toString(),
            description: this.form.description
          });
          if (res.status) {
            this.info.show = false;
            this.info.type = 'add';
            this.getList();
          }
        } else if (this.info.type === 'edit') {
          let res = await put('/system/userManage', this.form.userForm, true);
          if (res.code === 200) {
            if (this.form.userForm.password) {
              let res2 = await put(
                  '/users/user/resetPwd',
                  this.form.userForm,
                  true
              );
              if (res2.code === 200) {
                this.info.show = false;
                this.info.type = 'add';
                this.getList();
                ElMessage({
                  duration: 1000,
                  type: 'success',
                  message: res2.msg
                });
              }
            } else {
              this.info.show = false;
              this.info.type = 'add';
              this.getList();
              ElMessage({
                duration: 1000,
                type: 'success',
                message: res.msg
              });
            }
          }
        }
      } else {
        return false;
      }
    });
  },
  hide() {
    formIns.value.resetFields();
    this.info.show = false;
  },
  async del(row) {
    let res = await del('/system/userManage', {
      ids: row.groupid
    });
    if (res.status) {
      this.getList();
      ElMessage({
        duration: 1000,
        type: 'success',
        message: res.message
      });
    }
  }
});
onMounted(() => {
  list1.getList(null);
  list2.getList(null);
});
</script>

<style lang='less' scoped>
.role{
  width:100%;
  height:100%;
  padding:12px;
  box-sizing:border-box;
  overflow-y:auto;

  .col-4{
    background:#edf1f7;
    margin-bottom:12px;
  }

  .col-8{
    background:#edf1f7;
  }

  @media only screen and (min-width:1000px){
    .col-4{
      margin-bottom:0;
      background:#edf1f7;
      width:calc(33.33% - 6px) !important;
    }

    .col-8{
      background:#edf1f7;
      width:calc(66.66% - 6px) !important;
    }
  }

  :deep(.el-cascader__tags){
    padding-left:85px;
    box-sizing:border-box;
  }
}
</style>
 