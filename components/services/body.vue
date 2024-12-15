<template>
  <section class="bg-gray-50 text-gray-800">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-br from-orange-400 to-gray-900 text-white py-24 px-6 lg:px-12">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
          Our <span class="text-orange-300">Services</span>
        </h1>
        <p class="mt-4 text-lg md:text-xl text-gray-200">
          Explore how we help businesses thrive with our expert solutions.
        </p>
      </div>
    </div>

    <!-- Services Section -->
    <div class="py-16 px-6 md:px-12 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <!-- Service Card -->
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
          >
            <div
              class="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-full"
            >
              <i :class="service.icon" class="text-3xl"></i>
            </div>
            <h3 class="mt-6 text-lg font-semibold text-center group-hover:text-orange-500 transition duration-300">
              {{ service.title }}
            </h3>
            <p class="mt-4 text-center text-gray-600 text-sm">
              {{ service.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Call-to-Action Section -->
    <div class="bg-gradient-to-br from-orange-500 to-gray-900 text-white py-16 px-6 lg:px-12">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="text-3xl font-bold">
          Ready to elevate your business?
        </h2>
        <p class="mt-4 text-lg">
          Get in touch with us today to learn more.
        </p>
        <button
          class="mt-6 px-8 py-3 bg-white text-orange-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
        >
          Contact Us
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Business Consulting",
          description:
            "Expert advice to help you navigate challenges and seize opportunities.",
          icon: "pi pi-chart-line",
        },
        {
          title: "Custom Solutions",
          description:
            "Tailored strategies and tools designed for your unique business needs.",
          icon: "pi pi-cog",
        },
        {
          title: "Web Development",
          description:
            "Cutting-edge web design and development to boost your online presence.",
          icon: "pi pi-desktop",
        },
        {
          title: "Cloud Solutions",
          description:
            "Scalable and secure cloud services to meet your evolving demands.",
          icon: "pi pi-cloud",
        },
        {
          title: "Team Training",
          description:
            "Empower your team with the skills and knowledge to succeed.",
          icon: "pi pi-users",
        },
        {
          title: "Cybersecurity",
          description:
            "Protect your business with advanced cybersecurity solutions.",
          icon: "pi pi-lock",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add custom styling if needed */
</style>