<template>
  <section class="bg-gray-900 text-white relative min-h-screen flex items-center justify-center">
    <div
      class="absolute inset-0 bg-cover bg-center opacity-75"
      style="background-image: url('/hero.webp');"
    ></div>

    <div class="absolute inset-0 bg-black bg-opacity-60"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center lg:text-left">
      <transition name="fade-slide" appear>
        <div
          class="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12"
        >
          <div class="lg:w-1/2 space-y-6">
            <h1 class="text-4xl lg:text-6xl font-bold leading-tight">
              Reliable Energy for a <span class="text-orange-400">Sustainable Future</span>
            </h1>
            <p class="text-gray-300 text-lg">
              At T30 Energies, we provide innovative oil and gas solutions to meet today's challenges
              while building a greener tomorrow.
            </p>
            <div class="space-x-4">
              <button
                class="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
              >
                Learn More
              </button>
              <button
                class="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<style>
.fade-slide-enter-active,
.fade-slide-appear-active {
  transition: all 0.8s ease-out;
}
.fade-slide-enter-from,
.fade-slide-appear-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-enter-to,
.fade-slide-appear-to {
  opacity: 1;
  transform: translateY(0);
}
</style>