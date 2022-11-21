<template>
  <div class="report-page">
    <!--    <top-menu :title="'AI报表'"></top-menu>-->
    <el-scrollbar ref="reportScorll">
      <div class="boxReport">
        <div class="flex">
          <el-button  plain type="success" @click="report.exportPdf('look')">预览PDF</el-button>
          <el-button  plain type="danger" @click="report.exportPdf('pdf')">导出PDF</el-button>
          <el-button  plain type="primary" @click="report.exportWord('pdf')">导出word</el-button>
          <el-date-picker v-model="report.begin" placeholder="时间" style="margin-bottom: 10px" type="date" @change="report.handle()"/>
        </div>
        <div id="report" class="report flex wrap">
          <div id="report-title" class="col-12 report-title backCo" style="height: 70px;">
            功能区高空嘹望系统项目建设{{ new Date(report.begin).format('MM.dd') }}日报 </div>
          <div class="col-3" style="height: 90px;">
            <div class="text-title">PH<span>10</span></div>
            <div id="pm10" class="text-num">{{ report.all.pm10 }}</div>
          </div>
          <div class="col-3" style="height: 90px;">
            <div class="text-title">车流量</div>
            <div id="trafficFlow" class="text-num">{{ report.all.trafficFlow }}</div>
          </div>
          <div class="col-3" style="height: 90px;">
            <div class="text-title">篷布未覆盖数量</div>
            <div id="CoveredWithTarpaulin" class="text-num">{{ report.all.CoveredWithTarpaulin }}</div>
          </div>
          <div class="col-3" style="height: 90px;">
            <div class="text-title">车身清洁不达标数量</div>
            <div id="CarDirty" class="text-num">{{ report.all.CarDirty }}</div>
          </div>
          <!--        <div class="col-12" style="height: 60px;">-->
          <!--          <div class="text-weather">今日晴，-5-4°C, 东南风1级</div>-->
          <!--        </div>-->
          <div class="col-3" style="height: 90px;">
            <div class="text-title">PH<span>2.5</span></div>
            <div id="pm25" class="text-num">{{ report.all.pm25 }}</div>
          </div>
          <div class="col-3" style="height: 90px;">
            <div class="text-title">车况达标率（%）</div>
            <div id="normalCar" class="text-num">{{ (report.all.normalCar * 100).toFixed(2) || 0 }}</div>
          </div>
          <div class="col-3" style="height: 90px;">
            <div class="text-title">车辆掉渣数量</div>
            <div id="VehiclesOffSlag" class="text-num">{{ report.all.SlagFallingFromSlagTruck }}</div>
          </div>
          <div class="col-3" style="height: 90px;">
            <div class="text-title">火点识别报警次数</div>
            <div id="fire" class="text-num">{{ report.all.fire }}</div>
          </div>
          <!--        <div class="col-12" style="height: 60px;">-->
          <!--          <div class="text-title">未来两天空质量预报</div>-->
          <!--          <div class="text-content">74日MO预报: 4-74优良，首要污染物03</div>-->
          <!--          <div class="text-content">74日MO预报: 4-74优良，首要污染物03</div>-->
          <!--        </div>-->
          <div class="col-6" style="height: 240px;">
            <div class="text-title">扬尘24小时趋势图</div>
            <Echart :options="report.dustOption" @imgBase64="report.getImgBase641"></Echart>
          </div>
          <div class="col-6" style="height: 240px;">
            <div class="text-title">火点识别报警频率</div>
            <Echart :options="report.alarmOption" @imgBase64="report.getImgBase642"></Echart>
          </div>
          <div class="col-12" style="height: 240px;">
            <div class="text-title">扬尘报警趋势图</div>
            <Echart :options="report.dustAlarmOption" @imgBase64="report.getImgBase643"></Echart>
          </div>
          <div class="col-2" style="height: auto;">
            <div class="text-title">站点AQI详情</div>
            <Table :list="report.list1" :show="true"></Table>
          </div>
          <div class="col-4" style="height: auto;justify-content: flex-start;">
            <div style="width: 100%;min-height: 150px">
              <div class="text-title">站点PM<span>10</span>详情(单位: μg/m)</div>
              <Table :list="report.list2" :show="true"></Table>
            </div>
            <div style="width: 100%;min-height: 150px">
              <div class="text-title">站点PM<span>2.5</span>详情(单位: μg/m)</div>
              <Table :list="report.list3" :show="true"></Table>
            </div>
          </div>
          <div class="col-2" style="height: auto;">
            <div class="text-title">火点识别详情</div>
            <Table :list="report.list4" :show="true"></Table>
          </div>
          <div class="col-4" style="height: auto;">
            <div class="text-title">AI事件识别</div>
            <Table :list="report.list5" :show="true"></Table>
          </div>
          <div class="col-12" style="height: 180px;align-items: flex-start;justify-content: flex-start;padding: 10px;">
            <div class="text-title">当期概况:</div>
            <div id="text-content" class="text-content">1.当日pm10达到{{ report.all.pm10 }}μg/m'， PM2.5达到{{
                report.all.pm25
              }}μg/m*;车流量达到{{
                report.all.trafficFlow
              }}次，Ai识别发生{{
                report.all.CarDirty + report.all.CoveredWithTarpaulin + report.all.SlagFallingFromSlagTruck
              }}次不达标事件，达标率为{{ (report.all.normalCar * 100).toFixed(2) }}%;火点识别报警{{ report.all.fire }}次，具体详情参照上图。 </div>
          </div>
          <div class="col-12" style="height: 37px;align-items: flex-start;justify-content: flex-start;padding: 8px 10px;">
            <div id="mark" class="text-content" style="color: red;">备注: 环比增长率- (当天数值-上- 天数值) 1上-天数值*100%</div>
          </div>
        </div>
        <el-button circle class="backTop" plain type="primary" @click="report.backTop()">
          <el-icon>
            <ArrowUpBold/>
          </el-icon>
        </el-button>
      </div>
    </el-scrollbar>
    <span class="closePdf" @click="report.closePdf()"> × </span>
  </div>
