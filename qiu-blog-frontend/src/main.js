import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import common from "@/components/common";
import arcoComponents from "@/plugins/arco";

import './utils/appback.js'
import './utils/setTheme.js'
import directive from "@/directive";

import './assets/css/main.less'
import "animate.css";

// use
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(common)
app.use(arcoComponents)
app.use(directive);
app.mount('#app')