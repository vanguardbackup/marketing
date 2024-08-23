import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'
import App from './App.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue'),
    meta: {
      title: 'Vanguard - Open Source Backup Solution',
      description:
        'Vanguard is a powerful, community-driven open-source backup solution for servers and applications. Secure your data with ease and flexibility.',
    },
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('./views/Features.vue'),
    meta: {
      title: 'Vanguard Features and Capabilities',
      description:
        "Explore Vanguard's advanced features including automatic backups, multi-cloud support and encryption.",
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue'),
    meta: {
      title: 'About Vanguard - Our Mission',
      description:
        "Learn about Vanguard's mission to provide secure, efficient, and open-source backup solutions.",
    },
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('./views/FAQ.vue'),
    meta: {
      title: 'Vanguard FAQ - Common Questions Answered',
      description:
        "Find answers to frequently asked questions about Vanguard's backup solution, installation process, security measures, and community support.",
    },
  },
  {
    path: '/mobile',
    name: 'Mobile App',
    component: () => import('./views/MobileApp.vue'),
    meta: {
      title: 'Vanguard Mobile',
      description:
        'Vanguard has a mobile application, for checking your backup tasks on the go.',
    },
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: () => import('./views/PrivacyPolicy.vue'),
    meta: {
      title: 'Privacy Policy',
      description:
        'Learn about how Vanguard collects, uses, and protects your personal information when you use our backup services.',
    },
  },
  {
    path: '/terms-of-service',
    name: 'Terms of Service',
    component: () => import('./views/TermsOfService.vue'),
    meta: {
      title: 'Terms of Service',
      description:
        'The Terms of Service for the Vanguard project, outlining the rules and conditions for using our backup services.',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('./views/Contact.vue'),
    meta: {
      title: 'Contact',
      description:
        'The methods to get in touch with the maintainers of the project.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('./views/NotFound.vue'),
    meta: {
      title: '404 Not Found - Vanguard',
      description: 'The page you are looking for does not exist.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  // Update the document title
  document.title =
    to.meta.title || 'Vanguard: Open-Source Backup Solution for Servers & Apps'

  // Update the meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.name = 'description'
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute(
    'content',
    to.meta.description ||
      'Vanguard: Secure, efficient, and open-source backup solution for your servers and applications.'
  )

  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('Service Worker registration failed: ', registrationError)
      })
  })
}

export default router
