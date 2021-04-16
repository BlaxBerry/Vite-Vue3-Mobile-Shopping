import Vue from 'vue';
// 引入 vantUI 模版和样式
import {
    Search,
    Swipe,
    SwipeItem,
    Icon,
    Tag,
    List,
    Cell,
    DropdownMenu,
    DropdownItem,
    Empty,
    Toast
} from 'vant';

// import 'vant/lib/search/style';

Vue
    .use(Search)
    .use(Swipe)
    .use(SwipeItem)
    .use(Icon)
    .use(Tag)
    .use(List)
    .use(Cell)
    .use(DropdownMenu)
    .use(DropdownItem)
    .use(Empty)
    .use(Toast);