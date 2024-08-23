<script setup>
import { ref, onMounted } from 'vue'
import { CookieIcon, InfoIcon, CheckIcon } from 'lucide-vue-next'

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
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transform translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-300"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-full opacity-0"
  >
    <div v-if="showNotice" class="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg sm:p-4">
          <div class="flex items-center justify-between flex-wrap">
            <div class="flex-1 flex items-center">
              <CookieIcon class="h-6 w-6 text-white mr-3" />
              <p class="font-medium text-white">
                <span class="md:hidden">We use cookies.</span>
                <span class="hidden md:inline">
                  This website uses cookies to enhance your browsing experience.
                </span>
              </p>
            </div>
            <div class="mt-2 flex-shrink-0 w-full sm:mt-0 sm:w-auto sm:ml-4">
              <div class="flex space-x-4">
                <button
                    @click="acceptCookies"
                    class="flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
                >
                  <CheckIcon class="h-4 w-4 mr-2" />
                  Accept
                </button>
                <a
                    href="/privacy-policy"
                    class="flex items-center justify-center px-4 py-2 border border-white rounded-full shadow-sm text-sm font-medium text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <InfoIcon class="h-4 w-4 mr-2" />
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>