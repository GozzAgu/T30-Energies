<template>
  <section class="bg-gray-50 text-gray-800">
    <div class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-800">
              Drive Business Growth
            </h2>
            <p class="mt-4 text-gray-600">
              Unlock your business's full potential with expert guidance and innovative strategies tailored to your specific needs.
            </p>
            <ul class="mt-6 space-y-2 text-gray-600">
              <li>- Data-driven insights for decision-making.</li>
              <li>- Customized strategies for measurable results.</li>
              <li>- Ongoing support for long-term success.</li>
            </ul>
          </div>
          <div>
            <img
              src="/public/IMG-20241214-WA0001.jpg"
              alt="Business Growth"
              class="rounded-lg shadow-md"
              ref="imageOne"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-16">
          <div class="order-last lg:order-first">
            <img
              src="/public/IMG-20241214-WA0006.jpg"
              alt="Cutting-Edge Solutions"
              class="rounded-lg shadow-md"
              ref="imageTwo"
            />
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-800">
              Cutting-Edge Solutions
            </h2>
            <p class="mt-4 text-gray-600">
              Stay ahead of the competition with innovative tools and systems designed to transform your business operations.
            </p>
            <ul class="mt-6 space-y-2 text-gray-600">
              <li>- Scalable web applications for business needs.</li>
              <li>- Secure and efficient cloud infrastructure.</li>
              <li>- User-friendly interfaces for better engagement.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import gsap from "gsap";

// GSAP Animation on Images
onMounted(() => {
  gsap.fromTo(
    ".rounded-lg",
    { opacity: 0, y: 50 }, // Initial state
    { opacity: 1, y: 0, duration: 1, stagger: 0.3 } // Final state with staggered animation
  );
});
</script>

<style scoped>
section img {
  height: 400px; /* Adjust the height as needed */
  object-fit: cover; /* Ensures images maintain aspect ratio */
  width: 100%; /* Ensures images fill their container's width */
}
</style>