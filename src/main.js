import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入 vantUI from @/vantUI/index.js
import "@/vantUI";
// 引入 reset-css 清除css样式
import 'reset-css'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')