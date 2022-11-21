<template>
  <div class='contentBox'>
    <div class='friendship'>
      <div class='col-12 card'>
        <p class='h60 flex nowrap just-b align-c'>
          <span class='select' @click='list1.getList()'>分类目录</span>
          <Btn :info="{
            id: 3,
            name: list1.list.active === 0 ? '新增目录' : '新增用户组',
            type: 'add',
            class:'Btn',
            icon:'icon-RectangleCopy52',
            title:list1.list.active === 0 ? '新增目录' : '新增用户组',
        }" @handleClick='list1.getInfo(null)'></Btn>
        </p>
        <div class='h100-60'>
          <Table :list='list1.list' @handleCurrentChange='list1.handleCurrentChange'>
            <template v-slot:rightTitle='{item}'>
              <div class='flex just-c align-c' style='flex: 0 0 100px'>编辑</div>
            </template>
            <template v-slot:rightBtn='{item}'>
              <div class='flex' style='flex: 0 0 100px'>
                <div class='cursor but text-color flex just-c' style='width: 50%;'>
                  <i class='iconfont iconfontHover icon-bianji1' title='编辑' @click='list1.getInfo(item)'></i>
                </div>
                <div class='cursor but text-color flex just-c' style='width: 50%;'>
                  <el-popconfirm title='您是否确定删除当前目录?' @cancel='' @confirm='list1.del(item)'>
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
        <span class='select condition'>{{ list1.info.type === 'add' ? '新增目录' : '修改目录' }}</span>
      </template>
      <template v-slot:main>
        <el-form ref='formIns' :model='list1.form' :rules='list1.rules' class='formIns'>
          <el-form-item class='label' prop='title'>
            <label for='title'>网站标题</label>
            <el-input id='title' v-model='list1.form.title' type='input'></el-input>
          </el-form-item>
          <el-form-item class='label' prop='code'>
            <label for='code'>权限编码</label>
            <el-input id='code' v-model='list1.form.code' type='input'></el-input>
          </el-form-item>
          <el-form-item class='label' prop='introduction'>
            <label for='introduction'>网站链接</label>
            <el-input id='introduction' v-model='list1.form.introduction' type='textarea'></el-input>
          </el-form-item>
        </el-form>
      </template>
      <template v-slot:page>
        <span class='confirm_btn cursor' @click='list1.submit()'>确定</span>
      </template>
    </popup>
    <Point :data='{show: state.show, point: state.point}' @backPoint='state.backPoint'></Point>
  </div>
</template>

<script name='/friendship' setup>
import {get, post} from '~/utils/request';
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
      {name: '网站标题', width: '200px', key: 'title', color: '#9495a9'},
      {name: '权限编码', width: '100px', key: 'code', color: '#9495a9'},
      {name: '网站链接', width: '500px', key: 'introduction', color: '#9495a9'}
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
  async getList(type) {
    if (type === 'search') {
      this.list.page = 1;
    }
    let res = await get('/dataManage/friendship', {
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
    title: '',
    code: '',
    author: '',
    introduction: ''
  },
  rules: {
    title: [
      {
        required: true,
        validator: (rule, value, callback) => {
          if (value === '' || value === undefined) {
            callback(new Error('请输入书名！'));
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
          if (value === '' || value === undefined) {
            callback(new Error('请输入书目编码！'));
          } else {
            callback();
          }
        },
        trigger: 'blur'
      }
    ],
    author: [
      {
        required: true,
        validator: (rule, value, callback) => {
          if (value === '' || value === undefined) {
            callback(new Error('请输入作者！'));
          } else {
            callback();
          }
        },
        trigger: 'blur'
      }
    ],
    introduction: [
      {
        required: true,
        validator: (rule, value, callback) => {
          if (value === '' || value === undefined) {
            callback(new Error('请输入简介！'));
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
    if (row) { // 修改
      this.form = JSON.parse(JSON.stringify(row));
      this.info.type = 'edit';
      this.info.show = true;
    } else { // 新增
      this.form = {};
      this.info.type = 'add';
      this.info.show = true;
    }
  },
  submit() {
    formIns.value.validate(async (valid) => {
      if (valid) {
        if (this.info.type === 'add') {
          let res = await post('/dataManage/friendship', this.form);
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
          let res = await post('/dataManage/friendship', this.form);
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
    let res = await post(`/manage/drole/drole`, {
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

onMounted(() => {
  list1.getList(null);
});
</script>

<style lang='less' scoped>
.friendship{
  width:calc(100% - 20px);
  height:calc(100% - 20px);
  padding:10px;

  :deep(.el-cascader__tags){
    padding-left:85px;
    box-sizing:border-box;
  }
}
</style>