import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'app',
            component: () => import('../components/App.vue')
        },
        {
            path: '/all-user',
            name: 'allUser',
            component: () => import('../components/User.vue')
        }
    ]
})

export default router
