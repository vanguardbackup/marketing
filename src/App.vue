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
  { name: 'Features', path: '/#features' },
  { name: 'FAQ', path: '/#faq' },
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

const navigateToSection = (event, sectionId) => {
  event.preventDefault()
  router.push('/').then(() => {
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100) // Small delay to ensure the DOM has updated
  })
}
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white text-black">
    <LoadingIndicator />

    <!-- Header -->
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-filter backdrop-blur-sm border-b border-gray-100"
    >
      <nav class="max-w-7xl mx-auto px-6">
        <div class="flex justify-between items-center h-16">
          <a
            href="/"
            class="h-auto w-32 transition-all duration-300 hover:opacity-80"
          >
            <Logo />
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="text-sm font-medium hover:text-gray-600 transition-colors"
              :class="{
                'text-black font-bold border-b-2 border-black pb-1': isActive(
                  item.path
                ),
              }"
            >
              {{ item.name }}
            </router-link>
            <a
              href="https://docs.vanguardbackup.com"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Docs
            </a>
            <a
              href="#get-started"
              @click="(e) => navigateToSection(e, 'get-started')"
              class="ml-4 px-5 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-all"
            >
              Get Started
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="md:hidden text-black focus:outline-none"
            aria-label="Toggle menu"
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
                stroke-width="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile menu -->
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-show="isMenuOpen"
          class="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100"
        >
          <div class="px-6 py-4 space-y-3">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="block py-2 text-sm font-medium hover:text-gray-600"
              :class="{ 'text-black font-bold': isActive(item.path) }"
              @click="closeMenu"
            >
              {{ item.name }}
            </router-link>
            <a
              href="https://docs.vanguardbackup.com"
              target="_blank"
              rel="noopener noreferrer"
              class="block py-2 text-sm font-medium hover:text-gray-600"
            >
              Docs
            </a>
            <a
              href="#get-started"
              @click="(e) => navigateToSection(e, 'get-started')"
              class="block py-2 text-sm font-medium text-black hover:text-gray-600"
            >
              Get Started →
            </a>
          </div>
        </div>
      </transition>
    </header>

    <!-- Router View -->
    <main class="flex-grow relative z-10 pt-16">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="relative z-10 bg-white border-t border-gray-100">
      <div class="max-w-7xl mx-auto py-12 px-6">
        <!-- Top Footer Section -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <!-- Logo & Description -->
          <div class="md:col-span-5">
            <Logo class="h-auto w-36 mb-4" />
            <p class="text-gray-500 text-sm leading-relaxed max-w-md">
              A community-driven open-source backup solution for servers and
              applications, providing robust and secure data protection.
            </p>
            <!-- Social Links -->
            <div class="mt-6 flex space-x-4">
              <a
                href="https://github.com/vanguardbackup"
                target="_blank"
                aria-label="GitHub"
                class="inline-block text-gray-500 hover:text-black transition-colors"
              >
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="md:col-span-3 md:col-start-7">
            <h4
              class="text-sm font-bold uppercase tracking-wider text-gray-800 mb-4"
            >
              Quick Links
            </h4>
            <ul class="space-y-2">
              <li>
                <a
                  href="#features"
                  @click="(e) => navigateToSection(e, 'features')"
                  class="text-gray-500 hover:text-black transition-colors text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#get-started"
                  @click="(e) => navigateToSection(e, 'get-started')"
                  class="text-gray-500 hover:text-black transition-colors text-sm"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  @click="(e) => navigateAndScrollTop(e, '/terms-of-service')"
                  class="text-gray-500 hover:text-black transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  @click="(e) => navigateAndScrollTop(e, '/privacy-policy')"
                  class="text-gray-500 hover:text-black transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <!-- Resources -->
          <div class="md:col-span-4">
            <h4
              class="text-sm font-bold uppercase tracking-wider text-gray-800 mb-4"
            >
              Resources
            </h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href="https://github.com/vanguardbackup/vanguard"
                target="_blank"
                class="text-gray-500 hover:text-black transition-colors text-sm"
              >
                Project Repo
              </a>
              <a
                href="https://docs.vanguardbackup.com"
                target="_blank"
                class="text-gray-500 hover:text-black transition-colors text-sm"
              >
                Documentation
              </a>
              <a
                href="https://github.com/vanguardbackup/vanguard/discussions"
                target="_blank"
                class="text-gray-500 hover:text-black transition-colors text-sm"
              >
                Discussions
              </a>
              <a
                href="https://github.com/vanguardbackup/vanguard/issues/new/choose"
                target="_blank"
                class="text-gray-500 hover:text-black transition-colors text-sm"
              >
                Create an Issue
              </a>
              <a
                href="https://docs.vanguardbackup.com/installation"
                target="_blank"
                class="text-gray-500 hover:text-black transition-colors text-sm"
              >
                Installation Guide
              </a>
              <a
                href="https://psp.vanguardbackup.com"
                target="_blank"
                class="text-gray-500 hover:text-black transition-colors text-sm"
              >
                Paid Support
              </a>
            </div>
          </div>
        </div>

        <!-- Horizontal Divider -->
        <div class="h-px w-full bg-gray-100 mb-6"></div>

        <!-- Bottom Footer -->
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} Vanguard
          </p>
          <p class="text-gray-400 text-sm mt-2 md:mt-0">
            Open-source project licensed under AGPL 3.0
          </p>
        </div>
      </div>
    </footer>

    <!-- Cookie Notice -->
    <CookieNotice />
  </div>
</template>

<style scoped>
/* Clean design with no additional patterns */
</style>
