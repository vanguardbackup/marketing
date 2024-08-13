import { config } from '@vue/test-utils'

// Global setup for Vue Test Utils
config.global.mocks = {
    // Add any global mocks here
}

// If you're using any plugins, you might need to add them here
// For example, if you're using vue-router:
// import { routerKey, createRouter, createMemoryHistory } from 'vue-router'
// config.global.plugins = [
//   createRouter({
//     history: createMemoryHistory(),
//     routes: [] // Add your routes here
//   })
// ]