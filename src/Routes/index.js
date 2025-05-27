import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '../Pages/Home.vue'
import About from '../Pages/About.vue'
import Services from '../Pages/Servicios.vue'
import Gallery from '../Pages/Gallery.vue'
import Contact from '../Pages/Contact.vue'
import NotFound from '../Pages/NotFound.vue'
import Reserve from '../Pages/Reserve.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/services',
        name: 'Services',
        component: Services,
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
    },
    {
        path: '/reserve',
        name: 'Reserve',
        component: Reserve,
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 