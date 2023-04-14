<template>
    <div class="calendar">
        <div class="week flex justify-around mb-5 mt-5">
            <div class="w-20 text-center " :class="{'border-b border-b-blue-500': state.active === 0}">日</div>
            <div class="w-20 text-center " :class="{'border-b border-b-blue-500': state.active === 1}">一</div>
            <div class="w-20 text-center " :class="{'border-b border-b-blue-500': state.active === 2}">二</div>
            <div class="w-20 text-center " :class="{'border-b border-b-blue-500': state.active === 3}">三</div>
            <div class="w-20 text-center " :class="{'border-b border-b-blue-500': state.active === 4}">四</div>
            <div class="w-20 text-center " :class="{'border-b border-b-blue-500': state.active === 5}">五</div>
            <div class="w-20 text-center " :class="{'border-b border-b-blue-500': state.active === 6}">六</div>
        </div>
        <div class="month flex flex-wrap justify-around">
            <div class="w-1/7 relative" v-for="(day, index) in state.dayArray" :key="index" @click="state.handleDay(day)">
              <div class="day w-20 h-20 rounded-full mb-10 m-auto" :style="{ background: utils.paramIsOverproof('aqi', day.aqi, 0.5).color }" :class="{yc: day.yc}">
                <p class="day-text text-center">{{ day.day }}</p>
              </div>
            </div>
            <div v-if="state.dayArray.length == 0">暂无数据</div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, reactive, watch} from "vue";
import dayjs from "dayjs";
import utils from "@/utils/utils";
const props = defineProps({
    year: {
        type: String,
        default: () => dayjs(new Date()).format("YYYY")
    },
    month: {
        type: String,
        default: () => dayjs(new Date()).format("MM")
    },
    day: {
        type: String,
        default: () => dayjs(new Date()).format("DD")
    }
});

const state = reactive({
    dayArray: [],
    active: 1,
    async getList() {
        // let res = await utils.get("history/dynamic/smpdata", {
        //     date: props.year + "-" + props.month + "-" + props.day + " 00:00:00",
        //     type: 1
        // });
        // if (res.status) {
        //     if (props.year + "-" + props.month === dayjs(new Date()).format("YYYY-MM")) {
        //         res.data.forecast.forEach((i) => {
        //             i.yc = true;
        //         });
        //         res.data.sds.splice(dayjs().format("DD") - 1, 5, ...res.data.forecast);
        //     }
        //     state.dayArray = state.getPlCalendar(props.year, props.month, props.day, res.data.sds);
        // }
      state.dayArray = state.getPlCalendar(props.year, props.month, props.day, new Array(31).fill(0));

    },
    getPlCalendar(year, month, day, data) {
        let daysArr = [];
        //当前月的第一天的日期
        let firstDay = dayjs(new Date(year, month - 1, 1)).format("YYYY-MM-DD");
        //当前月第一天是星期几
        let weekday = new Date(year, month - 1, 1).getDay();
        state.active = new Date(year, month - 1, day).getDay();
        //当前月总天数
        let totalDay = dayjs(new Date(year, month, 0)).format("DD");
        //当前月最后一天是星期几
        let lastWeekday = new Date(year, month, 0).getDay();
        //上月总天数
        let lastTotalDay = dayjs(new Date(year, month - 1, 0)).format("DD");
        //上月天数
        for (let i = 1; i <= weekday - 1; i++) {
            daysArr.push({
                type: "upperMonth",
                day: lastTotalDay - i + 1
            });
        }
        daysArr.reverse();
        //本月天数
        for (let j = 1; j <= data.length; j++) {
            let row = data[j - 1];
            daysArr.push({
                ...row,
                type: "currentMonth",
                day: j > totalDay ? j - totalDay : j
            });
        }
        //下月天数
        for (let i = 1; i <= 14 - lastWeekday - (data.length - totalDay); i++) {
            daysArr.push({
                type: "nextMonth",
                day: i + data.length - totalDay
            });
        }
        return daysArr;
    },
    handleDay(day) {
        console.log(day);
    }
});
watch(
    () => props.month,
    () => {
        if (dayjs(props.year + "-" + props.month) > dayjs(new Date())) {
            utils.error("时间超出范围！");
            return;
        }
        state.getList();
    }
);
onMounted(() => {
    state.getList();
});
</script>

<style scoped>
.w-1\/7{
  width: calc(100% / 7);
}
.yc:after{
  content: '预测';
  position: absolute;
  top: -10px;
  right: -20px;
  transform: scaleX(.5) scaleY(.5);
  padding: 1px 6px;
  border: 1px solid #09062E;
  border-radius: 999px;
  background-color: white;
  color: #333;
}
.day{
  box-shadow: 0 0 1px 1px rgba(204, 204, 204, 0.5);
}
</style>


