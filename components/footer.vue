<template>
  <footer class="bg-neutral-950 text-neutral-400">
    <div class="container-x py-16 md:py-20">
      <!-- Brand + CTA -->
      <div class="flex flex-col gap-8 border-b border-white/10 pb-12 md:flex-row md:items-center md:justify-between">
        <div class="max-w-md">
          <img
            src="/T30_Energies_Main_Logo[1].png"
            alt="T30 Energies"
            class="h-11 w-auto object-contain"
          />
          <p class="mt-5 text-sm leading-relaxed text-neutral-400">
            Delivering sustainable energy and engineering solutions that power progress across Nigeria's energy and infrastructure landscape.
          </p>
        </div>
        <NuxtLink to="/contact" class="btn btn-lg btn-primary shrink-0">
          Start a project
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Columns -->
      <div class="mt-12 grid grid-cols-2 gap-10 lg:grid-cols-12">
        <!-- Navigate -->
        <div class="lg:col-span-3">
          <h4 class="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Navigate</h4>
          <ul class="mt-5 space-y-3">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-neutral-400 transition-colors duration-200 hover:text-white">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="lg:col-span-4">
          <h4 class="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Services</h4>
          <ul class="mt-5 space-y-3">
            <li v-for="service in services" :key="service.href">
              <NuxtLink :to="service.href" class="text-sm text-neutral-400 transition-colors duration-200 hover:text-white">
                {{ service.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="col-span-2 lg:col-span-5">
          <h4 class="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Get in touch</h4>
          <ul class="mt-5 space-y-4 text-sm">
            <li class="flex items-start gap-3">
              <Icon name="material-symbols:call" class="mt-0.5 shrink-0 text-lg text-orange-500" />
              <div class="space-y-0.5">
                <a href="tel:+2349160000873" class="block text-neutral-300 transition-colors hover:text-white">+234-916-000-0873</a>
                <a href="tel:+2348097459745" class="block text-neutral-300 transition-colors hover:text-white">+234-809-745-9745</a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="material-symbols:mail-outline" class="mt-0.5 shrink-0 text-lg text-orange-500" />
              <a href="mailto:info@t30energies.com" class="text-neutral-300 transition-colors hover:text-white">info@t30energies.com</a>
            </li>
            <li class="flex items-start gap-3">
              <Icon name="material-symbols:location-on-outline" class="mt-0.5 shrink-0 text-lg text-orange-500" />
              <span class="text-neutral-300">88 Evo Road, GRA, Port Harcourt, Rivers State</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/10">
      <div class="container-x flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p class="order-2 text-sm text-neutral-500 sm:order-1">
          © {{ year }} T30 Energies Limited. All rights reserved.
        </p>
        <div class="order-1 flex items-center gap-2.5 sm:order-2">
          <a
            v-for="social in socials"
            :key="social.label"
            :href="social.href"
            :aria-label="social.label"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-all duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path :d="social.path" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear();

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/contact', label: 'Contact Us' },
];

const services = [
  { label: 'CNG Solutions & Conversion', href: '/services#cng-solutions-&-conversion-services' },
  { label: 'Civil Engineering', href: '/services#civil-engineering' },
  { label: 'Engineering Procurement', href: '/services#engineering-procurement' },
  { label: 'Material Procurement', href: '/services#material-procurement' },
  { label: 'Project Management', href: '/services#project-management' },
  { label: 'Recruitment & Training', href: '/services#manpower-recruitment-&-training' },
];

const socials = [
  { label: 'Facebook', href: '#', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Twitter', href: '#', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
  { label: 'Instagram', href: '#', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'LinkedIn', href: '#', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
];
</script>
