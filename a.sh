#使用方法 a.sh 文件名称 要创建的位置（可不选 默认根目录）
# 文件
for file in $(ls)
do
  if [ $file == $1 ];then
      echo $1 "目录已存在"
      exit
  fi
done

if [ -n "$2" ]; then
 directory=$2
 rep="/"
 directory=${directory//\\/$rep}
 directory=${directory/:/}
 directory="/"$directory
 cd $directory
fi

mkdir $1
cd $1
#生成 less
#echo "" > $1.less
#echo '' > $1.less
# 生成 Data.js
#echo "" > $1Data'.js'
#echo 'export default {
#}' > $1Data'.js'

# 生成 vue
echo "" > $1.vue
echo '
<template>
  <div class="contentBox">
    <div class="catalogue">
      <div class="col-12 card">
        <p class="h60 flex nowrap just-b align-c">
          <span class="select" @click="list1.getList()">分类目录</span>
          <Btn :info="{
            id: 3,
            name: list1.list.active === 0 ? '新增目录' : '新增用户组',
            type: 'add',
            class:'Btn',
            icon:'icon-RectangleCopy52',
            title:list1.list.active === 0 ? '新增目录' : '新增用户组',
        }" @handleClick="list1.getInfo(null)"></Btn>
        </p>
        <div class="h100-60">
          <Table :list="list1.list" @handleCurrentChange="list1.handleCurrentChange">
            <template v-slot:rightTitle="{}">
              <div class="flex just-c align-c" style="flex: 0 0 100px">编辑</div>
            </template>
            <template v-slot:rightBtn="{item}">
              <div class="flex" style="flex: 0 0 100px">
                <div class="cursor but text-color flex just-c" style="width: 50%;">
                  <i class="iconfont iconfontHover icon-bianji1" title="编辑" @click="list1.getInfo(item)"></i>
                </div>
                <div class="cursor but text-color flex just-c" style="width: 50%;">
                  <el-popconfirm title="您是否确定删除当前目录?" @confirm="list1.del(item)">
                    <template #reference>
                      <i class="iconfont iconfontHover icon-shanchu_o" title="删除"></i>
                    </template>
                  </el-popconfirm>
                </div>
              </div>
            </template>
          </Table>
        </div>
      </div>
    </div>
    <popup :info="list1.info" @hide="list1.hide()">
      <template v-slot:title>
        <span class="select condition">{{ list1.info.type === 'add' ? '新增目录' : '修改目录' }}</span>
      </template>
      <template v-slot:main>
        <el-form ref="formIns" :model="list1.form" :rules="list1.rules" class="formIns">
          <el-form-item class="label" prop="title">
            <label for="title">书名</label>
            <el-input id="title" v-model="list1.form.title" type="input"></el-input>
          </el-form-item>
          <el-form-item class="label" prop="author">
            <label for="author">作者</label>
            <el-input id="author" v-model="list1.form.author" type="input"></el-input>
          </el-form-item>
          <el-form-item class="label" prop="code">
            <label for="code">书目编码</label>
            <el-select v-model="list1.form.code" clearable placeholder="请选择书目编码">
              <el-option v-for="dict in sys_normal_disable" :key="dict.value" :label="dict.label" :value="dict.value"/>
            </el-select>
          </el-form-item>
          <el-form-item class="label" prop="introduction">
            <label for="introduction">简介</label>
            <el-input id="introduction" v-model="list1.form.introduction" rows="10" type="textarea"></el-input>
          </el-form-item>
          <Uploads :fileList="[]" @onChange=""></Uploads>
        </el-form>
      </template>
      <template v-slot:page>
        <span class="confirm_btn cursor" @click="list1.submit()">确定</span>
      </template>
    </popup>
  </div>
</template>

<script name="/catalogue" setup>
import {get, post, useDict} from "~/utils/request";
import {ElMessage} from "element-plus";
import {onMounted, reactive, ref} from "vue";

