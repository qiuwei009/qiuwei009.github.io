<template>
    <div class="pagination flex justify-end items-center">
        <div class="page_num flex items-center">
            <img src="../../assets/img/base/left.png" alt="" :class="{disabled: pageNum === 1}" class="cursor mr-5" @click="getPageNum(pageNum - 1)" >
            <span v-if="totalNum.data[0] > 1" class="num" @click="getPageNum(1)">1</span>
            <span v-if="totalNum.data[0] > 2" class="num">...</span>
            <span v-for="item in totalNum.data" :key="item" :class="{active: choose === item ? 'active' : ''}" class="num" @click="getPageNum(item)">{{ item }}</span>
            <span v-if="totalNum.data[4] < totalPage" class="num">...</span>
            <span v-if="totalNum.data[4] < totalPage" class="num" @click="getPageNum(totalPage)">{{ totalPage }}</span>
          <img src="../../assets/img/base/right.png" alt="" :class="{disabled: pageNum === totalPage}" class="cursor ml-5" @click="getPageNum(pageNum + 1)">&nbsp;&nbsp;
        </div>
        <div class="page_count white-space">共&nbsp;&nbsp;{{ total }}&nbsp;&nbsp;条&nbsp;&nbsp;</div>
        <div class="page_select">
            <a-select v-model="pageSize" class="w-100" size="mini" @change="getPageSize">
                <a-option v-for="item of changePageSize.data" :label="item.label" :value="item.value" />
            </a-select>
        </div>
        <div class="page_jump flex items-center">&nbsp;&nbsp;到&nbsp;&nbsp;<a-input v-model="jump" class="w-50" size="mini" />&nbsp;&nbsp;页&nbsp;&nbsp;<a-button size="mini" type="primary" @click="jumpPageSize">确认</a-button></div>
    </div>
</template>

<script setup>
import {reactive, ref, watchEffect} from "vue";
import utils from "@/utils/utils";

const props = defineProps({
    total: {
        type: Number,
        default: 0
    }
});
const emit = defineEmits(["handleChange"]);
// 激活
const choose = ref(1);
const items = ref(20);
// 每页条数
const pageSize = ref(20);
//当前第几页
const pageNum = ref(1);
//显示按钮个数
const btnCount = 5;
//总页数
const totalPage = ref();
//跳转绑定值
const jump = ref();
//显示的按钮数组
const totalNum = reactive({
    data: []
});
const changePageSize = reactive({
    data: [
        {
            label: "10/页",
            value: 10
        },
        {
            label: "20/页",
            value: 20
        },
        {
            label: "30/页",
            value: 30
        },
        {
            label: "50/页",
            value: 50
        },
        {
            label: "100/页",
            value: 100
        }
    ]
});
watchEffect(() => {
    totalNum.data = [];
    // 计算总页数
    totalPage.value = Math.ceil(props.total / pageSize.value);
    // 计算起始页码 和 结束页码
    let start = pageNum.value - Math.floor(btnCount / 2);
    let end = start + btnCount - 1;
    //如果起始页码小于1，需要重新计算
    if (start < 1) {
        start = 1;
        end = start + btnCount - 1 > totalPage.value ? totalPage.value : start + btnCount - 1;
    }
    // 如果结束页码大于总页数，需要重新计算
    if (end > totalPage.value) {
        end = totalPage.value;
        start = end - btnCount + 1 < 1 ? 1 : end - btnCount + 1;
    }
    // 处理完毕 start 和 end 得到按钮数组
    for (let i = start; i <= end; i++) {
        totalNum.data.push(i);
    }
});
const getPageNum = (item) => {
    if (item < 1 || item > totalPage.value) return;
    choose.value = item;
    pageNum.value = item;
    let obj = {
        pageSize: pageSize.value,
        pageNum: pageNum.value
    };
    emit("handleChange", obj);
};
const getPageSize = () => {
    choose.value = 1;
    let obj = {
        pageSize: pageSize.value,
        pageNum: 1
    };
    emit("handleChange", obj);
};
const jumpPageSize = () => {
    if (Number(jump.value) > 0 && jump.value <= totalPage.value) {
        pageNum.value = Number(jump.value);
        choose.value = Number(jump.value);
        let obj = {
            pageSize: pageSize.value,
            pageNum: jump.value
        };
        emit("handleChange", obj);
    } else {
        utils.error("请确认跳转页是否存在!");
    }
};
</script>

<style lang="less" scoped>
.page_num {
    .num {
        cursor: pointer;
        padding: 5px 7px;
        line-height: 16px;
      font-size: 16px;
    }

    .active {
        background-color: var(--color-active);
        color: #fff;
    }

    .disabled {
        cursor: not-allowed !important;
        opacity: 0.4;
    }
}
</style>
