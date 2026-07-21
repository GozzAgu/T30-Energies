<template>
  <section class="section bg-white">
    <div class="container-x">
      <!-- Intro -->
      <div class="max-w-2xl">
        <span class="eyebrow">What we offer</span>
        <h2 class="display mt-4 text-4xl leading-tight sm:text-5xl">
          Precision across every service line
        </h2>
        <p class="mt-5 text-lg text-neutral-600">
          <span class="font-semibold text-neutral-900">T30 Energies Ltd</span> delivers a comprehensive range of services spanning construction, engineering, and gas products. Every project is handled with care and to the highest industry standards.
        </p>
      </div>

      <!-- Quick jump nav -->
      <div class="mt-10 flex flex-wrap gap-2.5">
        <a
          v-for="(service, index) in services"
          :key="index"
          :href="`#${slug(service.title)}`"
          class="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-600 transition-all duration-200 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-700"
        >
          {{ service.short }}
        </a>
      </div>

      <!-- Services list -->
      <div class="mt-16 space-y-16 md:space-y-24">
        <div
          v-for="(service, index) in services"
          :key="index"
          :id="slug(service.title)"
          class="grid scroll-mt-28 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <!-- Text -->
          <div :class="index % 2 === 0 ? '' : 'lg:order-last'">
            <div class="flex items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 font-display text-sm font-bold text-white">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <span class="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600">
                {{ service.short }}
              </span>
            </div>
            <h3 class="mt-5 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              {{ service.title }}
            </h3>
            <p class="mt-4 text-lg leading-relaxed text-neutral-600">{{ service.description }}</p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span
                v-for="tag in service.tags"
                :key="tag"
                class="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm text-neutral-600"
              >
                {{ tag }}
              </span>
            </div>

            <NuxtLink to="/contact" class="link-arrow mt-7 text-[15px]">
              Enquire about this service
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>

          <!-- Image -->
          <div class="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-soft">
            <img
              :src="service.image"
              :alt="service.title"
              class="h-72 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-96"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Project gallery -->
    <div class="container-x mt-24 md:mt-32">
      <div class="rounded-[2rem] bg-neutral-50 px-6 py-16 md:px-12 md:py-20">
        <div class="mx-auto max-w-2xl text-center">
          <span class="eyebrow">Project gallery</span>
          <h2 class="display mt-4 text-4xl leading-tight sm:text-5xl">Our work in action</h2>
          <p class="mt-5 text-lg text-neutral-600">
            A glimpse of the projects and services we've delivered across various industries.
          </p>
        </div>
        <div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="group relative overflow-hidden rounded-2xl"
          >
            <img
              loading="lazy"
              :src="service.image"
              :alt="service.title"
              class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/10 to-transparent"></div>
            <div class="absolute inset-x-0 bottom-0 flex items-center gap-2 p-5">
              <span class="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
              <p class="text-base font-semibold text-white">{{ service.short }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="container-x mt-16">
      <div class="relative overflow-hidden rounded-[2rem] bg-neutral-950 px-8 py-16 text-center md:px-16 md:py-24">
        <div class="absolute inset-0 grid-faint opacity-[0.12]"></div>
        <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-600/20 blur-3xl"></div>
        <div class="relative mx-auto max-w-2xl">
          <h2 class="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">Ready to elevate your business?</h2>
          <p class="mx-auto mt-5 max-w-xl text-lg text-neutral-400">
            Let us help you unlock new growth opportunities. Get in touch today to see how we can work together.
          </p>
          <div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <NuxtLink to="/contact" class="btn btn-lg btn-primary">
              Contact us today
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <a href="tel:+2349160000873" class="btn btn-lg btn-ghost-dark">
              Call us directly
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const slug = (title) => title.toLowerCase().replace(/\s+/g, '-');

const services = [
  {
    title: 'CNG Solutions & Conversion Services',
    short: 'CNG Solutions',
    description: 'Comprehensive Compressed Natural Gas (CNG) solutions and conversion services, helping businesses transition to cleaner, more cost-effective energy alternatives. Our expert team handles everything from system design to installation and maintenance.',
    image: '/gas.png',
    tags: ['System design', 'Vehicle conversion', 'Refilling infrastructure', 'Maintenance'],
  },
  {
    title: 'Civil Engineering',
    short: 'Civil Engineering',
    description: 'Our civil engineering expertise covers a wide range of infrastructure projects including roads, bridges, water systems, and public facilities, combining technical excellence with innovative solutions that meet the highest standards of safety, quality, and sustainability.',
    image: '/civil.png',
    tags: ['Roads & bridges', 'Water systems', 'Public facilities', 'Structural works'],
  },
  {
    title: 'Engineering Procurement',
    short: 'Eng. Procurement',
    description: 'Comprehensive engineering procurement services, sourcing and managing the acquisition of specialized equipment, materials, and services required for complex engineering projects, ensuring quality, cost-effectiveness, and timely delivery.',
    image: '/construction.png',
    tags: ['Equipment sourcing', 'Vendor management', 'Quality control', 'Logistics'],
  },
  {
    title: 'Material Procurement',
    short: 'Material Procurement',
    description: 'Our material procurement services cover a wide range of industrial materials, equipment, and supplies. We leverage our extensive supplier network to ensure competitive pricing, quality assurance, and reliable delivery schedules.',
    image: '/trade.png',
    tags: ['Industrial supplies', 'Supplier network', 'Competitive pricing', 'Reliable delivery'],
  },
  {
    title: 'Project Management',
    short: 'Project Management',
    description: 'Comprehensive project management services, ensuring every project is executed successfully from conception to completion. Our experienced project managers coordinate all aspects of delivery, maintaining quality, timeline, and budget adherence.',
    image: '/project.png',
    tags: ['Planning', 'Coordination', 'Budget control', 'On-time delivery'],
  },
  {
    title: 'Manpower Recruitment & Training',
    short: 'Recruitment & Training',
    description: 'We specialize in recruiting and training skilled professionals for the energy and construction sectors. Our recruitment identifies top talent, while our training programs equip workers with the latest industry knowledge and safety protocols.',
    image: '/safety.png',
    tags: ['Talent sourcing', 'Skills training', 'Safety protocols', 'Certification'],
  },
];

onMounted(() => {
  if (route.hash) {
    const element = document.querySelector(route.hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
</script>
