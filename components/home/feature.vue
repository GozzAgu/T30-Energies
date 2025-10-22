<template>
  <section class="bg-gradient-to-b from-gray-50 to-white py-20 text-gray-900">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Section Heading -->
      <div class="text-center mb-16" ref="headingSection">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Why Choose <span class="text-orange-500">T30 Energies?</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our core values and what makes us stand out in the energy industry.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref="featuresSection">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
          :ref="el => (featureRefs[index] = el)"
        >
          <!-- Hover Background Effect -->
          <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <!-- Icon Container with Animation -->
          <div class="relative flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50 p-4 rounded-2xl h-16 w-16 mb-6 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
            <Icon :name="feature.icon" class="text-orange-600 text-3xl group-hover:text-orange-700 transition-colors duration-300" />
          </div>
          
          <!-- Content -->
          <div class="relative">
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
              {{ feature.description }}
            </p>
          </div>
          
          <!-- Decorative Element -->
          <div class="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

const headingSection = ref(null);
const featuresSection = ref(null);
const featureRefs = ref([]); // To store references to feature cards

onMounted(() => {
  // Temporarily disabled GSAP animations
  // Elements will be visible by default
});

const features = [
  {
    icon: 'mdi:leaf',
    title: 'Sustainability',
    description: 'We prioritize environmentally friendly practices to ensure a greener future for all.',
  },
  {
    icon: 'heroicons-outline:light-bulb',
    title: 'Innovation',
    description: 'Cutting-edge technology and solutions that drive efficiency and growth.',
  },
  {
    icon: 'mdi:earth',
    title: 'Global Reach',
    description: 'Delivering energy solutions to diverse markets across the globe.',
  },
  {
    icon: 'mdi:account-group',
    title: 'Expert Team',
    description: 'A team of seasoned professionals committed to excellence and innovation.',
  },
  {
    icon: 'heroicons-outline:shield-check',
    title: 'Safety First',
    description: 'Adhering to the highest safety standards in all our operations.',
  },
  {
    icon: 'mdi:leaf',
    title: 'Eco-Friendly',
    description: 'Dedicated to reducing our environmental footprint and promoting sustainability.',
  },
];
</script>
