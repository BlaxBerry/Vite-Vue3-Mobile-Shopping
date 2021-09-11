import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
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

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router