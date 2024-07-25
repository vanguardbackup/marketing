<template>
  <div class="bg-black text-white font-sans min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">About Vanguard</h1>
        <p class="text-xl mb-8">
          An open-source backup solution for developers, by developers.
        </p>
      </div>
    </section>

    <!-- Core Information -->
    <section class="py-16 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto">
        <div class="space-y-12">
          <div>
            <h2 class="text-2xl font-semibold mb-4">What is Vanguard?</h2>
            <p class="text-lg">
              Vanguard is a simple, efficient backup tool designed for developers who need reliable data protection without the complexity. Our focus is on creating a lightweight, easy-to-use solution that integrates seamlessly with your workflow.
            </p>
          </div>
          <div>
            <h2 class="text-2xl font-semibold mb-4">Why Open Source?</h2>
            <p class="text-lg">
              We believe in the power of community-driven development. By keeping Vanguard open source, we ensure transparency, encourage collaboration, and build trust with our users. Your contributions help make Vanguard better for everyone.
            </p>
          </div>
          <div>
            <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
            <ul class="list-disc list-inside text-lg space-y-2">
              <li>Secure encryption for your data</li>
              <li>Easy integration with popular cloud storage services</li>
              <li>Support for Laravel projects</li>
              <li>Supports multiple Notification options</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Get Involved -->
    <section class="py-16 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Get Involved</h2>
        <p class="text-lg mb-8">
          Vanguard thrives on community contributions. Whether you're a developer, designer, or just enthusiastic about backups, there's a place for you in our community.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
              href="https://github.com/vanguardbackup/vanguard"
              class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300"
          >
            GitHub Repository
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
          </a>
          <a
              href="https://docs.vanguardbackup.com/development-handbook"
              class="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-full text-lg font-semibold border-2 border-black hover:bg-black hover:text-white transition duration-300"
          >
            Contribution Guide
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.font-sans {
  font-family: 'Inter', sans-serif;
}
</style>