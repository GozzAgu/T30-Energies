<template>
  <section class="bg-gradient-to-b from-white to-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Explore Our <span class="text-orange-500">Services</span>
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto">
          From innovation to implementation, we deliver cutting-edge solutions tailored to your needs.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          @click="redirectToPage(service)"
          class="group cursor-pointer bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden relative"
        >
          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <!-- Decorative corner element -->
          <div class="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div class="relative">
            <div class="flex items-center justify-center mb-6">
              <div class="flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50 p-4 rounded-2xl h-16 w-16 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Icon :name="service.icon" class="text-orange-600 text-4xl group-hover:text-orange-700 transition-colors duration-300" />
              </div>
            </div>
            
            <h3 class="font-bold text-gray-900 mb-4 text-center text-xl group-hover:text-orange-600 transition-colors duration-300">
              {{ service.title }}
            </h3>
            
            <!-- Truncated Text with Max Lines -->
            <p class="text-gray-600 leading-relaxed text-sm line-clamp-3 text-center mb-6 group-hover:text-gray-700 transition-colors duration-300">
              {{ service.description }}
            </p>
            
            <div class="flex justify-center">
              <button class="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all duration-300 group-hover:text-orange-700">
                Learn More
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-20 text-center">
        <NuxtLink
          to="/services"
          class="inline-flex items-center gap-2 px-8 py-4 text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
        >
          View All Services
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const redirectToPage = (service) => {
  router.push(`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`);
};

const services = [
  {
    icon: "material-symbols:gas-meter-outline-rounded",
    title: "CNG Solutions & Conversion Services",
    description: "We provide comprehensive Compressed Natural Gas (CNG) solutions and conversion services, helping businesses transition to cleaner, more cost-effective energy alternatives. Our expert team handles everything from system design to installation and maintenance.",
    link: "/services/cng-solutions"
  },
  {
    icon: "material-symbols:globe",
    title: "Civil Engineering",
    description: "Our civil engineering expertise covers a wide range of infrastructure projects including roads, bridges, water systems, and public facilities. We combine technical excellence with innovative solutions to deliver projects that meet the highest standards of safety, quality, and sustainability.",
    link: "/services/civil-engineering"
  },
  {
    icon: "material-symbols:engineering",
    title: "Engineering Procurement",
    description: "We offer comprehensive engineering procurement services, sourcing and managing the acquisition of specialized equipment, materials, and services required for complex engineering projects. Our procurement expertise ensures quality, cost-effectiveness, and timely delivery.",
    link: "/services/engineering-procurement"
  },
  {
    icon: "material-symbols:inventory",
    title: "Material Procurement",
    description: "Our material procurement services cover a wide range of industrial materials, equipment, and supplies needed for various projects. We leverage our extensive supplier network to ensure competitive pricing, quality assurance, and reliable delivery schedules.",
    link: "/services/material-procurement"
  },
  {
    icon: "material-symbols:project-management",
    title: "Project Management",
    description: "We provide comprehensive project management services, ensuring every project is executed successfully from conception to completion. Our experienced project managers coordinate all aspects of project delivery, maintaining quality, timeline, and budget adherence.",
    link: "/services/project-management"
  },
  {
    icon: "material-symbols:groups",
    title: "Manpower Recruitment & Training",
    description: "We specialize in recruiting and training skilled professionals for the energy and construction sectors. Our recruitment services identify top talent, while our training programs ensure workers are equipped with the latest industry knowledge and safety protocols.",
    link: "/services/recruitment-training"
  },
];
</script>

<style>
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
}

/* Add line clamp for truncating the text */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>