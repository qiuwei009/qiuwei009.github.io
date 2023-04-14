<template>
    <div class="w-full h-full">
        <div class="w-full h-full flex flex-col justify-center items-center" v-if="isSeriesEmpty">
            <img class="h-1/2" src="../../assets/img/base/null.svg" alt="" />
            暂无数据哦
        </div>
        <div v-if="!isSeriesEmpty" :id="props.name" class="w-full h-full"></div>
    </div>
</template>

<script setup>
import {computed, nextTick, onBeforeUnmount, onMounted, watch} from "vue";
import echarts from "@/utils/ehcarts";
import utils from "@/utils/utils";

const props = defineProps({
    option: {
        type: Object,
        default: () => {
            return {
                name: "name",
                // backgroundColor: '#fff',
                grid: {
                    left: "40",
                    right: "40",
                    top: "20",
                    bottom: "100"
                },
                legend: {
                    bottom: 0,
                    icon: "circle",
                    textStyle: {
                        color: "#4E5969"
                    }
                },
                xAxis: {
                    type: "category",
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8],
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: "#A9AEB8"
                        }
                    },
                    axisTick: {
                        show: true,
                        alignWithLabel: true,
                        lineStyle: {
                            color: "#86909C"
                        }
                    },
                    axisLabel: {
                        color: "#86909C"
                    }
                },
                yAxis: {
                    type: "value",
                    axisLabel: {
                        color: "#86909C",
                        formatter: "{value}%"
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#E5E6EB"
                        }
                    }
                },
                tooltip: {
                    show: true,
                    trigger: "axis",
                    className: "echarts-tooltip-diy"
                },
                series: [
                    {
                        name: "纯文本",
                        data: [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8],
                        type: "line",
                        smooth: true,
                        showSymbol: false,
                        color: "#246EFF",
                        symbol: "circle",
                        symbolSize: 10,
                        emphasis: {
                            focus: "series",
                            itemStyle: {
                                borderWidth: 2,
                                borderColor: "#E0E3FF"
                            }
                        }
                    },
                    {
                        name: "图文类",
                        data: [1, 1, 3, 2, 5, 6, 7, 8, 1, 1, 3, 2, 5, 6, 7, 8, 1, 1, 3, 2, 5, 6, 7, 8],
                        type: "line",
                        smooth: true,
                        showSymbol: false,
                        color: "#00B2FF",
                        symbol: "circle",
                        symbolSize: 10,
                        emphasis: {
                            focus: "series",
                            itemStyle: {
                                borderWidth: 2,
                                borderColor: "#E2F2FF"
                            }
                        }
                    },
                    {
                        name: "视频类",
                        data: [1, 1, 3, 4, 5, 2, 7, 1, 1, 1, 3, 4, 5, 2, 7, 1, 1, 1, 3, 4, 5, 2, 7, 1],
                        type: "line",
                        smooth: true,
                        showSymbol: false,
                        color: "#81E2FF",
                        symbol: "circle",
                        symbolSize: 10,
                        emphasis: {
                            focus: "series",
                            itemStyle: {
                                borderWidth: 2,
                                borderColor: "#D9F6FF"
                            }
                        }
                    }
                ],
                dataZoom: [
                    {
                        bottom: 40,
                        type: "slider",
                        left: 40,
                        right: 40,
                        height: 15,
                        borderColor: "transparent",
                        handleIcon: "image://http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/1ee5a8c6142b2bcf47d2a9f084096447.svg~tplv-49unhts6dw-image.image",
                        handleSize: "20",
                        handleStyle: {
                            shadowColor: "rgba(0, 0, 0, 0.2)",
                            shadowBlur: 4
                        },
                        brushSelect: false
                        // backgroundColor: '#F2F3F5',
                    },
                    {
                        type: "inside",
                        start: 0,
                        end: 100,
                        zoomOnMouseWheel: false
                    }
                ]
            };
        }
    },
    name: {
        type: String,
        default: () => "ech"
    }
});

let ecIns = null;
let isSeriesEmpty = computed(() => utils.checkType(props.option, "emptyObject")); // 判断非空
// 初始化
const initEcharts = () => {
    nextTick(() => {
        const ecDom = document.querySelector(`#${props.name}`);
        if (!ecDom || ecDom.offsetWidth === 0) return;
        ecIns = echarts.getInstanceByDom(ecDom);
        if (!ecIns) {
            // 如果不存在，就进行初始化
            ecIns = echarts.init(ecDom);
            handleWindowResize();
        } else {
            handleWindowResize();
            updateChartView();
        }
        // 使用刚指定的配置项和数据显示图表。
        // if (props.geoJson) echarts.registerMap('CD', props.geoJson);
        ecIns.setOption(props.option, true);
    });
};
// 当窗口缩放时，动态调整自身大小
const handleWindowResize = () => {
    if (!ecIns) return;
    ecIns.resize();
    // utils.debounce(ecIns.resize, 10);
};
// 更新
const updateChartView = () => {
    if (!ecIns) return;
    ecIns.setOption(props.option, true);
};
// 更新
watch(
    () => props.option,
    () => {
        initEcharts();
    }
);
onMounted(() => {
    initEcharts();
    window.addEventListener("resize", handleWindowResize);
});
onBeforeUnmount(() => {
    window.removeEventListener("resize", handleWindowResize);
});
</script>

