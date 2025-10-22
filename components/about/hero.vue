<template>
  <section class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32 overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-1/2 -right-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div class="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
    </div>

    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 opacity-30">
      <div class="w-full h-full" style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0); background-size: 20px 20px;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
      <div class="text-center space-y-6 md:space-y-8">
        <!-- Status Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full text-orange-300 text-xs md:text-sm font-medium">
          <div class="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-400 rounded-full animate-pulse"></div>
          Trusted Energy Partner
        </div>

        <!-- Main Heading -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight animate-fade-in-up">
          About <span class="bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">T30 Energies</span>
        </h1>

        <!-- Subtitle -->
        <p class="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 px-4">
          Pioneering the future of energy solutions with innovation, expertise, and unwavering commitment to excellence.
        </p>

        <!-- Description -->
        <p class="text-base md:text-lg text-gray-400 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 px-4">
          Discover our journey from startup to industry leader, meet our exceptional team, and learn about the values that drive us forward in the oil & gas industry.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-6 md:pt-8 animate-fade-in-up animation-delay-600 px-4">
          <NuxtLink
            to="/contact"
            class="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105"
          >
            Partner With Us
            <svg class="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="group inline-flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl shadow-xl font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105"
          >
            Our Services
            <svg class="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </NuxtLink>
        </div>

        <!-- Scroll Indicator -->
        <div class="pt-12 md:pt-16 animate-fade-in-up animation-delay-800">
          <div class="flex flex-col items-center gap-2 text-gray-400">
            <span class="text-xs md:text-sm">Scroll to explore</span>
            <div class="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div class="w-1 h-2 md:h-3 bg-gray-400 rounded-full mt-1.5 md:mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  gsap.from('.animate-fade-in-up', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
  });
});
</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
  opacity: 0;
}

.animation-delay-400 {
  animation-delay: 0.4s;
  opacity: 0;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  opacity: 0;
}

.animation-delay-800 {
  animation-delay: 0.8s;
  opacity: 0;
}
</style>