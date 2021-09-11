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
        path: '/categray',
        name: 'Categray',
        component: () => import('../views/Categray/index.vue'),
    },
    // product detail
    {
        path: '/detail',
        name: 'Detail',
        component: () => import('../views/Detail/index.vue'),
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

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router