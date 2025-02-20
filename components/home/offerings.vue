<template>
  <section class="bg-gradient-to-br from-gray-50 to-gray-100 py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-extrabold text-gray-800">
          Explore Our <span class="text-orange-500">Services</span>
        </h2>
        <p class="text-gray-600 mt-6 text-lg">
          From innovation to implementation, we deliver cutting-edge solutions tailored to your needs.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="cursor-pointer bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
        >
          <div class="flex items-center justify-center mb-6">
            <div
              class="flex items-center justify-center bg-orange-100 p-4 rounded-full h-16 w-16"
            >
              <Icon :name="service.icon" class="text-orange-500 text-5xl" />
            </div>
          </div>
          <h3 class="font-semibold text-gray-800 mb-4 text-center">
            {{ service.title }}
          </h3>
          <!-- Truncated Text with Max Lines -->
          <p class="text-gray-600 leading-relaxed text-xs line-clamp-3">
            {{ service.description }}
          </p>
          <button
            @click="redirectToPage(service)"
            class="text-orange-500 mt-4 underline hover:text-orange-700"
          >
            Read More
          </button>
        </div>
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