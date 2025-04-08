<template>
  <!-- FeaturedDropdownItem -->
  <NuxtLink
    :to="href"
    class="flex items-start gap-4 p-3 hover:bg-purple-100 dark:hover:bg-gray-700 rounded-lg"
  >
    <div class="flex-1">
      <div class="font-semibold">{{ title }}</div>
      <p class="text-sm text-gray-600 dark:text-gray-300">{{ description }}</p>
    </div>
    <Icon name="heroicons:arrow-right" class="w-5 h-5 text-purple-600 mt-1" />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: String,
  title: String,
  description: String,
  icon: String, // Add icon prop
});
</script>
