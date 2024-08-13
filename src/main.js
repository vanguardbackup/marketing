import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'
import App from './App.vue'
import Home from './views/Home.vue'
import Features from './views/Features.vue'
import About from './views/About.vue'
import FAQ from './views/FAQ.vue'
import MobileApp from './views/MobileApp.vue'
import * as SimpleIcons from 'vue3-simple-icons'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Vanguard - Open Source Backup Solution',
            description: 'Vanguard is a powerful, community-driven open-source backup solution for servers and applications. Secure your data with ease and flexibility.'
        }
    },
    {
        path: '/features',
        name: 'Features',
        component: Features,
        meta: {
            title: 'Vanguard Features and Capabilities',
            description: 'Explore Vanguard\'s advanced features including automatic backups, multi-cloud support and encryption.'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'About Vanguard - Our Mission',
            description: 'Learn about Vanguard\'s mission to provide secure, efficient, and open-source backup solutions.'
        }
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: FAQ,
        meta: {
            title: 'Vanguard FAQ - Common Questions Answered',
            description: 'Find answers to frequently asked questions about Vanguard\'s backup solution, installation process, security measures, and community support.'
        }
    },
    {
        path: '/mobile',
        name: 'Mobile App',
        component: MobileApp,
        meta: {
            title: 'Vanguard Mobile',
            description: 'Vanguard has a mobile application, for checking your backup tasks on the go.'
        }
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    // Update the document title
    document.title = to.meta.title || 'Vanguard: Open-Source Backup Solution for Servers & Apps'

    // Update the meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.name = 'description'
        document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', to.meta.description || 'Vanguard: Secure, efficient, and open-source backup solution for your servers and applications.')

    next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')

export default router