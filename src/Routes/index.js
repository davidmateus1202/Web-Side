import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../Pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router