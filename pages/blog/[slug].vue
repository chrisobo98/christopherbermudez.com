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


useHead(() => {
  const seo = post.value?.meta?.seo || post.value?.meta || {};

  return {
    title: seo.title,
    meta: [
      {
        name: 'description',
        content: seo.description,
      },
      {
        property: 'og:title',
        content: seo.title,
      },
      {
        property: 'og:description',
        content: seo.description,
      }
    ],
  };
});
</script>

<template>
  <div class="bg-white dark:bg-[#1d1d1d] text-black dark:text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Title and Image -->
      <header class="max-w-5xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mt-8 drop-shadow-sm mb-8">
          {{ post.title }}
        </h1>
        <NuxtImg
          v-if="post?.meta?.image"
          :src="post.meta.image"
          alt="Post Cover"
          class="rounded-2xl w-full max-h-[500px] object-cover"
        />

        <p class="mt-2 text-gray-600 dark:text-gray-400">{{ post.date }}</p>

        <div v-if="post.categories?.length" class="mt-4 flex gap-3 flex-wrap">
          <NuxtLink
            v-for="category in post.categories"
            :key="category"
            :to="`/categories/${category}`"
            class="text-sm px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-primary hover:text-white transition"
          >
            {{ category }}
          </NuxtLink>
        </div>
      </header>

      <!-- Content and Sidebar -->
      <div class="grid grid-cols-1 lg:grid-cols-[96px_1fr_300px] gap-8 mt-12">
        <!-- Share Buttons (Left Column) -->
        <div class="hidden lg:flex flex-col gap-4 justify-start items-end">
          <!-- <a
            :href="`https://twitter.com/share?text=${post.title}&url=${$config.public.siteUrl}${post.path}`"
            target="_blank"
            class="text-blue-500 hover:text-blue-700"
          >X</a>
          <a
            :href="`https://www.facebook.com/sharer/sharer.php?u=${$config.public.siteUrl}${post.path}`"
            target="_blank"
            class="text-blue-700 hover:text-blue-900"
          >Facebook</a>
          <a
            :href="`https://www.linkedin.com/shareArticle?url=${$config.public.siteUrl}${post.path}&title=${post.title}`"
            target="_blank"
            class="text-blue-600 hover:text-blue-800"
          >LinkedIn</a> -->
        </div>

        <!-- Blog Content -->
        <main class="prose dark:prose-invert max-w-full prose-lg text-base">
          <ContentRenderer :value="post" />
        </main>

        <!-- Sidebar -->
        <aside class="space-y-8">
          <div v-if="post.body?.toc?.links?.length">
            <h3 class="text-3xl font-semibold mb-2">Table of Contents</h3>
            <ul class="text-sm space-y-2 border-l border-gray-300 dark:border-gray-600 pl-4">
              <li
                v-for="link in post.body.toc.links"
                :key="link.id"
              >
                <a :href="`#${link.id}`" class="hover:underline">{{ link.text }}</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <!-- Related Articles -->
      <div v-if="posts" class="mt-16">
        <h2 class="text-2xl font-bold mb-6">Related Articles</h2>
        <div class="grid gap-6 md:grid-cols-3">
          <div
            v-for="article in posts"
            :key="article.path"
            class="rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition"
          >
            <NuxtLink :to="article.path">
              <NuxtImg
                v-if="article.image"
                :src="article.image"
                class="rounded-md mb-4 h-40 w-full object-cover"
              />
              <h3 class="font-semibold text-lg">{{ article.title }}</h3>
              <p class="text-sm mt-2 text-gray-600 dark:text-gray-400">
                {{ article.description || '' }}
              </p>
              <p class="mt-1 text-xs text-gray-500">{{ article.publishedAt }}</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
