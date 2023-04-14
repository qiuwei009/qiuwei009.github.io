import {reactive, toRefs} from "vue";
import {defineStore} from "pinia";

export const useDictStore = defineStore("dict", () => {
    const state = reactive({
        dict: {},
        getDict(_key) {
            if (_key === null && _key === "") {
                return null;
            }
            try {
                for (const dictName in state.dict) {
                    if (dictName === _key) return state.dict[dictName];
                }
            } catch (e) {
                return null;
            }
        }, // 获取字典
        setDict(_key, value) {
            if (_key !== null && _key !== "") {
                state.dict[_key] = value;
            }
        }, // 设置字典
        removeDict(_key) {
            state.dict[_key] = null;
        }, // 删除字典
        cleanDict() {
            state.dict = {};
        } // 清空字典
    });
    return {...toRefs(state)};
});
