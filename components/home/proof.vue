<template>
  <section class="section relative overflow-hidden bg-neutral-950 text-white">
    <div class="absolute inset-0 grid-faint opacity-[0.15]"></div>

    <div class="container-x relative">
      <div class="mx-auto max-w-2xl text-center">
        <span class="eyebrow eyebrow-on-dark">Vision &amp; mission</span>
        <h2 class="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          Leading the energy transition
        </h2>
        <p class="mt-5 text-lg text-neutral-400">
          Prioritizing sustainability and innovation at every step of our journey.
        </p>
      </div>

      <div class="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2">
        <div
          v-for="card in cards"
          :key="card.title"
          class="rounded-3xl border border-white/10 bg-white/[0.03] p-10 transition-colors duration-300 hover:bg-white/[0.06]"
        >
          <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
            <Icon :name="card.icon" class="text-2xl" />
          </div>
          <h3 class="mt-7 text-2xl font-semibold text-white">{{ card.title }}</h3>
          <p class="mt-4 leading-relaxed text-neutral-400">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    icon: 'material-symbols:visibility-outline-rounded',
    title: 'Our Vision',
    description: 'To become a global leader in delivering sustainable and innovative energy solutions that empower communities and businesses for a brighter future.',
  },
  {
    icon: 'material-symbols:target',
    title: 'Our Mission',
    description: 'To drive positive change by investing in clean energy, fostering innovation, and creating value for our stakeholders while protecting the planet.',
  },
];
</script>
