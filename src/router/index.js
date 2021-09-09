import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('../views/Home/index.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home/index.vue')
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router