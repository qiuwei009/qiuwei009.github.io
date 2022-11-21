<template>
  <div class='device flex'>
    <div class='darkcolor  card' style='width: 100%;height: 100%;'>
      <div class='top-p-60 flex nowrap just-b align-c'>
        <span class='align-c flex nowrap omit' style='width: 120px;'>
          <span :class="device.list.active ? '' : 'select'" class='cursor condition' @click='device.getDevice(0)'>站点
          </span>
          <span :class="device.list.active ? 'select' : ''" class='cursor condition' @click='device.getDevice(1)'>
            设备</span>
        </span> <span class='flex nowrap ' style='width: 400px;'>
          <el-input v-model='device.list.search' :placeholder="device.list.active === 0 ? '请输入站点名称,默认当前页搜索,点击搜索全部站点搜索...' : '请输入设备ID,默认当前页搜索,点击搜索全部设备搜索...'" class='fr' @input='device.list.rows =
          JSON.parse(JSON.stringify(device.list.rows2)).filter(i =>
            i.name ? i.name.includes(device.list.search) : i.deviceId.includes(device.list.search))'>
            <template #suffix>
              <i class='iconfont icon-RectangleCopy2 cursor' @click="device.getDevice('search')"></i>
            </template>
          </el-input>
          <Btn :info="{
            id: 3,
            name: '',
            type: 'add',
            class: 'Btn',
            icon: 'icon-zengjia',
            title: '新增'
          }" @handleClick='device.show'></Btn>
        </span>
      </div>
      <div class='h100-60'>
        <Table :list='device.list' @handleCurrentChange='device.handleCurrentChange' @handlespan='state.showMap' @selectId='device.selectId'>
          <template v-slot:rightTitle>
            <!--            <div v-if="device.list.active === 0" class="flex  align-c omit" style="flex: 0 0 60px;">关注</div>-->
            <!--            <div v-if="device.list.active === 0" class="flex  align-c omit" style="flex: 0 0 100px;">关联国控点</div>-->
            <!--            <div v-if="device.list.active === 1" class="flex  align-c omit" style="flex: 0 0 100px;">视频编辑</div>-->
            <div v-if='device.list.active === 1' class='flex just-c align-c omit' style='flex: 1 0 60px;'>设备配置</div>
            <div v-if='device.list.active === 1' class='flex just-c align-c omit' style='flex: 1 0 60px;'>录音文件</div>
            <div class='flex just-c align-c omit' style='flex: 0 0 120px;'>编辑</div>
          </template>
          <template v-slot:rightBtn='{ item }'>
            <!--            <div v-if="device.list.active === 0" class="flex  align-c omit"-->
            <!--                 style="flex: 0 0 60px;"-->
            <!--                 @click="">关注-->

            <!--            </div>-->
            <!--            <div v-if="device.list.active === 0" class="flex  align-c omit"-->
            <!--                 style="flex: 0 0 100px;"-->
            <!--                 @click="device.nationShow">点击编辑-->
            <!--            </div>-->
            <!--            <div v-if="device.list.active === 1" class="flex  align-c omit"-->
            <!--                 style="flex: 0 0 100px;" @click="device.videoShow">视频控制-->
            <!--            </div>-->
            <div v-if='device.list.active === 1' class='flex just-c align-c omit' style='flex: 1 0 60px;' @click='device.controlShow(item)'>
              <i class='iconfont iconfontHover icon-RectangleCopy60'></i>
            </div>
            <div v-if='device.list.active === 1' class='flex just-c align-c omit' style='flex: 1 0 60px;' @click='device.audioShow(item)'>
              <i class='iconfont iconfontHover icon-zaoyin'></i>
            </div>
            <div class='flex just-a align-c' style='flex: 0 0 120px;'>
              <i class='iconfont iconfontHover icon-bianji1' title='编辑' @click="device.show({ type: 'edit' }, item)"></i>
              <el-popconfirm title='您是否确定删除当前设设备?' @cancel='' @confirm='device.del(item)'>
                <template #reference>
                  <i class='iconfont iconfontHover icon-shanchu_o' title='删除' @click.stop=''></i>
                </template>
              </el-popconfirm>
            </div>
          </template>
        </Table>
      </div>
    </div>
    <popup :info='device.info' @hide='device.hide()'>
      <template v-slot:title>
        <span class='select condition'>{{ device.info.type === 'add' ? (device.list.active === 0 ? '站点新增' : '设备新增') : (device.list.active === 0 ? '站点详情' : '设备详情') }}</span>
      </template>
      <template v-slot:main>
        <el-form ref='deviceForm' :model='device.form.deviceForm' :rules='device.form.deviceRules' class='deviceForm' size='mini' style='margin-right: 10px;'>
          <div v-if='device.list.active === 0' class='flex'>
            <div class='col-6'>
              <p class='title'>基本信息</p>
              <el-form-item class='label' label='' prop='name'>
                <label>站点名称</label>
                <el-input v-model='device.form.deviceForm.name' autocomplete='off' placeholder='请输入...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='alias'>
                <label>站点别名</label>
                <el-input v-model='device.form.deviceForm.alias' :disabled='device.form.isDisable' autocomplete='off' placeholder='请输入...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='type'>
                <label>类型</label>
                <el-select v-model='device.form.deviceForm.type' filterable placeholder='请选择...' size='small' style='width: 100%;'>
                  <el-option v-for='i in device.siteType' :key='i.id' :label='i.name' :value='i.id'></el-option>
                </el-select>
              </el-form-item>
              <el-form-item class='label' label='' prop='lnglat'>
                <label @click='state.pointMap = true'>经纬度</label>
                <el-input v-model='device.form.deviceForm.lnglat' autocomplete='off' placeholder='请选择...' size='small'>
                  <template #suffix>
                    <i class='iconfont rightIcon icon-dingwei cursor iconfontHover' @click='state.showMap(device.form.deviceForm.lnglat)'></i>
                  </template>
                </el-input>
              </el-form-item>
              <!--              <el-form-item class="label" label="" prop="siteType">-->
              <!--                <label>工地</label>-->
              <!--                <el-select v-model="device.form.deviceForm.siteType" filterable placeholder="请选择..." size="small"-->
              <!--                           style="width: 100%;">-->
              <!--                  <el-option v-for="i in device.sitetype" :key="i.id" :label="i.name" :value="i.id"></el-option>-->
              <!--                </el-select>-->
              <!--              </el-form-item>-->
              <el-form-item class='label' label='' prop='address'>
                <label>地址</label>
                <el-input v-model.number='device.form.deviceForm.address' placeholder='请选择...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='adminPhone'>
                <label>负责人电话</label>
                <el-input v-model.number='device.form.deviceForm.adminPhone' placeholder='请选择...' size='small'></el-input>
              </el-form-item>
            </div>
            <div class='col-6' style='padding: 0 0 0 10px;'>
              <p class='title'>区域权限</p>
              <el-form-item class='label' prop='gridId'>
                <Jointlevel :data='state.tree' @checkId='device.checkIdGrid'></Jointlevel>
              </el-form-item>
            </div>
          </div>
          <div v-if='device.list.active === 1' class='flex'>
            <div class='col-6'>
              <p class='title'>基本信息</p>
              <el-form-item class='label' label='' prop='deviceId'>
                <label>设备编号</label>
                <el-input v-model='device.form.deviceForm.deviceId' autocomplete='off' placeholder='请输入...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='alias'>
                <label>设备别名</label>
                <el-input v-model='device.form.deviceForm.alias' :disabled='device.form.isDisable' autocomplete='off' placeholder='请输入...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='lnglat'>
                <label @click='state.pointMap = true'>经纬度</label>
                <el-input v-model='device.form.deviceForm.lnglat' autocomplete='off' placeholder='请选择...' size='small'>
                  <template #suffix>
                    <i class='iconfont rightIcon icon-dingwei cursor iconfontHover' @click='state.showMap(device.form.deviceForm.lnglat)'></i>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='tcpProtocol'>
                <label>协议</label>
                <el-select v-model='device.form.deviceForm.tcpProtocol' filterable placeholder='请选择...' size='small' style='width: 100%;'>
                  <el-option v-for='i in device.type' :key='i.id' :label='i.name' :value='i.id'></el-option>
                </el-select>
              </el-form-item>
              <el-form-item class='label' label='' prop='stationId'>
                <label>站点</label>
                <el-select v-model='device.form.deviceForm.stationId' filterable placeholder='请选择...' size='small' style='width: 100%;'>
                  <el-option v-for='i in device.stationIdArr' :key='i.id' :label='i.name' :value='i.id'></el-option>
                </el-select>
              </el-form-item>
              <el-form-item class='label' prop='status'>
                <label>状态</label>
                <Jointlevel :data='device.form.status' style='margin:8px 0 0 85px;' @checkId='device.checkIdStatus'></Jointlevel>
              </el-form-item>

              <!--              <el-form-item class="label" label="" prop="siteType">-->
              <!--                <label>工地</label>-->
              <!--                <el-select v-model="device.form.deviceForm.siteType" filterable placeholder="请选择..." size="small"-->
              <!--                           style="width: 100%;">-->
              <!--                  <el-option v-for="i in device.sitetype" :key="i.id" :label="i.name" :value="i.id"></el-option>-->
              <!--                </el-select>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="deviceId">-->
              <!--                <label>ID</label>-->
              <!--                <el-input v-model="device.form.deviceForm.deviceId" autocomplete="off" placeholder="请输入..."-->
              <!--                          size="small"></el-input>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="alias">-->
              <!--                <label>别名</label>-->
              <!--                <el-input v-model="device.form.deviceForm.alias" :disabled="device.form.isDisable"-->
              <!--                          autocomplete="off" placeholder="请输入..." size="small"></el-input>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="organizationId">-->
              <!--                <label>运维单位</label>-->
              <!--                <el-select v-model="device.form.deviceForm.type" filterable placeholder="请选择..." size="small"-->
              <!--                           style="width: 100%;">-->
              <!--                  <el-option v-for="i in device.type" :key="i.id" :label="i.name" :value="i.id"></el-option>-->
              <!--                </el-select>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="organizationid">-->
              <!--                <label>主板ID</label>-->
              <!--                <el-input v-model="device.form.deviceForm.organizationid" autocomplete="off" placeholder="请输入..."-->
              <!--                          size="small"></el-input>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="mainType">-->
              <!--                <label>主板类型</label>-->
              <!--                <el-input v-model="device.form.deviceForm.mainType" autocomplete="off" placeholder="请输入..."-->
              <!--                          size="small"></el-input>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="organizationid">-->
              <!--                <div class="input_box" style="border:1px solid #dcdfe6">-->
              <!--                  <label>销售类型</label>-->
              <!--                  <Jointlevel :data="device.form.status" style="margin:8px 0px 0px 84px;" @checkId="device.checkId">-->
              <!--                  </Jointlevel>-->
              <!--                  <el-input v-model="device.form.deviceForm.admin_phone" autocomplete="off" placeholder="请输入..."-->
              <!--                            size="small"></el-input>-->
              <!--                </div>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="organizationId">-->
              <!--                <label>协议</label>-->
              <!--                <el-select v-model="device.form.deviceForm.tcpProtocol" filterable placeholder="请选择..." size="small"-->
              <!--                           style="width: 100%;">-->
              <!--                  <el-option v-for="i in device.type" :key="i.id" :label="i.name" :value="i.id"></el-option>-->
              <!--                </el-select>-->
              <!--              </el-form-item>-->
              <el-form-item class='label' label='' prop='brand'>
                <label>厂家</label>
                <el-select v-model='device.form.deviceForm.brand' filterable placeholder='请选择...' size='small' style='width: 100%;'>
                  <el-option v-for='i in device.brandtype' :key='i.id' :label='i.name' :value='i.id'></el-option>
                </el-select>
              </el-form-item>
              <!--              <el-form-item class="label" label="" prop="status">-->
              <!--                <label>启用</label>-->
              <!--                <Jointlevel :data="device.form.status" style="margin:8px 0px 0px 85px;" @checkId="device.checkId">-->
              <!--                </Jointlevel>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="organizationid">-->
              <!--                <label>噪声设备</label>-->
              <!--                <Jointlevel :data="device.form.status" style="margin:8px 0px 0px 85px;" @checkId="device.checkId">-->
              <!--                </Jointlevel>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="organizationid">-->
              <!--                <label>日志</label>-->
              <!--                <Jointlevel :data="device.form.status" style="margin:8px 0px 0px 85px;" @checkId="device.checkId">-->
              <!--                </Jointlevel>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="deviceId">-->
              <!--                <label>设备型号</label>-->
              <!--                <el-input v-model="device.form.deviceForm.deviceId" autocomplete="off" placeholder="请输入..."-->
              <!--                          size="small"></el-input>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="deviceId">-->
              <!--                <label>传感器型号</label>-->
              <!--                <el-input v-model="device.form.deviceForm.deviceId" autocomplete="off" placeholder="请输入..."-->
              <!--                          size="small"></el-input>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="deviceId">-->
              <!--                <label>传感器ID</label>-->
              <!--                <el-input v-model="device.form.deviceForm.deviceId" autocomplete="off" placeholder="请输入..."-->
              <!--                          size="small"></el-input>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="deviceId">-->
              <!--                <label>生产日期</label>-->
              <!--                <el-input v-model="device.form.deviceForm.deviceId" autocomplete="off" placeholder="请输入..."-->
              <!--                          size="small"></el-input>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="deviceId">-->
              <!--                <label>出厂日期</label>-->
              <!--                <el-input v-model="device.form.deviceForm.deviceId" autocomplete="off" placeholder="请输入..."-->
              <!--                          size="small"></el-input>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="deviceId">-->
              <!--                <label>质保期</label>-->
              <!--                <el-input v-model="device.form.deviceForm.deviceId" autocomplete="off" placeholder="请输入..."-->
              <!--                          size="small"></el-input>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="deviceId">-->
              <!--                <label>项目名称</label>-->
              <!--                <el-input v-model="device.form.deviceForm.deviceId" autocomplete="off" placeholder="请输入..."-->
              <!--                          size="small"></el-input>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="organizationId">-->
              <!--                <label>客户类型</label>-->
              <!--                <el-select v-model="device.form.deviceForm.type" filterable placeholder="请选择..." size="small"-->
              <!--                           style="width: 100%;">-->
              <!--                  <el-option v-for="i in device.type" :key="i.id" :label="i.name" :value="i.id"></el-option>-->
              <!--                </el-select>-->
              <!--              </el-form-item>-->
              <!--              <el-form-item class="label" label="" prop="deviceId">-->
              <!--                <label>客户名称</label>-->
              <!--                <el-input v-model="device.form.deviceForm.deviceId" autocomplete="off" placeholder="请输入..."-->
              <!--                          size="small"></el-input>-->
              <!--              </el-form-item>-->
            </div>
            <div class='col-6 minW' style='padding: 0 0 0 10px;'>
              <p class='title'>参数权限</p>
              <el-form-item class='label' prop='params'>
                <Jointlevel :data='device.form.params' @checkId='device.checkIdParam'></Jointlevel>
              </el-form-item>
              <!--              <p class="title">报警限值</p>-->
              <!--              <el-form-item label="VOC" prop="voc">-->
              <!--                <el-input v-model="device.form.deviceForm.voc" autocomplete="off" placeholder="请输入..."-->
              <!--                    size="small"></el-input>-->
              <!--              </el-form-item>-->
            </div>
          </div>
        </el-form>
      </template>
      <template v-slot:page>
        <span class='confirm_btn cursor' @click='device.edit'>确定</span>
      </template>
    </popup>
    <popup :info='device.nationInfo' @hide='device.nationHide()'>
      <template v-slot:title>
        <span class='select condition'>关联国控点</span>
      </template>
      <template v-slot:main>
        <div class='col-6'>
          <p class='title'>城市</p>
          <div style='height: calc(100vh - 185px);padding: 0 0 0 10px;'>
            <el-scrollbar :native='false' :noresize='false' tag='div'>
              <p v-for='i in 100'>{{ i }}</p>
            </el-scrollbar>
          </div>
        </div>
        <div class='col-6' style='padding: 0 0 0 10px;'>
          <p class='title'>国控点</p>
          <div style='height: calc(100vh - 185px);padding: 0 0 0 10px;'>
            <el-scrollbar :native='false' :noresize='false' tag='div'>
              <p v-for='i in 100'>{{ i }}</p>
            </el-scrollbar>
          </div>
        </div>
      </template>
      <template v-slot:page>
        <span class='confirm_btn cursor' style='background: red;margin-right: 10px;color: #fff;' @click='device.edit'>删除关联</span>
        <span class='confirm_btn cursor' style='background: #2E6FFF;margin-right: 10px;color: #fff;' @click='device.edit'>自动关联
        </span> <span class='confirm_btn cursor' @click='device.edit'>确定</span>
      </template>
    </popup>
    <popup :info='device.controlInfo' @hide='device.controlHide()'>
      <template v-slot:title>
        <div>
          <span class='select condition'>设备配置</span>
        </div>
      </template>
      <template v-slot:main>
        <p class='flex align-c controlInfo_item '>
          <Btn :info="{
                id: 3,
                name: '噪声配置',
                type: 'noise',
                class: device.controlInfo.type === 'noise'?'controlInfoActive Btn':'Btn',
                icon: device.controlInfo.type === 'noise'?'icon-RectangleCopy52':'',
                title: '噪声配置',
              }" @handleClick="device.controlInfo.type = 'noise'"></Btn>
          <Btn :info="{
                id: 3,
                name: '扬尘配置',
                type: 'dust',
                class: device.controlInfo.type === 'dust'?'controlInfoActive Btn':'Btn',
                icon: device.controlInfo.type === 'dust'?'icon-RectangleCopy52':'',
                title: '扬尘配置',
              }" @handleClick="device.controlInfo.type = 'dust'"></Btn>
        </p>
        <el-form v-if="device.controlInfo.type === 'noise'" ref='deviceCondition' :model='device.form.dispose' :rules='device.form.disposeRules' class='deviceCondition' size='mini'>
          <div class='flex'>
            <el-form-item class='label2' label='超标阈值' label-width='170px' prop='OverThreshold'>
              <el-input v-model='device.form.dispose.OverThreshold' :max='100' :min='10' autocomplete='off' placeholder='请输入...' size='large'>
                <template #suffix>
                  <i class='text-color'>| dB</i>
                </template>
              </el-input>
              <!--              <el-input-number :controls="false" v-model="device.form.dispose.OverThreshold" :max="100" :min="10"
                                             autocomplete="off"
                                      placeholder="请输入..."
                                      size="large">
                            </el-input-number>-->
            </el-form-item>
            <el-form-item class='label2' label='超标统计时长' label-width='170px' prop='CalcDuration'>
              <el-input v-model='device.form.dispose.CalcDuration' autocomplete='off' placeholder='请输入...' size='large'>
                <template #suffix>
                  <i class='text-color'>| 秒</i>
                </template>
              </el-input>
            </el-form-item>
          </div>
          <div class='flex'>
            <el-form-item class='label2' label='超标比例值' label-width='170px' prop='OverRate'>
              <el-input v-model='device.form.dispose.OverRate' autocomplete='off' placeholder='请输入...' size='large'>
                <template #suffix>
                  <i class='text-color'>| %</i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item class='label2' label='解除超标回差值' label-width='170px' prop='ClearOver'>
              <el-input v-model='device.form.dispose.ClearOver' autocomplete='off' placeholder='请输入...' size='large'>
                <template #suffix>
                  <i class='text-color'>| dB</i>
                </template>
              </el-input>
            </el-form-item>
          </div>
          <div class='flex'>
            <el-form-item class='label2' label='超标录音间隔' label-width='170px' prop='OverInterval'>
              <el-input v-model='device.form.dispose.OverInterval' autocomplete='off' placeholder='请输入...' size='large'>
                <template #suffix>
                  <i class='text-color'>| 分钟</i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item class='label2' label='闲时持续超标录音间隔' label-width='170px' prop='IdleInterval'>
              <el-input v-model='device.form.dispose.IdleInterval' autocomplete='off' placeholder='请输入...' size='large'>
                <template #suffix>
                  <i class='text-color'>| 10 分钟</i>
                </template>
              </el-input>
            </el-form-item>
          </div>
          <div class='flex'>
            <el-form-item class='label2' label='统计周期' label-width='170px' prop='AnyCycle'>
              <el-input v-model='device.form.dispose.AnyCycle' autocomplete='off' placeholder='请输入...' size='large'>
                <template #suffix>
                  <i class='text-color'>| 分钟</i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item class='label2' label='频率计权模式' label-width='170px' prop='FreqWeight'>
              <el-select v-model='device.form.dispose.FreqWeight' filterable placeholder='请选择...' size='large'>
                <el-option v-for='i in device.FreqWeightArr' :key='i.id' :label='i.name' :value='i.id'></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class='flex'>
            <el-form-item class='label2' label='时间计权模式' label-width='170px' prop='TimeWeight' style='width: 50%;'>
              <el-switch v-model='device.form.dispose.TimeWeight' active-text='Slow' inactive-text='Fast'/>
            </el-form-item>
          </div>
          <div class='flex just-b wrap'>
            <div style='width: 50%;min-width: 210px'>
              <el-form-item class='label2' label='超标录音开关' label-width='170px' prop='OverRecord' style='width: 50%;'>
                <el-switch v-model='device.form.dispose.OverRecord'/>
              </el-form-item>
            </div>
            <div style='width: 50%;min-width: 210px'>
              <el-form-item class='label2' label='闲时录音开关' label-width='170px' prop='IdleRecord' style='width: 50%;'>
                <el-switch v-model='device.form.dispose.IdleRecord'/>
              </el-form-item>
            </div>
          </div>
          <div class='flex just-b wrap'>
            <div style='width: 50%;min-width: 210px'>
              <el-form-item class='label2' label='统计噪声开关' label-width='170px' prop='AnyLeq' style='width: 50%;'>
                <el-switch v-model='device.form.dispose.AnyLeq'/>
              </el-form-item>
            </div>
            <div style='width: 50%;min-width: 210px'>
              <el-form-item class='label2' label='其它数据上传开关' label-width='170px' prop='OtherData' style='width: 50%;'>
                <el-switch v-model='device.form.dispose.OtherData'/>
              </el-form-item>
            </div>
          </div>
          <div class='flex just-b wrap'>
            <el-form-item class='label2' label='噪声统计开关' label-width='170px' prop='NoiseStats' style='width: 100%;'>
              <el-switch v-model='device.form.dispose.NoiseStats'/>
            </el-form-item>
          </div>
        </el-form>
        <p class='controlInfo_title controlInfo_item'><span class='select condition'>远程升级</span></p>
        <p class='flex align-c controlInfo_item '>
          <Btn :info="{
                id: 3,
                name: '一键升级',
                type: 'noise',
                class: 'Btn',
                icon: 'icon-RectangleCopy52',
                title: '一键升级',
              }" @handleClick='device.upLevel'></Btn>
          <!--          <Btn :info="{-->
          <!--                id: 3,-->
          <!--                name: '自动升级',-->
          <!--                type: 'dust',-->
          <!--                class: 'Btn',-->
          <!--                icon: 'icon-RectangleCopy52',-->
          <!--                title: '自动升级',-->
          <!--              }" @handleClick="device.autoUpLevel"></Btn>-->
        </p>
        <Jointlevel :data='state.level' @checkId='device.checkIdLevel'></Jointlevel>
      </template>
      <template v-slot:page>
        <span class='confirm_btn cursor condition' @click='device.controlEdit'>确定</span>
      </template>
    </popup>
    <popup :info='device.videoInfo' @hide='device.videoHide()'>
      <template v-slot:title>
        <div>
          <span class='select condition'>视频编辑</span>
        </div>
      </template>
      <template v-slot:main>
        <el-form ref='videoForm' :model='device.form.deviceForm' :rules='device.form.deviceRules' class='deviceForm' size='mini' style='margin-right: 10px;'>
          <el-scrollbar :native='false' :noresize='false' tag='div'>
            <div style='padding: 10px'>
              <el-form-item class='label' label='' prop='name'>
                <label>ID</label>
                <el-input v-model='device.form.deviceForm.name' :disabled='device.form.isDisable' autocomplete='off' placeholder='请输入...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='alias'>
                <label>序列号</label>
                <el-input v-model='device.form.deviceForm.alias' autocomplete='off' placeholder='请输入...' size='small'></el-input>
              </el-form-item>
              <el-form-item class='label' label='' prop='type'>
                <label>Appkey</label>
                <el-select v-model='device.form.deviceForm.type' filterable placeholder='请选择...' size='small' style='width: 100%;'>
                  <el-option v-for='i in device.type' :key='i.id' :label='i.name' :value='i.id'></el-option>
                </el-select>
              </el-form-item>
              <el-form-item class='label' label='' prop='siteType'>
                <label>Secret</label>
                <el-select v-model='device.form.deviceForm.siteType' filterable placeholder='请选择...' size='small' style='width: 100%;'>
                  <el-option v-for='i in device.sitetype' :key='i.id' :label='i.name' :value='i.id'></el-option>
                </el-select>
              </el-form-item>
              <el-form-item class='label' label='' prop='address'>
                <label>直播地址</label>
                <el-input v-model.number='device.form.deviceForm.address' placeholder='请选择...' size='small'></el-input>
              </el-form-item>
            </div>
          </el-scrollbar>
        </el-form>
      </template>
      <template v-slot:page>
        <span class='confirm_btn cursor condition' @click='device.edit'>确定</span>
      </template>
    </popup>
    <PopupCopy :info='device.audioInfo' @hide='device.audioHide()'>
      <template v-slot:title>
        <span>录音文件</span>
      </template>
      <template v-slot:main>
        <div class='col-auto' style='height: 50vh;'>
          <Table :list='device.audiolist' @handleCurrentChange='device.audiohandleCurrentChange'>
            <template v-slot:rightTitle>
              <!--            <div v-if="device.list.active === 0" class="flex  align-c omit" style="flex: 0 0 60px;">关注</div>-->
              <!--            <div v-if="device.list.active === 0" class="flex  align-c omit" style="flex: 0 0 100px;">关联国控点</div>-->
              <!--            <div v-if="device.list.active === 1" class="flex  align-c omit" style="flex: 0 0 100px;">视频编辑</div>-->
              <div v-if='device.list.active === 1' class='flex just-c align-c omit' style='flex: 1 0 60px;'>录音文件</div>
            </template>
            <template v-slot:rightBtn='{ item }'>
              <div v-if='device.list.active === 1' class='flex just-c align-c omit' style='flex: 1 0 60px;'>
                <audio :src="'http://119.3.27.196:80/upload/noise_file/' + item.file" controls preload='none'></audio>
              </div>
            </template>
          </Table>
        </div>
      </template>
    </PopupCopy>
    <Point :data='{ show: state.pointMap, point: state.point }' @backPoint='state.backPoint'></Point>
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
  point: '',
  backPoint(point) {
    state.pointMap = false;
    device.form.deviceForm.lnglat = point;
    device.form.deviceForm.lng = point.split(',')[0];
    device.form.deviceForm.lat = point.split(',')[1];
  },
  showMap(val) {
    state.pointMap = true;
    state.point = val || '0,0';
  },
  tree: {
    name: 'tree',
    list: [],
    checkId: [],
    key: 'name',
    value: 'id',
    child: 'children',
    column: true,
    column2: true,
    single: true
  },
  async getTree() {
    let res = await get('/users/grid/tree');
    if (res.code === 200) {
      state.tree.list = res.data;
    }
  },
  level: {
    name: 'level',
    list: [],
    checkId: [],
    key: 'name',
    value: 'id',
    child: 'children',
    column: true,
    column2: true,
    single: true
  },
  async getLevel() {
    let res = await get('/users/grid/tree');
    if (res.code === 200) {
      // state.tree.list = res.data;
    }
  }
});

