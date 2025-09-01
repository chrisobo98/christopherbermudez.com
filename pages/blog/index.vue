<script setup>
const { t } = useI18n();

useHead({
  title: t("blog.metadata.title"),
  meta: [
    {
      name: "description",
      content: t("blog.metadata.description"),
    },
    {
      property: "og:title",
      content: t("blog.metadata.og_title"),
    },
    {
      property: "og:description",
      content: t("blog.metadata.og_description"),
    },
  ],
});

const { data: posts } = await useAsyncData(
  "posts",

  async () => {
    const allPosts = await queryCollection("content").all();

    // Sort posts by date from newest to oldest
    const sortedPosts = allPosts.sort((a, b) => {
      const dateA = new Date(a.meta?.date || a.date || 0);
      const dateB = new Date(b.meta?.date || b.date || 0);
      return dateB - dateA; // Newest first
    });

    return {
      latestPosts: sortedPosts.slice(0, 2), // First 2 posts (newest)
      remainingPosts: sortedPosts.slice(2), // Rest of the posts
    };
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
              {{ $t("blog.title") }}
              <span class="text-purple-600">{{ $t("blog.titleColored") }}</span>
            </h2>
            <p class="mb-10 max-lg:max-w-xl max-lg:mx-auto">
              {{ $t("blog.description") }}
            </p>
          </div>
        </div>

        <div class="w-full lg:w-3/5 my-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              v-for="post in posts.latestPosts"
              :key="post.path"
              class="group bg-white dark:bg-[#2a2a2a] p-5 rounded-xl border border-purple-600 text-black dark:text-white shadow-md hover:shadow-lg transition"
            >
              <NuxtLink :to="localePath(post.path)" class="block">
                <NuxtImg
                  provider="cloudinary"
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
      <!-- Remaining Posts Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="post in posts.remainingPosts"
          :key="post.path"
          class="group cursor-pointer transition-all duration-500 p-5 bg-white dark:bg-[#2a2a2a] rounded-2xl shadow-sm border border-transparent hover:border-purple-600"
        >
          <NuxtLink :to="localePath(post.path)" class="block h-full">
            <div class="flex gap-6 flex-col lg:flex-row">
              <div class="relative w-full lg:w-40 h-48 lg:h-40 mx-auto">
                <NuxtImg
                  provider="cloudinary"
                  :src="post.meta.image"
                  :alt="post.title"
                  class="rounded-xl w-full h-full object-cover"
                />
              </div>
              <div class="block flex-1">
                <div
                  class="border-b border-gray-200 dark:border-gray-700 mb-6 pb-6"
                >
                  <h4
                    class="text-xl text-gray-900 dark:text-white font-medium leading-8"
                  >
                    {{ post.title }}
                  </h4>
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="block">
                      <h6
                        class="text-sm text-gray-900 dark:text-white font-medium mb-1"
                      >
                        By: {{ post.meta.author }}
                      </h6>
                      <span class="text-sm text-gray-500 dark:text-gray-400">
                        {{ post.meta.date }}
                      </span>
                    </div>
                  </div>
                  <span
                    class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-purple-600"
                  >
                    {{ post.tags?.[0] }}
                  </span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
