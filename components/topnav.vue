<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700/50 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <img
              src="/T30_Energies_Main_Logo[1].png"
              alt="T30 Energies Logo"
              class="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <div class="flex items-center space-x-6">
            <NuxtLink
              to="/"
              :class="route.path === '/' ? 'text-orange-400 font-semibold' : 'text-white hover:text-orange-400 transition-colors duration-200'"
              class="relative group"
            >
              Home
              <span v-if="route.path === '/'" class="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 rounded-full"></span>
            </NuxtLink>
            <NuxtLink
              to="/about"
              :class="route.path.startsWith('/about') ? 'text-orange-400 font-semibold' : 'text-white hover:text-orange-400 transition-colors duration-200'"
              class="relative group"
            >
              About
              <span v-if="route.path.startsWith('/about')" class="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 rounded-full"></span>
            </NuxtLink>
            <NuxtLink
              to="/services"
              :class="route.path.startsWith('/services') ? 'text-orange-400 font-semibold' : 'text-white hover:text-orange-400 transition-colors duration-200'"
              class="relative group"
            >
              Services
              <span v-if="route.path.startsWith('/services')" class="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 rounded-full"></span>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              :class="route.path.startsWith('/contact') ? 'text-orange-400 font-semibold' : 'text-white hover:text-orange-400 transition-colors duration-200'"
              class="relative group"
            >
              Contact
              <span v-if="route.path.startsWith('/contact')" class="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 rounded-full"></span>
            </NuxtLink>
          </div>
          
          <!-- CTA Button -->
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
          >
            Get Quote
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2 rounded-lg text-gray-300 hover:text-orange-400 hover:bg-gray-700/50 transition-colors duration-200"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <svg 
            v-if="!mobileMenuOpen"
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg 
            v-else
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      :class="[
        'md:hidden absolute top-full left-0 w-full bg-gray-800 border-b border-gray-700 shadow-lg transition-all duration-300 ease-in-out',
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      ]"
    >
      <div class="px-4 py-6 space-y-4">
        <NuxtLink
          to="/"
          @click="closeMobileMenu"
          :class="route.path === '/' ? 'text-orange-400 font-semibold' : 'text-gray-300 hover:text-orange-400'"
          class="block py-2 text-base transition-colors duration-200"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          @click="closeMobileMenu"
          :class="route.path.startsWith('/about') ? 'text-orange-400 font-semibold' : 'text-gray-300 hover:text-orange-400'"
          class="block py-2 text-base transition-colors duration-200"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/services"
          @click="closeMobileMenu"
          :class="route.path.startsWith('/services') ? 'text-orange-400 font-semibold' : 'text-gray-300 hover:text-orange-400'"
          class="block py-2 text-base transition-colors duration-200"
        >
          Services
        </NuxtLink>
        <NuxtLink
          to="/contact"
          @click="closeMobileMenu"
          :class="route.path.startsWith('/contact') ? 'text-orange-400 font-semibold' : 'text-gray-300 hover:text-orange-400'"
          class="block py-2 text-base transition-colors duration-200"
        >
          Contact
        </NuxtLink>
        
        <!-- Mobile CTA -->
        <div class="pt-4 border-t border-gray-700">
          <NuxtLink
            to="/contact"
            @click="closeMobileMenu"
            class="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get Quote
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const mobileMenuOpen = ref(false);
const route = useRoute();
const router = useRouter();
const activeSection = ref('');


const setActiveSection = (section: string) => {
  activeSection.value = section;
};

watch(
  () => route.path,
  (newPath) => {
    if (newPath === '/#home') {
      activeSection.value = 'home';
    } else if (newPath.startsWith('/about')) {
      activeSection.value = 'about';
    } else if (newPath.startsWith('/contact')) {
      activeSection.value = 'contact';
    } else if (newPath.startsWith('/services')) {
      activeSection.value = 'services';
    }
  },
  { immediate: true }
);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

</script>

<style scoped>
a {
  transition: color 0.3s ease-in-out;
}

a.font-bold {
  color: #ffa500;
  font-weight: bold;
}
</style>