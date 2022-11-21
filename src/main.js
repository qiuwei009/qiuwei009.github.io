import '~/assets/iconFont/iconfont.css';
import '~/assets/style/currency.less';
import '~/assets/style/reset.less';
import '~/plugins/elementplus.less';
import '~/utils/tool';
import 'animate.css';
import 'element-plus/dist/index.css';
import $ from 'jquery';
import {createApp} from 'vue';
import App from './App.vue';
import _ from 'lodash'
// 全局组件引用
import globalComponents from './components/index.js';
import {pinia} from './pinia';
import globalRegister from './plugins/elementPlus';
// 引入icon图标
import elementIcon from './plugins/icon.js';
import router from './router';
// jq
window.$ = $;
window._ = _;

const app = createApp(App);
// 全局方法挂载
// app.config.globalProperties.useDict = useDict
elementIcon(app);
globalRegister(app);
globalComponents(app);
app.use(pinia).use(router).mount('#app');

