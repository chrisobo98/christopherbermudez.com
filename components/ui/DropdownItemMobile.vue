<template>
  <!-- DropdownItemMobile -->
  <NuxtLink :to="href" class="flex text-base items-center gap-3 px-4 py-2">
    <Icon :name="icon" class="w-5 h-5 text-purple-600" />
    <p>{{ title }}</p>
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
