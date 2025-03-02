<template>
  <main class="bg-black text-white font-sans">
    <!-- Hero Section -->
    <section
      class="min-h-screen flex flex-col items-center justify-center bg-black text-center p-8 md:p-16"
    >
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl md:text-6xl font-medium text-white mb-6">
          Secure Your Data with Vanguard
        </h1>
        <p class="text-xl text-gray-200 mb-8">
          A community-driven open-source backup solution for servers and
          applications. MySQL, PostgreSQL, and file backups made simple.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="#get-started"
            class="bg-white text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-gray-200 hover:scale-105 transform inline-flex items-center justify-center"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://github.com/vanguardbackup/vanguard"
            target="_blank"
            rel="noopener noreferrer"
            class="border border-white text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 transform inline-flex items-center justify-center"
          >
            View on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
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
          <div
            v-for="feature in features"
            :key="feature.title"
            class="p-6 bg-gray-900 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
          >
            <component :is="feature.icon" class="w-12 h-12 mb-4 text-white" />
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-gray-400">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="py-24 border-b border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-12 lg:mb-0">
            <div class="relative w-64 h-64 mx-auto">
              <div
                class="absolute inset-0 border-2 border-white rounded-full animate-pulse"
              ></div>
              <Shield
                class="w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
              />
            </div>
          </div>
          <div class="lg:w-1/2 lg:pl-12">
            <h2 class="text-4xl font-medium mb-6">Impenetrable Security</h2>
            <p class="text-gray-400 mb-8 text-lg">
              Vanguard employs state-of-the-art security measures to ensure your
              data remains inviolable.
            </p>
            <ul class="space-y-4">
              <li
                v-for="point in securityPoints"
                :key="point"
                class="flex items-center"
              >
                <svg
                  class="w-6 h-6 mr-2 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-24 bg-gray-900">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-medium mb-16 text-center">How It Works</h2>
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="md:w-1/2 mb-12 md:mb-0">
            <img
              src="/dashboard.png"
              alt="Vanguard Dashboard"
              class="rounded-lg shadow-xl"
            />
          </div>
          <div class="md:w-1/2 md:pl-12">
            <ol class="space-y-8">
              <li
                v-for="(step, index) in howItWorks"
                :key="index"
                class="flex items-center"
              >
                <span
                  class="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center mr-4 font-bold"
                  >{{ index + 1 }}</span
                >
                <span class="text-gray-300">{{ step }}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section Preview -->
    <section class="py-24 bg-black">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-medium mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <p class="text-xl mb-16 text-gray-200 text-center">
          Get answers to the most common questions about Vanguard
        </p>

        <div class="max-w-3xl mx-auto space-y-6">
          <div
            v-for="(item, index) in faqPreview"
            :key="index"
            class="border border-gray-800"
          >
            <button
              @click="toggleQuestion(index)"
              class="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors duration-200"
              :class="{ 'bg-white text-black': activeQuestion === index }"
            >
              <div class="flex items-center justify-between">
                <span class="text-lg font-medium">{{ item.question }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 transform transition-transform duration-200"
                  :class="{ 'rotate-180': activeQuestion === index }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <div
              v-show="activeQuestion === index"
              class="px-6 py-4 bg-gray-900"
            >
              <p class="text-gray-300" v-html="item.answer"></p>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <router-link
            to="/faq"
            class="bg-white text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-gray-200 transform inline-flex items-center justify-center"
          >
            View All FAQs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- About Section Preview -->
    <section class="py-24 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-medium mb-6">About Vanguard</h2>
            <p class="text-xl text-gray-200">
              An open-source backup solution for a developer's servers,
              applications and data.
            </p>
          </div>

          <div class="space-y-12">
            <div>
              <h3 class="text-2xl font-semibold mb-4">What is Vanguard?</h3>
              <p class="text-lg text-gray-300">
                Vanguard is a simple, efficient backup software designed for
                developers who need reliable data protection without the
                complexity. Our focus is on creating a lightweight, easy-to-use
                backup solution.
              </p>
            </div>
            <div>
              <h3 class="text-2xl font-semibold mb-4">Why Open Source?</h3>
              <p class="text-lg text-gray-300">
                We believe in the power of community-driven development. By
                keeping Vanguard open source, we ensure transparency, encourage
                collaboration, and build trust with our users. Your
                contributions help make Vanguard better for everyone.
              </p>
            </div>
          </div>

          <div class="mt-12 text-center">
            <router-link
              to="/about"
              class="bg-white text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-gray-200 transform inline-flex items-center justify-center"
            >
              Learn More About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Get Started Section -->
    <section id="get-started" class="py-24 bg-white text-black">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-medium mb-8">Get Started with Vanguard</h2>
        <p class="text-xl mb-12 text-gray-600">
          Choose your deployment: Cloud-hosted or self-managed
        </p>
        <div
          class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="https://docs.vanguardbackup.com/installation"
            class="bg-black text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-gray-800 hover:scale-105 transform inline-flex items-center justify-center"
          >
            Self-Host Vanguard
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://app.vanguardbackup.com"
            class="border-2 border-black text-black font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 transform inline-flex items-center justify-center"
          >
            Try Hosted Version
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Contact Preview Section -->
    <section class="py-16 bg-black">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-medium mb-6">Need Help?</h2>
        <p class="text-lg mb-8 text-gray-300">
          Our team and community are ready to assist you with any questions
        </p>
        <router-link
          to="/contact"
          class="bg-white text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-gray-200 transform inline-flex items-center justify-center"
        >
          Contact Us
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { Shield, Database, Clock, Cloud, Code2 } from 'lucide-vue-next'

const activeQuestion = ref(null)

const features = [
  {
    icon: Shield,
    title: 'Secure Backups',
    description:
      'End-to-end encryption ensures your data remains protected at all times.',
  },
  {
    icon: Database,
    title: 'Multi-Database Support',
    description: 'Seamlessly backup MySQL and PostgreSQL databases with ease.',
  },
  {
    icon: Clock,
    title: 'Automated Scheduling',
    description: 'Set up custom backup schedules to fit your specific needs.',
  },
  {
    icon: Cloud,
    title: 'Flexible Storage',
    description:
      'Support for multiple cloud providers including Amazon S3 and more.',
  },
  {
    icon: Code2,
    title: 'Developer Friendly',
    description:
      'Easy integration with Laravel projects and popular hosting platforms.',
  },
  {
    icon: Shield,
    title: 'Open Source',
    description:
      'Community-driven development ensures transparency and security.',
  },
]

const securityPoints = [
  'Advanced SSH key authentication protocols',
  'Military-grade end-to-end encryption',
  'Continuous security audits and enhancements',
  'Secure transmission of data to storage destinations',
]

const howItWorks = [
  'Connect Vanguard to your servers securely via SSH.',
  'Configure your backup sources (databases, files) and destinations.',
  'Set up automated backup schedules via a time interval or with cron.',
  'Monitor backup status and receive notifications.',
  'Restore data quickly when needed with a simple process.',
]

const faqPreview = [
  {
    question: 'What is Vanguard?',
    answer:
      'Vanguard is an open-source backup solution designed for servers and applications. It provides robust and flexible backup options for developers.',
  },
  {
    question: 'How does Vanguard handle security?',
    answer:
      'Vanguard prioritizes security by using SSH key pairs for server authentication and implementing strong encryption for data transfer and storage. We also follow best practices for secure coding.',
  },
  {
    question: 'Which cloud storage providers does Vanguard support?',
    answer:
      'Vanguard supports multiple cloud storage providers, including:<br>- Amazon S3<br>- Custom S3-compatible storage solutions<br>Additionally, you can use local storage for your backups.',
  },
]

const toggleQuestion = (index) => {
  if (activeQuestion.value === index) {
    activeQuestion.value = null
  } else {
    activeQuestion.value = index
  }
}
</script>

<style scoped>
@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>
