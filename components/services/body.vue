<template>
  <section class="section bg-neutral-50">
    <div class="container-x">
      <div class="max-w-2xl">
        <span class="eyebrow">Why choose us</span>
        <h2 class="display mt-4 text-4xl leading-tight sm:text-5xl">
          Excellence in every engagement
        </h2>
        <p class="mt-5 text-lg text-neutral-600">
          We deliver through innovation, expertise, and an unwavering commitment to your success.
        </p>
      </div>

      <div class="mt-16 space-y-20 md:space-y-24">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div :class="index % 2 === 0 ? '' : 'lg:order-last'">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600 text-white">
              <Icon :name="feature.icon" class="text-2xl" />
            </div>
            <h3 class="mt-6 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              {{ feature.title }}
            </h3>
            <p class="mt-4 text-lg leading-relaxed text-neutral-600">{{ feature.description }}</p>
            <ul class="mt-8 space-y-5">
              <li v-for="point in feature.points" :key="point.title" class="flex gap-4">
                <div class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-neutral-900">{{ point.title }}</h4>
                  <p class="mt-1 text-sm leading-relaxed text-neutral-600">{{ point.description }}</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-soft">
            <img
              :src="feature.image"
              :alt="feature.title"
              class="h-80 w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[26rem]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: 'material-symbols:trending-up',
    title: 'Drive business growth',
    description: 'Unlock your business\'s full potential with expert guidance and innovative strategies tailored to your specific needs, achieving measurable, sustainable results.',
    image: '/watch.png',
    points: [
      { title: 'Data-driven insights', description: 'Make informed decisions backed by comprehensive analysis and industry expertise.' },
      { title: 'Customized strategies', description: 'Tailored solutions designed to meet your unique objectives and challenges.' },
      { title: 'Ongoing support', description: 'Continuous partnership and guidance for sustained long-term success.' },
    ],
  },
  {
    icon: 'material-symbols:lightbulb-outline',
    title: 'Cutting-edge solutions',
    description: 'Stay ahead of the competition with innovative tools and systems designed to transform your operations, leveraging the latest technology for superior results.',
    image: '/men.png',
    points: [
      { title: 'Advanced technology', description: 'State-of-the-art equipment and methodologies across all our projects.' },
      { title: 'Industry expertise', description: 'Decades of combined experience in oil & gas, construction, and engineering.' },
      { title: 'Quality assurance', description: 'Rigorous standards ensuring excellence in every aspect of service delivery.' },
    ],
  },
];
</script>
