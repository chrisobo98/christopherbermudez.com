<template>
  <BaseSection
    id="blog-section"
    class="py-16 lg:py-24"
    aria-labelledby="blog-heading"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2
          id="blog-heading"
          class="text-3xl lg:text-4xl font-bold mb-6"
        >
          {{ $t("home.blog.title") }}
        </h2>
        <p class="text-xl max-w-3xl mx-auto mb-8">
          {{ $t("home.blog.subtitle") }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <article
          v-for="post in latestPosts"
          :key="post._path"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
          @click="navigateToPost(post._path)"
        >
          <div class="relative overflow-hidden">
            <NuxtImg
              v-if="post.image"
              provider="cloudinary"
              :src="post.image"
              :alt="post.title"
              class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              format="webp"
              quality="80"
            />
            <div v-else class="w-full h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
              <Icon name="mdi:blog" class="w-16 h-16 text-white" />
            </div>
            <div class="absolute top-4 right-4">
              <span class="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg shadow-purple-500/25">
                {{ formatDate(post.date) }}
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in post.tags?.slice(0, 3)"
                :key="tag"
                class="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-700"
              >
                {{ tag }}
              </span>
            </div>
            
            <NuxtLink
              :to="localePath(post._path)"
              class="block"
            >
              <h3 class="text-xl font-bold mb-3 line-clamp-2 text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                {{ post.title }}
              </h3>
            </NuxtLink>
            
            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {{ post.description }}
            </p>
            
            <NuxtLink
              :to="localePath(post._path)"
              class="inline-flex items-center gap-2 text-purple-500 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded"
            >
              {{ $t("home.blog.readMore") }}
              <Icon name="heroicons:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </article>
      </div>

      <div class="text-center">
        <NuxtLink
          :to="localePath('/blog')"
          class="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-colors duration-300 font-semibold text-lg"
        >
          {{ $t("home.blog.viewAll") }}
          <Icon name="heroicons:arrow-right" class="w-5 h-5" />
        </NuxtLink>
      </div>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import BaseSection from "../ui/BaseSection.vue";

const { t } = useI18n();
const localePath = useLocalePath();

// Static blog posts data with correct paths and images
const latestPosts = ref([
  {
    _path: '/blog/how-to-optimize-your-website-for-ai-search-engines',
    title: 'How to Optimize Your Website for AI Search Engines: The Complete 2025 Guide',
    description: 'Stop getting left behind by AI search engines like ChatGPT and Perplexity. Learn the exact strategies to get your business mentioned in AI-powered search results and voice assistants.',
    date: 'August 21, 2025',
    image: 'v1755832156/Green_and_Yellow_3D_Illustrative_Digital_Marketing_Blog_Banner_fa21dm.png',
    tags: ['AI SEO', 'ChatGPT SEO', 'Voice Search']
  },
  {
    _path: '/blog/orlando-vs-clermont-seo-strategy',
    title: 'Orlando vs Clermont: Where Should Your Business Focus Its SEO?',
    description: 'Should you compete with Orlando\'s SEO bloodbath or dominate Clermont\'s goldmine? A Central Florida developer\'s brutally honest take on local SEO strategy.',
    date: 'August 10, 2025',
    image: 'v1744048968/about-christopher-bermudez-central-florida-leading-freelancer_cluuum.png',
    tags: ['Local SEO', 'Clermont', 'Orlando']
  },
  {
    _path: '/blog/ai-deregulation-big-beautiful-bill',
    title: 'Florida\'s AI Scene Unleashed: What the New Bill Means for Orlando Developers',
    description: 'While everyone was distracted, a massive bill just passed. Tucked deep inside are some game-changing clauses that just took the brakes off AI development in America.',
    date: 'July 13, 2025',
    image: 'v1752454705/bigbeautifulbil_zpcwlj.jpg',
    tags: ['AI', 'Tech Policy', 'Innovation']
  }
]);

// Navigate to blog post function
const navigateToPost = (path: string) => {
  navigateTo(localePath(path));
};

// Format date function
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>