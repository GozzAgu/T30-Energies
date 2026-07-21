<template>
  <section class="relative overflow-hidden bg-neutral-950 pt-32 pb-20 text-white md:pt-44 md:pb-28">
    <div class="absolute inset-0 grid-faint opacity-[0.15]"></div>
    <div class="absolute -left-32 top-10 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl"></div>

    <div class="container-x relative">
      <div class="max-w-3xl">
        <div class="eyebrow eyebrow-on-dark reveal animate-fade-up">
          <span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          Comprehensive solutions
        </div>
        <h1 class="reveal animate-fade-up animation-delay-100 mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Our <span class="text-orange-500">services</span>
        </h1>
        <p class="reveal animate-fade-up animation-delay-200 mt-7 max-w-2xl text-lg leading-relaxed text-neutral-300">
          Empowering businesses with cutting-edge energy solutions and expert engineering services that drive sustainable growth, tailored to your unique needs.
        </p>
        <div class="reveal animate-fade-up animation-delay-300 mt-10 flex flex-col gap-3 sm:flex-row">
          <NuxtLink to="/contact" class="btn btn-lg btn-primary">
            Get started
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <NuxtLink to="/about" class="btn btn-lg btn-ghost-dark">
            Learn more
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

onMounted(() => {
  gsap.fromTo(
    '.animate-fade-up',
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
  );
});
</script>
