<template>
  <section class="bg-gray-50 text-gray-800">
    <div class="max-w-6xl mx-auto py-16 px-6 md:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12" ref="storySection">
        <!-- Text Section -->
        <div>
          <h2 class="text-3xl font-bold text-gray-900" ref="storyTitle">Our Story</h2>
          <p class="mt-4 text-gray-600 leading-relaxed text-sm" ref="storyText1">
            T30 Energies Limited is a forward-thinking energy company committed to pioneering solutions 
            for the domestic and industrial use of natural gas in Nigeria. With a focus on gas domestication, 
            optimization, and the promotion of clean energy alternatives, T30 Energies aims to revolutionize 
            the way energy is consumed across the country, providing clean, efficient, and sustainable 
            energy solutions to homes, businesses, and the transportation sector.
          </p>
          <p class="mt-6 text-gray-600 leading-relaxed text-sm" ref="storyText2">      
            Leveraging Nigeria’s vast natural gas reserves, T30 Energies is dedicated to the full utilization 
            of this resource to meet the growing demand for affordable, eco-friendly energy solutions. 
            With an innovative approach to gas capture, liquefaction, compression, and distribution, 
            T30 Energies is positioning itself as a leader in the energy sector, focusing on both 
            environmental sustainability and economic growth.
          </p>
        </div>
        <div>
          <img
            src="/public/IMG-20241214-WA0006.jpg"
            alt="About us illustration"
            class="rounded-xl shadow-lg"
            ref="storyImage"
          />
        </div>
      </div>
    </div>

    <div class="bg-white py-16 px-6 md:px-12">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900" ref="coreValuesTitle">Our Core Values</h2>
        <p class="mt-4 text-gray-600" ref="coreValuesText">
          Our values guide us in every decision we make and every product we deliver.
        </p>
        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center" ref="value1">
            <div
              class="flex items-center justify-center w-16 h-16 mx-auto bg-orange-100 text-orange-500 rounded-full"
            >
              <Icon name="mdi:leaf" class="text-orange-400 text-3xl"/>
            </div>
            <h4 class="text-lg font-bold mt-4">Sustainability</h4>
            <p class="mt-2 text-gray-600">
              Promoting environmentally friendly practices and supporting the long-term health of
              the planet by reducing carbon emissions and optimizing the use of natural resources.
            </p>
          </div>
          <div class="text-center" ref="value2">
            <div
              class="flex items-center justify-center w-16 h-16 mx-auto bg-orange-100 text-orange-500 rounded-full"
            >
              <Icon name="heroicons-outline:light-bulb" class="text-orange-400 text-3xl"/>
            </div>
            <h4 class="text-lg font-bold mt-4">Innovation</h4>
            <p class="mt-2 text-gray-600">
              Driving technological advancement to deliver energy solutions that are more efficient, 
              cleaner, and sustainable for every home and business.
            </p>
          </div>
          <div class="text-center" ref="value3">
            <div
              class="flex items-center justify-center w-16 h-16 mx-auto bg-orange-100 text-orange-500 rounded-full"
            >
              <Icon name="material-symbols:accessible-forward" class="text-orange-400 text-3xl"/>
            </div>
            <h4 class="text-lg font-bold mt-4">Accessibility</h4>
            <p class="mt-2 text-gray-600">
              Ensuring that clean energy is accessible to all, from individual households to large industrial clients, 
              enabling economic growth and improved quality of life for every Nigerian.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="py-16 px-6 md:px-12 bg-gray-100">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900">Meet the Team</h2>
        <p class="mt-4 text-gray-600">
          Our team of passionate individuals is here to bring our vision to life.
        </p>
        <div class="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12">
          <div class="text-center" ref="team1">
            <img
              src="/public/images/PHOTO-2025-01-10-15-37-05.jpg"
              alt="Team Member"
              class="img w-32 h-32 mx-auto rounded-full shadow-lg"
            />
            <h4 class="mt-4 font-bold text-lg">Lanre Oluseye</h4>
            <p class="text-gray-600 text-sm">MD/CEO</p>
          </div>
          <div class="text-center" ref="team2">
            <img
              src="/public/images/DSC_9951.jpg"
              alt="Team Member"
              class="img w-32 h-32 mx-auto rounded-full shadow-lg"
            />
            <h4 class="mt-4 font-bold text-lg">Chinwe Wilcox</h4>
            <p class="text-gray-600 text-sm">ACCOUNTANT</p>
          </div>
          <div class="text-center" ref="team3">
            <img
              src="/public/images/PHOTO-2025-01-10-15-40-23.jpg"
              alt="Team Member"
              class="img w-32 h-32 mx-auto rounded-full shadow-lg"
            />
            <h4 class="mt-4 font-bold text-lg">Oluwatobi Iyanda</h4>
            <p class="text-gray-600 text-sm">BUSINESS DEVELOPMENT MANAGER</p>
          </div>
          <div class="text-center" ref="team3">
            <img
              src="/public/images/PHOTO-2025-01-10-15-40-42.jpg"
              alt="Team Member"
              class="img w-32 h-32 mx-auto rounded-full shadow-lg"
            />
            <h4 class="mt-4 font-bold text-lg">Promise Udoh</h4>
            <p class="text-gray-600 text-sm">HEAD OF OPERATIONS</p>
          </div>
          <div class="text-center" ref="team3">
            <img
              src="/public//images/PHOTO-2025-01-10-15-40-56.jpg"
              alt="Team Member"
              class="img w-32 h-32 mx-auto rounded-full shadow-lg"
            />
            <h4 class="mt-4 font-bold text-lg">Otu Jacobs</h4>
            <p class="text-gray-600 text-sm">ENGINEERING/FABRICATIONS</p>
          </div>
          <div class="text-center" ref="team3">
            <img
              src="/public/images/_DSC0379.jpg"
              alt="Team Member"
              class="img w-32 h-32 mx-auto rounded-full shadow-lg"
            />
            <h4 class="mt-4 font-bold text-lg">Efetobore Umiaghwa</h4>
            <p class="text-gray-600 text-sm">GENERAL MANAGER</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from "gsap";

