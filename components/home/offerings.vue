<template>
  <section class="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
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

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <!-- Service Cards -->
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
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
          <p class="text-gray-600 leading-relaxed text-xs">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: "material-symbols:gas-meter-outline-rounded",
    title: "Oil & Gas Exploration",
    description: "Our expertise in exploration ensures we extract energy resources with maximum efficiency and minimal environmental impact.",
  },
  {
    icon: "material-symbols:globe",
    title: "Global Energy Distribution",
    description: "We ensure seamless distribution of energy products across the globe, meeting growing demands reliably.",
  },
  {
    icon: "material-symbols:shield-rounded",
    title: "Safety & Compliance",
    description: "Our operations adhere to the highest safety standards and regulatory compliance to protect our people and the planet.",
  },
  {
    icon: "mdi:chart-line",
    title: "Energy Consulting",
    description: "Our experts provide tailored consulting services to help businesses optimize their energy strategies.",
  },
  {
    icon: "material-symbols:eco-rounded",
    title: "Sustainable Solutions",
    description: "We lead the way in integrating sustainable practices into energy production and distribution.",
  },
  {
    icon: "material-symbols:support-agent-rounded",
    title: "Customer Support",
    description: "Our dedicated support team ensures you receive assistance whenever you need it.",
  },
];
</script>

<style>
.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
}
</style>