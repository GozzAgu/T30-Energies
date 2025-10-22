<template>
  <section class="bg-gradient-to-br from-white via-gray-50 to-white text-gray-800 py-20">
    <!-- Article Content -->
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      
      <!-- Introduction -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8"></div>
        <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          <span class="font-bold text-orange-600">T30 Energies Ltd</span> offers a comprehensive range of services spanning construction, engineering, and gas products. Our expert team ensures every project is handled with precision, care, and in line with the highest industry standards. Explore our services below to discover how we can help your business thrive.
        </p>
      </div>

      <!-- Services List -->
      <div class="space-y-20">
        <div 
          v-for="(service, index) in services" 
          :key="index" 
          :id="service.title.toLowerCase().replace(/\s+/g, '-')" 
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <!-- Text Content -->
          <div 
            :class="index % 2 === 0 ? '' : 'lg:order-last'" 
            class="flex flex-col justify-center space-y-6"
          >
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-orange-100">
              <svg class="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900">{{ service.title }}</h3>
            <p class="text-lg text-gray-600 leading-relaxed">{{ service.description }}</p>
            <div class="pt-4">
              <NuxtLink 
                to="/contact" 
                class="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200"
              >
                Learn More
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
          
          <!-- Image -->
          <div class="relative">
            <div class="absolute -inset-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl opacity-20 blur-xl"></div>
            <img
              ref="imageContainer"
              :src="service.image"
              :alt="service.title"
              class="relative w-full h-80 object-cover rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Image Gallery -->
    <div class="bg-gradient-to-b from-gray-100 to-gray-50 py-20 mt-32 rounded-3xl mx-6">
      <div class="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Project Gallery</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Explore some of the incredible projects and services we've delivered to our clients across various industries.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            ref="imageGrid"
          >
            <img 
              loading="lazy" 
              :src="service.image" 
              :alt="service.title" 
              class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div class="absolute inset-0 flex items-end p-6">
              <p class="text-white font-bold text-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {{ service.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="max-w-7xl mx-auto px-6 md:px-12 mt-24">
      <div class="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16 px-8 lg:px-16 rounded-3xl shadow-2xl relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 overflow-hidden">
          <div class="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-10"></div>
          <div class="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay opacity-10"></div>
        </div>
        
        <div class="relative max-w-4xl mx-auto text-center space-y-8">
          <h2 class="text-4xl md:text-5xl font-extrabold leading-tight">Ready to Elevate Your Business?</h2>
          <p class="text-xl text-orange-50 leading-relaxed">
            Let us help you unlock new growth opportunities. Get in touch today to learn how we can work together and take your business to the next level.
          </p>
          <div class="pt-4">
            <NuxtLink 
              to="/contact" 
              class="inline-flex items-center gap-3 px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-xl shadow-xl transform transition-all duration-300 hover:bg-gray-50 hover:shadow-2xl hover:scale-105"
            >
              Contact Us Today
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const services = [
  {
    title: "CNG Solutions & Conversion Services",
    description: "We provide comprehensive Compressed Natural Gas (CNG) solutions and conversion services, helping businesses transition to cleaner, more cost-effective energy alternatives. Our expert team handles everything from system design to installation and maintenance.",
    link: "/services/cng-solutions",
    image: "/gas.png"
  },
  {
    title: "Civil Engineering",
    description: "Our civil engineering expertise covers a wide range of infrastructure projects including roads, bridges, water systems, and public facilities. We combine technical excellence with innovative solutions to deliver projects that meet the highest standards of safety, quality, and sustainability.",
    link: "/services/civil-engineering",
    image: "/civil.png"
  },
  {
    title: "Engineering Procurement",
    description: "We offer comprehensive engineering procurement services, sourcing and managing the acquisition of specialized equipment, materials, and services required for complex engineering projects. Our procurement expertise ensures quality, cost-effectiveness, and timely delivery.",
    link: "/services/engineering-procurement",
    image: "/construction.png"
  },
  {
    title: "Material Procurement",
    description: "Our material procurement services cover a wide range of industrial materials, equipment, and supplies needed for various projects. We leverage our extensive supplier network to ensure competitive pricing, quality assurance, and reliable delivery schedules.",
    link: "/services/material-procurement",
    image: "/trade.png"
  },
  {
    title: "Project Management",
    description: "We provide comprehensive project management services, ensuring every project is executed successfully from conception to completion. Our experienced project managers coordinate all aspects of project delivery, maintaining quality, timeline, and budget adherence.",
    link: "/services/project-management",
    image: "/project.png"
  },
  {
    title: "Manpower Recruitment & Training",
    description: "We specialize in recruiting and training skilled professionals for the energy and construction sectors. Our recruitment services identify top talent, while our training programs ensure workers are equipped with the latest industry knowledge and safety protocols.",
    link: "/services/recruitment-training",
    image: "/safety.png"
  },
];

onMounted(() => {
  if (route.hash) {
    const element = document.querySelector(route.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
</script>

<style scoped>
.grid img {
  transition: transform 0.3s ease;
  height: 300px; /* Set the desired height */
  object-fit: cover; /* Ensures images maintain their aspect ratio */
  width: 100%; /* Ensures images fill their container width */
}

.grid img:hover {
  transform: scale(1.05); /* Slight zoom on hover */
}
</style>