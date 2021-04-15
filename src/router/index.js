import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        //重定向
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        name: 'Home',
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

export default router