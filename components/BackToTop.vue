<template>
  <button
    v-if="visible"
    type="button"
    @click="scrollToTop"
    aria-label="Back to top"
    class="fixed bottom-6 right-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white shadow-lg transition-all duration-200 hover:bg-orange-600 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40 focus-visible:ring-offset-2"
  >
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);

const onScroll = () => {
  if (typeof window === 'undefined') return;
  const y = window.scrollY || document.documentElement.scrollTop || 0;
  visible.value = y > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>
