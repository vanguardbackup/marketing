module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.(js|jsx|mjs)$': 'babel-jest'
    },
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'mjs'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testMatch: [
        '<rootDir>/tests/**/*.spec.js'
    ],
    transformIgnorePatterns: ['/node_modules/(?!vue-router)'],
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons'],
    },
    globals: {
        'vue-jest': {
            experimentalCSSCompile: true
        }
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}