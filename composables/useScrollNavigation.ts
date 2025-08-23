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

  let ticking = false;
  
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        let foundSection = false;
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        const midPoint = viewportHeight / 2;
        
        for (let i = 0; i < sections.length; i++) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const offsetTop = section.offsetTop;
            const offsetHeight = section.offsetHeight;
            
            if (scrollY + midPoint >= offsetTop && scrollY + midPoint < offsetTop + offsetHeight) {
              currentSection.value = sections[i];
              foundSection = true;
              break;
            }
          }
        }
        if (!foundSection) {
          currentSection.value = sections[0];
        }
        ticking = false;
      });
      ticking = true;
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