// GSAP animations
const storySection = ref(null);
const storyTitle = ref(null);
const storyText1 = ref(null);
const storyText2 = ref(null);
const storyImage = ref(null);
const coreValuesTitle = ref(null);
const coreValuesText = ref(null);
const value1 = ref(null);
const value2 = ref(null);
const value3 = ref(null);
const team1 = ref(null);
const team2 = ref(null);
const team3 = ref(null);

onMounted(() => {
  // GSAP animation for story section
  gsap.from(storyTitle.value, { opacity: 0, y: -50, duration: 1 });
  gsap.from(storyText1.value, { opacity: 0, y: 20, duration: 1, delay: 0.3 });
  gsap.from(storyText2.value, { opacity: 0, y: 20, duration: 1, delay: 0.6 });
  gsap.from(storyImage.value, { opacity: 0, scale: 0.9, duration: 1, delay: 0.9 });

  // GSAP animation for core values section
  gsap.from(coreValuesTitle.value, { opacity: 0, x: -50, duration: 1 });
  gsap.from(coreValuesText.value, { opacity: 0, y: 20, duration: 1, delay: 0.3 });
  gsap.from(value1.value, { opacity: 0, x: -50, duration: 1, delay: 0.6 });
  gsap.from(value2.value, { opacity: 0, x: 50, duration: 1, delay: 0.9 });
  gsap.from(value3.value, { opacity: 0, x: -50, duration: 1, delay: 1.2 });

  // GSAP animation for team section
  gsap.from(team1.value, { opacity: 0, y: 20, duration: 1, delay: 1.5 });
  gsap.from(team2.value, { opacity: 0, y: 20, duration: 1, delay: 1.8 });
  gsap.from(team3.value, { opacity: 0, y: 20, duration: 1, delay: 2.1 });
});
</script>

<style scoped>
.img {
  width: 8rem; /* Equivalent to w-32 */
  height: 8rem; /* Equivalent to h-32 */
  object-fit: cover; /* Ensures images don’t stretch */
}
</style>