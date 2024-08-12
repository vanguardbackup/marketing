<template>
  <div class="bg-black text-white font-sans">
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black text-center px-6 py-40">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl sm:text-5xl font-medium mb-6">
          Vanguard Mobile: Your Backup Command Center
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto">
          Manage your backups on the go with our powerful, secure mobile companion app.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-6 mb-20">
          <a href="#" class="bg-white text-black font-semibold py-4 px-10 rounded-full transition-all duration-300 hover:bg-gray-200 hover:scale-105 transform inline-flex items-center justify-center text-lg group">
            Download for Android
            <AndroidIcon class="w-7 h-7 ml-3 group-hover:animate-bounce" />
          </a>
        </div>
        <div class="relative">
          <img src="/phone-render.png" alt="Vanguard Mobile App" class="mx-auto rounded-3xl shadow-2xl max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl border-transparent" />
          <div class="absolute -top-8 -right-8 bg-yellow-400 text-black font-bold py-3 px-6 rounded-full transform rotate-12 text-lg animate-pulse">
            Open Source!
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-28 bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-medium mb-20 text-center">Key Features</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-14">
          <FeatureCard v-for="feature in features" :key="feature.title" :feature="feature" />
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-28 bg-black">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-medium mb-20 text-center">How It Works</h2>
        <div class="flex flex-col md:flex-row items-center justify-between gap-16">
          <div class="md:w-1/2">
            <img src="/phone-render-two.png" alt="App Screenshots" class="rounded-3xl shadow-2xl max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto border border-transparent"/>
          </div>
          <div class="md:w-1/2">
            <ol class="space-y-10">
              <li v-for="(step, index) in howItWorks" :key="index" class="flex items-start">
                <span class="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center mr-6 font-bold flex-shrink-0 text-lg">{{ index + 1 }}</span>
                <span class="text-gray-300 text-lg">{{ step }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- Self-Hosted Section -->
    <section class="py-28 bg-gray-900">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-medium mb-10">Self-Hosted? No Problem!</h2>
        <p class="text-xl mb-16 text-gray-300 max-w-3xl mx-auto">
          Running your own Vanguard instance? Vanguard Mobile supports custom endpoint URLs, allowing you to connect to your self-hosted Vanguard server seamlessly.
        </p>
        <div class="bg-black p-8 rounded-3xl max-w-2xl mx-auto border border-gray-800 shadow-2xl">
          <h3 class="text-2xl font-semibold mb-6">How to Connect:</h3>
          <ol class="text-left space-y-4 text-gray-300">
            <li>1. On the login screen, tap the "Advanced" dropdown</li>
            <li>2. Enter your custom endpoint URL in the provided field</li>
            <li>3. Customize your device name if desired</li>
            <li>4. Proceed with login using your Vanguard credentials</li>
            <li>5. Enjoy managing your self-hosted backups!</li>
          </ol>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="py-28 bg-black">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-medium mb-12">Bank-Grade Security</h2>
        <p class="text-xl mb-20 text-gray-300 max-w-3xl mx-auto">Your data's safety is our top priority, whether you're using our cloud-hosted solution or connecting to your own server.</p>
        <div class="grid md:grid-cols-3 gap-16">
          <div v-for="security in securityFeatures" :key="security.title" class="flex flex-col items-center bg-gray-900 p-8 rounded-3xl border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <component :is="security.icon" class="w-24 h-24 mb-8 text-white" />
            <h3 class="text-2xl font-semibold mb-4">{{ security.title }}</h3>
            <p class="text-gray-400 text-lg">{{ security.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-28 bg-gradient-to-t from-gray-900 to-black">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-medium mb-10">Ready to Take Control?</h2>
        <p class="text-xl mb-16 text-gray-300 max-w-3xl mx-auto">Download Vanguard Mobile now and manage your backups from anywhere, whether you're using our cloud service or your own self-hosted instance!</p>
        <div class="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16">
          <a href="#" class="bg-white text-black font-medium py-5 px-12 rounded-full text-xl transition-all duration-300 hover:bg-gray-200 hover:scale-105 transform inline-flex items-center justify-center group">
            Get it on Google Play
            <AndroidIcon class="w-8 h-8 ml-3 group-hover:animate-bounce" />
          </a>
        </div>
        <div>
          <a href="https://github.com/vanguardbackup/mobile" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white inline-flex items-center text-lg transition-colors duration-300">
            View on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Shield, Smartphone, Clock, Server, Database, Eye } from 'lucide-vue-next';
import { AndroidIcon, AppleIcon } from 'vue3-simple-icons';
import FeatureCard from '../components/HomeFeatureCard.vue';

const features = ref([
  {
    icon: Smartphone,
    title: 'On-the-Go Management',
    description: 'View backup tasks, destinations, remote servers and more from your mobile device.'
  },
  {
    icon: Shield,
    title: 'Biometric Security',
    description: 'Lock the app with biometric authentication for an extra layer of security.'
  },
  {
    icon: Clock,
    title: 'Run Backup Tasks',
    description: 'Initiate backup tasks directly from your mobile device, anytime, anywhere.'
  },
  {
    icon: Server,
    title: 'Custom Endpoints',
    description: 'Connect to your self-hosted Vanguard instance by providing your own endpoint URL.'
  }
]);

const howItWorks = ref([
  'Download and install the Vanguard Mobile app from your device\'s app store.',
  'Log in with your Vanguard account credentials or connect to your self-hosted instance.',
  'Configure your endpoint URL if using a self-hosted Vanguard server.',
  'Monitor your backups in real-time and manage tasks on the go.'
]);

const securityFeatures = ref([
  {
    icon: Shield,
    title: 'End-to-End Encryption',
    description: 'All data transmissions are secured with state-of-the-art encryption, whether connecting to our cloud or your own server.'
  },
  {
    icon: Smartphone,
    title: 'Biometric Authentication',
    description: 'Use your device\'s built-in biometric features for secure app access, adding an extra layer of protection.'
  },
  {
    icon: Eye,
    title: 'Zero Knowledge Architecture',
    description: 'We never store or have access to your server credentials, ensuring your data remains private and secure.'
  }
]);
</script>