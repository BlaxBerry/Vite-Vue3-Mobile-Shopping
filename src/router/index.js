import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        //重定向
        path: '/',
        redirect: '/home'
    },
    {
        // 主页
        path: '/home',
        name: 'Home',
        meta: {
            TabBarActiveNumber: 0
        },
        component: Home,
        children: [
            //搜素弹出层，home子路由
            {
                path: '/home/searchPopup',
                name: 'SearchPopup',
                component: () =>
                    import ( /* webpackChunkName: "SearchPopup" */ '../views/SearchPopup.vue')
            }
        ]
    },
    {
        //tabbar Special专题选项
        path: '/special',
        name: 'Special',
        meta: {
            TabBarActiveNumber: 1
        },
        component: () =>
            import ( /* webpackChunkName: "Topic */ '../views/Special.vue')
    },
    {
        // tabbar 分类选项
        path: '/category',
        name: 'Category',
        meta: {
            TabBarActiveNumber: 2
        },
        component: () =>
            import ( /* webpackChunkName: "Category */ '../views/Category.vue')
    },
    {
        // tabbar 购物车选项
        path: '/cart',
        name: 'Cart',
        meta: {
            TabBarActiveNumber: 3
        },
        component: () =>
            import ( /* webpackChunkName: "Cart */ '../views/Cart.vue')
    },
    {
        // tabbar 我的选项
        path: '/user',
        name: 'User',
        meta: {
            TabBarActiveNumber: 4
        },
        component: () =>
            import ( /* webpackChunkName: "User */ '../views/User.vue')
    },
    // 商品详情页
    {
        path: '/productDetail',
        name: 'ProductDetail',
        component: () =>
            import ( /* webpackChunkName: "User */ '../views/ProductDetail.vue')
    }
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    // console.log("to", to);
    // console.log("from", from);

    let token = localStorage.getItem("token");
    // 购物车
    if (to.path == "/cart") {
        // 判断是否登陆
        // 判断是否有token值
        if (token) {
            next();
        } else {
            // 提示未登陆
            // Toast("还没登陆，请先登陆")
            Vue.prototype.$toast("还没登陆，请先登陆");
            //跳转到 User我的页面
            setTimeout(() => {
                next("/user")
            }, 1000);
        }
        // return
    }

    next()
})


export default router