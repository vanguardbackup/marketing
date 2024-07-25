<script setup>
import {ref} from 'vue';
import Logo from "./components/Logo.vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="flex flex-col min-h-screen bg-black text-white">
    <!-- Animated Background -->
    <div class="fixed inset-0 z-0 opacity-20">
      <div class="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]"></div>
    </div>

    <!-- Header -->
    <header class="relative z-10 border-b border-gray-800">
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-6">
          <a href="/" class="h-auto w-32 transform transition-all duration-300 hover:scale-105">
            <Logo />
          </a>
          <div class="hidden md:flex space-x-8">
            <router-link to="/" class="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">Home
            </router-link>
            <router-link to="/features" class="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
              Features
            </router-link>
            <router-link to="/about" class="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
              About
            </router-link>
            <router-link to="/faq" class="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
              FAQ
            </router-link>
            <a href="https://docs.vanguardbackup.com" target="_blank" rel="noopener noreferrer" class="text-sm uppercase tracking-wider hover:text-gray-300 transition-colors">
              Docs
            </a>
          </div>
          <a href="#"
             class="hidden md:inline-block px-4 py-2 border border-white rounded-full text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all">
            Get Started
          </a>
          <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>
      <!-- Mobile menu -->
      <div v-show="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link to="/" class="block px-3 py-2 text-base font-medium hover:bg-gray-900">Home</router-link>
          <router-link to="/features" class="block px-3 py-2 text-base font-medium hover:bg-gray-900">Features
          </router-link>
          <router-link to="/about" class="block px-3 py-2 text-base font-medium hover:bg-gray-900">About</router-link>
          <a href="#" class="block px-3 py-2 text-base font-medium bg-white text-black rounded-md">Get Started</a>
        </div>
      </div>
    </header>

    <!-- Router View -->
    <main class="flex-grow relative z-10">
      <RouterView/>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 bg-gray-900">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="md:col-span-2">
            <h3 class="text-2xl font-bold mb-4">Vanguard</h3>
            <p class="text-gray-300 max-w-md">An open-source backup solution for developers, by developers.</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li>
                <router-link to="/" class="text-gray-300 hover:text-white transition-colors">Home</router-link>
              </li>
              <li>
                <router-link to="/about" class="text-gray-300 hover:text-white transition-colors">About</router-link>
              </li>
              <li>
                <router-link to="/faq" class="text-gray-300 hover:text-white transition-colors">FAQ</router-link>
              </li>
              <li>
                <router-link to="/features" class="text-gray-300 hover:text-white transition-colors">Features</router-link>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Resources</h4>
            <ul class="space-y-2">
              <li><a href="https://github.com/vanguardbackup/vanguard" target="_blank" class="text-gray-300 hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://github.com/vanguardbackup/vanguard/discussions" target="_blank" class="text-gray-300 hover:text-white transition-colors">Discussions</a></li>
              <li><a href="https://github.com/vanguardbackup/vanguard/issues/new/choose" target="_blank" class="text-gray-300 hover:text-white transition-colors">Create an Issue</a></li>
              <li><a href="https://docs.vanguardbackup.com/installation" target="_blank" class="text-gray-300 hover:text-white transition-colors">Installation Guide</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
          <p class="text-gray-400">Vanguard is an open-source project licensed under MIT.</p>
        </div>
      </div>
    </footer>
  </div>
</template>