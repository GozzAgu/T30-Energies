<template>
  <section class="section bg-white">
    <div class="container-x">
      <!-- Section Heading -->
      <div class="max-w-2xl">
        <span class="eyebrow">Why T30 Energies</span>
        <h2 class="display mt-4 text-4xl leading-tight sm:text-5xl">
          Built on values that set us apart
        </h2>
        <p class="mt-5 text-lg text-neutral-600">
          Explore the core principles that make us a trusted partner in the energy industry.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="group bg-white p-8 transition-colors duration-300 hover:bg-neutral-50"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
            <Icon :name="feature.icon" class="text-2xl" />
          </div>
          <h3 class="mt-6 text-lg font-semibold text-neutral-900">
            {{ feature.title }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-neutral-600">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'mdi:leaf',
    title: 'Sustainability',
    description: 'We prioritize environmentally friendly practices to ensure a greener future for all.',
  },
  {
    icon: 'heroicons-outline:light-bulb',
    title: 'Innovation',
    description: 'Cutting-edge technology and solutions that drive efficiency and growth.',
  },
  {
    icon: 'mdi:earth',
    title: 'Global Reach',
    description: 'Delivering energy solutions to diverse markets across the globe.',
  },
  {
    icon: 'mdi:account-group',
    title: 'Expert Team',
    description: 'A team of seasoned professionals committed to excellence and innovation.',
  },
  {
    icon: 'heroicons-outline:shield-check',
    title: 'Safety First',
    description: 'Adhering to the highest safety standards in all our operations.',
  },
  {
    icon: 'mdi:recycle',
    title: 'Eco-Friendly',
    description: 'Dedicated to reducing our environmental footprint and promoting sustainability.',
  },
];
</script>
