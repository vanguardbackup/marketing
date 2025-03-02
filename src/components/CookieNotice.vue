<script setup>
import { ref, onMounted } from 'vue'
import { CookieIcon, XIcon } from 'lucide-vue-next'

const showNotice = ref(true)

const acceptCookies = () => {
  localStorage.setItem('cookiesAccepted', 'true')
  showNotice.value = false
}

onMounted(() => {
  if (localStorage.getItem('cookiesAccepted') === 'true') {
    showNotice.value = false
  }
})
</script>

<template>
  <transition
    enter-active-class="transition ease-out duration-500"
    enter-from-class="transform translate-y-12 opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition ease-in duration-300"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-12 opacity-0"
  >
    <div v-if="showNotice" class="fixed bottom-0 inset-x-0 z-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col sm:flex-row items-center bg-white border-t border-l border-r border-gray-200 rounded-t-lg p-4 sm:p-6 shadow-lg">
          <div class="flex-1 flex items-center mb-4 sm:mb-0">
            <div class="w-10 h-10 bg-black flex items-center justify-center rounded-md mr-4 flex-shrink-0">
              <CookieIcon class="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 class="font-bold text-gray-900 text-lg">Cookie Notice</h3>
              <p class="text-gray-600 mt-1 text-sm max-w-xl">
                We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept," you consent to our use of cookies.
              </p>
            </div>
          </div>

          <div class="flex space-x-3">
            <a
              href="/privacy-policy"
              class="px-5 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              Privacy Policy
            </a>
            <button
              @click="acceptCookies"
              class="px-5 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors flex items-center"
            >
              Accept All
            </button>
          </div>

          <button
            @click="showNotice = false"
            class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Dismiss"
          >
            <XIcon class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>