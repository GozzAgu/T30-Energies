<template>
  <section class="bg-gray-900 text-white py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Section Title -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold">
          Our <span class="text-orange-400">Vision and Mission</span>
        </h2>
        <p class="text-gray-400 mt-4 text-lg">
          Leading the energy transition while prioritizing sustainability and innovation.
        </p>
      </div>

      <!-- Vision and Mission Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Vision Section -->
        <div class="bg-gray-800 p-8 rounded-lg shadow-lg" data-gsap="content">
          <h3 class="text-xl font-bold mb-4">Our Vision</h3>
          <p class="text-gray-300 text-sm">
            To become a global leader in delivering sustainable and innovative energy solutions that
            empower communities and businesses for a brighter future.
          </p>
        </div>

        <!-- Mission Section -->
        <div class="bg-gray-800 p-8 rounded-lg shadow-lg" data-gsap="content">
          <h3 class="text-xl font-bold mb-4">Our Mission</h3>
          <p class="text-gray-300 text-sm">
            We are dedicated to driving positive change by investing in clean energy, fostering
            innovation, and creating value for our stakeholders while protecting the planet.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
import gsap from "gsap";

export default {
  name: "VisionMissionSection",
  setup() {
    onMounted(() => {
      gsap.from("[data-gsap='content']", {
        opacity: 0,
        x: -50,
        stagger: 0.3,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-gsap='content']",
          start: "top 80%",
        },
      });
    });
  },
};
</script>

<style scoped>
/* Optional: Add hover effects for interactivity */
.bg-gray-800:hover {
  transform: translateY(-5px);
  transition: all 0.3s ease-in-out;
}
</style>