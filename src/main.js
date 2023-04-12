import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

function test() {
console.log("测试 prettier");  // 将缩进去掉, 同时使用双引号"
}
