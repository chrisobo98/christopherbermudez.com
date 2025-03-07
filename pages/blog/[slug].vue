<script setup>
const route = useRoute();
const slug = route.params.slug;

const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("content").path(`/blog/${slug}`).first();
});

// Fetch all blog posts for the sidebar
const { data: posts } = await useAsyncData("blog-list", () => {
  return queryCollection("content").all();
});
</script>

<template>
  <div class="bg-white dark:bg-[#1d1d1d]">
    <div class="w-full mx-auto">
      <div class="container mx-auto p-8">
        <NuxtImg
          :src="`${post.meta.image}`"
          alt="Build a Site Blog"
          class="w-full h-full"
        />

        <h1
          class="text-4xl md:text-5xl mt-8 font-bold drop-shadow-lg text-black dark:text-white"
        >
          {{ post.title }}
        </h1>
        <p class="text-lg mt-2">{{ post.date }}</p>

        <!-- Main Content and Sidebar -->
        <div class="flex flex-col md:flex-row gap-12 mt-12">
          <!-- Blog Content -->
          <main class="w-full md:w-3/4">
            <article
              v-if="post"
              class="prose lg:prose-xl dark:prose-invert mx-auto space-y-8"
            >
              <ContentRenderer :value="post" />
            </article>
            <p v-else class="text-center text-lg font-medium">Loading...</p>
          </main>

          <!-- Sidebar -->
          <aside
            class="w-full md:w-1/4 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md"
          >
            <h3 class="text-xl font-bold mb-4">More Posts</h3>
            <ul class="space-y-3">
              <li v-for="otherPost in posts" :key="otherPost.slug">
                <NuxtLink
                  :to="otherPost.path"
                  class="text-blue-500 hover:underline block"
                >
                  {{ otherPost.title }}
                </NuxtLink>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>
