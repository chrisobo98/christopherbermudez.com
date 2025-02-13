<script setup>
const { data: posts } = await useAsyncData(async () => {
  return queryCollection("content").all();
});

console.log("Fetched Posts:", posts.value); // Debugging
</script>

<template>
  <section>
    <div class="py-12 bg-white dark:bg-[#1d1d1d]">
      <div class="mx-auto w-4/6">
        <h1 class="text-4xl font-bold mb-4">Blog</h1>
        <ul v-if="posts?.length">
          <li v-for="post in posts" :key="post.path" class="mb-4">
            <NuxtLink :to="post.path" class="text-blue-500 hover:underline">
              {{ post.title }}
            </NuxtLink>
            <p class="text-gray-600">{{ post.description }}</p>
          </li>
        </ul>
        <p v-else>No blog posts found.</p>
      </div>
    </div>
  </section>
</template>
