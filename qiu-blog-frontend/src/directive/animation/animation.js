/**
 * v-animation animation处理
 */
import {useCommonStore} from "@/stores/common";
import utils from "@/utils/utils";

function isInViewPortOfOne (el) {
    // viewPortHeight 兼容所有浏览器写法
    const viewPortHeight = useCommonStore().height
    const offsetTop = el.offsetTop
    const scrollTop = useCommonStore().top
    const top = offsetTop - scrollTop
    // 这里有个+100是为了提前加载+ 100
    return top <= viewPortHeight + 200
}

export default {
    mounted(el, binding) {
        // 是否已经显示
        if(isInViewPortOfOne(el)){
            const {value} = binding;
            if(!utils.hasClass(el, `${value}`)){
                utils.addClass(el, `${value}`);
            }
        }
        // 事件存放
        useCommonStore().events.push({
            el:el,
            binding:binding,
            animation:function (el, binding) {
                const {value} = binding;
                // viewPortHeight 兼容所有浏览器写法
                const viewPortHeight = useCommonStore().height
                const offsetTop = el.offsetTop
                const scrollTop = useCommonStore().top
                const top = offsetTop - scrollTop
                // 这里有个+100是为了提前加载+ 100
                if(top <= viewPortHeight + 200){
                    if(!utils.hasClass(el, `${value}`)){
                        utils.addClass(el, `${value}`);
                    }
                }else{
                    if(utils.hasClass(el, `${value}`)){
                        utils.removeClass(el, `${value}`);
                    }
                }
            }
        })
    },
    updated(el, binding) {
    }
};
