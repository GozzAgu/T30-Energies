<template>
  <section id="contact-form" class="section bg-white">
    <div class="container-x">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <!-- Left: intro + contact methods -->
        <div ref="leftCol">
          <span class="eyebrow">Contact us</span>
          <h2 class="display mt-4 text-4xl leading-tight sm:text-5xl">
            Let's start a conversation
          </h2>
          <p class="mt-5 text-lg leading-relaxed text-neutral-600">
            Reach out through any channel below, or send us a message and our team will get back to you within one business day.
          </p>

          <!-- Contact methods -->
          <div class="mt-10 space-y-3">
            <a
              v-for="method in methods"
              :key="method.label"
              :href="method.href"
              class="group flex items-center gap-4 rounded-2xl border border-neutral-200 p-4 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50"
            >
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors duration-200 group-hover:bg-orange-600 group-hover:text-white">
                <Icon :name="method.icon" class="text-2xl" />
              </div>
              <div class="min-w-0">
                <p class="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-400">{{ method.label }}</p>
                <p class="mt-0.5 truncate font-medium text-neutral-900">{{ method.value }}</p>
                <p v-if="method.sub" class="truncate text-sm text-neutral-500">{{ method.sub }}</p>
              </div>
              <Icon name="material-symbols:arrow-outward" class="ml-auto shrink-0 text-lg text-neutral-300 transition-colors group-hover:text-orange-600" />
            </a>
          </div>

          <!-- Hours + socials -->
          <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-neutral-200 p-5">
              <h4 class="flex items-center gap-2 text-sm font-semibold text-neutral-900">
                <Icon name="material-symbols:schedule-outline" class="text-lg text-orange-500" />
                Business hours
              </h4>
              <dl class="mt-4 space-y-2 text-sm">
                <div class="flex justify-between">
                  <dt class="text-neutral-500">Mon to Fri</dt>
                  <dd class="font-medium text-neutral-900">8AM to 5PM</dd>
                </div>
                <div class="flex justify-between">
                  <dt class="text-neutral-500">Saturday</dt>
                  <dd class="font-medium text-neutral-900">9AM to 2PM</dd>
                </div>
                <div class="flex justify-between">
                  <dt class="text-neutral-500">Sunday</dt>
                  <dd class="font-medium text-neutral-900">Closed</dd>
                </div>
              </dl>
            </div>

            <div class="rounded-2xl border border-neutral-200 p-5">
              <h4 class="text-sm font-semibold text-neutral-900">Follow us</h4>
              <p class="mt-1 text-sm text-neutral-500">Stay in the loop.</p>
              <div class="mt-4 flex items-center gap-2.5">
                <a
                  v-for="social in socials"
                  :key="social.label"
                  :href="social.href"
                  :aria-label="social.label"
                  class="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path :d="social.path" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: form -->
        <div ref="rightCol">
          <div class="rounded-3xl border border-neutral-200 bg-neutral-50/50 p-6 shadow-soft sm:p-8 md:p-10">
            <transition
              mode="out-in"
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
            >
              <!-- Success state -->
              <div v-if="submitted" key="success" class="flex flex-col items-center py-12 text-center">
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Icon name="material-symbols:check-rounded" class="text-4xl" />
                </div>
                <h3 class="mt-6 text-2xl font-semibold text-neutral-900">Message sent</h3>
                <p class="mt-3 max-w-sm text-neutral-600">
                  Thanks{{ sentName ? `, ${sentName}` : '' }}! We've received your message and will be in touch shortly.
                </p>
                <button @click="resetForm" class="btn btn-md btn-secondary mt-8">
                  Send another message
                </button>
              </div>

              <!-- Form -->
              <form v-else key="form" @submit.prevent="handleSubmit" class="space-y-5">
                <div>
                  <h3 class="text-2xl font-semibold tracking-tight text-neutral-900">Send us a message</h3>
                  <p class="mt-2 text-neutral-600">Fill in the form and we'll respond as soon as possible.</p>
                </div>

                <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label for="name" class="mb-1.5 block text-sm font-medium text-neutral-700">
                      Full name <span class="text-orange-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      v-model="form.name"
                      class="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 transition-all duration-200 placeholder:text-neutral-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      required
                    />
                  </div>
                  <div>
                    <label for="email" class="mb-1.5 block text-sm font-medium text-neutral-700">
                      Email address <span class="text-orange-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      v-model="form.email"
                      class="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 transition-all duration-200 placeholder:text-neutral-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label for="subject" class="mb-1.5 block text-sm font-medium text-neutral-700">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    v-model="form.subject"
                    class="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 transition-all duration-200 placeholder:text-neutral-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div>
                  <label for="message" class="mb-1.5 block text-sm font-medium text-neutral-700">
                    Your message <span class="text-orange-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    v-model="form.message"
                    rows="5"
                    class="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 transition-all duration-200 placeholder:text-neutral-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    required
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-lg btn-primary w-full">
                  Send message
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
                <p class="text-center text-xs text-neutral-400">
                  We respect your privacy. Your details are never shared.
                </p>
              </form>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Map -->
  <section class="pb-20 md:pb-28">
    <div class="container-x">
      <div class="relative overflow-hidden rounded-3xl border border-neutral-200 shadow-soft">
        <iframe
          class="block h-[420px] w-full md:h-[520px]"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          loading="lazy"
          title="T30 Energies office location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31839.68591437165!2d7.0103419!3d4.8068424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd9ad68d8c6d%3A0xf74c3b8a6b6d9e4b!2s88%20Evo%20Rd%2C%20GRA%2C%20Port%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1642024158442!5m2!1sen!2sng">
        </iframe>

        <!-- Floating address card -->
        <div class="pointer-events-none absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
          <div class="pointer-events-auto max-w-sm rounded-2xl bg-white/95 p-6 shadow-lift backdrop-blur">
            <span class="eyebrow">Visit us</span>
            <h3 class="mt-3 text-xl font-semibold text-neutral-900">Our Port Harcourt office</h3>
            <p class="mt-2 text-sm leading-relaxed text-neutral-600">
              88 Evo Road, GRA,<br />Port Harcourt, Rivers State.
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=88+Evo+Rd,+GRA,+Port+Harcourt,+Rivers"
              target="_blank"
              class="link-arrow mt-4 text-sm"
            >
              Get directions
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from 'vue';
import gsap from 'gsap';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const submitted = ref(false);
const sentName = ref('');
const leftCol = ref(null);
const rightCol = ref(null);

const methods = [
  {
    label: 'Email us',
    value: 'info@t30energies.com',
    href: 'mailto:info@t30energies.com',
    icon: 'material-symbols:mail-outline',
  },
  {
    label: 'Call us',
    value: '+(234)-916-000-0873',
    sub: '+(234)-809-745-9745',
    href: 'tel:+2349160000873',
    icon: 'material-symbols:call',
  },
  {
    label: 'Visit us',
    value: '88 Evo Road, GRA',
    sub: 'Port Harcourt, Rivers State',
    href: 'https://www.google.com/maps/search/?api=1&query=88+Evo+Rd,+GRA,+Port+Harcourt,+Rivers',
    icon: 'material-symbols:location-on-outline',
  },
];

const socials = [
  { label: 'Facebook', href: '#', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { label: 'Twitter', href: '#', path: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' },
  { label: 'Instagram', href: '#', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { label: 'LinkedIn', href: '#', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
];

const handleSubmit = () => {
  sentName.value = form.name;
  submitted.value = true;
};

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.subject = '';
  form.message = '';
  submitted.value = false;
};

onMounted(() => {
  gsap.fromTo(
    [leftCol.value, rightCol.value],
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
  );
});
</script>
