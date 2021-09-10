import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home/index.vue'),
        children: [
            // propup
            {
                path: '/home/popup',
                name: 'popup',
                component: () => import('../views/Popup/index.vue'),
            }
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router