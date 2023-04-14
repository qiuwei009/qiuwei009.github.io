<template>
  <div class="w-full h-full">
    <div ref="polluteMapCity" id="polluteMapCity" class="w-full h-full"></div>
<!--    <div class="absolute top-0 left-0 index-10 flex flex-nowrap title-icon">-->
<!--      <div v-for="i in mapState.style" class="flex flex-col justify-center items-center mr-1">-->
<!--        <img v-if="i.disable" class="w-3 m-auto" :src="i.url" alt="" />-->
<!--        <p v-if="i.disable" class="text-center text-xs">{{ i.name || "&#45;&#45;" }}</p>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import utils from "@/utils/utils";
import Map from "@/utils/map";
import pollutionPoints from "@/lib/pollutionPoints.json";

const props = defineProps({
  type:{
    type:Array,
    default:()=> [0,1,2]
  },
  notext:{
      type:Boolean,
      default:()=>false
  }
})
const polluteMapCity = ref(null)
const mapState = reactive({
  params:{
    name:'成都'
  },
  center: null,
  zoom: 14,
  noText: props.notext,
  style: [
    {
      url: new URL("../../assets/img/mapIcon/nation.png", import.meta.url),
      anchor: new AMap.Pixel(20, 20),
      size: new AMap.Size(40, 40),
      zIndex: 99,
      name:'国控点',
      disable:props.notext

    },
    {
      url: new URL("../../assets/img/mapIcon/station.png", import.meta.url),
      anchor: new AMap.Pixel(13, 16.5),
      size: new AMap.Size(26, 33),
      zIndex: 98,
      name:'微站点',
      disable:props.notext
    },
    {
      url: new URL("../../assets/img/mapIcon/cityPollution.png", import.meta.url),
      anchor: new AMap.Pixel(13, 16.5),
      size: new AMap.Size(26, 33),
      zIndex: 98,
      name:'城市污染源',
      disable:props.notext
    },
    {
      url: new URL("../../assets/img/mapIcon/gyPollution.png", import.meta.url),
      anchor: new AMap.Pixel(13, 16.5),
      size: new AMap.Size(26, 33),
      zIndex: 97,
      name:'工业污染源',
      disable:props.notext
    },
    {
      url: new URL("../../assets/img/mapIcon/lifePollution.png", import.meta.url),
      anchor: new AMap.Pixel(13, 16.5),
      size: new AMap.Size(26, 33),
      zIndex: 96,
      name:'生活污染源',
      disable:props.notext
    },
    {
      url: new URL("../../assets/img/mapIcon/otherPollution.png", import.meta.url),
      anchor: new AMap.Pixel(13, 16.5),
      size: new AMap.Size(26, 33),
      zIndex: 95,
      name:'其它污染源',
      disable:props.notext
    }
  ],
  content: (data) => {
    return `<div class="infoBox">
                            <p>${data['pointName'] || data['stationAlias'] || data['name']}</p>
                            <p >${data.style === 2?'' : data.value?"AQI : "+data.value:'AQI : --'}</p>
            </div>`;
  },
  async getList() {
    return new Promise((resolve, reject) => {
      utils.get(
              "monitor/filtMarker",
              {
                gridLevel: 1,
                stationType: "1,2,4",
                param: "aqi"
              },
              false
          )
          .then((res) => {
            let array = [];
            // 国控点
            if(props.type.includes('0')){
              res.data.nationMarker.forEach((i) => {
                i.style = 0;
                array.push(i)
              })
            }
            // 微站
            if(props.type.includes('1')){
              res.data.stationMarker.forEach((i) => {
                i.style = 1;
                array.push(i)
              });
            }

            // 污染源
            if(props.type.includes('2')){
              pollutionPoints.forEach((i) => {
                if (i.addr.includes(mapState.params.name) || mapState.params.name === '成都') {
                    array.push(i)
                }
              });
            }

            resolve({rows: array});
          })
          .catch((error) => {
            reject(error);
          });
    });
  },
  handlePoint(val) {
    console.log(val)
    // utils.toRouter('/nation')
  },
  jump(val) {
    utils.toRouter("map", false, mapState.params, true);
  }
});
let mapIns = null;
onMounted(() => {
  mapState.params = utils.getRouter('query')
  if(mapState.params.noText) mapState.noText = mapState.params.noText
  if(utils.checkType(mapState.params,'emptyObject')){
    mapState.params = {
      name:'成都'
    }
  }
  mapIns = new Map(mapState, polluteMapCity.value, mapState.getList);
});
</script>

<style lang="less" scoped>
.text {
  margin: 5px 0 10px;
  font-weight: bold;
}

.card-min{
  padding-left: 7px;
  background-color: #303258;
}
</style>