</template>

<script>
import {ElMessage} from 'element-plus';
import {getAiFire, getAlarm, getAll, getDust, getDustAlarm, getStationAqi, getStationPm} from '~/api/report';
import echarts from '~/utils/ehcarts';
import pdf from '~/utils/pdf';
import '../../assets/docxtemplater/docxtemplater';
import '../../assets/docxtemplater/FileSaver';
import '../../assets/docxtemplater/imagemodule';
import '../../assets/docxtemplater/pizzip';
import '../../assets/docxtemplater/pizzip-utils';

export default defineComponent({
  name: 'report',
  props: {},
  emits: [],
  setup(props, {emit}) {
    const reportScorll = ref(null);
    let report = reactive({
      begin: new Date().format('yyyy-MM-dd ') + '00:00:00',
      end: new Date().format('yyyy-MM-dd ') + '23:59:59',
      // begin: '2022-07-22 00:00:00',
      // end: '2022-07-22 23:59:59',
      dustOption: {
        title: [
          // {
          //   text: '扬尘24小时趋势图',
          //   textStyle: {
          //     color: '#3CA2F2'
          //   },
          //   left: 'center',
          // },
          {
            subtext: 'um/m³',
            subtextStyle: {
              color: '#3CA2F2'
            },
            left: '10'
          }
        ],
        grid: {
          top: '20%',
          right: '10',
          bottom: '20',
          left: '50'
        },
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0.8,
          axisPointer: {
            // type: 'shadow'
          },
          backgroundColor: 'rgba(18,34,68,0.5)',
          extraCssText: 'box-shadow: inset 0px 0px 8px #68a9ff;border-color:#68a9ff;',
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: {
          data: [],
          axisLabel: {
            inside: true,
            color: '#3CA2F2',
            formatter: function (params) {
              let newParamsName = '';// 最终拼接成的字符串
              let paramsNameNumber = params.length;// 实际标签的个数
              let provideNumber = 10;// 每行能显示的字的个数
              let rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
              /**
               * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
               */
              // 条件等同于rowNumber>1
              if (paramsNameNumber > provideNumber) {
                /** 循环每一行,p表示行 */
                for (let p = 0; p < rowNumber; p++) {
                  let tempStr = '';// 表示每一次截取的字符串
                  let start = p * provideNumber;// 开始截取的位置
                  let end = start + provideNumber;// 结束截取的位置
                  // 此处特殊处理最后一行的索引值
                  if (p == rowNumber - 1) {
                    // 最后一次不换行
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    // 每一次拼接字符串并换行
                    tempStr = params.substring(start, end) + '\n';
                  }
                  newParamsName += tempStr;// 最终拼成的字符串
                }

              } else {
                // 将旧标签的值赋给新标签
                newParamsName = params;
              }
              //将最终的字符串返回
              return newParamsName;
            }
          }, // x轴线文字
          axisTick: {
            show: false
          }, // x轴线刻度
          axisLine: {
            show: true,
            lineStyle: {
              color: ['#5099FF'],
              type: 'solid',
              opacity: 0.2
            }
          }, // x轴线
          splitLine: {
            show: false,
            lineStyle: {
              color: ['#5099FF'],
              type: 'solid',
              opacity: 0.2
            }
          },  // x轴线分割线
          z: 2
        },
        yAxis: {
          axisLabel: {
            color: '#3CA2F2'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: ['#5099FF'],
              type: 'solid',
              opacity: 0.2
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#5099FF'],
              type: 'solid',
              opacity: 0.2
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: []
      },
      dustAlarmOption: {
        title: [
          // {
          //   text: '扬尘报警趋势图',
          //   textStyle: {
          //     color: '#3CA2F2'
          //   },
          //   left: 'center',
          // },
          {
            subtext: '次',
            subtextStyle: {
              color: '#3CA2F2'
            },
            left: '10'
          }
        ],
        grid: {
          top: '20%',
          right: '10',
          bottom: '20',
          left: '50'
        },
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0.8,
          axisPointer: {
            // type: 'shadow'
          },
          backgroundColor: 'rgba(18,34,68,0.5)',
          extraCssText: 'box-shadow: inset 0px 0px 8px #68a9ff;border-color:#68a9ff;',
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: {
          data: [],
          axisLabel: {
            inside: true,
            color: '#3CA2F2',
            formatter: function (params) {
              let newParamsName = '';// 最终拼接成的字符串
              let paramsNameNumber = params.length;// 实际标签的个数
              let provideNumber = 10;// 每行能显示的字的个数
              let rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
              /**
               * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
               */
              // 条件等同于rowNumber>1
              if (paramsNameNumber > provideNumber) {
                /** 循环每一行,p表示行 */
                for (let p = 0; p < rowNumber; p++) {
                  let tempStr = '';// 表示每一次截取的字符串
                  let start = p * provideNumber;// 开始截取的位置
                  let end = start + provideNumber;// 结束截取的位置
                  // 此处特殊处理最后一行的索引值
                  if (p == rowNumber - 1) {
                    // 最后一次不换行
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    // 每一次拼接字符串并换行
                    tempStr = params.substring(start, end) + '\n';
                  }
                  newParamsName += tempStr;// 最终拼成的字符串
                }

              } else {
                // 将旧标签的值赋给新标签
                newParamsName = params;
              }
              //将最终的字符串返回
              return newParamsName;
            }
          }, // x轴线文字
          axisTick: {
            show: false
          }, // x轴线刻度
          axisLine: {
            show: true,
            lineStyle: {
              color: ['#5099FF'],
              type: 'solid',
              opacity: 0.2
            }
          }, // x轴线
          splitLine: {
            show: false,
            lineStyle: {
              color: ['#5099FF'],
              type: 'solid',
              opacity: 0.2
            }
          },  // x轴线分割线
          z: 2
        },
        yAxis: {
          axisLabel: {
            color: '#3CA2F2'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: ['#5099FF'],
              type: 'solid',
              opacity: 0.2
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#5099FF'],
              type: 'solid',
              opacity: 0.2
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: []
      },
      alarmOption: {
        title: [
          // {
          //   text: '火点识别报警频率',
          //   textStyle: {
          //     color: '#3CA2F2'
          //   },
          //   left: 'center',
          // },
          {
            subtext: '次',
            subtextStyle: {
              color: '#3CA2F2'
            },
            left: '35'
          }
        ],
        grid: {
          top: '20%',
          right: '10',
          bottom: '20',
          left: '50'
        },
        tooltip: {
          trigger: 'axis',
          transitionDuration: 0.8,
          axisPointer: {
            type: 'shadow'
          },
          backgroundColor: 'rgba(18,34,68,0.5)',
          extraCssText: 'box-shadow: inset 0px 0px 8px #68a9ff;border-color:#68a9ff;',
          textStyle: {
            color: '#fff'
          }
        },
        xAxis: {
          data: [],
          axisLabel: {
            inside: true,
            color: '#3CA2F2',
            formatter: function (params) {
              let newParamsName = '';// 最终拼接成的字符串
              let paramsNameNumber = params.length;// 实际标签的个数
              let provideNumber = 10;// 每行能显示的字的个数
              let rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
              /**
               * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
               */
              // 条件等同于rowNumber>1
              if (paramsNameNumber > provideNumber) {
                /** 循环每一行,p表示行 */
                for (let p = 0; p < rowNumber; p++) {
                  let tempStr = '';// 表示每一次截取的字符串
                  let start = p * provideNumber;// 开始截取的位置
                  let end = start + provideNumber;// 结束截取的位置
                  // 此处特殊处理最后一行的索引值
                  if (p == rowNumber - 1) {
                    // 最后一次不换行
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    // 每一次拼接字符串并换行
                    tempStr = params.substring(start, end) + '\n';
                  }
                  newParamsName += tempStr;// 最终拼成的字符串
                }

              } else {
                // 将旧标签的值赋给新标签
                newParamsName = params;
              }
              //将最终的字符串返回
              return newParamsName;
            }
          }, // x轴线文字
          axisTick: {
            show: false
          }, // x轴线刻度
          axisLine: {
            show: true,
            lineStyle: {
              color: ['#5099FF'],
              type: 'solid',
              opacity: 0.2
            }
          }, // x轴线
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#5099FF'],
              type: 'solid',
              opacity: 0.2
            }
          },  // x轴线分割线
          z: 10
        },
        yAxis: {
          axisLabel: {
            color: '#3CA2F2'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: ['#5099FF'],
              type: 'solid',
              opacity: 0.2
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#5099FF'],
              type: 'solid',
              opacity: 0.2
            }
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: []
      },
      list1: {
        name: 'list11',
        header: [
          {name: '设备id', width: '20%', key: 'deviceid'},
          {name: 'AQI', width: '20%', key: 'aqi', rang: true},
          {name: '在线率(%)', width: '20%', key: 'online', rang: true}
        ],
        rows: [],
        page: 1,
        size: 20,
        total: 100,
        currentPage: 1,
        select: {
          id: 'id',
          open: false, // 是否开启多项选中
          selectAll: false, //全选
          isIndeterminate: false, // 中间状态
          selectId: [] // 选中ID
        },
        expor: false,
        ischildren: false,
        headerShow: true,
        pageShow: false
      },
      list2: {
        name: 'list11',
        header: [
          {name: '设备id', width: '20%', key: 'deviceid'},
          {name: 'PM10', width: '20%', key: 'pm10', rang: true},
          {name: '上周PM10', width: '20%', key: 'pm10Up', rang: true},
          {name: '环比增长率(%)', width: '20%', key: 'pm10Ratio', rang: true}
        ],
        rows: [],
        page: 1,
        size: 20,
        total: 7,
        currentPage: 1,
        select: {
          id: 'id',
          open: false, // 是否开启多项选中
          selectAll: false, //全选
          isIndeterminate: false, // 中间状态
          selectId: [] // 选中ID
        },
        expor: false,
        ischildren: false,
        headerShow: true,
        pageShow: false
      },
      list3: {
        name: 'list11',
        header: [
          {name: '设备id', width: '20%', key: 'deviceid'},
          {name: 'PM25', width: '20%', key: 'pm25', rang: true},
          {name: '上周PM25', width: '20%', key: 'pm25Up', rang: true},
          {name: '环比增长率(%)', width: '20%', key: 'pm25Ratio', rang: true}
        ],
        rows: [],
        page: 1,
        size: 20,
        total: 7,
        currentPage: 1,
        select: {
          id: 'id',
          open: false, // 是否开启多项选中
          selectAll: false, //全选
          isIndeterminate: false, // 中间状态
          selectId: [] // 选中ID
        },
        expor: false,
        ischildren: false,
        headerShow: true,
        pageShow: false
      },
      list4: {
        name: 'alarm',
        header: [
          {name: '设备id', width: '20%', key: 'deviceid'},
          {name: '触发时间', width: '20%', key: 'createTime'}
        ],
        rows: [],
        page: 1,
        size: 20,
        total: 0,
        currentPage: 1,
        select: {
          id: 'id',
          open: false, // 是否开启多项选中
          selectAll: false, //全选
          isIndeterminate: false, // 中间状态
          selectId: [] // 选中ID
        },
        expor: false,
        ischildren: false,
        headerShow: true,
        pageShow: false
      },
      list5: {
        name: 'aiList',
        header: [
          {name: '车牌号', width: '20%', key: 'deviceid'},
          {name: '触发事件', width: '20%', key: 'typenamech'},
          {name: '触发时间', width: '20%', key: 'createTime'}
        ],
        rows: [],
        page: 1,
        size: 20,
        total: 0,
        currentPage: 1,
        select: {
          id: 'id',
          open: false, // 是否开启多项选中
          selectAll: false, //全选
          isIndeterminate: false, // 中间状态
          selectId: [] // 选中ID
        },
        expor: false,
        ischildren: false,
        headerShow: true,
        pageShow: false
      },
      all: {},
      // 查询AI报警事件列表
      async getAlarm(type) {
        let res = await getAlarm({
          createTime: new Date(this.begin).format('yyyy-MM-dd ') + '00:00:00',
          alarmType: type, //TransportingSlagCar 运渣车 UpperAirFire 火点识别
          pageNum: type === 'TransportingSlagCar' ? this.list4.page : this.list5.page,
          pageSize: type === 'TransportingSlagCar' ? this.list4.size : this.list5.size
        });
        if (res.code === 200) {
          if (type === 'UpperAirFire') {
            res.data.rows.forEach(i => {
              i.alarmContent = `${i.carnumber}在${i.createTime}触发了报警，报警事件为${i.typenamech}`;
            });
            this.list4.rows = res.data.rows;
            this.list4.total = res.data.total;

          } else if (type === 'TransportingSlagCar') {
            res.data.rows.forEach(i => {
              i.alarmContent = `${i.deviceid}在${i.createTime}触发了报警，报警事件为${i.typenamech}`;
            });
            this.list5.rows = res.data.rows;
            this.list5.total = res.data.total;
          }
        }
      },
      // 24小时扬尘
      async getDust() {
        let res = await getDust({
          begin: new Date(this.begin).format('yyyy-MM-dd ') + '00:00:00',
          end: new Date(this.begin).format('yyyy-MM-dd ') + '23:59:59'
        });
        if (res.code === 200) {
          this.dustOption.xAxis.data = res.data.time.map(i => new Date(i).format('hh'));
          this.dustOption.series = [];
          for (const key in res.data) {
            if (key !== 'time') {
              this.dustOption.series.push({
                name: key,
                type: 'line',
                showBackground: true,
                showSymbol: true,
                symbol: 'circle',
                symbolSize: 10,
                itemStyle: {
                  // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  //   {offset: 0, color: '#999999'},
                  //   {offset: 0.5, color: 'rgba(0,228,0,0.5)'},
                  //   {offset: 1, color: '#00E400'}
                  // ]),
                  shadowColor: '#fff',
                  shadowBlur: 10
                },
                data: res.data[key]
              });
            }
          }
        }
      },
      // 扬尘报警
      async getDustAlarm() {
        let res = await getDustAlarm({
          begin: new Date(this.begin).format('yyyy-MM-dd ') + '00:00:00',
          end: new Date(this.begin).format('yyyy-MM-dd ') + '23:59:59'
        });
        if (res.code === 200) {
          this.dustAlarmOption.xAxis.data = res.data.times.map(i => new Date(i).format('hh'));
          this.dustAlarmOption.series = [];
          for (const key in res.data) {
            if (key !== 'times') {
              this.dustAlarmOption.series.push({
                name: key,
                type: 'line',
                showBackground: true,
                showSymbol: true,
                symbol: 'circle',
                symbolSize: 10,
                itemStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {offset: 0, color: '#00E400'},
                    {offset: 0.5, color: 'rgba(0,228,0,0.5)'},
                    {offset: 1, color: '#999999'}
                  ]),
                  shadowColor: '#fff',
                  shadowBlur: 10
                },
                data: res.data[key]
              });
            }
          }
        }
      },
      // 火点识别
      async getAiFire() {
        let res = await getAiFire({
          begin: new Date(this.begin).format('yyyy-MM-dd ') + '00:00:00',
          end: new Date(this.begin).format('yyyy-MM-dd ') + '23:59:59'
        });
        if (res.code === 200) {
          this.alarmOption.xAxis.data = [];
          this.alarmOption.series = [];
          let obj = {
            name: '',
            type: 'bar',
            barWidth: 10,
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {offset: 0, color: '#83bff6'},
                {offset: 0.5, color: '#188df0'},
                {offset: 1, color: '#188df0'}
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {offset: 0, color: '#2378f7'},
                  {offset: 0.7, color: '#2378f7'},
                  {offset: 1, color: '#83bff6'}
                ])
              }
            },
            data: [],
            label: {
              formatter: '{c}',
              show: true,
              position: 'top',
              fontWeight: 'bolder',
              fontSize: '12',
              color: '#fff'
            }
          };
          res.data.forEach(i => {
            this.alarmOption.xAxis.data.push(i.name);
            obj.data.push(i.num);
          });
          if (obj.data.length > 0) this.alarmOption.series.push(obj);
        }
      },
      // PM
      async getStationPm() {
        let res = await getStationPm({
          begin: new Date(this.begin).format('yyyy-MM-dd ') + '00:00:00',
          end: new Date(this.begin).format('yyyy-MM-dd ') + '23:59:59'
        });
        if (res.code === 200) {
          res.data.forEach(i => {
            i.pm10Ratio = (i.pm10Ratio * 100).toFixed(2);
            i.pm25Ratio = (i.pm25Ratio * 100).toFixed(2);
          });
          this.list2.rows = res.data;
          this.list3.rows = res.data;
        }
      },
      // AQI
      async getStationAqi() {
        let res = await getStationAqi({
          begin: new Date(this.begin).format('yyyy-MM-dd ') + '00:00:00',
          end: new Date(this.begin).format('yyyy-MM-dd ') + '23:59:59'
        });
        if (res.code === 200) {
          this.list1.rows = res.data;
        }
      },
      // 数据
      async getAll() {
        let res = await getAll({
          begin: new Date(this.begin).format('yyyy-MM-dd ') + '00:00:00',
          end: new Date(this.begin).format('yyyy-MM-dd ') + '23:59:59'
        });
        if (res.code === 200) {
          this.all = res.data;
        }
      },
      closePdf: () => {
        document.getElementById('pdfImageBox').remove();
        if (document.getElementsByClassName('closePdf')[0]) document.getElementsByClassName('closePdf')[0].style.display = 'none';
      },
      exportPdf(type) {
        ElMessage({
          type: 'success',
          message: '正在加载请稍等\'\'\''
        });
        pdf('report', document.getElementById('report-title').innerText, type);
      },
      // 点击导出word
      base641: '',
      base642: '',
      base643: '',
      getImgBase641(base64) {
        report.base641 = base64;
      },
      getImgBase642(base64) {
        report.base642 = base64;
      },
      getImgBase643(base64) {
        report.base643 = base64;
      },
      base64DataURLToArrayBuffer(dataURL) {
        const base64Regex = /^data:image\/(png|jpg|svg|svg\+xml);base64,/;
        if (!base64Regex.test(dataURL)) {
          return false;
        }
        const stringBase64 = dataURL.replace(base64Regex, '');
        let binaryString;
        if (typeof window !== 'undefined') {
          binaryString = window.atob(stringBase64);
        } else {
          binaryString = new Buffer(stringBase64, 'base64').toString('binary');
        }
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          const ascii = binaryString.charCodeAt(i);
          bytes[i] = ascii;
        }
        return bytes.buffer;
      },
      exportWord() {
        // 读取并获得模板文件的二进制内容
        PizZipUtils.getBinaryContent('http://119.3.27.196:80/report.docx', (error, content) => {
              // 抛出异常
              if (error) {
                throw error;
              }
              // 图片处理
              let opts = {};
              opts.centered = true; // 图片居中，在word模板中定义方式为{%image}
              opts.fileType = 'docx';
              opts.getImage = function (tagValue) {
                return report.base64DataURLToArrayBuffer(tagValue);
              };
              opts.getSize = function (e, m, n) {
                //n为图片字段名字
                switch (n) {
                  case 'image1':
                    return [380, 200];
                  case 'image2':
                    return [240, 200];
                  case 'image3':
                    return [680, 200];
                }
              };
              let imageModule = new ImageModule(opts);

              // 创建一个JSZip实例，内容为模板的内容
              let zip = new PizZip(content);
              // 创建并加载docxtemplater实例对象
              let doc = new window.docxtemplater();
              doc.loadZip(zip);
              doc.attachModule(imageModule);
              // 设置模板变量的值
              doc.setData({
                title: document.getElementById('report-title').innerText,
                pm10: document.getElementById('pm10').innerText,
                pm25: document.getElementById('pm25').innerText,
                trafficflow: document.getElementById('trafficFlow').innerText,
                coveredwithtarpaulin: document.getElementById('CoveredWithTarpaulin').innerText,
                cardirty: document.getElementById('CarDirty').innerText,
                normalcar: document.getElementById('normalCar').innerText,
                vehiclesoffslag: document.getElementById('VehiclesOffSlag').innerText,
                fire: document.getElementById('fire').innerText,
                content: document.getElementById('text-content').innerText,
                mark: document.getElementById('mark').innerText,
                image1: report.base641,
                image2: report.base642,
                image3: report.base643,
                table1: report.list1.rows,
                table2: report.list2.rows.map(i => {
                  return {deviceid: i.deviceid, pm10: i.pm10, pm10up: i.pm10Up, pm10ratio: i.pm10Ratio};
                }),
                table3: report.list3.rows.map(i => {
                  return {deviceid: i.deviceid, pm25: i.pm25, pm25up: i.pm25Up, pm25ratio: i.pm25Ratio};
                }),
                table4: report.list4.rows.map(i => {
                  return {deviceid: i.deviceid, createtime: i.createTime};
                }),
                table5: report.list5.rows.map(i => {
                  return {deviceid: i.deviceid, typenamech: i.typenamech, createtime: i.createTime};
                })
              });
              try {
                // 用模板变量的值替换所有模板变量
                doc.render();
              } catch (error) {
                // 抛出异常
                let e = {
                  message: error.message,
                  name: error.name,
                  stack: error.stack,
                  properties: error.properties
                };
                throw error;
              }
              // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
              let out = doc.getZip().generate({
                type: 'blob',
                mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
              });
              // 将目标文件对象保存为目标类型的文件，并命名
              saveAs(out, document.getElementById('report-title').innerText + '.docx');
            }
        );
      },
      backTop() {
        let num = document.getElementById('report').clientHeight;
        reportScorll.value.setScrollTop(num -= 20);
        let time = setInterval(() => {
          num -= 10;
          if (num < 10 || num === 10) {
            num = 0;
            clearInterval(time);
          }
          reportScorll.value.setScrollTop(num);
        }, 5);
      },
      handle() {
        report.getAlarm('TransportingSlagCar');
        report.getAlarm('UpperAirFire');
        report.getAiFire();
        report.getDust();
        report.getStationPm();
        report.getStationAqi();
        report.getAll();
        report.getDustAlarm();
      }
    });
    onMounted(() => {
      report.getAlarm('TransportingSlagCar');
      report.getAlarm('UpperAirFire');
      report.getAiFire();
      report.getDust();
      report.getStationPm();
      report.getStationAqi();
      report.getAll();
      report.getDustAlarm();
    });
    return {
      report,
      reportScorll
    };
  }
});
</script>

