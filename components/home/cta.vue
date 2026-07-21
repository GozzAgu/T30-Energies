<template>
  <section class="section bg-neutral-50">
    <div class="container-x">
      <div class="relative overflow-hidden rounded-[2rem] bg-neutral-950 px-8 py-16 text-center md:px-16 md:py-24">
        <div class="absolute inset-0 grid-faint opacity-[0.12]"></div>
        <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-600/20 blur-3xl"></div>

        <div class="relative mx-auto max-w-2xl">
          <h2 class="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            Ready to power your next project?
          </h2>
          <p class="mx-auto mt-5 max-w-xl text-lg text-neutral-400">
            Join the clients who trust T30 Energies for their energy solutions. Let's discuss how we can help your business thrive.
          </p>
          <div class="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <NuxtLink to="/contact" class="btn btn-lg btn-primary">
              Get started today
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/services" class="btn btn-lg btn-ghost-dark">
              View our services
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
