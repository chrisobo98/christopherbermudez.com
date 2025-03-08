<script setup>
const { data: posts } = await useAsyncData(
  "posts",
  async () => {
    return queryCollection("content").all();
  },
  { server: true }
);
</script>

<template>
  <section class="py-24 bg-white dark:bg-[#1d1d1d]">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="flex justify-center flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between gap-8"
      >
        <div class="w-full flex flex-col lg:w-2/5">
          <div class="block lg:text-left text-center">
            <h2 class="text-4xl font-bold leading-[3.25rem] mb-5">
              Our latest <span class="text-purple-600">blogs</span>
            </h2>
            <p class="mb-10 max-lg:max-w-xl max-lg:mx-auto">
              Explore insightful articles, expert tips, and the latest trends.
            </p>
          </div>
        </div>

        <div class="w-full lg:w-3/5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              v-for="post in posts"
              :key="post.path"
              class="group bg-white dark:bg-[#2a2a2a] p-5 rounded-xl border border-purple-600 text-black dark:text-white shadow-md hover:shadow-lg transition"
            >
              <NuxtLink :to="post.path" class="block">
                <NuxtImg
                  :src="post.meta.image"
                  :alt="post.title"
                  class="rounded-2xl h-48 w-96 object-cover my-4"
                />
                <h3
                  class="text-xl font-medium leading-8 mb-2 group-hover:text-purple-400"
                >
                  {{ post.title }}
                </h3>
                <p class="leading-6 transition-all duration-500 mb-4">
                  {{ post.description }}
                </p>
                <p
                  class="text-purple-400 font-bold leading-6 transition-all duration-500 mb-4"
                >
                  Read more →
                </p>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
