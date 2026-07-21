<template>
  <section class="relative flex min-h-[92vh] items-center overflow-hidden bg-neutral-950 text-white">
    <!-- Background image -->
    <div
      ref="bg"
      class="absolute inset-0 bg-cover bg-center"
      style="background-image: url('/hero.jpeg');"
    ></div>
    <!-- Overlays for legibility -->
    <div class="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/30"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40"></div>

    <div class="container-x relative z-10 py-32 md:py-40">
      <div ref="content" class="max-w-3xl">
        <div class="eyebrow eyebrow-on-dark reveal animate-fade-up">
          <span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          Leading Energy Solutions Provider
        </div>

        <h1 class="reveal animate-fade-up animation-delay-100 mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Powering progress with
          <span class="text-orange-500">sustainable energy</span>
        </h1>

        <p class="reveal animate-fade-up animation-delay-200 mt-7 max-w-xl text-lg leading-relaxed text-neutral-300">
          T30 Energies delivers innovative oil &amp; gas solutions, engineering excellence, and sustainable practices to power a brighter tomorrow.
        </p>

        <div class="reveal animate-fade-up animation-delay-300 mt-10 flex flex-col gap-3 sm:flex-row">
          <NuxtLink to="/services" class="btn btn-lg btn-primary">
            Explore our services
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink to="/contact" class="btn btn-lg btn-ghost-dark">
            Get in touch
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const bg = ref(null);
const content = ref(null);

onMounted(() => {
  gsap.fromTo(
    bg.value,
    { scale: 1.15 },
    { scale: 1, duration: 2.4, ease: 'power2.out' }
  );
});
</script>
