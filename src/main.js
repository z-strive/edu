import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './ulits/icon.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'amfe-flexible'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
const app = createApp(App)
const paina = createPinia()
paina.use(piniaPluginPersist)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(paina)
app.use(router)
app.mount('#app')