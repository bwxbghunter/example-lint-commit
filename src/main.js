import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

function test(a, b) {
console.log('测试 prettier', a, b);
}
test(1, 2)