<script setup>
const route = useRoute();
const slug = route.params.slug;

const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('content').path(`/blog/${slug}`).first();
});

// Fetch all blog posts for the sidebar
const { data: posts } = await useAsyncData("blog-list", () => {
  return queryCollection('content').all();
});
</script>

<template>
  <div class="w-9/12 mx-auto">
  <div class="container mx-auto p-8 ">
    <!-- Hero Header with Background Image -->
    <div 
      class="relative w-full py-12 flex items-center justify-center text-center text-white" 
      :style="{ backgroundImage: `url(${post?.image || '/default-header.jpg'})` }"
      style="background-size: cover; background-position: center;"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
      <div class="relative z-10 max-w-2xl px-4">
        <h1 class="text-5xl font-bold drop-shadow-lg">{{ post.title }}</h1>
        <p class="text-lg text-gray-200 mt-2">{{ post.date }}</p>
      </div>
    </div>

    <!-- Main Content and Sidebar -->
    <div class="flex flex-col md:flex-row gap-12 mt-12">
      <!-- Blog Content -->
      <main class="w-full md:w-3/4">
        <article v-if="post" class="prose lg:prose-xl dark:prose-invert mx-auto space-y-8">
          <ContentRenderer :value="post" />
        </article>
        <p v-else class="text-center text-lg font-medium">Loading...</p>
      </main>

      <!-- Sidebar -->
      <aside class="w-full md:w-1/4 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 class="text-xl font-bold mb-4">More Posts</h3>
        <ul class="space-y-3">
          <li v-for="otherPost in posts" :key="otherPost.slug">
            <NuxtLink :to="otherPost.path" class="text-blue-500 hover:underline block">
              {{ otherPost.title }}
            </NuxtLink>
          </li>
        </ul>
      </aside>
    </div>
  </div>
  </div>
</template>
