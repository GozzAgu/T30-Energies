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
          
          <div class="relative">
            <div class="flex items-center justify-center mb-6">
              <div class="flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50 p-4 rounded-2xl h-16 w-16 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Icon :name="service.icon" class="text-orange-600 text-4xl" />
              </div>
            </div>
            
            <h3 class="font-bold text-gray-900 mb-4 text-center text-xl group-hover:text-orange-600 transition-colors duration-300">
              {{ service.title }}
            </h3>
            
            <!-- Truncated Text with Max Lines -->
            <p class="text-gray-600 leading-relaxed text-sm line-clamp-3 text-center mb-6">
              {{ service.description }}
            </p>
            
            <div class="flex justify-center">
              <button class="inline-flex items-center gap-2 text-orange-600 font-semibold group-hover:gap-3 transition-all duration-300">
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
    title: "Road Construction",
    description: "We specialize in building robust and efficient road networks that connect communities and support economic development. Our team utilizes state-of-the-art technology and best practices to deliver high-quality roads that stand the test of time. We handle everything from initial planning and design to construction and maintenance, ensuring seamless project execution.",
    link: "/services/road-construction"
  },
  {
    icon: "material-symbols:globe",
    title: "Civil Engineering Construction",
    description: "Our expertise extends to various civil engineering projects, including bridges, tunnels, dams, and public infrastructure. We combine technical skills with creative solutions to deliver projects that meet the highest standards of safety, quality, and sustainability. Our comprehensive approach ensures that every project is completed on time and within budget.",
    link: "/services/civil-engineering"
  },
  {
    icon: "material-symbols:shield-rounded",
    title: "Gas Products Marketing",
    description: "T30 Energies Ltd is at the forefront of gas product marketing, leveraging our extensive network and industry knowledge to deliver competitive and reliable solutions tailored to our clients' needs. We provide a wide range of gas products, including LPG, LNG, and natural gas, ensuring consistent supply and efficient distribution.",
    link: "/services/gas-products-marketing"
  },
  {
    icon: "mdi:chart-line",
    title: "Trading and Bulk Utilization",
    description: "We are experts in the trading and bulk utilization of gas products, ensuring a consistent and efficient supply chain. Our strategic approach and strong partnerships allow us to provide cost-effective and timely services. We offer customized solutions that meet the specific needs of our clients, from small scale deliveries to large bulk orders",
    link: "/services/trading-bulk-utilization"
  },
  {
    icon: "material-symbols:eco-rounded",
    title: "Safety Equipment (PPE)",
    description: "We supply high-quality personal protective equipment (PPE) to ensure the safety and well-being of workers in various industries. Our range includes helmets, gloves, safety glasses, protective clothing, and other essential PPE items, all meeting rigorous safety standards. We are committed to providing reliable and effective safety solutions that protect workers and enhance workplace safety.",
    link: "/services/safety-equipment"
  },
  {
    icon: "material-symbols:eco-rounded",
    title: "Chemical Supply (General Purpose/Analar Grade)",
    description: "T30 Energies Ltd offers a comprehensive range of chemical supplies, including both general-purpose and analytical reagent (analar) grade chemicals. Our products are sourced from reputable manufacturers to ensure quality and reliability. We provide tailored solutions that meet the specific needs of our clients, supporting their operational requirements across various industries.",
    link: "/services/chemical-supply"
  },
  {
    icon: "material-symbols:eco-rounded",
    title: "Project Management",
    description: "At T30 Energies Ltd, we strive for excellence in project management and execution. Our engineering, procurement, and construction teams work closely to ensure every project is built successfully from the ground up. We collaborate with our clients to plan, execute, monitor, and control projects, ensuring satisfaction at every stage. By paying close attention to each phase's deliverables, we ensure successful project completion, regardless of the terrain.",
    link: "/services/project-management"
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