<template>
  <nav class="bg-gray-900 text-white fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 shadow-lg z-50">
    <!-- Logo Section -->
    <div class="flex items-center">
      <img
        src="/public/T30_Energies_Main_Logo[1].png"
        alt="Oil and Gas Company Logo"
        class="h-auto w-32 object-contain"
      />
    </div>

    <button
      class="md:hidden text-orange-400 focus:outline-none"
      @click="toggleMobileMenu"
    >
      Menu
      <i :class="mobileMenuOpen ? 'pi pi-times' : 'pi pi-bars'" class="text-2xl"></i>
    </button>

    <ul class="hidden md:flex space-x-6 text-sm">
      <li>
        <NuxtLink
          to="/#home"
          :class="activeSection === 'home' ? 'text-orange-400 font-bold' : 'hover:text-orange-400 transition duration-300'"
          @click="setActiveSection('home')"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/about"
          :class="activeSection === 'about' ? 'text-orange-400 font-bold' : 'hover:text-orange-400 transition duration-300'"
          @click="setActiveSection('about')"
        >
          About Us
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/contact"
          :class="activeSection === 'contact' ? 'text-orange-400 font-bold' : 'hover:text-orange-400 transition duration-300'"
          @click="setActiveSection('contact')"
        >
          Contact Us
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/services"
          :class="activeSection === 'services' ? 'text-orange-400 font-bold' : 'hover:text-orange-400 transition duration-300'"
          @click="setActiveSection('services')"
        >
          Our Services
        </NuxtLink>
      </li>
    </ul>

    <!-- Desktop Search Bar -->
    <div class="hidden md:flex items-center space-x-4">
      <div class="relative">
        <input
          type="text"
          placeholder="Search"
          class="bg-gray-800 text-white px-4 rounded-full w-32 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:pl-6 focus:w-56 transition-all duration-300"
        />
        <span class="absolute right-3 top-3 text-gray-400">
          <i class="pi pi-search"></i>
        </span>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div
    :class="[ 
      'fixed inset-0 bg-gray-900 text-white z-50 flex flex-col justify-start transition-transform duration-500',
      mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    ]"
  >
    <div class="flex items-center justify-between w-full px-6 py-4">
      <!-- Logo -->
      <img
        src="/public/T30_Energies_Main_Logo[1].png"
        alt="Oil and Gas Company Logo"
        class="h-10 w-auto"
      />
      <!-- Close Button -->
      <button
        class="text-orange-400 text-lg focus:outline-none"
        @click="closeMobileMenu"
      >
        Close
      </button>
    </div>

    <!-- Search Bar -->
    <div class="relative mt-8 w-3/4 mx-auto">
      <input
        type="text"
        placeholder="Search"
        class="bg-gray-800 text-white py-2 px-4 w-full rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-sm"
      />
      <span class="absolute right-4 top-3 text-gray-400">
        <i class="pi pi-search"></i>
      </span>
    </div>

    <!-- Navigation Links -->
    <ul class="mt-6 space-y-6 px-6 text-center">
      <li>
        <NuxtLink
          to="/#home"
          :class="activeSection === 'home' ? 'text-orange-400 font-bold' : 'hover:text-orange-400 transition duration-300'"
          @click="setActiveSection('home'); closeMobileMenu()"
        >
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/about"
          :class="activeSection === 'about' ? 'text-orange-400 font-bold' : 'hover:text-orange-400 transition duration-300'"
          @click="setActiveSection('about'); closeMobileMenu()"
        >
          About Us
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/contact"
          :class="activeSection === 'contact' ? 'text-orange-400 font-bold' : 'hover:text-orange-400 transition duration-300'"
          @click="setActiveSection('contact'); closeMobileMenu()"
        >
          Contact Us
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/services"
          :class="activeSection === 'services' ? 'text-orange-400 font-bold' : 'hover:text-orange-400 transition duration-300'"
          @click="setActiveSection('services'); closeMobileMenu()"
        >
          Our Services
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const activeSection = ref('home');
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

const setActiveSection = (section: string) => {
  activeSection.value = section;
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