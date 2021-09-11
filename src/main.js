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
import {
    Button,
    Search,
    Swipe,
    SwipeItem,
    Grid,
    GridItem,
    Col,
    Row,
    Image as VanImage,
    Icon,
    Tag,
    DropdownMenu,
    DropdownItem,
    Empty
} from 'vant';
app.use(Button)
    .use(Search)
    .use(Swipe)
    .use(SwipeItem)
    .use(Grid)
    .use(GridItem)
    .use(Col)
    .use(Row)
    .use(VanImage)
    .use(Icon)
    .use(Tag)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Empty)


app.mount('#app')
