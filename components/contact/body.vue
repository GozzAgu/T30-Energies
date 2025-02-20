<template>
  <section class="relative bg-gradient-to-b from-white to-gray-100 text-gray-800 py-16 px-6 md:px-12 lg:px-24" ref="contactSection">
    <div class="mt-12 flex flex-col lg:flex-row gap-10 items-start justify-between">
      <div class="lg:w-7/12 px-8 lg:px-12" ref="formContainer">
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
            class="mt-6 w-full py-3 text-lg font-semibold text-white bg-orange-400 rounded-lg hover:bg-orange-500 transition-transform transform hover:scale-105"
            ref="submitButton"
          >
            Send Message
          </button>
        </form>
      </div>

      <div class="lg:w-5/12 space-y-8" ref="contactDetails">
        <!-- Contact Info Sections -->
        <div class="flex items-center gap-4">
          <div
            class="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500"
          >
            <Icon name="material-symbols:add-location" class="text-orange-400 text-2xl" />
          </div>
          <div>
            <h4 class="font-bold">Office Address</h4>
            <p class="text-gray-600 text-sm">88 Evo road, GRA, Port Harcourt, Rivers State.</p>
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
            <p class="text-gray-600 text-sm">info@t30energies.com</p>
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
            <p class="text-gray-600 text-sm">+(234)-916-000-0873</p>
            <p class="text-gray-600 text-sm">+(234)-809-745-9745</p>
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

  <section class="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-2xl font-bold text-gray-800 text-center mb-6">Find Us Here</h3>
      <div class="rounded-lg overflow-hidden shadow-lg">
        <iframe
          class="w-full h-96"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31839.68591437165!2d7.0103419!3d4.8068424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd9ad68d8c6d%3A0xf74c3b8a6b6d9e4b!2s88%20Evo%20Rd%2C%20GRA%2C%20Port%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1642024158442!5m2!1sen!2sng">
        </iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from "vue";
import gsap from "gsap";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const contactSection = ref(null);
const formContainer = ref(null);
const contactDetails = ref(null);
const submitButton = ref(null);

const handleSubmit = () => {
  alert(`Thank you, ${form.name}! Your message has been sent.`);
  form.name = "";
  form.email = "";
  form.message = "";
};

onMounted(() => {
  // Animate the contact section when the page loads
  gsap.from(contactSection.value, {
    opacity: 0,
    duration: 1.5,
    y: 50,
    ease: "power4.out",
  });

  // Animate the form container
  gsap.from(formContainer.value, {
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    x: -100,
    ease: "power4.out",
  });

  // Animate the contact details
  gsap.from(contactDetails.value, {
    opacity: 0,
    duration: 1.5,
    delay: 0.7,
    x: 100,
    ease: "power4.out",
  });

  // Animate the submit button
  gsap.from(submitButton.value, {
    opacity: 0,
    duration: 1,
    delay: 1,
    scale: 0.8,
    ease: "power4.out",
  });
});
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