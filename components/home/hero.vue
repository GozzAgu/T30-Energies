<template>
  <section ref="box" class="bg-gray-900 text-white relative min-h-screen flex items-center justify-center overflow-hidden">
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/hero.jpeg');"
    ></div>
    <div class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-orange-900/40"></div>

    <!-- Animated decorative elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-1/4 right-1/4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div class="absolute bottom-1/4 left-1/4 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
      <div class="flex flex-col items-center text-center space-y-8">
        <div ref="content" class="max-w-4xl space-y-8 opacity-0">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full">
            <div class="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span class="text-orange-300 text-sm font-semibold">Leading Energy Solutions Provider</span>
          </div>

          <!-- Main Heading -->
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Powering Progress with
            <span class="block mt-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Sustainable Energy
            </span>
          </h1>

          <!-- Description -->
          <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            At T30 Energies, we deliver innovative oil & gas solutions, engineering excellence, and sustainable practices to power a brighter tomorrow.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <NuxtLink
              to="/services"
              class="group inline-flex items-center justify-center gap-2 px-8 py-4 text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Services
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="group inline-flex items-center justify-center gap-2 px-8 py-4 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl shadow-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const box = ref(null);
const content = ref(null);

onMounted(() => {
  const timeline = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
  timeline
    .fromTo(
      box.value,
      { scale: 1.2 },
      { scale: 1, duration: 2, ease: "power2.out" }
    )
    .fromTo(
      content.value,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 },
      "<"
    );
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

@keyframes float {
  0%, 100% {
    transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-20px) rotate(180deg);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>