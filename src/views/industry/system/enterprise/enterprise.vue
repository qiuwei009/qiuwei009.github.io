<template>
  <div class='enterprise flex'>
    <div class='col-3  one enterprise-item card'>
      <p class='top-p-60 flex nowrap just-b align-c darkcolor'>
        <span class='cursor select condition' style='margin: 0 10px 0 10px;' @click='enterprise.getEnterprise()'>企业/项目树</span>
        <span class='flex nowrap'>
          <Btn :info="{
            id: 3,
            name: '新增企业',
            type: 'add',
            class:'Btn',
            icon:'enterprise',
            title:'新增企业'
        }" @handleClick='enterprise.show'></Btn>
          <Btn :info="{
            id: 3,
            name: '新增项目',
            type: 'add',
            class:'Btn',
            icon:'project',
            title:'新增项目'
        }" @handleClick='enterprise.show'></Btn>
        </span>
      </p>
      <div class='h100-60 darkcolor'>
        <Table :list='enterprise.list' @handleCurrentChange='enterprise.handleCurrentChange' @handleLi='section.getSection'>
          <template v-slot:rightTitle='{item}'>
            <div class='flex just-a align-c omit' style='width: 120px;'>编辑</div>
          </template>
          <template v-slot:rightBtn='{item}'>
            <div class='flex nowrap just-b align-c omit' style='width: 120px;box-sizing: border-box;padding-right: 5px'>
              <i class='iconfont iconfontHover icon-bianji1' title='编辑' @click.stop="enterprise.show({type:'edit'},item)"></i>
              <el-popconfirm :title="item.phone?'您是否确定删除当前企业?':'您是否确定删除当前项目?'" @cancel='' @confirm.stop='enterprise.del(item)'>
                <template #reference>
                  <i class='iconfont iconfontHover icon-shanchu_o' title='删除' @click.stop=''></i>
                </template>
              </el-popconfirm>
              <i v-if='enterprise.active === item.createTime' class='iconfont icon-you-jiantou'></i>
              <i v-if='enterprise.active !== item.createTime' style='display: inline-block;width: 14px;text-align: center'>-</i>
            </div>
          </template>
        </Table>
      </div>
    </div>
    <div class='col-3  two enterprise-item card'>
      <div class='top-p-60 flex nowrap just-b align-c darkcolor'>
        <span class='cursor select condition' style='margin: 0 10px 0 10px;' @click='section.getSection(section.li)'>标段</span>
        <span class='flex nowrap omit'>
          <el-input v-model='section.list.search' class='fr' placeholder='请输入标段名称,默认当前页搜索,点击搜索全部标段搜索...' style='width:
           400px;' @input='section.list.rows = JSON.parse(JSON.stringify(section.list.rows2)).filter(i => i.name.includes(section.list.search))'>
            <template #suffix>
              <i class='iconfont icon-RectangleCopy2 cursor' @click="section.getSection('search')"></i>
            </template>
          </el-input>
          <Btn :info="{
            id: 3,
            name: '新增标段',
            type: 'add',
            class:'Btn',
            icon:'',
            title:'新增标段'
        }" @handleClick='section.show'></Btn>
        </span>
      </div>
      <div class='h100-60 darkcolor'>
        <Table :list='section.list' @handleCurrentChange='section.handleCurrentChange' @handleLi='device.getDevice' @selectId='section.selectId'>
          <template v-slot:rightTitle='{item}'>
            <div class='flex align-c just-c' style='width: 120px;'>编辑</div>
          </template>
          <template v-slot:rightBtn='{item}'>
            <div class='flex just-a nowrap' style='width: 120px;'>
              <i class='iconfont iconfontHover icon-bianji1' title='编辑' @click.stop="section.show({type:'edit'},item)"></i>
              <el-popconfirm title='您是否确定删除当前标段?' @cancel='' @confirm.stop='section.del(item)'>
                <template #reference>
                  <i class='iconfont iconfontHover icon-shanchu_o' title='删除' @click.stop=''></i>
                </template>
              </el-popconfirm>
              <i v-if='section.active === item.id' class='iconfont icon-you-jiantou' style='display: inline-block;width: 18px;text-align: center'></i>
              <i v-if='section.active !== item.id' style='display: inline-block;width: 18px;text-align: center'>-</i>
            </div>
          </template>
        </Table>
      </div>
    </div>
    <div class='col-6  enterprise-item card'>
      <div class='top-p-60 flex nowrap just-b align-c darkcolor'>
        <span class='cursor select condition' style='margin: 0 10px 0 10px;' @click='device.getDevice(device.li)'>测点
        </span> <span class='flex nowrap omit'>
          <el-input v-model='device.list.search' class='fr' placeholder='请输入测点ID,默认当前页搜索,点击搜索全部测点搜索...' style='width:
           400px;' @input='device.list.rows = JSON.parse(JSON.stringify(device.list.rows2)).filter(i => i.name.includes(device.list.search))'>
            <template #suffix>
              <i class='iconfont icon-RectangleCopy2 cursor' @click="device.getDevice('search')"></i>
            </template>
          </el-input>
          <Btn :info="{
            id: 3,
            name: '新增测点',
            type: 'add',
            class:'Btn',
            icon:'',
            title:'新增测点'
        }" @handleClick='device.show'></Btn>
        </span>
      </div>
      <div class='h100-60 darkcolor'>
        <Table :list='device.list' @handleCurrentChange='device.handleCurrentChange' @selectId='device.selectId'>
          <template v-slot:rightTitle>
            <div class='flex align-c just-c' style='flex: 1 0 80px;'>编辑</div>
          </template>
          <template v-slot:rightBtn='{item}'>
            <div class='flex just-a nowrap' style='flex: 1 0 80px;'>
              <i class='iconfont iconfontHover icon-bianji1' title='编辑' @click="device.show({type:'edit'},item)"></i>
              <el-popconfirm title='您是否确定删除当前测点?' @cancel='' @confirm.stop='device.del(item)'>
                <template #reference>
                  <i class='iconfont iconfontHover icon-shanchu_o' title='删除' @click.stop=''></i>
                </template>
              </el-popconfirm>
            </div>
          </template>
          <template v-slot:bottomBtn='{item}'>
            <Btn :info="{
                id: 3,
                name: '批量删除',
                type: 'del',
                class:'Btn',
                icon:'',
                title:'批量删除'
            }" @handleClick='device.delarr'></Btn>
          </template>
        </Table>
      </div>
    </div>
    <popup :info='enterprise.info' @hide='enterprise.hide()'>
      <template v-slot:title>
        <span class='select condition'>
          {{
            enterprise.form.eeForm.projects || enterprise.form.eeForm.type === 'enterprise' ? (enterprise.info.type === 'add' ?
                    '新增企业' :
                    '修改企业') :
                (enterprise.info.type === 'add' ? '新增项目' : '修改项目')
          }}
        </span>
      </template>
      <template v-slot:main>
        <el-form ref='eeForm' :model='enterprise.form.eeForm' :rules='enterprise.form.eeRules' class='eeForm' size='mini'>
          <div v-if="enterprise.form.eeForm.projects|| enterprise.form.eeForm.type === 'enterprise'" class='info'>
            <el-form-item class='label' label='' prop='name'>
              <label>企业名称</label>
              <el-input v-model.number='enterprise.form.eeForm.name' placeholder='请输入...' size='small'></el-input>
            </el-form-item>
            <el-form-item class='label' label='' prop='admin'>
              <label>负责人</label>
              <!--              <el-input id="roleName" v-model="enterprise.form.eeForm.admin"></el-input>-->
              <el-select v-model='enterprise.form.eeForm.admin' filterable placeholder='请选择...' size='small' style='width: 100%;'>
                <el-option v-for='item in user.list.rows' :key='item.id' :label='item.name' :value='item.name'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class='label' label='' prop='phone'>
              <label>电话号码</label>
              <el-input v-model.number='enterprise.form.eeForm.phone' placeholder='请输入...' size='small'></el-input>
            </el-form-item>
            <el-form-item v-if="enterprise.form.eeForm.parentId||enterprise.info.type === 'add'" class='label ' prop='parentId'>
              <label>所属公司</label>
              <el-cascader v-model='enterprise.form.eeForm.parentId' :options='enterprise.list.rows' :props="{expandTrigger: 'click',
                           checkStrictly: true,value:'id',label:'name',emitPath:false }" clearable size='small' style='width: 100%;'>
                <template #default='{ node, data }'>
                  <span>{{ data.name }}</span>
                </template>
              </el-cascader>
            </el-form-item>
          </div>
          <div v-else class='info'>
            <el-form-item class='label' label='' prop='name'>
              <label>项目名称</label>
              <el-input v-model.number='enterprise.form.eeForm.name' placeholder='请输入...' size='small'></el-input>
            </el-form-item>
            <el-form-item class='label' label='' prop='admin' style='width: 100%;'>
              <label>负责人</label>
              <!--              <el-input id="roleName" v-model="enterprise.form.eeForm.admin"></el-input>-->
              <el-select v-model='enterprise.form.eeForm.admin' filterable placeholder='请输入...' size='small' style='width: 100%;'>
                <el-option v-for='item in user.list.rows' :key='item.id' :label='item.name' :value='item.name'></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class='label ' prop='enterpriseId'>
              <label>所属企业</label>
              <el-cascader v-model='enterprise.form.eeForm.enterpriseId' :options='enterprise.list.rows' :props="{expandTrigger: 'click',
                           checkStrictly: true,value:'id',label:'name',emitPath:false }" clearable size='small' style='width: 100%;'>
                <template #default='{ node, data }'>
                  <span>{{ data.name }}</span>
                </template>
              </el-cascader>
            </el-form-item>
          </div>
        </el-form>
      </template>
      <template v-slot:page>
        <!-- <span class="cancel_btn cursor" @click="enterprise.hide()">取消</span> -->
        <span class='confirm_btn cursor' @click="enterprise.edit(enterprise.info.type,enterprise.form.eeForm.projects ||
              enterprise.form.eeForm.type === 'enterprise'?'enterprise':'project')">确定</span>
      </template>
    </popup>
    <popup :info='project.info' @hide='project.hide()'>
      <template v-slot:title>
        <span class='select condition'>项目详情</span>
      </template>
      <template v-slot:main>
        <div class='flex padding-10'>
          <div class='col-12'>
            <p class='title'>基本信息</p>
            <!--            <div style="height: calc(100vh - 210px);max-height: 400px;padding: 0 0 0 10px;">-->
            <!--              <el-scrollbar :native="false" :noresize="false" tag="div">-->
            <el-form ref='projectForm' :model='project.form.projectForm' :rules='project.form.projectRules' class='projectForm' size='mini' style='margin-right: 10px;'>
              <el-form-item class='label' label='' prop='name'>
                <label>项目名称</label>
                <el-input v-model='project.form.projectForm.name' :disabled='project.form.isDisable' autocomplete='off' placeholder='请输入...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='name'>
                <label>负责人</label>
                <!--                <el-input v-model="project.form.projectForm.admin" autocomplete="off" placeholder="请输入..."-->
                <!--                          size="small"></el-input>-->

                <el-select v-model='project.form.projectForm.admin' filterable placeholder='请选择...' size='small' style='width: 100%;'>
                  <el-option v-for='item in user.list.rows' :key='item.id' :label='item.name' :value='item.name'></el-option>
                </el-select>
              </el-form-item>
              <el-form-item class='label' label='' prop='lnglat'>
                <label @click='state.pointMap = true'>经纬度</label>
                <el-input v-model='project.form.projectForm.lnglat' autocomplete='off' placeholder='请输入或选择...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label ' prop='enterpriseId'>
                <label>所属企业</label>
                <el-cascader v-model='project.form.projectForm.enterpriseId' :options='enterprise.list.rows' :props="{expandTrigger: 'click', checkStrictly: true,value:'parentId',label:'name',emitPath:false }" clearable size='small' style='width: 100%;'>
                  <template #default='{ node, data }'>
                    <span>{{ data.name }}</span>
                  </template>
                </el-cascader>
              </el-form-item>
              <el-form-item class='label' prop='pushType'>
                <label>推送类型</label>
                <Jointlevel :data='project.form.status' style='margin:8px 0px 0px 49px;' @checkId='project.checkId'></Jointlevel>
              </el-form-item>
            </el-form>
            <!--              </el-scrollbar>-->
            <!--            </div>-->
          </div>
        </div>
      </template>
      <template v-slot:page>
        <!-- <span class="cancel_btn cursor" @click="project.hide()">取消</span> -->
        <span class='confirm_btn cursor' @click='project.edit'>确定</span>
      </template>
    </popup>
    <popup :info='section.info' @hide='section.hide()'>
      <template v-slot:title>
        <span class='select condition'>{{ section.info.type === 'add' ? '新增标段' : '修改标段' }}</span>
      </template>
      <template v-slot:main>
        <div class='flex padding-10'>
          <div class='col-12'>
            <p class='title'>基本信息</p>
            <el-form ref='sectionForm' :model='section.form.sectionForm' :rules='section.form.sectionRules' class='sectionForm' size='mini' style='margin-right: 10px;'>
              <el-form-item class='label' label='' prop='name'>
                <label>标段名</label>
                <el-input v-model='section.form.sectionForm.name' autocomplete='off' placeholder='请输入...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='admin'>
                <label>负责人</label>
                <!--                <el-input v-model="section.form.sectionForm.admin" autocomplete="off" placeholder="请输入..."-->
                <!--                          size="small"></el-input>-->
                <el-select v-model='section.form.sectionForm.admin' filterable placeholder='请选择...' size='small' style='width: 100%;'>
                  <el-option v-for='item in user.list.rows' :key='item.id' :label='item.name' :value='item.name'></el-option>
                </el-select>
              </el-form-item>
              <el-form-item class='label' label='' prop='lnglat'>
                <label>经纬度</label>
                <el-input v-model='section.form.sectionForm.lnglat' autocomplete='off' placeholder='请输入或选择...' size='small'>
                  <template #suffix>
                    <i class='iconfont rightIcon icon-dingwei cursor iconfontHover' @click='state.pointMap = true'></i>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item class='label ' prop='projectId'>
                <label>所属项目</label>
                <el-select v-model='section.form.sectionForm.projectId' filterable placeholder='请选择...' size='small' style='width: 100%;'>
                  <el-option v-for='item in project.list.rows' :key='item.id' :label='item.name' :value='item.id' @click='section.saveproObj(item)'></el-option>
                </el-select>

                <!-- <el-cascader size="small" v-model="section.form.sectionForm.projectId" :options="project.list.rows" :props="{expandTrigger: 'click',
                             checkStrictly: true,value:'id',label:'name',emitPath:false }" clearable style="width: 100%;">
                  <template #default="{ node, data }">
                    <span>{{ data.name }}</span>
                  </template>
                </el-cascader> -->
              </el-form-item>
              <!--              <el-form-item class="label" prop="pushType">-->
              <!--                <label>推送类型</label>-->
              <!--                <Jointlevel style="margin:8px 0px 0px 85px;" :data="section.form.status"-->
              <!--                            @checkId="section.checkId"></Jointlevel>-->
              <!--              </el-form-item>-->
            </el-form>
          </div>
        </div>
      </template>
      <template v-slot:page>
        <!-- <span class="cancel_btn cursor" @click="section.hide()">取消</span> -->
        <span class='confirm_btn cursor' @click='section.edit'>确定</span>
      </template>
    </popup>
    <popup :info='device.info' @hide='device.hide()'>
      <template v-slot:title>
        <span class='select condition'>{{ device.info.type === 'add' ? '新增测点' : '修改测点' }}</span>
      </template>
      <template v-slot:main>
        <el-form ref='deviceForm' :model='device.form.deviceForm' :rules='device.form.deviceRules' class='deviceForm' size='mini' style='margin-right: 10px;'>
          <div class='flex padding-10'>
            <div class='col-7' style='padding-right: 5px'>
              <p class='title'>基本信息</p>
              <el-form-item class='label' label='' prop='name'>
                <label>姓名</label>
                <el-input v-model='device.form.deviceForm.name' autocomplete='off' placeholder='请输入...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='code'>
                <label>编码</label>
                <el-input v-model='device.form.deviceForm.code' :disabled='device.form.isDisable' autocomplete='off' placeholder='请输入...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='lnglat'>
                <label @click='state.pointMap = true'>经纬度</label>
                <el-input v-model='device.form.deviceForm.lnglat' autocomplete='off' placeholder='请输入或选择...' size='small'>
                  <template #suffix>
                    <i class='iconfont rightIcon icon-dingwei cursor iconfontHover' @click='state.pointMap = true'></i>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='address'>
                <label>地址</label>
                <el-input v-model='device.form.deviceForm.address' autocomplete='off' placeholder='请输入...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label ' prop='sectionId'>
                <label>所属标段</label>
                <!-- <el-cascader size="small" v-model="device.form.deviceForm.sectionId" :options="section.list.rows" :props="{expandTrigger: 'click', checkStrictly: true,value:'id',label:'name',emitPath:false }" clearable style="width: 100%;">
                  <template #default="{ node, data }">
                    <span>{{ data.name }}</span>
                  </template>
                </el-cascader> -->

                <el-select v-model='device.form.deviceForm.sectionId' filterable placeholder='请选择...' size='small' style='width: 100%;'>
                  <el-option v-for='item in section.list.rows' :key='item.id' :label='item.name' :value='item.id'></el-option>
                </el-select>
              </el-form-item>
            </div>
            <!--          <div class="col-4">-->
            <!--            <p class="title">区域权限</p>-->
            <!--            <div style="height: calc(100vh - 210px);max-height: 400px;">-->
            <!--              <el-scrollbar :native="false" :noresize="false" tag="div">-->
            <!--                <Jointlevel :data="device.form.grid" @checkId="enterprise.checkId"></Jointlevel>-->
            <!--              </el-scrollbar>-->
            <!--            </div>-->
            <!--          </div>-->
            <div class='col-5' style='padding-left: 10px;'>
              <p class='title'>参数权限</p>
              <el-form-item class='label' label='' prop='params'>
                <Jointlevel :data='device.form.params' @checkId='device.checkId'></Jointlevel>
              </el-form-item>
            </div>
          </div>
        </el-form>
      </template>
      <template v-slot:page>
        <!-- <span class="cancel_btn cursor" @click="device.hide">取消</span> -->
        <span class='confirm_btn cursor' @click='device.edit'>确定</span>
      </template>
    </popup>
    <Point :data="{
                    show:state.pointMap,point:state.point, type: '',
                    line:'104.044894,30.484891;104.044894,30.584891;104.044894,30.684891'
                  }" @backPoint='state.backPoint'></Point>
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
  point: '0,0',
  backPoint(point) {
    state.pointMap = false;
    section.form.sectionForm.lnglat = point;
    device.form.deviceForm.lnglat = point;
    state.point = point;
  },
  enterpriseId: [],
  async getEnterpriseId() {
    let res = await get('/users/ee/list');
    if (res.code === 200) {
      this.enterpriseId = res.data;
    }
  }
});
const eeForm = ref(null);
const enterprise = reactive({
  active: 0,
  form: {
    eeForm: {
      name: '',
      admin: '',
      phone: '',
      parentId: '',
      enterpriseId: ''
    },
    eeRules: {
      name: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入名称！'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ],
      admin: [
        {
          required: true,
          message: '请输入负责人姓名！',
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
      // parentId: [
      //   {
      //     required: false,
      //     validator: (rule, value, callback) => {
      //       if (value === "") {
      //         callback(new Error("请选择所属企业！"));
      //       } else {
      //         callback();
      //       }
      //     },
      //     trigger: "blur",
      //   },
      // ],
      enterpriseId: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请选择所属企业！'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ]
    },
    isDisable: false,
    projectForm: {
      id: '',
      name: '',
      code: '',
      remark: '',
      checkId: []
    },
    projectRules: {
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
    name: 'eeList',
    header: [
      {
        name: '企业名称/项目名称',
        width: '120px',
        key: 'name',
        color: '#9495a9'
      }
    ],
    rows: [],
    page: 1,
    size: 20,
    total: 1,
    currentPage: 1,
    select: {
      open: false, // 是否开启多项选中
      selectAll: false, //全选
      isIndeterminate: false, // 中间状态
      selectId: [] // 选中ID
    },
    expor: true
  },
  handleCurrentChange(obj) {
    enterprise.list.select.selectId = [];
    enterprise.list.select.selectAll = false;
  },
  async getEnterprise() {
    let res = await get('/users/ee', {
      page: enterprise.list.page,
      size: enterprise.list.size
    });
    if (res.code === 200) {
      enterprise.list.rows = res.rows;
      enterprise.list.total = res.total;

      enterprise.list.rows.forEach((i) => {
        i.show = true;
        if (i.children) {
          i.children.forEach((j) => {
            j.show = true;
            if (j.children) {
              j.children.forEach((k) => {
                k.show = true;
              });
            }
          });
        }
      });
      if (enterprise.list.rows.length > 0 && enterprise.list.rows[0].projects.length > 0) {
        section.getSection(enterprise.list.rows[0].projects[0]);
      } else {
        section.list.rows = [];
        section.list.rows2 = [];
        section.list.total = 0;
      }
    }
  },
  async getEnterpriseUpload() {
    let res = await get('/users/ee', {
      page: enterprise.list.page,
      size: enterprise.list.size
    });
    if (res.code === 200) {
      enterprise.list.rows = res.rows;
      enterprise.list.total = res.total;
      enterprise.list.rows.forEach((i) => {
        i.show = true;
      });
    }
  },
  info: {
    show: false,
    name: 'enterprisePop',
    w: '30%',
    type: 'add'
  },
  hide() {
    enterprise.info.show = false;
    eeForm.value.resetFields();
    enterprise.info.type = 'add';
  },
  checkId(val) {
    console.log(val, 'val');
  },
  show(obj, item) {
    eeForm.value.resetFields();
    enterprise.info.show = true;
    enterprise.info.type = obj.type;
    if (item) {
      enterprise.form.eeForm = _.clone(item);
      section.form.status.checkId = [enterprise.form.eeForm.pushType];
    } else {
      enterprise.form.eeForm = {
        name: '',
        admin: '',
        phone: '',
        parentId: '',
        enterpriseId: '',
        type: obj.icon
      };
    }
  },
  edit(type, isPro) {
    eeForm.value.validate(async (valid) => {
      if (valid) {
        if (isPro === 'enterprise') {
          if (type === 'add') {
            let res = await post('/users/ee/', this.form.eeForm, true);
            if (res.code === 200) {
              this.info.show = false;
              this.getEnterpriseUpload();
              project.getProject();
              ElMessage({
                duration: 1000,
                type: 'success',
                message: res.msg
              });
            }
          } else if (type === 'edit') {
            if (this.form.eeForm.parentId === this.form.eeForm.id) {
              ElMessage({
                duration: 1000,
                type: 'error',
                message: '所属不能选择当前公司!请重新选择!'
              });
              return false;
            }
            let res = await put(`/users/ee/${this.form.eeForm.id}`, this.form.eeForm, true);
            if (res.code === 200) {
              this.info.show = false;
              this.getEnterpriseUpload();
              project.getProject();
              ElMessage({
                duration: 1000,
                type: 'success',
                message: res.msg
              });
            }
          }
        } else if (isPro === 'project') {
          if (type === 'add') {
            let res = await post('/users/project/', this.form.eeForm, true);
            if (res.code === 200) {
              this.info.show = false;
              this.getEnterpriseUpload();
              project.getProject();
              ElMessage({
                duration: 1000,
                type: 'success',
                message: res.msg
              });
            }
          } else if (type === 'edit') {
            let res = await put('/users/project/', this.form.eeForm, true);
            if (res.code === 200) {
              this.info.show = false;
              this.getEnterpriseUpload();
              project.getProject();
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
  async del(item) {
    if (item.phone) {
      let res = await del(`/users/ee/${item.id}`);
      if (res.code === 200) {
        this.getEnterprise();
        ElMessage({
          duration: 1000,
          type: 'success',
          message: res.msg
        });
      }
    } else {
      let res = await del(`/users/project/${item.id}`);
      if (res.code === 200) {
        this.getEnterprise();
        ElMessage({
          duration: 1000,
          type: 'success',
          message: res.msg
        });
      }
    }
  }
});
const projectForm = ref(null);
const project = reactive({
  form: {
    projectForm: {
      admin: '',
      enterpriseId: null,
      id: '',
      lat: '',
      lng: '',
      name: '',
      pushType: '',
      sections: '',
      lnglat: ''
    },
    projectRules: {
      name: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入项目名！'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ],
      admin: [
        {
          required: true,
          message: '请输入负责人！',
          trigger: 'blur'
        }
      ],
      lnglat: [
        {
          required: true,
          message: '请输入经纬度！',
          trigger: 'change'
        }
      ],
      pushType: [
        {
          required: true,
          message: '请选择推送类型！',
          trigger: 'change'
        }
      ],
      enterpriseId: [
        {
          required: true,
          message: '请选择所属企业!',
          trigger: 'change'
        }
      ]
      // id: [{
      //   required: true,
      //   message: '请选择角色',
      //   trigger: 'change',
      // },],
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
      child: 'child',
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
      checkId: ['pm10'],
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
          id: 0,
          name: '停用'
        },
        {
          alias: '启用',
          id: 1,
          name: '启用'
        }
      ],
      checkId: [1],
      key: 'alias',
      value: 'id',
      child: 'child',
      column: false,
      single: true,
      noAll: true
    }
  },
  list: {
    name: 'project',
    header: [
      {
        name: '序号',
        width: '10%',
        key: 'i_num',
        color: '#9495a9',
        rang: true
      },
      {
        name: '项目名称',
        width: 'calc(20% - 15px)',
        key: 'name',
        color: '#9495a9'
      },
      {
        name: '负责人',
        width: 'calc(20% - 15px)',
        key: 'admin',
        color: '#9495a9'
      },
      {name: '经度', width: 'calc(20% - 15px)', key: 'lat', color: '#9495a9'},
      {name: '纬度', width: 'calc(20% - 15px)', key: 'lng', color: '#9495a9'},
      {
        name: 'pushType',
        width: 'calc(10% - 12px)',
        key: 'pushType',
        color: '#9495a9'
      }
    ],
    rows: [],
    rows2: [],
    page: 1,
    size: 20,
    total: 70,
    currentPage: 1,
    search: '',
    select: {
      open: false, // 是否开启多项选中
      selectAll: false, //全选
      isIndeterminate: false, // 中间状态
      selectId: [] // 选中ID
    }
  },
  checkId(val) {
    project.form.projectForm.pushType = val.checkId.toString();
  },
  handleCurrentChange(obj) {
    project.list.multipleSelection = [];
    project.list.selectAll = false;
    project.list.page = obj.page;
    project.getProject();
  },
  selectId(val) {
    console.log(val, 'selectId');
  },
  async getProject(type) {
    if (type === 'search') {
      project.list.page = 1;
    }
    let res = await get('/users/project/', {
      page: project.list.page,
      size: 99999
    });
    if (res.code === 200) {
      this.list.rows = res.data;
      this.list.rows2 = res.data;
      this.list.total = res.data.length;
    }
  },
  info: {
    show: false,
    name: 'show',
    w: '30%',
    type: 'add'
  },
  show(obj, item) {
    projectForm.value.resetFields();
    project.info.show = true;
    project.info.type = obj.type;
    if (project.info.type === 'add') {
      project.form.isDisable = false;
      // project.form.projectRules['password'][0].required = true
    } else {
      project.form.isDisable = true;
      // project.form.projectRules['password'][0].required = false
      item.lnglat = item.lng + ',' + item.lat;
      this.form.projectForm = _.clone(item);
      // this.form.projectForm.roles[0].id = 1
      // this.form.status.checkId = item.status
      this.form.grid.checkId = [1];
      this.form.params.checkId = ['pm25'];
    }
  },
  hide() {
    project.info.show = false;
    projectForm.value.resetFields();
    project.info.type = 'add';
  },
  edit() {
    projectForm.value.validate(async (valid) => {
      if (valid) {
        console.log('通过');
        if (this.info.type === 'add') {
          let res = await post('/users/project/', this.form.projectForm, true);
          if (res.code === 200) {
            this.info.show = false;
            this.info.type = 'add';
            this.getProject();
          }
        } else if (this.info.type === 'edit') {
          let res = await put('/users/project/', this.form.projectForm, true);
          if (res.code === 200) {
            this.info.show = false;
            this.info.type = 'add';
            this.getProject();
          }
        }
      } else {
        console.log('不通过');
        return false;
      }
    });
  },
  async del(item) {
    let res = await del(`/users/project/${item.id}`);
    if (res.code === 200) {
      this.getProject();
      ElMessage({
        duration: 1000,
        type: 'success',
        message: res.msg
      });
    }
  }
});
const sectionForm = ref(null);
const section = reactive({
  active: null,
  li: {},
  form: {
    sectionForm: {
      admin: '',
      enterpriseId: null,
      id: '',
      lat: '',
      lng: '',
      name: '',
      pushType: '',
      sections: '',
      lnglat: '',
      projectId: '',
      projectIdObj: {}
    },
    sectionRules: {
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
      admin: [
        {
          required: true,
          message: '请输入负责人姓名！',
          trigger: 'blur'
        }
      ],
      lnglat: [
        {
          required: true,
          message: '请输入经纬度！',
          trigger: 'change'
        }
      ],
      pushType: [
        {
          required: true,
          message: '请选择推送类型！',
          trigger: 'change'
        }
      ],
      projectId: [
        {
          required: true,
          message: '请选择所属项目!',
          trigger: 'change'
        }
      ],
      enterpriseId: [
        {
          required: true,
          message: '请选择公司',
          trigger: 'change'
        }
      ]
      // id: [{
      //   required: true,
      //   message: '请选择角色',
      //   trigger: 'change',
      // },],
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
      child: 'child',
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
          id: 0,
          name: '停用'
        },
        {
          alias: '启用',
          id: 1,
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
    name: 'section',
    header: [
      {name: '标段名称', width: '120px', key: 'name', color: '#9495a9'},
      {name: '负责人', width: '50px', key: 'admin', color: '#9495a9'}
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
      open: false, // 是否开启多项选中
      selectAll: false, //全选
      isIndeterminate: false, // 中间状态
      selectId: [] // 选中ID
    }
  },
  saveproObj(item) {
    section.form.sectionForm.projectIdObj = item;
  },
  checkId(val) {
    section.form.sectionForm.pushType = val.checkId.toString();
  },
  handleCurrentChange(obj) {
    section.list.multipleSelection = [];
    section.list.selectAll = false;
    section.list.page = obj.page;
    section.getSection();
  },
  selectId(val) {
    console.log(val, 'selectId');
  },
  async getSection(val) {
    if (val === 'search') {
      section.list.page = 1;
    } else {
      section.li = val;
      enterprise.active = val.createTime;
      let res = await get(`/users/section/${val.id}`);
      if (res.code === 200) {
        section.list.rows = res.data;
        section.list.rows2 = res.data;
        section.list.total = res.data.length;

        if (section.list.rows.length) {
          device.getDevice(res.data[0]);
        } else {
          device.list.rows = [];
          device.list.rows2 = [];
          device.list.total = 0;
        }
      }
    }

  },
  async getSectionUpload() {
    let res = await get(`/users/section/${section.li.id}`);
    if (res.code === 200) {
      section.list.rows = res.data;
      section.list.rows2 = res.data;
      section.list.total = res.data.length;
    }
  },
  info: {
    show: false,
    name: 'sectionInfo',
    w: '30%',
    type: 'add'
  },
  show(obj, item) {
    sectionForm.value.resetFields();
    section.info.show = true;
    section.info.type = obj.type;
    if (section.info.type === 'add') {
      section.form.isDisable = false;
      // project.form.projectRules['password'][0].required = true
    } else {
      section.form.isDisable = true;
      // project.form.projectRules['password'][0].required = false
      item.lnglat = item.lng + ',' + item.lat;
      section.form.sectionForm = _.clone(item);
      state.point = section.form.sectionForm.lnglat;
    }
  },
  hide() {
    section.info.show = false;
    sectionForm.value.resetFields();
    section.info.type = 'add';
  },
  edit() {
    sectionForm.value.validate(async (valid) => {
      if (valid) {
        console.log('通过');
        section.form.sectionForm.lng =
            section.form.sectionForm.lnglat.split(',')[0];
        section.form.sectionForm.lat =
            section.form.sectionForm.lnglat.split(',')[1];
        if (section.info.type === 'add') {
          let res = await post(
              '/users/section/',
              section.form.sectionForm,
              true
          );
          if (res.code === 200) {
            section.getSection(section.form.sectionForm.projectIdObj);
            section.info.show = false;
            section.info.type = 'add';
          }
        } else if (section.info.type === 'edit') {
          let res = await put(
              '/users/section/',
              section.form.sectionForm,
              true
          );
          if (res.code === 200) {
            section.info.show = false;
            section.info.type = 'add';
            section.getSectionUpload();
          }
        }
      } else {
        console.log('不通过');
        return false;
      }
    });
  },
  async del(item) {
    let res = await del(`/users/section/${item.id}`);
    if (res.code === 200) {
      section.getSection(section.li);
      ElMessage({
        duration: 1000,
        type: 'success',
        message: res.msg
      });
    }
  }
});
const deviceForm = ref(null);
const device = reactive({
  li: {},
  active: 0,
  form: {
    deviceForm: {
      address: '',
      code: '',
      createTime: '',
      id: '',
      lat: '',
      lng: '',
      name: '',
      params: '',
      sectionId: ''
    },
    deviceRules: {
      name: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入测点名！'));
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
          message: '请输入编码！',
          trigger: 'blur'
        }
      ],
      lnglat: [
        {
          required: true,
          message: '请输入经纬度！',
          trigger: 'blur'
        }
      ],
      address: [
        {
          required: true,
          message: '请输入地址！',
          trigger: 'blur'
        }
      ],
      sectionId: [
        {
          required: true,
          message: '请选择所属标段！',
          trigger: 'change'
        }
      ],
      params: [
        {
          required: true,
          message: '请选择参数！',
          trigger: 'change'
        }
      ]
    },
    isDisable: false,
    grid: {
      name: 'grid',
      list: [],
      checkId: [],
      key: 'alias',
      value: 'id',
      child: 'child',
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
        {name: 'SO2', param: 'so2'},
        {name: '噪声', param: 'noise'}
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
          id: 0,
          name: '停用'
        },
        {
          alias: '启用',
          id: 1,
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
    name: 'device',
    header: [
      {name: '测点ID', width: '120px', key: 'code', color: '#9495a9'},
      {name: '地址', width: '120px', key: 'address', color: '#9495a9'},
      {name: '经度', width: '120px', key: 'lat', color: '#9495a9'},
      {name: '纬度', width: '120px', key: 'lng', color: '#9495a9'}
    ],
    rows: [],
    rows2: [],
    page: 1,
    size: 20,
    total: 0,
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
  checkId(val) {
    device.form.deviceForm.params = val.checkId.toString();
    device.form.params.checkId = val.checkId;
  },
  handleCurrentChange(obj) {
    device.list.multipleSelection = [];
    device.list.selectAll = false;
    device.list.page = obj.page;
    device.getDevice();
  },
  selectId(val) {
    console.log(val, 'selectId');
  },
  async getDevice(val) {
    if (val === 'search') {
      device.list.page = 1;
    } else {
      section.active = val.id;
      device.li = val;
      let res = await get(`/users/device/${val.id}`, {
        page: device.list.page,
        size: device.list.size
      });
      if (res.code === 200) {
        device.list.rows = res.rows;
        device.list.rows2 = res.rows;
        device.list.total = res.total;
      }
    }
    device.list.select.selectId = [];
    device.list.select.selectAll = false;
  },
  info: {
    show: false,
    name: 'show',
    w: '50%',
    type: 'add'
  },
  show(obj, item) {
    deviceForm.value.resetFields();
    device.info.show = true;
    device.info.type = obj.type;
    if (device.info.type === 'add') {
      device.form.isDisable = false;
      device.form.params.checkId = [];
      // device.form.deviceRules['password'][0].required = true
      device.form.deviceForm = {
        address: '',
        code: '',
        createTime: '',
        id: '',
        lat: '',
        lng: '',
        lnglat: '',
        name: '',
        params: '',
        sectionId: ''
      };
    } else {
      device.form.isDisable = true;
      // device.form.deviceRules['password'][0].required = false
      item.lnglat = item.lng + ',' + item.lat;
      device.form.deviceForm = _.clone(item);

      device.form.params.checkId = device.form.deviceForm.params
          ? device.form.deviceForm.params.split(',')
          : [];
      state.point = device.form.deviceForm.lnglat;
      // device.form.grid.checkId = [1]
      // device.form.params.checkId = []
    }
  },
  hide() {
    device.info.show = false;
    projectForm.value.resetFields();
    device.info.type = 'add';
  },
  edit() {
    deviceForm.value.validate(async (valid) => {
      if (valid) {
        device.form.deviceForm.lng =
            device.form.deviceForm.lnglat.split(',')[0];
        device.form.deviceForm.lat =
            device.form.deviceForm.lnglat.split(',')[1];
        if (this.info.type === 'add') {
          device.form.deviceForm.createTime = new Date().format('yyyy-MM-dd hh:mm:ss');
          let res = await post('/users/device', device.form.deviceForm, true);
          if (res.code === 200) {
            this.info.show = false;
            this.info.type = 'add';
            this.getDevice(device.li);
          }
        } else if (this.info.type === 'edit') {
          let res = await put('/users/device', device.form.deviceForm, true);
          if (res.code === 200) {
            this.info.show = false;
            this.info.type = 'add';
            this.getDevice(device.li);
          }
        }
      } else {
        console.log('不通过');
        return false;
      }
    });
  },
  async del(item) {
    let res = await del(`/users/device/${item.id}`);
    if (res.code === 200) {
      this.getDevice(device.li);
      ElMessage({
        duration: 1000,
        type: 'success',
        message: res.msg
      });
    }
  },
  async delarr() {
    let res = await del(`/users/device/${device.list.select.selectId.toString()}`, {
      ids: device.list.select.selectId.toString()
    });
    if (res.code === 200) {
      this.getDevice(device.li);
      ElMessage({
        duration: 1000,
        type: 'success',
        message: res.msg
      });
    }
  }
});
const user = reactive({
  list: {
    name: 'user',
    header: [
      {name: '设备ID', width: '120px', key: 'code', color: '#9495a9'},
      {name: '地址', width: '120px', key: 'address', color: '#9495a9'},
      {name: '经度', width: '120px', key: 'lat', color: '#9495a9'},
      {name: '纬度', width: '120px', key: 'lng', color: '#9495a9'}
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
  async getUser() {
    let res = await get('/users/user/list', {
      page: 1,
      size: 999999
    });
    if (res.code === 200) {
      user.list.rows = res.data.list;
    }
  }
});
onMounted(() => {
  enterprise.getEnterprise();
  project.getProject();
  user.getUser();
});
</script>
<style lang='less' scoped>
.enterprise{
  width:100%;
  height:100%;
  overflow-y:auto;

  .col-3{
    margin:12px 12px 12px 12px;
  }

  .col-6{
    margin:0 12px 12px;
  }

  .one{
    margin-bottom:0;
  }

  @media only screen and (min-width:1000px){
    .col-3{
      margin:12px;
      width:calc(25% - 24px);
      height:calc(100% - 25px);
    }

    .one{
      margin-right:0;
    }

    .two{
      width:calc(25% - 12px);
    }

    .col-6{
      margin:12px 12px 12px 0;
      width:calc(50% - 12px);
      height:calc(100% - 25px);
    }
  }

  .info{
    box-sizing:border-box;
    padding:10px;
  }

  .padding-10{
    box-sizing:border-box;
    padding:10px 10px 0;
  }

  .activeIcon{
    font-size:12px !important;
    //position: absolute;
    //right: 2px;
    //top: -1px;
    color:#2e6fff;
  }

  .dis{
    display:none;
    position:absolute;
    right:0;
    opacity:0;
  }

  :deep(.eeList){
    .li{
      margin-bottom:2px;
    }
  }
}

:deep(.el-popper){
  min-width:200px;
}

.lianjiBox{
  position:relative;

  .lianji{
    width:100%;
    position:absolute;
    top:42px;
    min-height:100px;
    max-height:200px;
    box-shadow:0 0 0 1px #DCDFE6 inset;
    transition:all .2s;
    overflow-y:auto;

    .Jointlevel{
      padding:5px 0;
    }
  }
}

.icon-you-jiantou{
  font-size:12px !important;
  color:#cccccc;
}
</style>
