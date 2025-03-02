<template>
  <main class="font-sans">
    <!-- Hero Section -->
    <section class="relative bg-white py-24 md:py-32">
      <div
        class="absolute top-0 right-0 w-1/3 h-full bg-black z-0 hidden lg:block"
      ></div>
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1
              class="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight"
            >
              Reliable
              <span class="inline-block relative"
                >Backups<span
                  class="absolute -bottom-2 left-0 w-full h-1 bg-black"
                ></span
              ></span>
              for Developers
            </h1>
            <p class="text-xl text-gray-700 mb-10">
              A community-driven open-source backup solution built specifically
              for servers and applications. MySQL, PostgreSQL, and file backups
              done right.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="#get-started"
                class="bg-black text-white font-medium py-4 px-8 rounded-md transition-colors duration-300 hover:bg-gray-800 inline-flex items-center"
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
                class="border-2 border-black text-black font-medium py-4 px-8 rounded-md transition-colors duration-300 hover:bg-black hover:text-white inline-flex items-center"
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
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <div
                class="absolute -top-8 -left-8 w-64 h-64 bg-gray-100 rounded-lg"
              ></div>
              <div
                class="absolute -bottom-8 -right-8 w-32 h-32 bg-black rounded-lg"
              ></div>
              <div
                class="relative z-10 bg-white p-6 border border-gray-200 rounded-lg shadow-sm"
              >
                <Shield class="w-16 h-16 mb-4 text-black" />
                <h3 class="text-xl font-semibold mb-2">Built for Security</h3>
                <p class="text-gray-600">
                  Strong encryption protocols and secure connections ensure your
                  data is protected throughout the backup process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-24 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span
            class="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-md mb-4"
            >FEATURES</span
          >
          <h2 class="text-4xl font-bold mb-6">Built for Developers</h2>
          <p class="text-xl text-gray-600">
            Everything you need for reliable server backups without the
            complexity.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-colors duration-300"
          >
            <component :is="feature.icon" class="w-12 h-12 mb-6 text-black" />
            <h3 class="text-xl font-semibold mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Banner -->
    <section class="py-16 bg-black text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-6">Security-First Design</h2>
        <div class="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
          <div
            v-for="point in securityPoints"
            :key="point"
            class="flex flex-col items-center p-4"
          >
            <svg
              class="w-8 h-8 mb-4 text-green-400"
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
            <span class="text-center">{{ point }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section - Timeline Layout -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span
            class="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-md mb-4"
            >HOW IT WORKS</span
          >
          <h2 class="text-4xl font-bold mb-6">Simple & Effective Process</h2>
          <p class="text-xl text-gray-600">
            Follow these steps to get your backups running smoothly
          </p>
        </div>

        <div class="max-w-4xl mx-auto relative">
          <!-- Vertical line for timeline -->
          <div
            class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:translate-x-px hidden md:block"
          ></div>

          <div class="space-y-12">
            <!-- Timeline items -->
            <div
              v-for="(step, index) in howItWorks"
              :key="index"
              class="relative flex flex-col md:flex-row items-center md:items-start"
              :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
            >
              <!-- Step number -->
              <div
                class="absolute md:static left-0 top-0 flex w-8 h-8 md:w-12 md:h-12 rounded-full bg-black text-white font-bold text-lg items-center justify-center z-10 md:mx-8 md:translate-y-2"
              >
                {{ index + 1 }}
              </div>

              <!-- Content -->
              <div class="md:w-5/12 pt-1 pl-12 md:pl-0">
                <div
                  class="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-black transition-colors duration-300"
                >
                  <p class="text-lg text-gray-700">{{ step }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Integration Section -->
    <section class="py-24 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span
            class="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-md mb-4"
            >INTEGRATIONS</span
          >
          <h2 class="text-4xl font-bold mb-6">Connect with Your Workflow</h2>
          <p class="text-xl text-gray-600">
            Integrate Vanguard with your existing tools and processes.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            class="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-colors duration-300"
          >
            <Webhook class="w-12 h-12 mb-6 text-black" />
            <h3 class="text-xl font-semibold mb-3">Webhooks</h3>
            <p class="text-gray-600">
              Send backup data to your own endpoints to trigger custom workflows
              and integrations.
            </p>
          </div>

          <div
            class="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-colors duration-300"
          >
            <Code class="w-12 h-12 mb-6 text-black" />
            <h3 class="text-xl font-semibold mb-3">Powerful API</h3>
            <p class="text-gray-600">
              Comprehensive REST API lets you control every aspect of Vanguard
              programmatically.
            </p>
          </div>

          <div
            class="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-colors duration-300"
          >
            <Globe class="w-12 h-12 mb-6 text-black" />
            <h3 class="text-xl font-semibold mb-3">Multilingual</h3>
            <p class="text-gray-600">
              Available in multiple languages, making Vanguard accessible
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section - Expanded -->
    <section class="py-24 bg-white">
      <div class="container mx-auto px-6">
        <div class="max-w-3xl mx-auto text-center mb-16">
          <span
            class="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded-md mb-4"
            >FAQ</span
          >
          <h2 class="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p class="text-xl text-gray-600">
            Get answers to the most common questions about Vanguard.
          </p>
        </div>

        <div class="max-w-3xl mx-auto divide-y divide-gray-200">
          <div v-for="(item, index) in faqItems" :key="index" class="py-6">
            <button
              @click="toggleQuestion(index)"
              class="w-full flex justify-between items-center focus:outline-none"
            >
              <span class="text-xl font-medium text-gray-900">{{
                item.question
              }}</span>
              <span class="ml-6 flex-shrink-0">
                <svg
                  class="h-6 w-6 transform transition-transform duration-200"
                  :class="{ 'rotate-180': activeQuestion === index }"
                  xmlns="http://www.w3.org/2000/svg"
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
              </span>
            </button>
            <div v-show="activeQuestion === index" class="mt-4 text-gray-600">
              <p v-html="item.answer"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section Preview -->
    <section class="py-24 bg-gray-100">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div class="relative">
            <div
              class="absolute -top-6 -left-6 w-full h-full bg-black rounded-lg"
            ></div>
            <div class="relative bg-gray-100 p-8 rounded-lg">
              <h3 class="text-2xl font-bold mb-4">What is Vanguard?</h3>
              <p class="text-lg text-gray-700">
                Vanguard is a simple, efficient backup software designed for
                developers who need reliable data protection without the
                complexity. Our focus is on creating a lightweight, easy-to-use
                backup solution.
              </p>
            </div>
          </div>
          <div class="relative">
            <div
              class="absolute -top-6 -right-6 w-full h-full bg-gray-200 rounded-lg"
            ></div>
            <div
              class="relative bg-white border border-gray-200 p-8 rounded-lg"
            >
              <h3 class="text-2xl font-bold mb-4">Why Open Source?</h3>
              <p class="text-lg text-gray-700">
                We believe in the power of community-driven development. By
                keeping Vanguard open source, we ensure transparency, encourage
                collaboration, and build trust with our users. Your
                contributions help make Vanguard better for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Get Started Section -->
    <section id="get-started" class="py-24 bg-gray-900 text-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-6">Get Started with Vanguard</h2>
          <p class="text-xl mb-12 text-gray-300">
            Choose your deployment: Cloud-hosted or self-managed
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-black p-8 rounded-lg">
              <h3 class="text-2xl font-bold mb-4">Self-Host Vanguard</h3>
              <p class="text-gray-300 mb-6">
                Full control over your data and infrastructure. Perfect for
                people with specific requirements.
              </p>
              <a
                href="https://docs.vanguardbackup.com/installation"
                class="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors duration-300"
              >
                Installation Guide
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
            </div>
            <div class="bg-gray-800 p-8 rounded-lg">
              <h3 class="text-2xl font-bold mb-4">Try Hosted Version</h3>
              <p class="text-gray-300 mb-6">
                Quick setup with no infrastructure management. Perfect for
                getting started quickly.
              </p>
              <a
                href="https://app.vanguardbackup.com"
                class="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-black transition-colors duration-300"
              >
                Start Now
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
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import {
  Shield,
  Database,
  Clock,
  Cloud,
  BellRing,
  Webhook,
  Code,
  Globe,
} from 'lucide-vue-next'

const activeQuestion = ref(null)

const features = [
  {
    icon: Shield,
    title: 'Secure Backups',
    description:
      'Strong encryption and secure SSH connections protect your data during backup and storage.',
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
    icon: BellRing,
    title: 'Notifications',
    description:
      'Get alerts via Email, Microsoft Teams, Telegram, Pushover, Discord and more.',
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description:
      'Comprehensive API, webhooks, and easy integration with existing workflows.',
  },
]

const securityPoints = [
  'SSH key authentication',
  'Data encryption in transit and at rest',
  'Regular security updates',
  'Secure storage integrations',
]

const howItWorks = [
  'Connect Vanguard to your servers securely via SSH.',
  'Configure your backup sources (databases, files) and destinations.',
  'Set up automated backup schedules via a time interval or with cron.',
  'Configure notifications to Discord, Telegram, Teams, or Pushover.',
  'Monitor backup status through the dashboard or API.',
]

// Expanded FAQ items
const faqItems = [
  {
    question: 'What is Vanguard?',
    answer:
      'Vanguard is an open-source backup solution designed for servers and applications. It provides robust and flexible backup options for developers.',
  },
  {
    question: 'How does Vanguard handle security?',
    answer:
      'Vanguard uses SSH key pairs for server authentication and implements strong encryption for data transfer and storage.',
  },
  {
    question: 'Which cloud storage providers does Vanguard support?',
    answer:
      'Vanguard supports multiple cloud storage providers, including:<br>- Amazon S3<br>- DigitalOcean Spaces<br>- Backblaze B2<br>- Custom S3-compatible storage solutions<br>Additionally, you can use local storage for your backups.',
  },
  {
    question: 'What notification options does Vanguard offer?',
    answer:
      'Vanguard supports sending backup notifications to:<br>- Discord<br>- Telegram<br>- Microsoft Teams<br>- Pushover<br>- Email<br><br>You can configure these to receive alerts for successful backups, failures, or both.',
  },
  {
    question: 'Does Vanguard have an API?',
    answer:
      'Yes, Vanguard offers a comprehensive REST API that allows you to programmatically control all aspects of the backup system. You can create and manage servers, configure backup sources, schedule backups, retrieve backup status, and more through the API. This makes it easy to integrate Vanguard into your existing DevOps workflows and tools.',
  },
  {
    question: 'What languages is Vanguard available in?',
    answer:
      'Vanguard is available in multiple languages including English, German and Danish.',
  },
  {
    question: 'Is Vanguard free to use?',
    answer:
      'Yes, Vanguard is completely free and open-source. You can install and use it on as many servers as you need without any licensing costs. We do offer an optional cloud-hosted version for convenience.',
  },
  {
    question: 'What types of backups does Vanguard support?',
    answer:
      'Vanguard supports backing up:<br>- MySQL databases<br>- PostgreSQL databases<br>- Directory/file backups',
  },
  {
    question: 'How can I integrate Vanguard with my existing workflow?',
    answer:
      'Vanguard offers several integration options:<br>- REST API for programmatic control<br>- Webhooks to trigger custom workflows after backup events<br>- Notification integrations with popular platforms',
  },
  {
    question: 'What are the system requirements?',
    answer:
      'To run Vanguard, you need:<br>- Ubuntu 24.04 or newer (other Linux distributions may work but are not officially supported)<br>- PHP 8.3 or newer<br>- MySQL 5.7+ or PostgreSQL 12+ (for the Vanguard application database)<br>- Composer<br>- Node.js and npm (for building the frontend)',
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
