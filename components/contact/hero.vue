<template>
  <section class="relative overflow-hidden bg-neutral-950 pt-32 pb-20 text-white md:pt-44 md:pb-28">
    <div class="absolute inset-0 grid-faint opacity-[0.15]"></div>
    <div class="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-600/15 blur-3xl"></div>

    <div class="container-x relative">
      <div class="max-w-3xl">
        <div class="eyebrow eyebrow-on-dark reveal animate-fade-up">
          <span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
          Ready to connect
        </div>
        <h1 class="reveal animate-fade-up animation-delay-100 mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Get in <span class="text-orange-500">touch</span>
        </h1>
        <p class="reveal animate-fade-up animation-delay-200 mt-7 max-w-2xl text-lg leading-relaxed text-neutral-300">
          Whether you need consultation, project support, or have questions about our services, our team is here to help you achieve your energy goals.
        </p>
        <div class="reveal animate-fade-up animation-delay-300 mt-10 flex flex-col gap-3 sm:flex-row">
          <button @click="scrollToForm" class="btn btn-lg btn-primary">
            Send a message
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
          <NuxtLink to="/services" class="btn btn-lg btn-ghost-dark">
            Our services
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';

const scrollToForm = () => {
  const formElement = document.getElementById('contact-form');
  if (formElement) {
    formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }
};

onMounted(() => {
  gsap.fromTo(
    '.animate-fade-up',
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
  );
});
</script>
