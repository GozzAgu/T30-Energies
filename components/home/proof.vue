<template>
  <section class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold mb-4">
          Our <span class="text-orange-400">Vision & Mission</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
        <p class="text-gray-300 text-lg max-w-3xl mx-auto">
          Leading the energy transition while prioritizing sustainability and innovation.
        </p>
      </div>

      <!-- Vision and Mission Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Vision Section -->
        <div class="relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-700/50 hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2" data-gsap="content">
          <div class="absolute top-6 left-6 w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
          <div class="mt-20">
            <h3 class="text-2xl font-bold mb-4 text-orange-400">Our Vision</h3>
            <p class="text-gray-300 leading-relaxed">
              To become a global leader in delivering sustainable and innovative energy solutions that
              empower communities and businesses for a brighter future.
            </p>
          </div>
        </div>

        <!-- Mission Section -->
        <div class="relative bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-gray-700/50 hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2" data-gsap="content">
          <div class="absolute top-6 left-6 w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
          </div>
          <div class="mt-20">
            <h3 class="text-2xl font-bold mb-4 text-orange-400">Our Mission</h3>
            <p class="text-gray-300 leading-relaxed">
              We are dedicated to driving positive change by investing in clean energy, fostering
              innovation, and creating value for our stakeholders while protecting the planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
// Temporarily disable GSAP animations
// import gsap from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Temporarily disabled GSAP animations
  // Cards will be visible by default
});
</script>

<style scoped>
/* Optional: Add hover effects for interactivity */
.bg-gray-800:hover {
  transform: translateY(-5px);
  transition: all 0.3s ease-in-out;
}
</style>