<template>
  <section class="section bg-neutral-50">
    <div class="container-x">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Image -->
        <div class="relative order-last lg:order-first">
          <div class="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-soft">
            <img
              src="/IMG-20241214-WA0002.jpg"
              alt="T30 Energies operations"
              class="h-full w-full object-cover"
            />
          </div>
        </div>

        <!-- Text -->
        <div>
          <span class="eyebrow">Our approach</span>
          <h2 class="display mt-4 text-4xl leading-tight sm:text-5xl">
            Driving change with reliable energy solutions
          </h2>
          <p class="mt-5 text-lg leading-relaxed text-neutral-600">
            At T30 Energies, we are redefining the future of oil and gas with sustainable practices and state-of-the-art technology, paving the way for a brighter tomorrow.
          </p>

          <ul class="mt-8 space-y-5">
            <li v-for="item in points" :key="item.title" class="flex gap-4">
              <div class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-neutral-900">{{ item.title }}</h4>
                <p class="mt-1 text-sm leading-relaxed text-neutral-600">{{ item.description }}</p>
              </div>
            </li>
          </ul>

          <div class="mt-10">
            <NuxtLink to="/about" class="btn btn-lg btn-ink">
              Learn more about us
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const points = [
  {
    title: 'Sustainability first',
    description: 'Commitment to eco-friendly operations and environmental responsibility.',
  },
  {
    title: 'Advanced technology',
    description: 'Cutting-edge solutions to maximize efficiency and minimize waste.',
  },
  {
    title: 'Expert team',
    description: 'Global professionals dedicated to delivering energy excellence.',
  },
];
</script>
