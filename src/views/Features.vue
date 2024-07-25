<template>
  <div class="bg-black text-white min-h-screen font-sans">
    <!-- Hero Section -->
    <section class="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="max-w-5xl mx-auto text-center relative z-10">
        <h1 class="text-4xl sm:text-5xl font-medium mb-6">Vanguard's Features</h1>
        <p class="text-xl mb-8 text-gray-200">
          Powerful backup solutions for developers who value simplicity and efficiency.
        </p>
        <a href="#features" class="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 inline-flex items-center">
          Explore Features
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Features Sections -->
    <div id="features" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Security Feature -->
      <section class="py-24 border-b border-gray-800">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-12 lg:mb-0">
            <div class="relative w-64 h-64 mx-auto">
              <div class="absolute inset-0 border-2 border-white rounded-full animate-pulse"></div>
              <Shield class="w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
            </div>
          </div>
          <div class="lg:w-1/2 lg:pl-12">
            <h2 class="text-4xl font-semibold mb-6">Impenetrable Security</h2>
            <p class="text-gray-400 mb-8 text-lg">Vanguard employs state-of-the-art security measures to ensure your data remains inviolable.</p>
            <ul class="space-y-4">
              <li v-for="point in securityPoints" :key="point" class="flex items-center">
                <svg class="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Compatibility Feature -->
      <section class="py-24 border-b border-gray-800">
        <div class="flex flex-col lg:flex-row-reverse items-center">
          <div class="lg:w-1/2 mb-12 lg:mb-0">
            <div class="relative w-80 h-80 mx-auto">
              <div v-for="(tech, index) in compatibilityTech" :key="tech"
                   :class="`absolute w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-medium text-sm transform ${techPositions[index]}`">
                {{ tech }}
              </div>
            </div>
          </div>
          <div class="lg:w-1/2 lg:pr-12">
            <h2 class="text-4xl font-semibold mb-6">Universal Compatibility</h2>
            <p class="text-gray-400 mb-8 text-lg">Seamlessly integrate Vanguard with your existing infrastructure for comprehensive backup coverage.</p>
            <ul class="space-y-4">
              <li v-for="point in compatibilityPoints" :key="point" class="flex items-center">
                <svg class="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Data Protection Feature -->
      <section class="py-24 border-b border-gray-800">
        <div class="flex flex-col items-center">
          <h2 class="text-4xl font-semibold mb-12 text-center">Comprehensive Data Protection</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <div v-for="(feature, index) in dataProtectionFeatures" :key="index" class="bg-gray-900 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:rotate-1">
              <component :is="feature.icon" class="w-12 h-12 mb-4 text-white" />
              <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
              <p class="text-gray-400">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Automation Feature -->
      <section class="py-24">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-12 lg:mb-0">
            <div class="relative w-80 h-80 mx-auto">
              <svg class="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="white" stroke-width="2" />
              </svg>
              <Clock class="w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
            </div>
          </div>
          <div class="lg:w-1/2 lg:pl-12">
            <h2 class="text-4xl font-semibold mb-6">Precision Automation</h2>
            <p class="text-gray-400 mb-8 text-lg">Harness the power of intelligent scheduling and management to optimize your backup strategy.</p>
            <ul class="space-y-4">
              <li v-for="point in automationPoints" :key="point" class="flex items-center">
                <svg class="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

    <!-- Call to Action -->
    <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-medium mb-8">Ready to Secure Your Data?</h2>
        <p class="text-xl mb-12 text-gray-600">Join the Vanguard community and experience unparalleled data protection.</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="https://docs.vanguardbackup.com/installation" class="inline-flex items-center justify-center bg-black text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 transform">
            Self-Host Vanguard
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="https://app.vanguardbackup.com" class="inline-flex items-center justify-center bg-white text-black font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 border-2 border-black hover:bg-black hover:text-white hover:scale-105 transform">
            Try Hosted Version
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Shield, Server, Database, Clock } from 'lucide-vue-next';

const securityPoints = [
  "Advanced SSH key authentication protocols",
  "Military-grade end-to-end encryption",
  "Continuous security audits and enhancements"
];

const compatibilityPoints = [
  "Full support for Linux, Ploi, and Laravel Forge environments",
  "Intuitive management interface for effortless control",
  "Infinitely scalable architecture to grow with your needs"
];

const compatibilityTech = ['Linux', 'Ploi', 'Forge', 'AWS', 'GCP', 'Azure'];
const techPositions = [
  'top-0 left-1/2 -translate-x-1/2',
  'top-1/4 right-0',
  'bottom-1/4 right-0',
  'bottom-0 left-1/2 -translate-x-1/2',
  'bottom-1/4 left-0',
  'top-1/4 left-0'
];

const dataProtectionFeatures = [
  { icon: Database, title: 'Database Backups', description: 'Complete MySQL and PostgreSQL database preservation' },
  { icon: Server, title: 'File Backups', description: 'Intelligent file and directory backup with customizable rules' },
  { icon: 'Cloud', title: 'Flexible Storage', description: 'Support for various cloud providers and local storage options' }
];

const automationPoints = [
  "Fine-tuned cron scheduling for precise backup timing",
  "Dynamic task management for on-the-fly adjustments",
  "Comprehensive logging and alert system for total oversight"
];
</script>