<template>
    <div ref="container">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const container = ref<HTMLElement | null>(null);

onMounted(() => {
    if (container.value) {
        // This specifically targets elements with the 'service-card' class within the container
        const serviceCards = container.value.querySelectorAll('.service-card');

        // Check if there are any service cards, if not, fall back to direct children
        const elements = serviceCards.length > 0 ? serviceCards : container.value.children;

        gsap.from(elements, {
            scrollTrigger: {
                trigger: container.value,
                start: "top bottom", // Animation triggers when the top of container hits the bottom of the viewport
                toggleActions: "play none none none",
                markers: false // Set to true if you need to debug the trigger points
            },
            opacity: 0,
            y: 20,
            stagger: 0.2, // Ensures stagger effect for service cards
            duration: 1.0, // Duration of the animation for each element
            ease: 'power1.out'
        });
    }
});
</script>
