<template>
  <span ref="textElement" style="overflow-wrap: break-word">{{ currentText }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  texts: {
    type: Array as () => string[],
    required: true,
  },
  speed: {
    type: Number,
    default: 100,
  },
  delay: {
    type: Number,
    default: 2000,
  },
});

const currentText = ref('');
let textIndex = 0;
let charIndex = 0;
let typingTimeout: ReturnType<typeof setTimeout> | undefined;

const typeWriter = () => {
  if (charIndex < props.texts[textIndex].length) {
    currentText.value += props.texts[textIndex].charAt(charIndex);
    charIndex++;
    typingTimeout = setTimeout(typeWriter, props.speed);
  } else {
    setTimeout(() => {
      currentText.value = '';
      charIndex = 0;
      textIndex = (textIndex + 1) % props.texts.length;
      typingTimeout = setTimeout(typeWriter, props.speed);
    }, props.delay);
  }
};

onMounted(() => {
  typingTimeout = setTimeout(typeWriter, props.speed);
});

onUnmounted(() => {
  clearTimeout(typingTimeout);
});
</script>

<style scoped>
/* No additional styles needed */
</style>