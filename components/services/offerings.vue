<template>
  <section class="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800 py-16">
    <!-- Article Content -->
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <p class="mt-6 text-gray-600">
        <span class="font-black text-5xl">T</span>30 Energies Ltd offers a variety of services that span construction, engineering, and gas products. Our expert team ensures every project is handled with precision, care, and in line with the highest industry standards. Explore each of our services below to learn more about how we can help your business thrive.
      </p>

      <div v-for="(service, index) in services" :key="index" class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16 py-8">
        <div :class="index % 2 === 0 ? '' : 'lg:order-last'" class="flex flex-col justify-between h-full">
          <div class="text-gray-700 space-y-6">
            <h2 class="text-2xl font-semibold text-gray-800">{{ service.title }}</h2>
            <p>{{ service.description }}</p>
          </div>
        </div>
        
        <img  ref="imageContainer" :src="service.image" :alt="service.title" class="w-full h-full object-cover rounded-md service-image" />
      </div>
    </div>

    <div class="bg-gray-100 py-16 mt-24">
      <div class="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 class="text-4xl font-extrabold text-gray-800">Image Gallery</h2>
        <p class="mt-4 text-lg text-gray-600">Explore some of the incredible projects and services we've delivered to our clients.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-12">
          <div v-for="(service, index) in services" :key="index" class="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105" ref="imageGrid">
            <img :src="service.image" :alt="service.title" class="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300" />
            <div class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p class="text-2xl font-semibold">{{ service.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action Section -->
    <div class="bg-gradient-to-br from-orange-500 to-gray-900 text-white py-16 px-6 lg:px-12 mt-20 rounded-lg">
      <div class="max-w-6xl mx-auto text-center space-y-6">
        <h2 class="text-5xl font-extrabold leading-tight">Ready to Elevate Your Business?</h2>
        <p class="mt-4 text-xl">Let us help you unlock new growth opportunities. Get in touch today to learn how we can work together and take your business to the next level.</p>
        <button class="mt-6 px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg shadow-2xl transform transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:translate-y-2">
          Contact Us
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

const services = [
  {
    title: "Road Construction",
    description: "We specialize in building robust and efficient road networks that connect communities and support economic development. Our team utilizes state-of-the-art technology and best practices to deliver high-quality roads that stand the test of time. We handle everything from initial planning and design to construction and maintenance.",
    link: "/services/road-construction",
    image: "/construction.webp"
  },
  {
    title: "Civil Engineering Construction",
    description: "Our expertise extends to various civil engineering projects, including bridges, tunnels, dams, and public infrastructure. We combine technical skills with creative solutions to deliver projects that meet the highest standards of safety, quality, and sustainability. We ensure every project is completed on time and within budget.",
    link: "/services/civil-engineering",
    image: "/civil.webp"
  },
  {
    title: "Gas Products Marketing",
    description: "T30 Energies Ltd is at the forefront of gas product marketing, leveraging our extensive network and industry knowledge to deliver competitive and reliable solutions tailored to our clients' needs. We provide a wide range of gas products, ensuring consistent supply and efficient distribution.",
    link: "/services/gas-products-marketing",
    image: "/oil.webp"
  },
  {
    title: "Trading and Bulk Utilization",
    description: "We specialize in the trading and bulk utilization of gas products, ensuring a consistent and efficient supply chain. Our strategic approach and partnerships allow us to provide cost-effective and timely services for both small and large-scale deliveries.",
    link: "/services/trading-bulk-utilization",
    image: "/business.webp"
  },
  {
    title: "Safety Equipment (PPE)",
    description: "We supply high-quality personal protective equipment (PPE) to ensure worker safety across various industries. Our range includes helmets, gloves, safety glasses, protective clothing, and other essential PPE items, all meeting rigorous safety standards.",
    link: "/services/safety-equipment",
    image: "/IMG-20241214-WA0003.jpg"
  },
  {
    title: "Chemical Supply (General Purpose/Analar Grade)",
    description: "We offer a comprehensive range of chemical supplies, including both general-purpose and analytical reagent grade chemicals. Our products are sourced from reputable manufacturers to ensure quality and reliability, meeting the needs of our clients across various industries.",
    link: "/services/chemical-supply",
    image: "/chemical.webp"
  },
  {
    title: "Project Management",
    description: "We provide comprehensive project management services, ensuring every project is executed successfully. From planning and procurement to construction and execution, our team is committed to delivering projects on time, on budget, and to the highest quality standards.",
    link: "/services/project-management",
    image: "/projectm.webp"
  },
];

onMounted(() => {
  // Animation for service images
  gsap.from(".service-image", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    ease: "power4.out"
  });

  // Animation for grid images
  gsap.from(".group", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
  });
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