<style lang="less" scoped>

.report-page{
  position:relative;
  width:100vw;
  height:100vh;
  display:flex;
  flex-flow:column;
  background-size:100% 100%;

  .box{
    width:1369px;
    max-width: 100vw;
    height:100%;
    margin:0 auto;
    position:relative;
  }

  .report{
    width:1369px;
    max-width: 100vw;
    height:100%;
    padding:2.7px 0;
    margin:0 auto;
    box-shadow:0 0 1px 1px #1A3B79 inset;
    display:flex;
    flex-wrap:wrap;
    align-content:flex-start;
    justify-content:center;
    position:relative;

    .report-row{
      width:100%;
    }

    [class*='col-']{
      min-height:90px;
      box-shadow:0 0 1px 1px #1A3B79 inset;
      box-sizing:border-box;
      margin:5px;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      background:linear-gradient(to top, rgba(26, 59, 121, 0.2), rgba(26, 59, 121, 0.2));
    }

    .col-1{
      width:calc(4.16% - 10px);
    }

    .col-2{
      width:calc(8.33% - 10px);
    }

    .col-3{
      width:calc(12.48% - 10px);
    }

    .col-4{
      width:calc(16.64% - 10px);
    }

    .col-5{
      width:calc(20.8% - 10px);
    }

    .col-3{
      width:calc(24.96% - 10px);
    }

    .col-7{
      width:calc(29.12% - 10px);
    }

    .col-8{
      width:calc(33.28% - 10px);
    }

    .col-9{
      width:calc(37.44% - 10px);
    }

    .col-10{
      width:calc(41.6% - 10px);
    }

    .col-11{
      width:calc(45.76% - 10px);
    }

    .col-12{
      width:calc(49.92% - 10px);
    }

    .col-13{
      width:calc(54.08% - 10px);
    }

    .col-14{
      width:calc(58.24% - 10px);
    }

    .col-15{
      width:calc(62.40% - 10px);
    }

    .col-16{
      width:calc(66.56% - 10px);
    }

    .col-17{
      width:calc(70.72% - 10px);
    }

    .col-18{
      width:calc(74.88% - 10px);
    }

    .col-19{
      width:calc(79.04% - 10px);
    }

    .col-20{
      width:calc(83.2% - 10px);
    }

    .col-21{
      width:calc(87.36% - 10px);
    }

    .col-22{
      width:calc(91.52% - 10px);
    }

    .col-23{
      width:calc(95.68% - 10px);
    }

    .col-12{
      width:calc(99.84% - 10px);
    }

    .col-auto{
      flex:1;
    }
  }

  .report{
    .backCo{
      background:linear-gradient(to top, #1A3B79, #1A3B79);
    }

    .report-title{
      font-size:40px;
      color:#fff;
      font-weight:700;
    }

    .text-weather{
      font-size:30px;
      color:#ffffff;
      font-weight:600;
    }

    .text-title{
      font-size:20px;
      color:#3AA0F6;
      font-weight:800;
      padding:10px 0 5px;
      text-align:center;

      span{
        font-size:12px;
      }
    }

    .text-num{
      font-size:40px;
      color:#fff;
      font-weight:600;
    }

    .text-content{
      color:#ffffff;
      margin-top:5px;
    }
  }

  .look{
    position:absolute;
    top:40px;
    right:-150px;
  }

  .export{
    position:absolute;
    top:0;
    right:-150px;
  }

  .exportWord{
    position:absolute;
    top:80px;
    right:150px;
  }

  .backTop{
    position:absolute;
    bottom:40px;
    right:-100px;
  }

  .closePdf{
    display:none;
    position:fixed;
    top:50px;
    right:50px;
    z-index:10;
    font-size:30px;
    color:#ffffff;
    cursor:pointer;
  }
}

#pdfImageBox{
  position:absolute;
  top:0;
  left:0;
  width:100vw;
  height:100vh;
  padding:40px;
  box-sizing:border-box;
  background-color:rgba(0, 0, 0, .5);
  z-index:9;
  display:flex;
  justify-content:center;
  align-content:center;
  overflow:auto;

  img{
    position:absolute;
    display:inline-block;
    max-width:1369px;
  }
}
</style>
