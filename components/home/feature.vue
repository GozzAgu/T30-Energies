<template>
  <section class="bg-white py-32 text-gray-900">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Section Heading -->
      <div class="text-center mb-12" ref="headingSection">
        <h2 class="text-3xl lg:text-4xl font-bold">
          Why Choose <span class="text-orange-400">T30 Energies?</span>
        </h2>
        <p class="text-gray-600 mt-4 text-lg">
          Explore our core values and what makes us stand out in the energy industry.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref="featuresSection">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="flex items-start space-x-4"
          :ref="el => (featureRefs[index] = el)"
        >
          <div class="flex items-center justify-center bg-orange-100 p-4 rounded-full h-16 w-16">
            <Icon :name="feature.icon" class="text-orange-400 text-3xl" />
          </div>
          <div>
            <h3 class="text-xl font-bold">{{ feature.title }}</h3>
            <p class="text-gray-600 mt-2 text-xs">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const headingSection = ref(null);
const featuresSection = ref(null);
const featureRefs = ref([]); // To store references to feature cards

onMounted(() => {
  // Animate the heading section
  gsap.from(headingSection.value, {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: headingSection.value,
      start: 'top 80%', // Trigger animation when section is 80% visible
    },
  });

  // Animate the feature cards
  featureRefs.value.forEach((el, index) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.2, // Stagger animations for cards
      ease: 'power3.out',
      scrollTrigger: {
        trigger: featuresSection.value,
        start: 'top 85%', // Trigger animation when section is 85% visible
      },
    });
  });
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
