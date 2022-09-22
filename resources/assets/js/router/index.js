import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'about',
            component: () => import('../components/About.vue')
        },
        // {
        //     path: '/app',
        //     name: 'app',
        //     component: () => import('../components/App.vue')
        // },
        {
            path: '/all-user',
            name: 'allUser',
            component: () => import('../components/User.vue')
        },
        {
            path: '/all-employee',
            name: 'allEmployee',
            component: () => import('../components/Employee.vue')
        },
        {
            path: '/all-student',
            name: 'allStudent',
            component: () => import('../components/Student.vue')
        }
    ]
})

export default router
