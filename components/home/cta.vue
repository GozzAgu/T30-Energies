<template>
  <section class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 overflow-hidden">
    <!-- Background Decorations -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
      <div class="max-w-4xl mx-auto space-y-8">
        <!-- Main Heading -->
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Ready to Power Your
          <span class="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Next Project?
          </span>
        </h2>

        <!-- Description -->
        <p class="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Join hundreds of satisfied clients who trust T30 Energies for their energy solutions. 
          Let's discuss how we can help your business thrive.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <NuxtLink
            to="/contact"
            class="group inline-flex items-center justify-center gap-2 px-8 py-4 text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started Today
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="group inline-flex items-center justify-center gap-2 px-8 py-4 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl shadow-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            View Our Services
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here
</script>
