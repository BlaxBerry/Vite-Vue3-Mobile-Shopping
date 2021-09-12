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
    },
    // topic
    {
        path: '/topic',
        name: 'Topic',
        component: () => import('../views/Topic/index.vue'),
    },
    // cart
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart/index.vue'),
    },
    // user
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/User/index.vue'),
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



import { Dialog } from 'vant'
// Navigation Guards
router.beforeEach((to, from, next) => {
    // to: route being navigated to 
    // from: route being navigated away from

    // get token form localstorage
    let token = localStorage.getItem('token')
    // decide the message Dialog show
    if (to.path == '/cart') {
        if (token) {
            // find token in localstorage
            //
            next()
        } else {
            // without token in localstorage
            Dialog.confirm({
                title: 'Please Login',
                message: '请先登后才能访问购物车',
                theme: 'round-button',
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel'
            })
                // click confirm
                .then(() => {
                    // go to login route
                    router.push('/user')
                })
                // click cancel
                .catch(() => {
                    return
                });
        }
        return
    }
    next()
})



export default router
