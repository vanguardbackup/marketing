<template>
  <div
    class="flex items-center justify-center min-h-screen bg-black text-white"
  >
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p class="text-xl mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <router-link
        to="/"
        class="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
      >
        Go Back Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>
