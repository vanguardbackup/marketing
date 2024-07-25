<template>
  <section id="faq" class="bg-black text-white py-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl sm:text-5xl font-medium mb-6 text-center">Frequently Asked Questions (FAQ)</h1>

      <div class="max-w-3xl mx-auto space-y-6 md:mt-20">
        <div v-for="(item, index) in faqItems" :key="index" class="border border-gray-800">
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
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

      <div class="mt-16 text-center">
        <a
            href="https://docs.vanguardbackup.com/frequently-asked-questions"
            class="bg-white text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:bg-gray-200 transform inline-flex items-center justify-center"
        >
          More FAQs in Documentation
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeQuestion: null,
      faqItems: [
        {
          question: "What is Vanguard?",
          answer: "Vanguard is an open-source backup solution designed for servers and applications. It provides robust and flexible backup options for developers."
        },
        {
          question: "How does Vanguard handle security?",
          answer: "Vanguard prioritizes security by using SSH key pairs for server authentication and implementing strong encryption for data transfer and storage. We also follow best practices for secure coding."
        },
        {
          question: "What types of backups does Vanguard support?",
          answer: "Vanguard supports various types of backups, including:<br>- MySQL and PostgreSQL database backups<br>- File system backups"
        },
        {
          question: "Can I schedule automated backups?",
          answer: "Yes, Vanguard allows you to set up custom cron schedules for flexible automated backups. This feature enables you to create backup tasks that run at specified intervals, ensuring your data is consistently protected."
        },
        {
          question: "Which cloud storage providers does Vanguard support?",
          answer: "Vanguard supports multiple cloud storage providers, including:<br>- Amazon S3<br>- Custom S3-compatible storage solutions<br>Additionally, you can use local storage for your backups."
        }
      ]
    };
  },
  methods: {
    toggleQuestion(index) {
      if (this.activeQuestion === index) {
        this.activeQuestion = null;
      } else {
        this.activeQuestion = index;
      }
    }
  }
};
</script>