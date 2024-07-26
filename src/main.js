import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Features from './views/Features.vue'
import About from './views/About.vue'
import FAQ from './views/FAQ.vue'
import * as SimpleIcons from 'vue3-simple-icons'

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

const app = createApp(App)

// Register all Simple Icons components globally
for (const [name, component] of Object.entries(SimpleIcons)) {
    app.component(name, component)
}

app.use(router)
app.mount('#app')

export default router