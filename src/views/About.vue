<template>
  <div class="bg-black text-white font-sans min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl font-medium mb-6">About Vanguard</h1>
        <p class="text-xl mb-8 text-gray-200">
          An open-source backup solution for a developer's servers, applications and data.
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
              Vanguard is a simple, efficient backup software designed for developers who need reliable data protection without the complexity. Our focus is on creating a lightweight, easy-to-use backup solution.
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
        <h2 class="text-4xl font-medium mb-8">Get Involved</h2>
        <p class="text-lg mb-8">
          Vanguard thrives on community contributions. Whether you're a developer, designer, or just enthusiastic about backups, there's a place for you in our community.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
              href="https://github.com/vanguardbackup/vanguard"
              class="inline-flex items-center justify-center bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300"
          >
            GitHub Repository
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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