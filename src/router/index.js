import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    // home
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home/index.vue'),
        children: [
            // popup
            {
                path: '/home/search',
                name: 'Search',
                component: () => import('../views/Popup/index.vue'),
            },
        ]
    },
    // categray
    {
        path: '/category',
        name: 'Category',
        component: () => import('../views/Category/index.vue'),
        meta: {
            name: '商品分类'
        }
    },
    // topic
    {
        path: '/topic',
        name: 'Topic',
        component: () => import('../views/Topic/index.vue'),
        meta: {
            name: '精选专题'
        }
    },
    // cart
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart/index.vue'),
        meta: {
            name: '购物车'
        }
    },
    // user
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/User/index.vue'),
    },
    // user info
    {
        path: '/user/info',
        name: 'UserInfo',
        component: () => import('../views/UserGrids/GridUserInfo.vue'),
        meta: {
            name: '用户资料'
        }
    },
    // orders
    {
        path: '/orders',
        name: 'Orders',
        component: () => import('../views/UserGrids/GridOrders.vue'),
        meta: {
            name: '订单管理'
        }
    },
    // orders location
    {
        path: '/user/locations',
        name: 'Locations',
        component: () => import('../views/UserGrids/GridLocation.vue'),
        meta: {
            name: '收货地址'
        }
    },
    // coupons
    {
        path: '/coupons',
        name: 'Coupons',
        component: () => import('../views/UserGrids/GridCoupons.vue'),
        meta: {
            name: '优惠券'
        }
    },
    // service
    {
        path: '/service',
        name: 'Service',
        component: () => import('../views/UserGrids/GridService.vue'),
        meta: {
            name: '客服咨询'
        }
    },
    // product detail
    {
        path: '/detail',
        name: 'Detail',
        component: () => import('../views/Detail/index.vue'),
    },
    // login
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login/index.vue'),
    },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


// Navigation Guards
import gardNavagation from '../utils/gard/showNavgationGard'

router.beforeEach((to, from, next) => {
    // to: route being navigated to 
    // from: route being navigated away from

    // get token form localstorage
    let userLogin = localStorage.getItem('user')

    // cart
    if (to.path == '/cart') {
        if (userLogin) {
            // find token in localstorage
            next()
        } else {
            // without token in localstorage
            gardNavagation(router)
        }
        return
    }

    // user info
    if (to.path == '/user/info') {
        if (userLogin) {
            // find token in localstorage
            next()
        } else {
            // without token in localstorage
            gardNavagation(router)
        }
        return
    }
    next()
})



export default router
