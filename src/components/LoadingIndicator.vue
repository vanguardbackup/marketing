<template>
  <div v-if="isLoading" class="fixed top-0 left-0 right-0 z-50">
    <div class="h-1 bg-blue-600 animate-pulse"></div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'LoadingIndicator',
  setup() {
    const isLoading = ref(false)
    const router = useRouter()

    router.beforeEach(() => {
      isLoading.value = true
    })

    router.afterEach(() => {
      isLoading.value = false
    })

    return {
      isLoading,
    }
  },
}
</script>
