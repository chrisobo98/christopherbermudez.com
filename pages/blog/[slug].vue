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

// Mobile TOC functionality
const showMobileToc = ref(false);

const toggleMobileToc = () => {
  showMobileToc.value = !showMobileToc.value;
  
  // Lock/unlock body scroll
  if (process.client) {
    if (showMobileToc.value) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
};

// Clean up on component unmount
onUnmounted(() => {
  if (process.client) {
    document.body.style.overflow = '';
  }
});

// Also clean up if user navigates away
watch(showMobileToc, (newVal) => {
  if (process.client) {
    if (newVal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
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
  <div v-if="!post" class="bg-white dark:bg-[#1d1d1d] text-black dark:text-white min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">Post Not Found</h1>
      <p class="text-gray-600 dark:text-gray-400">The blog post you're looking for doesn't exist.</p>
      <NuxtLink to="/blog" class="mt-4 inline-block text-purple-600 hover:text-purple-700">← Back to Blog</NuxtLink>
    </div>
  </div>
  <div v-else class="bg-white dark:bg-[#1d1d1d] text-black dark:text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Breadcrumb Navigation -->
      <nav class="max-w-5xl mx-auto mb-8">
        <NuxtLink 
          :to="localePath('/blog')" 
          class="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition-colors font-medium"
        >
          <Icon name="heroicons:arrow-left" class="w-4 h-4" />
          Back to Blog
        </NuxtLink>
      </nav>

      <!-- Title and Image -->
      <header class="max-w-5xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mt-8 drop-shadow-sm mb-8">
          {{ post?.title || 'Loading...' }}
        </h1>
        <NuxtImg
          v-if="post?.meta?.image"
          :src="post.meta.image"
          alt="Post Cover"
          class="rounded-2xl w-full max-h-[500px] object-cover"
        />

        <p class="mt-2 text-gray-600 dark:text-gray-400">{{ post?.date || '' }}</p>

        <div v-if="post?.categories?.length" class="mt-4 flex gap-3 flex-wrap">
          <NuxtLink
            v-for="category in post?.categories || []"
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
          <ContentRenderer v-if="post" :value="post" />
        </main>

        <!-- Sidebar -->
        <aside class="space-y-8">
          <div v-if="post?.body?.toc?.links?.length">
            <h3 class="text-3xl font-semibold mb-2">Table of Contents</h3>
            <ul class="text-sm space-y-2 border-l border-gray-300 dark:border-gray-600 pl-4">
              <li
                v-for="link in post?.body?.toc?.links || []"
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

    <!-- Mobile TOC Floating Button -->
    <button 
      v-if="post?.body?.toc?.links?.length"
      @click="toggleMobileToc"
      class="mobile-nav-fab lg:hidden"
      aria-label="Table of Contents"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    </button>

    <!-- Mobile TOC Popup -->
    <div 
      v-if="post?.body?.toc?.links?.length"
      :class="['mobile-toc-popup lg:hidden', { 'show': showMobileToc }]"
    >
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold">Table of Contents</h3>
        <button @click="toggleMobileToc" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <ul class="space-y-3">
        <li
          v-for="link in post?.body?.toc?.links || []"
          :key="link.id"
        >
          <a 
            :href="`#${link.id}`" 
            @click="showMobileToc = false"
            class="block py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Backdrop -->
    <div 
      v-if="showMobileToc"
      @click="showMobileToc = false"
      class="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
    ></div>
  </div>
</template>
