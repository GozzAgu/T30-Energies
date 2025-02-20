<template>
  <footer class="bg-gray-900 text-white py-8 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Logo and About Section -->
      <div class="flex flex-col space-y-4">
        <img
          src="/public/T30_Energies_Main_Logo[1].png"
          alt="Oil and Gas Company Logo"
          class="h-auto w-32 object-contain"
        />
        <p class="text-xs text-gray-400">
          T30 Energies is dedicated to providing sustainable energy solutions to our clients worldwide.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="flex flex-col space-y-4">
        <h3 class="font-semibold text-orange-400">Quick Links</h3>
        <ul class="space-y-2 text-xs">
          <li>
            <NuxtLink
              to="/"
              class="hover:text-orange-400 transition duration-300"
            >
              Home
            </NuxtLink>  
          </li>
          <li>
            <NuxtLink
              to="/about"
              class="hover:text-orange-400 transition duration-300"
            >
              About Us
            </NuxtLink>  
          </li>
          <li>
            <NuxtLink
              to="/services"
              class="hover:text-orange-400 transition duration-300"
            >
              Our Services
            </NuxtLink>  
          </li>
          <li>
            <NuxtLink
              to="/contact"
              class="hover:text-orange-400 transition duration-300"
            >
              Contact Us
            </NuxtLink>  
          </li>
        </ul>
      </div>

      <!-- Contact Information -->
      <div class="flex flex-col space-y-4">
        <h3 class="font-semibold text-orange-400">Contact Us</h3>
        <p class="text-xs text-gray-400">Feel free to reach out to us:</p>
        <ul class="space-y-2 text-xs">
          <li class="flex items-center space-x-2">
            <i class="pi pi-phone text-orange-400"></i>
            <span>+2348097459745 | +2349160000873</span>
          </li>
          <li class="flex items-center space-x-2">
            <i class="pi pi-envelope text-orange-400"></i>
            <span>info@t30energies.com</span>
          </li>
          <li class="flex items-center space-x-2">
            <i class="pi pi-map-marker text-orange-400"></i>
            <span>88 Evo road, G.R.A, Port-Harcourt, Rivers State</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
      <p>
        Follow us on:
        <a href="#" class="text-orange-400 mx-2 hover:underline">Facebook</a> |
        <a href="#" class="text-orange-400 mx-2 hover:underline">Twitter</a> |
        <a href="#" class="text-orange-400 mx-2 hover:underline">LinkedIn</a>
      </p>
      <p class="text-xs text-gray-500 mt-2">&copy; 2025 T30 Energies. All rights reserved.</p>
    </div>
  </footer>
</template>