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
    Toast,
    Tabbar,
    TabbarItem,
    Col,
    Row,
    Grid,
    GridItem,
    Overlay,
    Form,
    Field,
    Button,
    Divider
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
    .use(Toast)
    .use(Tabbar)
    .use(TabbarItem)
    .use(Col)
    .use(Row)
    .use(Grid)
    .use(GridItem)
    .use(Overlay)
    .use(Form)
    .use(Field)
    .use(Button)
    .use(Divider);