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
            // propup search history keywords
            {
                path: '/home/search-history',
                name: 'SearchHistory',
                component: () => import('../views/Popup/History/index.vue'),
            },
             // propup search result list
            {
                path: '/home/search-result',
                name: 'SearchResultList',
                component: () => import('../views/Popup/Result/index.vue'),
            }
        ]
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router