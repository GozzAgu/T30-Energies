<template>
  <section class="bg-gradient-to-b from-white to-gray-50 py-20" ref="sectionRef">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Section Title -->
      <div class="text-center mb-16" ref="titleSection">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Empowering <span class="text-orange-500">Energy Excellence</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our commitment to innovation and sustainability through every step of our journey.
        </p>
      </div>

      <!-- Content Section -->
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Image Section -->
        <div class="lg:w-1/2 relative group" ref="imageSection">
          <div class="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
          <div class="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/IMG-20241214-WA0002.jpg"
              alt="Energy Operations"
              class="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
            />
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        <!-- Text Section -->
        <div class="lg:w-1/2 space-y-6" ref="textSection">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-100 mb-4">
            <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-3xl lg:text-4xl font-bold text-gray-900">
            Driving Change with Reliable Energy Solutions
          </h3>
          <p class="text-lg text-gray-600 leading-relaxed">
            At T30 Energies, we are redefining the future of oil and gas with sustainable practices
            and state-of-the-art technology. Join us as we pave the way for a brighter tomorrow.
          </p>
          <ul class="space-y-4" ref="listSection">
            <li class="flex items-start gap-3">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">Sustainability First</h4>
                <p class="text-gray-600 text-sm">
                  Commitment to eco-friendly operations and environmental responsibility
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">Advanced Technology</h4>
                <p class="text-gray-600 text-sm">
                  Cutting-edge solutions to maximize efficiency and minimize waste
                </p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">Expert Team</h4>
                <p class="text-gray-600 text-sm">
                  Global professionals dedicated to delivering energy excellence
                </p>
              </div>
            </li>
          </ul>
          <div class="pt-4" ref="buttonSection">
            <NuxtLink
              to="/about"
              class="inline-flex items-center gap-2 px-8 py-4 text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
// Temporarily disable GSAP animations
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// Refs for the elements to animate
const sectionRef = ref(null);
const titleSection = ref(null);
const imageSection = ref(null);
const textSection = ref(null);
const listSection = ref(null);
const buttonSection = ref(null);

onMounted(() => {
  // Temporarily disabled GSAP animations
  // Elements will be visible by default
});
</script>