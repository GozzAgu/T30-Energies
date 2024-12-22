<template>
  <section class="bg-gray-100 py-32" ref="sectionRef">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Section Title -->
      <div class="text-center mb-12" ref="titleSection">
        <h2 class="text-3xl lg:text-4xl font-bold">
          Empowering <span class="text-orange-400">Energy Excellence</span>
        </h2>
        <p class="text-gray-600 mt-4 text-lg">
          Discover our commitment to innovation and sustainability through every step of our journey.
        </p>
      </div>

      <!-- Content Section -->
      <div class="flex flex-col lg:flex-row items-center lg:space-x-12">
        <!-- Image Section -->
        <div class="lg:w-1/2" ref="imageSection">
          <img
            src="/public/IMG-20241214-WA0001.jpg"
            alt="Energy Operations"
            class="rounded-lg shadow-lg"
          />
        </div>

        <!-- Text Section -->
        <div class="lg:w-1/2 mt-8 lg:mt-0 space-y-6" ref="textSection">
          <h3 class="text-2xl font-bold">
            Driving Change with Reliable Energy Solutions
          </h3>
          <p class="text-gray-700 text-sm">
            At T30 Energies, we are redefining the future of oil and gas with sustainable practices
            and state-of-the-art technology. Join us as we pave the way for a brighter tomorrow.
          </p>
          <ul class="space-y-4 text-sm" ref="listSection">
            <li class="flex items-start">
              <i class="pi pi-check-circle text-orange-400 text-xl mt-1"></i>
              <p class="ml-4 text-gray-700">
                Commitment to sustainability and eco-friendly operations.
              </p>
            </li>
            <li class="flex items-start">
              <i class="pi pi-check-circle text-orange-400 text-xl mt-1"></i>
              <p class="ml-4 text-gray-700">
                Advanced technology to maximize efficiency and reduce waste.
              </p>
            </li>
            <li class="flex items-start">
              <i class="pi pi-check-circle text-orange-400 text-xl mt-1"></i>
              <p class="ml-4 text-gray-700">
                A global team of experts dedicated to energy excellence.
              </p>
            </li>
          </ul>
          <button
            class="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
            ref="buttonSection"
          >
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Refs for the elements to animate
const sectionRef = ref(null);
const titleSection = ref(null);
const imageSection = ref(null);
const textSection = ref(null);
const listSection = ref(null);
const buttonSection = ref(null);

onMounted(() => {
  // Timeline for animating the elements in sequence
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 80%', // Animation starts when the section is 80% in view
      end: 'bottom 20%',
      toggleActions: 'play none none none',
    },
  });

  // Animate the title
  timeline.from(titleSection.value, {
    opacity: 0,
    y: -50,
    duration: 0.8,
    ease: 'power3.out',
  });

  // Animate the image
  timeline.from(imageSection.value, {
    opacity: 0,
    x: -50,
    duration: 0.8,
    ease: 'power3.out',
  }, "-=0.6"); // Overlap with title animation

  // Animate the text section
  timeline.from(textSection.value, {
    opacity: 0,
    x: 50,
    duration: 0.8,
    ease: 'power3.out',
  }, "-=0.6"); // Overlap with image animation

  // Animate the list items
  timeline.from(listSection.value.children, {
    opacity: 0,
    y: 20,
    stagger: 0.2, // Stagger animation for list items
    duration: 0.6,
    ease: 'power3.out',
  });

  // Animate the button
  timeline.from(buttonSection.value, {
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    ease: 'power3.out',
  });
});
</script>