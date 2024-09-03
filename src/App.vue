<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import Logo from './components/Logo.vue'
import LoadingIndicator from './components/LoadingIndicator.vue'
import CookieNotice from '@/components/CookieNotice.vue'

const isMenuOpen = ref(false)
const router = useRouter()
const route = useRouter()

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'About', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Mobile', path: '/mobile' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const isActive = (path) => route.path === path

const navigateAndScrollTop = (event, route) => {
  event.preventDefault()
  router.push(route).then(() => {
    window.scrollTo(0, 0)
  })
}

const navigateToGettingStarted = (event) => {
  event.preventDefault()
  router.push('/').then(() => {
    setTimeout(() => {
      const gettingStartedSection = document.getElementById('get-started')
      if (gettingStartedSection) {
        gettingStartedSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100) // Small delay to ensure the DOM has updated
  })
}

onMounted(() => {
  router.afterEach(() => {
    window.scrollTo(0, 0)
  })
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-black text-white">
    <LoadingIndicator />
    <!-- Header -->
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-95 backdrop-filter backdrop-blur-sm border-b border-gray-800 shadow-lg"
    >
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <a
            href="/"
            class="h-auto w-36 transform transition-all duration-300 hover:scale-105"
          >
            <Logo />
          </a>
          <div class="hidden md:flex space-x-6">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="text-sm font-medium uppercase tracking-wider hover:text-gray-400 transition-colors"
              :class="{ 'text-blue-400': isActive(item.path) }"
            >
              {{ item.name }}
            </router-link>
            <a
              href="https://docs.vanguardbackup.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium uppercase tracking-wider hover:text-gray-400 transition-colors"
            >
              Docs
            </a>
          </div>
          <a
            href="#getting-started"
            @click="navigateToGettingStarted"
            class="hidden md:inline-block px-6 py-2 bg-white text-gray-900 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-gray-200 transition-all shadow-md"
          >
            Get Started
          </a>
          <button
            @click="toggleMenu"
            class="md:hidden text-white focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <!-- Mobile menu -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-show="isMenuOpen"
          class="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 backdrop-filter backdrop-blur-sm"
        >
          <div class="px-2 pt-2 pb-3 space-y-1">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="block px-3 py-2 text-base font-medium hover:bg-gray-900 rounded-md"
              :class="{ 'bg-gray-900': isActive(item.path) }"
              @click="closeMenu"
            >
              {{ item.name }}
            </router-link>
            <a
              href="https://docs.vanguardbackup.com"
              target="_blank"
              rel="noopener noreferrer"
              class="block px-3 py-2 text-base font-medium hover:bg-gray-900 rounded-md"
            >
              Docs
            </a>
            <a
              href="#getting-started"
              @click="navigateToGettingStarted"
              class="block px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </transition>
    </header>

    <!-- Router View -->
    <main class="flex-grow relative z-10">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="relative z-10 bg-gray-900">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="md:col-span-2">
            <Logo class="h-auto w-48 mb-6" />
            <p
              class="text-gray-400 max-w-md text-sm leading-relaxed font-normal"
            >
              Vanguard is a community-driven open-source backup solution for
              servers and applications, providing robust and secure data
              protection for businesses of all sizes.
            </p>
            <div class="mt-6 flex space-x-6">
              <a
                href="https://github.com/vanguardbackup"
                target="_blank"
                class="text-gray-400 hover:text-white"
              >
                <span class="sr-only">GitHub</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 class="text-lg font-medium mb-6 text-white">Quick Links</h4>
            <ul class="space-y-4">
              <li>
                <a
                  href="/features"
                  @click="(e) => navigateAndScrollTop(e, '/features')"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >Features</a
                >
              </li>
              <li>
                <a
                  href="/about"
                  @click="(e) => navigateAndScrollTop(e, '/about')"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="/faq"
                  @click="(e) => navigateAndScrollTop(e, '/faq')"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >FAQ</a
                >
              </li>
              <li>
                <a
                  href="/mobile"
                  @click="(e) => navigateAndScrollTop(e, '/mobile')"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >Mobile App</a
                >
              </li>
              <li>
                <a
                  href="/contact"
                  @click="(e) => navigateAndScrollTop(e, '/contact')"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >Contact</a
                >
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  @click="(e) => navigateAndScrollTop(e, '/terms-of-service')"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >Terms of Service</a
                >
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  @click="(e) => navigateAndScrollTop(e, '/privacy-policy')"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >Privacy Policy</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-medium mb-6 text-white">Resources</h4>
            <ul class="space-y-4">
              <li>
                <a
                  href="https://github.com/vanguardbackup/vanguard"
                  target="_blank"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >Project Repo</a
                >
              </li>
              <li>
                <a
                  href="https://docs.vanguardbackup.com"
                  target="_blank"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >Documentation</a
                >
              </li>
              <li>
                <a
                  href="https://github.com/vanguardbackup/vanguard/discussions"
                  target="_blank"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >Discussions</a
                >
              </li>
              <li>
                <a
                  href="https://github.com/vanguardbackup/vanguard/issues/new/choose"
                  target="_blank"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >Create an Issue</a
                >
              </li>
              <li>
                <a
                  href="https://docs.vanguardbackup.com/installation"
                  target="_blank"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >Installation Guide</a
                >
              </li>
              <li>
                <a
                  href="https://psp.vanguardbackup.com"
                  target="_blank"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                  >Paid Support</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div
          class="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Vanguard.
          </p>
          <p class="text-gray-400 text-sm mt-4 md:mt-0 font-normal">
            Vanguard is an open-source project licensed under AGPL 3.0.
          </p>
        </div>
      </div>
    </footer>
    <!-- Cookie Notice -->
    <CookieNotice />
  </div>
</template>
