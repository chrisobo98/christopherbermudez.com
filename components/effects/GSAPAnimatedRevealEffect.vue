<template>
    <div ref="heroTextContainer" class="hero-text">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
    delay: {
        type: Number,
        default: 0 // Default delay if none is provided
    },
    duration: {
        type: Number,
        default: 1.8 // Default duration if none is provided
    }
});

const heroTextContainer = ref<HTMLElement | null>(null);

onMounted(() => {
    if (heroTextContainer.value) {
        gsap.fromTo(heroTextContainer.value, {
            autoAlpha: 0,
            y: 50
        }, {
            duration: props.duration,
            delay: props.delay,
            autoAlpha: 1,
            y: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: heroTextContainer.value,
                start: "top bottom",
                toggleActions: 'play none none none',
                markers: false
            }
        });
    }
});
</script>

<style scoped>
.hero-text {
    opacity: 0;
}
</style>
