import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Features from './views/Features.vue'
import About from './views/About.vue'
import FAQ from './views/FAQ.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/features',
        name: 'Features',
        component: Features,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: FAQ,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Vanguard: Open-Source Backup Solution for Servers & Apps'
    next()
})

export default router

createApp(App).use(router).mount('#app')