// plugins/useScrollNavigation.ts

import { ref, onMounted, onUnmounted } from 'vue';

export function useScrollNavigation(sections: string[]) {
  const currentSection = ref('');

  const scrollToNextSection = () => {
    const currentIndex = sections.indexOf(currentSection.value);
    const nextIndex = (currentIndex + 1) % sections.length;
    const nextSection = document.getElementById(sections[nextIndex]);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onScroll = () => {
    let foundSection = false;
    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection.value = sections[i];
          foundSection = true;
          break;
        }
      }
    }
    if (!foundSection) {
      currentSection.value = sections[0]; // Default to hero section if no other section is found
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', onScroll);
    onScroll();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
  });

  return {
    currentSection,
    scrollToNextSection,
    scrollToSection,
  };
}
