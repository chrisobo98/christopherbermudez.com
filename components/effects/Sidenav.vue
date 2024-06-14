<template>
  <div class="fixed top-half left-2 md:left-2 lg:left-4 transform -translate-y-1/2 z-50">
    <ul class="space-y-4">
      <li v-for="section in sections" :key="section.id">
        <a
          :href="`#${section.id}`"
          :name="`${section.id}`"
          :aria-label="`${section.id}`"
          :class="['block w-4 h-4 rounded-full', currentSection === section.id ? 'bg-violet-500' : 'bg-gray-600']"
          @click.prevent="scrollToSection(section.id)"
        ></a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const sections = ref([
  { id: 'hero-section' },
  { id: 'my-story-section' },
  { id: 'services-section' },
  { id: 'portfolio-section' },
  { id: 'contact-section' },
  { id: 'footer-section' } // Ensure the footer section is included
]);

const currentSection = ref('');

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      currentSection.value = id; // Ensure the current section is updated
    }, 600); // Delay to match the smooth scroll
  }
};

const onScroll = () => {
  let foundSection = false;
  for (let i = 0; i < sections.value.length; i++) {
    const section = document.getElementById(sections.value[i].id);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection.value = sections.value[i].id;
        foundSection = true;
        break;
      }
    }
  }

  if (!foundSection) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
      // Near the bottom of the page
      currentSection.value = 'footer-section';
    } else {
      currentSection.value = sections.value[0].id; // Default to hero section if no other section is found
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
.fixed {
  position: fixed;
}
.top-half {
  top: 50%;
}
.left-4 {
  left: 1rem;
}
.left-2 {
  left: 0.5rem;
}
@media (max-width: 768px) {
  .top-half {
    top: 50%;
  }
  .left-4 {
    left: 0.5rem;
}
}
.transform {
  transform: translateY(-50%);
}
.z-50 {
  z-index: 50;
}
.space-y-4 > :not(:last-child) {
  margin-bottom: 1rem;
}
.rounded-full {
  border-radius: 9999px;
}
.block {
  display: block;
}
.w-4 {
  width: 1rem;
}
.h-4 {
  height: 1rem;
}
.bg-gray-600 {
  background-color: #4b5563;
}
.bg-violet-500 {
  background-color: #8b5cf6;
}
</style>
