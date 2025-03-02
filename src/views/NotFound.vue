<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center px-6">
    <div class="max-w-lg">
      <div class="relative mb-12">
        <div class="absolute -top-8 -left-8 w-24 h-24 bg-gray-100 rounded-lg"></div>
        <div class="absolute -bottom-8 -right-8 w-16 h-16 bg-black rounded-lg"></div>
        <div class="relative z-10 text-center">
          <span class="text-9xl font-bold text-black">404</span>
        </div>
      </div>

      <div class="text-center mb-10">
        <h1 class="text-3xl font-bold text-black mb-4">Page Not Found</h1>
        <p class="text-lg text-gray-600 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link
          to="/"
          class="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
        >
          Back to Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
            <path
              fill-rule="evenodd"
              d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
        <a
          href="mailto:support@vanguardbackup.com"
          class="inline-flex items-center justify-center px-6 py-3 border-2 border-black text-black font-medium rounded-md hover:bg-black hover:text-white transition-colors"
        >
          Contact Support
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>