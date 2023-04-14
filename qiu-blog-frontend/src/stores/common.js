import {computed, reactive, toRefs} from "vue";
import {defineStore} from "pinia";
import utils from "@/utils/utils";
const scheme = window.matchMedia("(prefers-color-scheme: dark)");
export const useCommonStore = defineStore("common", () => {
    const store = reactive({
        message: "",
        loading: false,
        setLoading(flag, msg = "加载中") {
            store.loading = flag;
            store.message = msg;
        },
        theme: utils.localCache.getJSON("theme") === undefined ? scheme.matches : utils.localCache.getJSON("theme"),
        setTheme() {
            store.theme = !store.theme;
            if (!store.theme) {
                // 恢复亮色主题
                document.body.setAttribute("class", "light-scheme");
                document.body.removeAttribute("arco-theme");
            } else {
                // 设置为暗黑主题
                document.body.setAttribute("class", "dark-scheme");
                document.body.setAttribute("arco-theme", "dark");
            }
            utils.localCache.setJSON("theme", store.theme);
        },
        collapse: utils.localCache.getJSON("collapse") || true,
        setCollapse() {
            store.collapse = !store.collapse;
            utils.localCache.setJSON("collapse", store.collapse);
        },
        path: {
            n: utils.sessionCache.get("path") || "/monitor",
            m: utils.sessionCache.get("path") || "/monitor",
            o: utils.sessionCache.get("path") || "/monitor"
        },
        isScroll: false,
        top:0,
        bottom:301,
        height :computed(()=>window.innerHeight),
        events: [],
        openScrollEvent(){
            let container = document.getElementById('container')
            container.onscroll = (e)=>{
                // utils.debounce(()=>{
                    store.top = e.target.scrollTop
                    store.bottom = e.target.firstElementChild.offsetHeight  - e.target.scrollTop - e.target.offsetHeight
                    store.isScroll = e.target.firstElementChild.offsetHeight > e.target.clientHeight
                    if(store.events.length > 0)new Set([...store.events]).forEach(i =>{
                        i?.animation(i?.el,i?.binding)
                    })
                // },10)
            }
        },
        setScroll(num){
            let container = document.getElementById('container')
            if(container){
                store.top = num
                container.scrollTo({top: num, behavior: 'smooth'})
            }
        }
    });

    return {...toRefs(store)};
});