const {sys_normal_disable, sys_user_sex} = useDict("sys_normal_disable", "sys_user_sex");
const state = reactive({
  show: false,
  point: "0,0",
  backPoint(val) {
    console.log(val, "点");
  }
});

const formIns = ref(null);
const list1 = reactive({
  // 查询展示
  list: {
    name: "roleList",
    header: [
      {name: "书名", width: "200px", key: "title", color: "#9495a9"},
      {name: "作者", width: "100px", key: "author", color: "#9495a9"},
      {
        name: "书目编码",
        width: "100px",
        key: "code",
        color: "#9495a9",
        select: sys_normal_disable
      },
      {name: "简介", width: "500px", key: "introduction", color: "#9495a9"}
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
      id: "", // 选择字段
      selectId: [] // 选中ID
    }
  },
  async getList(type) {
    if (type === "search") {
      this.list.page = 1;
    }
    let res = await get("/dataManage/catalogue", {
      page: this.list.page,
      size: this.list.size
    });
    console.log("res:", res);
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
    id: "",
    title: "",
    code: "",
    author: "",
    introduction: ""
  },
  rules: {
    title: [
      {
        required: true,
        validator: (rule, value, callback) => {
          if (value === "" || value === undefined) {
            callback(new Error("请输入书名！"));
          } else {
            callback();
          }
        },
        trigger: "blur"
      }
    ],
    code: [
      {
        required: true,
        validator: (rule, value, callback) => {
          if (value === "" || value === undefined) {
            callback(new Error("请输入书目编码！"));
          } else {
            callback();
          }
        },
        trigger: "blur"
      }
    ],
    author: [
      {
        required: true,
        validator: (rule, value, callback) => {
          if (value === "" || value === undefined) {
            callback(new Error("请输入作者！"));
          } else {
            callback();
          }
        },
        trigger: "blur"
      }
    ],
    introduction: [
      {
        required: true,
        validator: (rule, value, callback) => {
          if (value === "" || value === undefined) {
            callback(new Error("请输入简介！"));
          } else {
            callback();
          }
        },
        trigger: "blur"
      }
    ]
  },
  isDisable: false,
  info: {
    show: false,
    name: "roleInfo",
    w: "40%",
    type: "add"
  },
  async getInfo(row) {
    if (row) {
      // 修改
      this.form = JSON.parse(JSON.stringify(row));
      this.info.type = "edit";
      this.info.show = true;
    } else {
      // 新增
      this.form = {};
      this.info.type = "add";
      this.info.show = true;
    }
  },
  submit() {
    formIns.value.validate(async (valid) => {
      if (valid) {
        if (this.info.type === "add") {
          let res = await post("/dataManage/catalogue", this.form);
          if (res.status) {
            this.info.show = false;
            this.info.type = "add";
            this.getList();
            ElMessage({
              duration: 1000,
              type: "success",
              message: "新增成功"
            });
          }
        } else if (this.info.type === "edit") {
          let res = await post("/dataManage/catalogue", this.form);
          if (res.status) {
            this.info.show = false;
            this.info.type = "add";
            this.getList();
            ElMessage({
              duration: 1000,
              type: "success",
              message: "修改成功"
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
        type: "success",
        message: "删除成功"
      });
    }
  },
  files: [],
  filesDisabled: false,
  filesChange(e) {}
});
onMounted(() => {
  list1.getList(null);
});
</script>

<style lang="less" scoped>
.catalogue{
  width:calc(100% - 20px);
  height:calc(100% - 20px);
  padding:10px;

  :deep(.el-cascader__tags){
    padding-left:85px;
    box-sizing:border-box;
  }
}
</style>
' > $1.vue

# 生成 js
#echo "" > $1.js
#echo 'import data from "./'$1'Data.js"
#import {reactive,onMounted} from "vue"
#export default {
#  name: "'$1'",
#  setup() {
#    const state = reactive({
#      ...data,
#    });
#    onMounted(()=>{
#
#    })
#    return{
#      state
#    }
#  }
#}
#' > $1.js
