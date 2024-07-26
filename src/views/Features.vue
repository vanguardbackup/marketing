<template>
  <div class="bg-black text-white min-h-screen font-sans">
    <!-- Hero Section -->
    <section class="pt-40 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="max-w-5xl mx-auto text-center relative z-10">
        <h1 class="text-4xl sm:text-5xl font-medium mb-6">Vanguard's Features</h1>
        <p class="text-xl mb-8 text-gray-200">
          Powerful backup solutions for developers who value simplicity and efficiency.
        </p>
        <a href="#features"
           class="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 inline-flex items-center">
          Explore Features
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"/>
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
              <Shield
                  class="w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"/>
            </div>
          </div>
          <div class="lg:w-1/2 lg:pl-12">
            <h2 class="text-4xl font-semibold mb-6">Impenetrable Security</h2>
            <p class="text-gray-400 mb-8 text-lg">Vanguard employs state-of-the-art security measures to ensure your
              data remains inviolable.</p>
            <ul class="space-y-4">
              <li v-for="point in securityPoints" :key="point" class="flex items-center">
                <svg class="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Compatibility Feature -->
      <section class="py-24 border-b border-gray-800">
        <h2 class="text-4xl font-semibold mb-12 text-center">Universal Compatibility</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="relative w-80 h-80 mx-auto">
            <div v-for="(tech, index) in compatibilityTech" :key="tech.name"
                 :class="`brand-icon absolute w-16 h-16 rounded-full flex items-center justify-center transform ${techPositions[index]}`"
                 :style="{ '--hover-color': tech.color }">
              <component :is="tech.icon" class="w-8 h-8 text-black transition-colors duration-1000" />
            </div>
          </div>
          <div>
            <p class="text-gray-400 mb-8 text-lg">
              Vanguard is designed to work seamlessly across various environments, with dedicated support for Ubuntu and Debian-based systems. Integrate effortlessly with your existing infrastructure for comprehensive backup coverage.
            </p>
            <ul class="space-y-4">
              <li v-for="point in compatibilityPoints" :key="point" class="flex items-center">
                <svg class="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>


      <!-- Data Protection Feature -->
      <section class="py-24 border-b border-gray-800">
        <h2 class="text-4xl font-semibold mb-12 text-center">Comprehensive Data Protection</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(feature, index) in dataProtectionFeatures" :key="index"
               class="bg-gray-900 p-6 rounded-lg transform transition-all duration-300 hover:scale-105 hover:rotate-1">
            <component :is="feature.icon" class="w-12 h-12 mb-4 text-white"/>
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <!-- Automation and Laravel Support Feature -->
      <section class="py-24 border-b border-gray-800">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-12 lg:mb-0">
            <h2 class="text-4xl font-semibold mb-6">Precision Automation</h2>
            <p class="text-gray-400 mb-8 text-lg">Harness the power of intelligent scheduling and management to optimize
              your backup strategy.</p>
            <ul class="space-y-4">
              <li v-for="point in automationPoints" :key="point" class="flex items-center">
                <svg class="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2 lg:pl-12">
            <div class="flex items-center mb-6">
              <LaravelIcon class="w-12 h-12 mr-4 text-red-500"/>
              <h2 class="text-4xl font-semibold">Seamless Laravel Integration</h2>
            </div>
            <p class="text-gray-400 mb-8 text-lg">Vanguard offers first-class support for Laravel applications, ensuring
              your artisan-crafted projects are always protected.</p>
            <ul class="space-y-4">
              <li v-for="point in laravelPoints" :key="point" class="flex items-center">
                <svg class="w-6 h-6 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Weekly Summary Section -->
      <section class="py-24 border-b border-gray-800">
        <h2 class="text-4xl font-semibold mb-12 text-center">Weekly Backup Insights</h2>
        <div class="flex flex-col lg:flex-row items-start">
          <div class="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h3 class="text-2xl font-semibold mb-6">Comprehensive Weekly Summary Emails</h3>
            <p class="text-gray-400 mb-8">Stay informed about your backup activities with our detailed weekly reports,
              delivered straight to your inbox.</p>
            <ul class="space-y-4">
              <li v-for="point in weeklySummaryPoints" :key="point" class="flex items-center">
                <ChartBar class="w-6 h-6 mr-2 text-blue-400"/>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
          <div class="lg:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold mb-4">Sample Weekly Summary</h3>
            <div class="space-y-3">
              <p><span class="font-semibold">Total Backups:</span> 42</p>
              <p><span class="font-semibold">Successful Backups:</span> 41</p>
              <p><span class="font-semibold">Failed Backups:</span> 1</p>
              <p><span class="font-semibold">Overall Success Rate:</span> 97.6%</p>
              <p><span class="font-semibold">Total Data Protected:</span> 1.2 TB</p>
              <p><span class="font-semibold">Average Backup Duration:</span> 15 minutes</p>
              <p><span class="font-semibold">Most Active Project:</span> e-commerce-platform</p>
            </div>
            <p class="mt-4 text-sm text-gray-400">Enable weekly summaries in your account settings for these detailed
              insights.</p>
          </div>
        </div>
      </section>

      <!-- Backup Destinations and Notifications -->
      <section class="py-24 border-b border-gray-800">
        <h2 class="text-4xl font-semibold mb-12 text-center">Flexible Backup Solutions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="bg-gray-900 p-6 rounded-lg">
            <h3 class="text-2xl font-semibold mb-6">Backup Destinations</h3>
            <p class="text-gray-400 mb-8">Store your backups securely with support for various cloud providers:</p>
            <ul class="space-y-4">
              <li v-for="destination in backupDestinations" :key="destination.name"
                  class="flex items-center bg-gray-950 border border-gray-800/95 rounded-lg p-4">
                <component :is="destination.icon" :class="`w-6 h-6 mr-4 flex-shrink-0 ${destination.color}`"/>
                <span class="text-lg">{{ destination.name }}</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-900 p-6 rounded-lg">
            <h3 class="text-2xl font-semibold mb-6">Notification Options</h3>
            <p class="text-gray-400 mb-8">Stay informed with our comprehensive notification system:</p>
            <ul class="space-y-4">
              <li v-for="notification in notificationTypes" :key="notification.name"
                  class="flex items-center bg-gray-950 border border-gray-800/95 rounded-lg p-4">
                <component :is="notification.icon" :class="`w-6 h-6 mr-4 flex-shrink-0 ${notification.color}`"/>
                <span class="text-lg">{{ notification.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Multilingual Support Section -->
      <section class="py-24 border-b border-gray-800">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl font-semibold mb-12 text-center">Global Reach, Local Touch</h2>
          <div class="flex flex-col lg:flex-row items-start">
            <div class="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
              <p class="text-xl text-gray-300 mb-8">
                Vanguard breaks language barriers, allowing developers worldwide to use the platform in their preferred language. Our commitment to accessibility ensures a seamless experience for everyone.
              </p>
              <h3 class="text-2xl font-semibold mb-6">Multilingual Features</h3>
              <ul class="space-y-6">
                <li v-for="feature in languageFeatures" :key="feature.text" class="flex items-center">
                  <component :is="feature.icon" class="w-8 h-8 mr-4 text-blue-400" />
                  <span class="text-lg">{{ feature.text }}</span>
                </li>
              </ul>
            </div>
            <div class="lg:w-1/2 bg-gray-900 p-8 rounded-lg shadow-xl">
              <h3 class="text-2xl font-semibold mb-6">Supported Languages</h3>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div v-for="lang in supportedLanguages" :key="lang.code" class="flex items-center bg-gray-800 p-3 rounded">
                  <span>{{ lang.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Open Source Section -->
      <section class="py-24 border-b border-gray-800">
        <div class="flex flex-col items-center">
          <GitHubIcon class="w-16 h-16 mb-6 text-white"/>
          <h2 class="text-4xl font-semibold mb-6 text-center">Open Source Power</h2>
          <p class="text-xl text-gray-400 mb-8 text-center max-w-3xl">
            Vanguard is proudly open source, harnessing the power of community-driven development for enhanced security,
            transparency, and continuous improvement.
          </p>
          <a href="https://github.com/vanguardapp/vanguard" target="_blank" rel="noopener noreferrer"
             class="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 inline-flex items-center">
            View on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"/>
            </svg>
          </a>
        </div>
      </section>
    </div>

    <!-- Call to Action -->
    <section class="py-24 px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-medium mb-8">Ready to Secure Your Data?</h2>
        <p class="text-xl mb-12 text-gray-600">Join the Vanguard community and experience unparalleled data
          protection.</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="https://docs.vanguardbackup.com/installation"
             class="inline-flex items-center justify-center bg-black text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 transform">
            Self-Host Vanguard
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clip-rule="evenodd"/>
            </svg>
          </a>
          <a href="https://app.vanguardbackup.com"
             class="inline-flex items-center justify-center bg-white text-black font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 border-2 border-black hover:bg-black hover:text-white hover:scale-105 transform">
            Try Hosted Version
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import {Shield, Server, Database, Cloud, Mail, ChartBar, Globe, Languages, GitPullRequest} from 'lucide-vue-next';
import {
  DiscordIcon,
  Amazons3Icon,
  LaravelIcon,
  DigitalOceanIcon,
  GitHubIcon,
  UpCloudIcon,
  AmazonWebServicesIcon,
  UbuntuIcon,
  DebianIcon
} from 'vue3-simple-icons';
import forge from '../components/icons/forge.vue'
import ploi from '../components/icons/ploi.vue'
import slack from '../components/icons/slack.vue'
import googlecloud from '../components/icons/googlecloud.vue'

const securityPoints = [
  "Advanced SSH key authentication protocols",
  "Military-grade end-to-end encryption",
  "Continuous security audits and enhancements"
];

const compatibilityPoints = [
  "Full support for Ubuntu, Ploi, and Laravel Forge environments",
  "Intuitive management interface for effortless control",
  "Infinitely scalable architecture to grow with your needs"
];

const compatibilityTech = [
  {name: 'Linux', icon: UbuntuIcon, color: '#e95420'},
  { name: 'Debian', icon: DebianIcon, color: '#A81D33'},
  {name: 'Ploi', icon: ploi, color: '#1853DB'},
  {name: 'Forge', icon: forge, color: '#19b69b'},
  {name: 'AWS', icon: AmazonWebServicesIcon, color: '#FF9900'},
  {name: 'UpCloud', icon: UpCloudIcon, color: '#7B00FF'}
];

const techPositions = [
  'top-0 left-1/2 -translate-x-1/2',
  'top-1/4 right-0',
  'bottom-1/4 right-0',
  'bottom-0 left-1/2 -translate-x-1/2',
  'bottom-1/4 left-0',
  'top-1/4 left-0'
];

const dataProtectionFeatures = [
  {icon: Database, title: 'Database Backups', description: 'Complete MySQL and PostgreSQL database preservation'},
  {icon: Server, title: 'File Backups', description: 'Intelligent file and directory backup with customizable rules'},
  {icon: Cloud, title: 'Flexible Storage', description: 'Support for Amazon S3 and custom S3 providers'}
];

const automationPoints = [
  "Fine-tuned cron scheduling for precise backup timing",
  "Dynamic task management for on-the-fly adjustments",
  "Comprehensive logging and alert system for total oversight"
];

const laravelPoints = [
  "Automatic detection and backup of Laravel project structures",
  "Intelligent handling of Laravel-specific files and directories",
  "Seamless integration with Laravel's file system and database",
];

const weeklySummaryPoints = [
  "Detailed breakdown of completed and failed backup tasks",
  "Overall success rate and performance metrics",
  "Data volume statistics and trends analysis",
  "Insights into most active projects and potential optimizations",
  "Customizable report settings to focus on what matters most to you"
];

const backupDestinations = [
  {icon: Amazons3Icon, name: 'Amazon S3', color: 'text-yellow-500'},
  {icon: DigitalOceanIcon, name: 'DigitalOcean Spaces', color: 'text-blue-400'},
  {icon: googlecloud, name: 'Google Cloud Storage', color: 'text-red-400'},
  {icon: Cloud, name: 'Custom S3-compatible providers', color: 'text-green-400'},
];

const notificationTypes = [
  {icon: Mail, name: 'Email', color: 'text-gray-50'},
  {icon: slack, name: 'Slack Webhooks', color: 'text-[#4A154B]'},
  {icon: DiscordIcon, name: 'Discord Webooks', color: 'text-[#5865F2]'}
];

const languageFeatures = ref([
  { icon: Globe, text: "Available in multiple languages" },
  { icon: Languages, text: "Easy language switching within the interface" },
  { icon: GitPullRequest, text: "Community-driven translations" }
]);

const supportedLanguages = ref([
  { code: 'en', name: '🇬🇧 English' },
  { code: 'es', name: '🇩🇰 Danish' },
]);
</script>

<style>
.brand-icon {
  background-color: white;
}

.brand-icon:hover {
  background-color: var(--hover-color);
}

.brand-icon:hover svg {
  color: white;
}
</style>