<template>
  <div className='temEcharts'>
    <!--    <el-empty v-if="isSeriesEmpty" description="暂无数据哦!" />-->
    <img v-if='isSeriesEmpty' alt='' className='empty' src='../assets/image/noData.svg'>
    <div v-if='!isSeriesEmpty' ref='ecDom' className='Echarts'></div>
    <span v-if='showUnit.show === 1' className='unit'>{{ unit }}</span>
  </div>
</template>

<script>
import {isEmpty} from 'lodash';
import echarts from '../utils/ehcarts';

export default {
  name: 'Echart',
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          title: {
            text: '特性示例：渐变色 阴影 点击缩放',
            subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
          },
          xAxis: {
            data: ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'],
            axisLabel: {
              inside: true,
              color: '#fff'
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            z: 10
          },
          yAxis: {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#999'
            }
          },
          dataZoom: [
            {
              type: 'inside'
            }
          ],
          series: [
            {
              type: 'line',
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
              data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
            }
          ]
        };
      }
    },
    geoJson: {
      type: Object,
      default: () => {
      }
    },
    showunit: {
      type: Number,
      default: () => 0
    },
    data: {
      type: Array,
      default: () => [new Date(new Date().getTime() + (-7 * (1000 * 60 * 60 * 24))), new Date()]
    }
  },
  setup(props, {emit}) {
    const ecDom = ref(null);
    let isSeriesEmpty = computed(() => {
      return isEmpty(props.options.series);
    });// 判断非空
    let ecIns = null;
    let last = new Date();
    const unit = ref('ug/m³');
    const showUnit = reactive({
      show: props.showunit,
      date: props.data
    });
    /**
     * 初始化
     */
    const initEcharts = () => {
      if (!ecDom.value || ecDom.value.offsetWidth === 0) return;
      ecIns = echarts.getInstanceByDom(ecDom.value);
      if (!ecIns) { // 如果不存在，就进行初始化
        ecIns = echarts.init(ecDom.value);
      } else {
        handleWindowResize();
        updateChartView();

      }

      // 使用刚指定的配置项和数据显示图表。
      if (props.geoJson) echarts.registerMap('CD', props.geoJson);
      ecIns.setOption(props.options, true);

      setTimeout(() => {
        let opts = {
          type: 'jpeg', // 导出的格式，可选 png, jpeg
          pixelRatio: 1,// 导出的图片分辨率比例，默认为 1。
          backgroundColor: '#000'
        };
        let imageBase64 = ecIns.getDataURL(opts);
        const imgIns = new Image(); // 创建图片容器
        imgIns.src = imageBase64; //imageBase64 为svg+xml的Base64 文件流
        imgIns.onload = () => {
          // 图片创建后再执行，转Base64过程
          const canvas = document.createElement('canvas');
          canvas.width = imgIns.width;  //设置好 宽高  不然图片 不完整
          canvas.height = imgIns.height;
          const context = canvas.getContext('2d');
          context.drawImage(imgIns, 0, 0);
          let ImgBase64 = canvas.toDataURL('image/png');
          //ImgBase64 为转换后的 png ImgBase64 文件流
          //获取图片
          emit('imgBase64', ImgBase64);
        };
      }, 2000);
      /**
       * 移入
       */
      ecIns.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: 0});
      // 当鼠标移入时，如果不是第一项，则把当前项置为选中，如果是第一项，则设置第一项为当前项
      ecIns.on('mouseover', function (e) {
        ecIns.dispatchAction({type: 'downplay', seriesIndex: 0, dataIndex: 0});
        ecIns.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: e.dataIndex});
        let now = new Date().getTime();
        if (now - last > 1 || now - last === 0) {
          last = new Date().getTime();
          emit('hoverEcharts', e);
        }
      });
      //当鼠标离开时，把当前项置为选中
      ecIns.on('mouseout', function (e) {
        ecIns.dispatchAction({type: 'downplay', seriesIndex: 0, dataIndex: e.dataIndex});
        ecIns.dispatchAction({type: 'highlight', seriesIndex: 0, dataIndex: 0});

        let now = new Date().getTime();
        if (now - last > 1 || now - last === 0) {
          last = new Date().getTime();
          emit('outEcharts', e);
        }
      });
      /**
       * 图例点击
       */
      ecIns.on('legendselectchanged', (obj) => {
        let selected = obj.selected;
        let legend = obj.name;
        if (selected != undefined) {
          if (legend == 'CO' || legend == 'co') {
            unit.value = 'mg/m³';
          } else {
            unit.value = 'ug/m³';
          }
        }
        let now = new Date().getTime();
        if (now - last > 1000 || now - last === 0) {
          last = new Date().getTime();
          emit('clicklegen', legend);
        }
      });
      /**
       * 图表点击
       */
      const zoomSize = 6;
      ecIns.on('click', (params) => {
        let now = new Date().getTime();
        if (now - last > 1000 || now - last === 0) {
          last = new Date().getTime();
          emit('clickEcharts', params);
          // ecIns.dispatchAction({
          //   type: 'dataZoom',
          //   startValue: props.options.xAxis.data[Math.max(params.dataIndex - zoomSize / 2, 0)],
          //   endValue:
          //       props.options.xAxis.data[Math.min(params.dataIndex + zoomSize / 2, props.options.series[0].data.length - 1)]
          // });
        }
      });
      /**
       * 图表移入
       */
      ecIns.on('mousemove', (params) => {

      });
      /**
       * 图表移出
       */
      ecIns.on('mouseout', (params) => {

      });
    };
    /**
     * 当窗口缩放时，echart动态调整自身大小
     */
    const handleWindowResize = () => {
      if (!ecIns) return;
      ecIns.resize();
    };
    /**
     * 更新
     */
    const updateChartView = () => {
      if (!ecIns) return;
      ecIns.setOption(props.options, true);

    };
    watch(props, () => {
      setTimeout(() => {
        initEcharts();
        showUnit.show = props.showunit;
      }, 10);
    });
    onMounted(() => {
      initEcharts();
      window.addEventListener('resize', handleWindowResize);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleWindowResize);
    });
    return {
      ecDom,
      ecIns,
      isSeriesEmpty,
      unit,
      showUnit,
      handleWindowResize,
      updateChartView
    };
  }
};
</script>

<style lang='less' scoped>
.temEcharts{
  width:100%;
  height:100%;
  position:relative;

  .Echarts{
    width:100%;
    height:100%;
  }

  .unit{
    position:absolute;
    top:20px;
    right:5px;
    width:50px;
    height:20px;
    line-height:20px;
    font-size:15px;
    background-color:#6d68ff;
    text-align:center;
  }
}

.empty{
  height:30%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  z-index:3;
}
</style>
