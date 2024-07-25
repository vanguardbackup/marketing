<template>
  <main class="bg-gray-900 text-white font-sans">
    <!-- Hero Section -->
    <section class="min-h-screen flex flex-col items-center justify-center bg-black text-center rounded-b-3xl p-8 md:p-16">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-medium text-white mb-6">
         Secure Your Data with Vanguard
        </h1>
        <p class="text-xl text-gray-200 mb-8">
          Secure your data with Vanguard, a community-driven open-source backup solution for servers and applications. MySQL, PostgreSQL, and file backups made simple.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a href="#get-started" class="bg-white text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-gray-200 hover:scale-105 transform inline-flex items-center justify-center">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="https://github.com/vanguardbackup/vanguard" target="_blank" rel="noopener noreferrer" class="border border-white text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 transform inline-flex items-center justify-center">
            View on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-black">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-medium mb-16 text-center">Key Features</h2>
        <div class="grid md:grid-cols-3 gap-12">
          <HomeFeatureCard v-for="feature in features" :key="feature.title" :feature="feature" />
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-24 bg-gray-850">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-medium mb-16 text-center">How It Works</h2>
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-12 md:mb-0">
            <img src="/dashboard.png" class="rounded-lg" />
          </div>
          <div class="md:w-1/2 md:pl-12">
            <ol class="space-y-8">
              <li v-for="(step, index) in howItWorks" :key="index" class="flex items-center">
                <span class="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center mr-4 font-bold">{{ index + 1 }}</span>
                <span class="text-gray-300">{{ step }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- Get Started Section -->
    <section id="get-started" class="py-24 bg-black">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-medium mb-8">Get Started with Vanguard</h2>
        <p class="text-xl mb-12 text-gray-400">Choose your deployment: Cloud-hosted or self-managed</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="https://app.vanguardbackup.com" class="bg-white text-black font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 transform inline-flex items-center justify-center">
            Try Hosted Version
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="https://docs.vanguardbackup.com/installation" class="border-2 border-white text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 transform inline-flex items-center justify-center">
            Self-Host Vanguard
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Shield, Database, Clock } from 'lucide-vue-next';
import HomeFeatureCard from '../components/HomeFeatureCard.vue';

const features = [
  {
    icon: Shield,
    title: 'Secure Backups',
    description: 'End-to-end encryption ensures your data remains protected at all times.'
  },
  {
    icon: Database,
    title: 'Multi-Database Support',
    description: 'Seamlessly backup MySQL and PostgresSQL databases.'
  },
  {
    icon: Clock,
    title: 'Automated Scheduling',
    description: 'Set up custom backup schedules to fit your specific needs.'
  }
];

const howItWorks = [
  'Connect Vanguard to your servers securely via SSH.',
  'Configure your backup sources (databases, files) and destinations.',
  'Set up automated backup schedules via a time interval or with cron.',
  'Monitor your backups through an intuitive dashboard.'
];
</script>

<style scoped>
@keyframes fadeInOut {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}
</style>