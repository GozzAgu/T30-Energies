<template>
  <header
    class="fixed top-0 left-0 z-50 w-full border-b transition-all duration-300"
    :class="scrolled
      ? 'border-white/10 bg-neutral-950/85 backdrop-blur-xl'
      : 'border-transparent bg-neutral-950/60 backdrop-blur-md'"
  >
    <div class="container-x">
      <div class="flex h-16 items-center justify-between md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center" aria-label="T30 Energies home">
          <img
            src="/T30_Energies_Main_Logo[1].png"
            alt="T30 Energies"
            class="h-9 w-auto object-contain transition-opacity duration-200 hover:opacity-80 md:h-11"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden items-center gap-1 md:flex">
          <NuxtLink
            v-for="item in links"
            :key="item.to"
            :to="item.to"
            class="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
            :class="isActive(item.to)
              ? 'text-white'
              : 'text-neutral-400 hover:text-white'"
          >
            {{ item.label }}
            <span
              v-if="isActive(item.to)"
              class="absolute inset-x-4 -bottom-px h-0.5 rounded-full bg-orange-500"
            ></span>
          </NuxtLink>
        </nav>

        <!-- Desktop CTA -->
        <div class="hidden md:block">
          <NuxtLink to="/contact" class="btn btn-md btn-primary">
            Get a Quote
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="inline-flex h-10 w-10 items-center justify-center rounded-full text-neutral-200 transition-colors hover:bg-white/10 md:hidden"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileMenuOpen" class="border-t border-white/10 bg-neutral-950 md:hidden">
        <div class="container-x space-y-1 py-4">
          <NuxtLink
            v-for="item in links"
            :key="item.to"
            :to="item.to"
            @click="closeMobileMenu"
            class="block rounded-xl px-4 py-3 text-base font-medium transition-colors"
            :class="isActive(item.to)
              ? 'bg-white/10 text-white'
              : 'text-neutral-400 hover:bg-white/5 hover:text-white'"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="pt-3">
            <NuxtLink to="/contact" @click="closeMobileMenu" class="btn btn-lg btn-primary w-full">
              Get a Quote
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const mobileMenuOpen = ref(false);
const scrolled = ref(false);

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const isActive = (to: string) => {
  if (to === '/') return route.path === '/';
  return route.path.startsWith(to);
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const onScroll = () => {
  scrolled.value = window.scrollY > 8;
};

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>
