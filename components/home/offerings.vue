<template>
  <section class="section bg-white">
    <div class="container-x">
      <!-- Section Header -->
      <div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <span class="eyebrow">What we do</span>
          <h2 class="display mt-4 text-4xl leading-tight sm:text-5xl">
            Solutions tailored to your needs
          </h2>
          <p class="mt-5 text-lg text-neutral-600">
            From innovation to implementation, we deliver end-to-end services across energy and engineering.
          </p>
        </div>
        <NuxtLink to="/services" class="link-arrow shrink-0 text-[15px]">
          View all services
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Services Grid -->
      <div class="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <button
          v-for="(service, index) in services"
          :key="index"
          @click="redirectToPage(service)"
          class="card card-hover group flex flex-col p-8 text-left"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-900 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
            <Icon :name="service.icon" class="text-2xl" />
          </div>
          <h3 class="mt-6 text-lg font-semibold text-neutral-900">
            {{ service.title }}
          </h3>
          <p class="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-600">
            {{ service.description }}
          </p>
          <span class="link-arrow mt-6 text-sm">
            Learn more
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const redirectToPage = (service) => {
  router.push(`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`);
};

const services = [
  {
    icon: 'material-symbols:gas-meter-outline-rounded',
    title: 'CNG Solutions & Conversion Services',
    description: 'Comprehensive Compressed Natural Gas solutions and conversion services, helping businesses transition to cleaner, more cost-effective energy alternatives from design to maintenance.',
  },
  {
    icon: 'material-symbols:architecture',
    title: 'Civil Engineering',
    description: 'Infrastructure projects including roads, bridges, water systems, and public facilities, combining technical excellence with innovative, sustainable solutions.',
  },
  {
    icon: 'material-symbols:engineering',
    title: 'Engineering Procurement',
    description: 'Sourcing and managing specialized equipment, materials, and services for complex engineering projects with quality, cost-effectiveness, and timely delivery.',
  },
  {
    icon: 'material-symbols:inventory-2-outline',
    title: 'Material Procurement',
    description: 'A wide range of industrial materials and supplies, leveraging our supplier network for competitive pricing, quality assurance, and reliable delivery.',
  },
  {
    icon: 'material-symbols:checklist-rtl',
    title: 'Project Management',
    description: 'End-to-end project management ensuring successful execution from conception to completion, maintaining quality, timeline, and budget adherence.',
  },
  {
    icon: 'material-symbols:groups',
    title: 'Manpower Recruitment & Training',
    description: 'Recruiting and training skilled professionals for the energy and construction sectors, equipping teams with the latest industry knowledge and safety protocols.',
  },
];
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
