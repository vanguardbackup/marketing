import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '../src/App.vue'
import Home from '../src/views/Home.vue'
import NotFound from '../src/views/NotFound.vue'
import TermsOfService from '@/views/TermsOfService.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, name: 'Home' },
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

/*    test('Navigation between pages works correctly', async () => {
        const wrapper = mount(App, {
            global: {
                plugins: [router]
            }
        })

        // Start at home page
        await router.push('/')
        await router.isReady()
        expect(wrapper.findComponent(Home).exists()).toBe(true)

        // Navigate to Terms of Service
        await router.push('/terms-of-service')
        await wrapper.vm.$nextTick()
        expect(wrapper.findComponent(TermsOfService).exists()).toBe(true)


        // Navigate to non-existent page
        await router.push('/non-existent-page')
        await wrapper.vm.$nextTick()
        expect(wrapper.findComponent(NotFound).exists()).toBe(true)
    })*/
})