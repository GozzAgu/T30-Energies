<template>
  <section class="relative bg-gradient-to-b from-white to-gray-100 text-gray-800 py-16 px-6 md:px-12 lg:px-24">
    <div class="mt-12 flex flex-col lg:flex-row gap-10 items-start justify-between">
      <div class="lg:w-7/12 bg-white rounded-xl shadow-sm p-8 lg:p-12">
        <form @submit.prevent="handleSubmit">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="relative">
              <label for="name" class="text-gray-700 text-sm font-medium">Your Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                v-model="form.name"
                class="mt-2 w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
                required
              />
            </div>
            <div class="relative">
              <label for="email" class="text-gray-700 text-sm font-medium">Your Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                v-model="form.email"
                class="mt-2 w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
                required
              />
            </div>
          </div>
          <div class="mt-6">
            <label for="message" class="text-gray-700 text-sm font-medium">Your Message</label>
            <textarea
              id="message"
              placeholder="Type your message here..."
              v-model="form.message"
              class="mt-2 w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
              rows="6"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="mt-6 w-full py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      <div class="lg:w-5/12 space-y-8">
        <div class="flex items-center gap-4">
          <div
            class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"
          >
            <Icon name="material-symbols:add-location" class="text-orange-400 text-2xl" />
          </div>
          <div>
            <h4 class="font-bold">Office Address</h4>
            <p class="text-gray-600 text-sm">123 Modern Lane, Bright City, BC 56789</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div
            class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"
          >
            <Icon name="material-symbols:attach-email" class="text-orange-400 text-2xl" />
          </div>
          <div>
            <h4 class="font-bold">Email Us</h4>
            <p class="text-gray-600 text-sm">contact@modernenergy.com</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div
            class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"
          >
            <Icon name="material-symbols:phone-enabled-sharp" class="text-orange-400 text-2xl" />
          </div>
          <div>
            <h4 class="font-bold">Call Us</h4>
            <p class="text-gray-600 text-sm">+1 (987) 654-3210</p>
          </div>
        </div>
        <div class="mt-6">
          <h4 class="font-bold text-lg">Follow Us</h4>
          <div class="flex items-center gap-6 mt-4">
            <a href="#" class="text-orange-500 hover:text-orange-600 text-2xl">
              <i class="pi pi-facebook"></i>
            </a>
            <a href="#" class="text-orange-500 hover:text-orange-600 text-2xl">
              <i class="pi pi-twitter"></i>
            </a>
            <a href="#" class="text-orange-500 hover:text-orange-600 text-2xl">
              <i class="pi pi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const handleSubmit = () => {
  alert(`Thank you, ${form.name}! Your message has been sent.`);
  form.name = "";
  form.email = "";
  form.message = "";
};
</script>

<style scoped>
form input,
form textarea {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

form input:focus,
form textarea:focus {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button:hover {
  box-shadow: 0 8px 16px rgba(255, 153, 51, 0.3);
}

.icon-container:hover {
  transform: scale(1.05);
}
</style>