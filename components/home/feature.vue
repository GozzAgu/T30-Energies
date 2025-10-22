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
          class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          :ref="el => (featureRefs[index] = el)"
        >
          <div class="flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50 p-4 rounded-2xl h-16 w-16 mb-6 shadow-md">
            <Icon :name="feature.icon" class="text-orange-600 text-3xl" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
          <p class="text-gray-600 leading-relaxed text-sm">
            {{ feature.description }}
          </p>
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
