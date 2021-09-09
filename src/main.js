import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// router
import router from './router/index'
app.use(router)

// Desktop Until
import '@vant/touch-emulator';

// Rem Until
import 'amfe-flexible'

// style
import 'rest-css'
import './styles/index.less'

// Vant
import { Button, Search } from 'vant';
app.use(Button).use(Search)


app.mount('#app')
