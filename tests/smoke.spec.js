import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '../src/App.vue'
import Home from '../src/views/Home.vue'
import Features from '../src/views/Features.vue'
import About from '../src/views/About.vue'
import FAQ from '../src/views/FAQ.vue'
import MobileApp from '../src/views/MobileApp.vue'
import NotFound from '../src/views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, name: 'Home' },
        { path: '/features', component: Features, name: 'Features' },
        { path: '/about', component: About, name: 'About' },
        { path: '/faq', component: FAQ, name: 'FAQ' },
        { path: '/mobile', component: MobileApp, name: 'Mobile App' },
        { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound' }
    ]
})

describe('Smoke Tests', () => {
    test('App component renders without crashing', async () => {
        const wrapper = mount(App, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.vm).toBeTruthy()
    })

    test('Home page renders without crashing', async () => {
        router.push('/')
        await router.isReady()
        const wrapper = mount(Home, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.vm).toBeTruthy()
    })

    test('Features page renders without crashing', async () => {
        router.push('/features')
        await router.isReady()
        const wrapper = mount(Features, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.vm).toBeTruthy()
    })

    test('About page renders without crashing', async () => {
        router.push('/about')
        await router.isReady()
        const wrapper = mount(About, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.vm).toBeTruthy()
    })

    test('FAQ page renders without crashing', async () => {
        router.push('/faq')
        await router.isReady()
        const wrapper = mount(FAQ, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.vm).toBeTruthy()
    })

    test('Mobile App page renders without crashing', async () => {
        router.push('/mobile')
        await router.isReady()
        const wrapper = mount(MobileApp, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.vm).toBeTruthy()
    })

    test('NotFound page renders without crashing', async () => {
        router.push('/non-existent-page')
        await router.isReady()
        const wrapper = mount(NotFound, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.vm).toBeTruthy()
    })

    test('Navigation between pages works correctly', async () => {
        const wrapper = mount(App, {
            global: {
                plugins: [router]
            }
        })

        // Start at home page
        await router.push('/')
        await router.isReady()
        expect(wrapper.findComponent(Home).exists()).toBe(true)

        // Navigate to Features
        await router.push('/features')
        await wrapper.vm.$nextTick()
        expect(wrapper.findComponent(Features).exists()).toBe(true)

        // Navigate to About
        await router.push('/about')
        await wrapper.vm.$nextTick()
        expect(wrapper.findComponent(About).exists()).toBe(true)

        // Navigate to FAQ
        await router.push('/faq')
        await wrapper.vm.$nextTick()
        expect(wrapper.findComponent(FAQ).exists()).toBe(true)

        // Navigate to Mobile App
        await router.push('/mobile')
        await wrapper.vm.$nextTick()
        expect(wrapper.findComponent(MobileApp).exists()).toBe(true)

        // Navigate to non-existent page
        await router.push('/non-existent-page')
        await wrapper.vm.$nextTick()
        expect(wrapper.findComponent(NotFound).exists()).toBe(true)
    })
})