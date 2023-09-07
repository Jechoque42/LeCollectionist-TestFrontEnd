import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// @ts-ignore
import App from './App.vue'
import router from './router'

// @ts-ignore
import Toast from "vue-toastification"
// @ts-ignore
import type { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
const options: PluginOptions = {
};

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast, options)

app.mount('#app')
