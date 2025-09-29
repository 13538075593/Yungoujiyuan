import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import '@/assets/style/main.scss'
import '@/assets/style/class.scss'

import i18n from './locales'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import Pagination from './components/Pagination.vue'

const app = createApp(App)

// 注册element-plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 全局注册自定义组件
app.component('Pagination', Pagination)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

