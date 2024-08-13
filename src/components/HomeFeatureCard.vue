<template>
  <div
    class="bg-black p-8 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
  >
    <component :is="feature.icon" class="w-16 h-16 mx-auto mb-6 text-white" />
    <h3 class="text-xl font-medium mb-4">{{ feature.title }}</h3>
    <p class="text-gray-400">{{ feature.description }}</p>
  </div>
</template>

<script setup>
defineProps({
  feature: {
    type: Object,
    required: true,
  },
})
</script>
