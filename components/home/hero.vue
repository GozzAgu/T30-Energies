<template>
  <section ref="box" class="bg-gray-900 text-white relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center opacity-75"
      style="background-image: url('/hero.webp');"
    ></div>
    <div class="absolute inset-0 bg-black bg-opacity-60"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center lg:text-left">
      <div
        class="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12"
      >
        <div ref="content" class="lg:w-1/2 space-y-6 opacity-0">
          <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
            Reliable Energy for a <span class="text-orange-400">Sustainable Future</span>
          </h1>
          <p class="text-gray-300 text-lg">
            At T30 Energies, we provide innovative oil and gas solutions to meet today's challenges
            while building a greener tomorrow.
          </p>
          <div class="flex space-x-4">
            <NuxtLink
              to="/about"
              class="px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring focus:ring-orange-400"
            >
              Learn More
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="px-6 py-3 text-gray-200 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring focus:ring-gray-500"
            >
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';

const box = ref(null);
const content = ref(null);

onMounted(() => {
  const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
  timeline
    .fromTo(
      box.value,
      { scale: 1.2 },
      { scale: 1, duration: 2, ease: "power2.out" }
    )
    .fromTo(
      content.value,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 },
      "<"
    );
});
</script>