const deviceForm = ref(null);
const deviceCondition = ref(null);
const device = reactive({
  FreqWeightArr: [
    {name: 'A 计权', id: '0'},
    {name: 'B 计权', id: '1'},
    {name: 'C 计权', id: '2'},
    {name: 'Z 计权', id: '3'}
  ],
  siteType: [
    {name: '建筑工地', id: 1},
    {name: '地铁施工', id: 2},
    {name: '道路监测', id: 3},
    {name: '污染工厂', id: 4},
    {name: '常规监测', id: 5}
  ],
  //协议
  type: [
    {name: '212', id: 'tcpProtocol'}
  ],
  //厂家
  brandtype: [
    {name: '扬尘监测', id: '扬尘监测'}
  ],
  sitetype: [
    {name: '一般工地', id: '1'},
    {name: '重点工地', id: '2'},
    {name: '一级等效声级', id: '3'},
    {name: '二级等效声级', id: '4'}
  ],
  stationIdArr: [],
  form: {
    dispose: {
      level: '',
      AnyCycle: '2',
      AnyLeq: true,
      CalcDuration: '5',
      ClearOver: '60',
      FreqWeight: '0',
      IdleInterval: '3',
      IdleRecord: true,
      NoiseStats: true,
      OtherData: true,
      OverInterval: '5',
      OverRate: '2',
      OverRecord: true,
      OverThreshold: '50',
      TimeWeight: true,
      cn: null,
      cp: null,
      deviceId: '1440-0028-sclw-8239',
      flag: null,
      mn: null,
      pw: null,
      qn: null,
      st: null
    },
    disposeRules: {
      OverThreshold: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入超标阈值！'));
            } else {
              if (!isNaN(parseFloat(value)) && isFinite(value)) {
                if (value < 10) callback(new Error('最小值10，请输入>=10！'));
                else if (value > 100) callback(new Error('最大值100，请输入<=100！！'));
                else callback();
              } else {
                value = '';
                callback(new Error('请输入数字！'));
              }

            }
          },
          trigger: 'blur'
        }
      ],
      CalcDuration: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入超标统计时长，单位秒！'));
            } else {

              if (!isNaN(parseFloat(value)) && isFinite(value)) {
                if (value < 1) callback(new Error('最小值1秒，请输入>=1秒！'));
                else if (value > 10) callback(new Error('最大值10秒，请输入<=10秒！'));
                else callback();
              } else {
                value = '';
                callback(new Error('请输入数字！'));
              }
            }
          },
          trigger: 'blur'
        }
      ],
      OverRate: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('单位%(1~100%)！'));
            } else {
              if (!isNaN(parseFloat(value)) && isFinite(value)) {
                if (value < 0) callback(new Error('最小值1！'));
                else if (value > 100) callback(new Error('最大值100，请输入<=100！'));
                else callback();
              } else {
                value = '';
                callback(new Error('请输入数字！'));
              }
            }
          },
          trigger: 'blur'
        }
      ],
      ClearOver: [
        {
          required: true,
          message: '请输入解除超标回差值(/dB)！',
          trigger: 'blur'
        }
      ],
      OverRecord: [
        {
          required: true,
          message: '请选择超标录音开关！',
          trigger: 'change'
        }
      ],
      OverInterval: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('单位分钟(1~60分钟)！'));
            } else {
              if (!isNaN(parseFloat(value)) && isFinite(value)) {
                if (value < 1) callback(new Error('最小值1，请输入>=1！'));
                else if (value > 60) callback(new Error('最大值60，请输入<=60！'));
                else callback();
              } else {
                value = '';
                callback(new Error('请输入数字！'));
              }
            }
          },
          trigger: 'blur'
        }
      ],
      IdleRecord: [
        {
          required: true,
          message: '请选择闲时录音开关！',
          trigger: 'change'
        }
      ],
      IdleInterval: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('单位 10 分钟（取值 1 ~ 144）！'));
            } else {
              if (!isNaN(parseFloat(value)) && isFinite(value)) {
                if (value < 1) callback(new Error('最小值1，请输入>=1！'));
                else if (value > 144) callback(new Error('最大值144，请输入<=144！'));
                else callback();
              } else {
                value = '';
                callback(new Error('请输入数字！'));
              }
            }
          },
          trigger: 'blur'
        }
      ],
      AnyLeq: [
        {
          required: true,
          message: '请选择统计噪声开关！',
          trigger: 'change'
        }
      ],
      AnyCycle: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('单位分钟（取值 1 ~ 1440）!'));
            } else {
              if (!isNaN(parseFloat(value)) && isFinite(value)) {
                if (value < 1) callback(new Error('最小值1，请输入>=1！'));
                else if (value > 1440) callback(new Error('最大值1440，请输入<=1440！'));

                else callback();
              } else {
                value = '';
                callback(new Error('请输入数字！'));
              }

            }
          },
          trigger: 'blur'
        }
      ],
      FreqWeight: [
        {
          required: true,
          message: '请选择频率计权模式！',
          trigger: 'change'
        }
      ],
      TimeWeight: [
        {
          required: true,
          message: '请选择时间计权模式！',
          trigger: 'change'
        }
      ],
      NoiseStats: [
        {
          required: true,
          message: '请选择噪声统计开关！',
          trigger: 'change'
        }
      ],
      OtherData: [
        {
          required: true,
          message: '请选择其它数据上传开关！',
          trigger: 'change'
        }
      ]
    },
    deviceForm: {
      id: '',
      name: '',
      alias: '',
      gridId: '',
      organizationId: '',
      address: '',
      type: '',
      adminPhone: '',
      lng: '',
      lat: '',
      status: ''
    },
    deviceRules: {
      brand: [
        {
          required: true,
          message: '请选择生产厂家！',
          trigger: 'blur'
        }
      ],
      deviceId: [
        {
          required: true,
          message: '请输入设备名称！',
          trigger: 'blur'
        }
      ],
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
      alias: [
        {
          required: true,
          message: '请输入别名！',
          trigger: 'blur'
        }
      ],
      gridId: [
        {
          required: true,
          message: '请选择网格！',
          trigger: 'change'
        }
      ],
      organizationId: [
        {
          required: true,
          message: '请选择组织！',
          trigger: 'blur'
        }
      ],
      address: [
        {
          required: true,
          message: '请填写地址!',
          trigger: 'change'
        }
      ],
      enterpriseId: [
        {
          required: true,
          message: '请选择公司',
          trigger: 'change'
        }
      ],
      type: [
        {
          required: true,
          message: '请选择站点类型!',
          trigger: 'change'
        }
      ],
      adminPhone: [
        {
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入电话！'));
            } else {
              if (device.form.deviceForm.adminPhone !== '') {
                var reg = new RegExp('^1[0-9]{10}$');
                if (!reg.test(value)) {
                  callback(new Error('请输入正确电话号码！'));
                }
              }
              callback();
            }
          },
          trigger: 'blur',
          required: true
        }
      ],
      lnglat: [
        {
          required: true,
          message: '请选择经纬度!',
          trigger: 'change'
        }
      ],
      status: [
        {
          required: true,
          message: '请选择状态!',
          trigger: 'change'
        }
      ],
      params: [
        {
          required: true,
          message: '请选择参数!',
          trigger: 'change'
        }
      ],
      tcpProtocol: [
        {
          required: true,
          message: '请选择协议!',
          trigger: 'change'
        }
      ],
      stationId: [
        {
          required: true,
          message: '请选择站点!',
          trigger: 'change'
        }
      ]
    },
    isDisable: false,
    params: {
      name: 'params',
      list: [
        {name: 'PM10', param: 'pm10'},
        {name: 'PM25', param: 'pm25'},
        {name: 'NO2', param: 'no2'},
        {name: 'SO2', param: 'so2'},
        {name: '噪音', param: 'noise'},
        {name: 'temperature', param: 'temperature'},
        {name: 'humidity', param: 'humidity'},
        {name: 'windspeed', param: 'windspeed'},
        {name: 'winddirection', param: 'winddirection'},
        {name: 'pressure', param: 'pressure'}
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
          alias: '不启用',
          id: 0,
          name: '不启用'
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
    },
    nationForm: {
      id: ''
    },
    nationRules: {
      id: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请选择关联国控点！'));
            } else {
              callback();
            }
          },
          trigger: 'blur'
        }
      ]
    }
  },
  list: {
    active: 1,
    name: 'deviceTable',
    header: [
      {name: '名称', width: '120px', key: 'name', color: '#9495a9'},
      {name: '别名', width: '120px', key: 'alias', color: '#9495a9'},
      {name: '区域', width: '120px', key: 'gridName', color: '#9495a9'},
      {name: '地址', width: '120px', key: 'address', color: '#9495a9'},
      {name: '经纬度', width: '120px', key: 'lnglat', color: '#9495a9'},
      {name: '负责人电话', width: '150px', key: 'adminPhone', color: '#9495a9'}
    ],
    header2: [
      {name: '名称', width: '120px', key: 'name', color: '#9495a9'},
      {name: '别名', width: '120px', key: 'alias', color: '#9495a9'},
      {name: '区域', width: '120px', key: 'gridName', color: '#9495a9'},
      // {name: "组织ID", width: "100px", key: "organizationId", color: "#9495a9"},
      {name: '地址', width: '120px', key: 'address', color: '#9495a9'},
      {name: '经纬度', width: '120px', key: 'lnglat', color: '#9495a9'},
      // {name: "状态", width: "120px", key: "status", color: "#9495a9",select: ["未启用", "启用"]},
      {
        name: '类型',
        width: '80px',
        key: 'type',
        color: '#9495a9',
        select: ['-', '建筑工地', '地铁施工', '道路监测', '污染工厂', '常规监测']
      },
      {name: '负责人电话', width: '150px', key: 'adminPhone', color: '#9495a9'}
    ],
    header3: [
      {name: ' ID', width: '120px', key: 'deviceId', color: '#9495a9'},
      {name: ' 站点', width: '120px', key: 'stationName', color: '#9495a9'},
      {name: ' 协议', width: '80px', key: 'tcpProtocol', color: '#9495a9'},
      {name: ' 厂家', width: '120px', key: 'brand', color: '#9495a9'},
      {name: ' SN直播地址', width: '120px', key: 'videoSn', color: '#9495a9'},
      {
        name: ' 状态',
        width: '80px',
        key: 'status',
        color: '#9495a9',
        select: ['未启用', '启用'],
        selectColor: ['red', 'green']
      },
      {
        name: ' 是否在线',
        width: '80px',
        key: 'online',
        color: '#9495a9',
        select: ['离线', '在线'],
        selectColor: ['red', 'green']
      }
      // {name: " 离线时间", width: "120px", key: "offlineTime", color: "#9495a9"},
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
  checkIdLevel(val) {
    state.level.list.checkId = val.checkId;
    device.form.dispose.level = val.checkId.toString();
  },
  checkIdGrid(val) {
    device.form.deviceForm.gridId = val.checkId.toString();
  },
  checkIdParam(val) {
    device.form.deviceForm.params = val.checkId.toString();
  },
  checkIdStatus(val) {
    device.form.deviceForm.status = val.checkId.toString();
  },
  handleCurrentChange(obj) {
    device.list.multipleSelection = [];
    device.list.selectAll = false;
    device.list.page = obj.page;
    device.getDevice(device.list.active);
  },
  selectId(val) {
    console.log(val, 'selectId');
  },
  async getDevice(type) {
    if (type === 'search') {
      device.list.page = 1;
    } else {
      device.list.active = type;
    }
    if (device.list.active === 0) {
      let res = await get('/users/grid/showStation', {
        page: device.list.page,
        size: device.list.size,
        key: device.list.search
      });
      if (res.code === 200) {
        device.list.header = device.list.header2;
        res.rows.forEach((i) => {
          i.lnglat = i.lng + ',' + i.lat;
        });
        this.stationIdArr = res.rows;
        this.list.rows = res.rows;
        this.list.rows2 = res.rows;
        this.list.total = res.total;
      }
    } else {
      let res = await get('/users/grid/showDevice', {
        page: device.list.page,
        size: device.list.size,
        key: device.list.search
      });
      if (res.code === 200) {
        device.list.header = device.list.header3;
        this.list.rows = res.rows;
        this.list.rows2 = res.rows;
        this.list.total = res.total;
      }
    }
  },
  info: {
    show: false,
    name: 'deviceInfo',
    w: '60%',
    type: 'add'
  },
  show(obj, item) {
    deviceForm.value.resetFields();
    device.info.show = true;
    device.info.type = obj.type;
    if (device.info.type === 'add') {
      device.form.deviceForm = {
        id: '',
        name: '',
        alias: '',
        gridId: '',
        organizationId: '',
        address: '',
        type: '',
        adminPhone: '',
        lng: '',
        lat: '',
        status: ''
      };
      state.tree.checkId = [];
      device.form.params.checkId = [];
      device.form.status.checkId = [];
    } else {
      this.form.deviceForm = _.clone(item);
      this.form.deviceForm.lnglat = `${item.lng},${item.lat}`;
      if (device.list.active === 0) {
        state.tree.checkId = [item.gridId];
      } else if (device.list.active === 1) {
        state.tree.checkId = [item.gridId];
        device.form.params.checkId = item.params.split(',');
        device.form.status.checkId = [item.status];
      }
    }
  },
  hide() {
    deviceForm.value.resetFields();
    device.form.deviceForm = {};
    device.form.params.checkId = [];
    device.info.show = false;
    device.info.type = 'add';
  },
  edit() {
    deviceForm.value.validate(async (valid) => {
      if (device.list.active === 0) {
        if (valid) {
          if (this.info.type === 'add') {
            let res = await post('/users/grid/station', this.form.deviceForm, true);
            if (res.code === 200) {
              this.info.show = false;
              this.info.type = 'add';
              this.getDevice(device.list.active);
              ElMessage({
                duration: 1000,
                type: 'success',
                message: res.msg
              });
            }
          } else if (this.info.type === 'edit') {
            let res = await put('/users/grid/station', this.form.deviceForm, true);
            if (res.code === 200) {
              this.info.show = false;
              this.info.type = 'add';
              this.getDevice(device.list.active);
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
      } else if (device.list.active === 1) {
        if (valid) {
          console.log('通过');
          if (this.info.type === 'add') {
            let res = await post('/users/grid/device', {
              ...this.form.deviceForm,
              tcpProtocol: 212
            }, true);
            if (res.code === 200) {
              this.info.show = false;
              this.info.type = 'add';
              this.getDevice(device.list.active);
              ElMessage({
                duration: 1000,
                type: 'success',
                message: res.msg
              });
            }
          } else if (this.info.type === 'edit') {
            let res = await put('/users/grid/device', this.form.deviceForm, true);
            if (res.code === 200) {
              this.info.show = false;
              this.info.type = 'add';
              this.getDevice(device.list.active);
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
      }
    });
  },
  async del(item) {
    if (device.list.active === 0) {
      let res = await del(`/users/grid/station/${item.id}`);
      if (res.code === 200) {
        this.getDevice(device.list.active);
        ElMessage({
          duration: 1000,
          type: 'success',
          message: res.msg
        });
      }
    } else {
      let res = await del(`/users/grid/device/${item.id}`);
      if (res.code === 200) {
        this.getDevice(device.list.active);
        ElMessage({
          duration: 1000,
          type: 'success',
          message: res.msg
        });
      }
    }

  },

  nationInfo: {
    show: false,
    name: 'nationInfo',
    w: '60%',
    type: 'add'
  },
  nationShow() {
    this.nationInfo.show = true;
  },
  nationHide() {
    this.nationInfo.show = false;
  },

  //设备噪音控制
  controlInfo: {
    show: false,
    name: 'controlInfo',
    w: '45%',
    type: 'noise',
    data: {
      id: ''
    }
  },
  async controlShow(row) {
    this.controlInfo.show = true;
    this.controlInfo.data = row;
    let res = await get('/monitoring/rpc/deviceSetting', row);
    if (res.code === 200) {
      this.controlInfo.show = true;
      if (res.data) device.form.dispose = _.clone(res.data);
    }
    device.getupLevel();
    state.level.checkId = [];
  },
  controlHide() {
    this.controlInfo.show = false;
    deviceCondition.value.resetFields();
  },
  controlEdit() {
    deviceCondition.value.validate(async (valid) => {
      if (valid) {
        // device.form.dispose.AnyLeq = device.form.dispose.AnyLeq ? 1 : 0
        // device.form.dispose.IdleRecord = device.form.dispose.IdleRecord ? 1 : 0
        // device.form.dispose.NoiseStats = device.form.dispose.NoiseStats ? 1 : 0
        // device.form.dispose.OtherData = device.form.dispose.OtherData ? 1 : 0
        // device.form.dispose.OverRecord = device.form.dispose.OverRecord ? 1 : 0
        // device.form.dispose.TimeWeight = device.form.dispose.TimeWeight ? 1 : 0
        let res = await put('/monitoring/rpc/deviceSetting', {
          deviceId: this.controlInfo.data.deviceId,
          level: device.form.dispose.level,
          AnyCycle: device.form.dispose.AnyCycle,
          AnyLeq: device.form.dispose.AnyLeq ? 1 : 0,
          CalcDuration: device.form.dispose.CalcDuration,
          ClearOver: device.form.dispose.ClearOver,
          FreqWeight: device.form.dispose.FreqWeight,
          IdleInterval: device.form.dispose.IdleInterval,
          IdleRecord: device.form.dispose.IdleRecord ? 1 : 0,
          NoiseStats: device.form.dispose.NoiseStats ? 1 : 0,
          OtherData: device.form.dispose.OtherData ? 1 : 0,
          OverInterval: device.form.dispose.OverInterval,
          OverRate: device.form.dispose.OverRate,
          OverRecord: device.form.dispose.OverRecord ? 1 : 0,
          OverThreshold: device.form.dispose.OverThreshold,
          TimeWeight: device.form.dispose.TimeWeight ? 1 : 0,
          cn: null,
          cp: null,
          flag: null,
          mn: null,
          pw: null,
          qn: null,
          st: null
        }, true);
        if (res.code === 200) {
          this.controlHide();
          this.getDevice(1);
          ElMessage({
            duration: 1000,
            type: 'success',
            message: res.msg
          });
        }
      } else {
        console.log('不通过');
        return false;
      }
    });
  },
  async getupLevel() {
    let res = await get(`/monitoring/rpc/upgradingFile`);
    if (res.code === 200) {
      let arr = [];
      for (let key in res.data) {
        arr.push({
          id: res.data[key],
          name: res.data[key]
        });
      }
      state.level.list = arr;
    }
  },
  //一键升级
  async upLevel() {
    if (state.level.checkId.length === 0) {
      ElMessage({
        duration: 1000,
        type: 'success',
        message: '请选择版本!'
      });
      return false;
    }
    let res = await get(`/monitoring/rpc/upgrading`, {
      id: device.controlInfo.data.id,
      fileName: state.level.checkId.toString()
    });
    if (res.code === 200) {
      ElMessage({
        duration: 1000,
        type: 'success',
        message: res.data.result
      });
    }
  },
  //自动升级
  async autoUpLevel() {
    if (state.level.checkId.length === 0) {
      ElMessage({
        duration: 1000,
        type: 'success',
        message: '请选择版本!'
      });
      return false;
    }
    let res = await get(`/monitoring/rpc/upgrading`, {
      id: device.controlInfo.data.id,
      filename: state.level.checkId.toString()
    });
    if (res.code === 200) {
      ElMessage({
        duration: 1000,
        type: 'success',
        message: res.data.result
      });
    }
  },

  videoInfo: {
    show: false,
    name: 'videoInfo',
    w: '60%',
    type: 'add'
  },

  videoShow() {
    this.videoInfo.show = true;
  },
  videoHide() {
    this.videoInfo.show = false;
  },
  audioInfo: {
    show: false,
    name: 'audioInfo',
    w: '800px',
    type: 'add',
    id: ''
  },
  audiolist: {
    name: 'deviceTable',
    header: [
      {name: '文件名', width: '120px', key: 'file', color: '#9495a9'},
      {name: '上传时间', width: '120px', key: 'createDate', color: '#9495a9'}
    ],
    rows: [],
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
  async getAudio() {
    let res = await get(`/users/grid/deviceAudio`, {
      page: device.audiolist.page,
      size: device.audiolist.size,
      deviceId: device.audioInfo.id
    });
    if (res.code === 200) {
      this.audiolist.rows = res.rows;
      this.audiolist.total = res.total;
      this.audioInfo.show = true;
    }
  },
  audioShow(item) {
    this.audioInfo.id = item.deviceId;
    this.getAudio();
  },
  audioHide() {
    this.audioInfo.show = false;
  },
  audiohandleCurrentChange(obj) {

  }
});
onMounted(() => {
  device.getDevice(0);
  state.getTree();
});
</script>

<style lang='less' scoped>
.device{
  width:100%;
  height:100%;
  box-sizing:border-box;
  padding:12px;

  .role-item{
    background:#fff;
  }

  .info{
    box-sizing:border-box;
    padding:10px;
  }

  .controlInfo{
    :deep(.el-form-item__content,.el-select .el-select--large){
      //width: 245px;
    }

    .controlInfo_item{
      height:40px;
      line-height:40px;
      margin:0 0 10px 0;
    }

    .controlInfo_title{
      position:relative;
      height:50px;
      line-height:50px;
      box-sizing:border-box;
      padding:0 10px 0 0;
      font-size:16px;
      border-bottom:1px dashed #cccccc;
      border-top:1px dashed #ccc;
    }

    :deep(.controlInfoActive){
      background-image:linear-gradient(to right, #b61747, #6d68ff);
    }
  }

  .minW{
    :deep(.Jointlevel .li){
      min-width:130px;
    }
  }
}

audio{
  height:40px;
  margin-right:5px;
}
</style>


