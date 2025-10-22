<template>
  <section id="contact-form" class="relative bg-gradient-to-b from-gray-50 to-white text-gray-800 py-20 px-6 md:px-12 lg:px-24" ref="contactSection">
    <div class="max-w-7xl mx-auto">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Connect</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a question or want to work together? We'd love to hear from you. Fill out the form or reach out directly.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-12 items-start justify-between">
        <!-- Contact Form -->
        <div class="lg:w-7/12 w-full" ref="formContainer">
          <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="relative">
                  <label for="name" class="block text-gray-700 text-sm font-semibold mb-2">
                    Full Name <span class="text-orange-500">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      v-model="form.name"
                      class="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-orange-400 focus:bg-white transition-all duration-200"
                      required
                    />
                  </div>
                </div>
                <div class="relative">
                  <label for="email" class="block text-gray-700 text-sm font-semibold mb-2">
                    Email Address <span class="text-orange-500">*</span>
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      v-model="form.email"
                      class="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-orange-400 focus:bg-white transition-all duration-200"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="relative">
                <label for="message" class="block text-gray-700 text-sm font-semibold mb-2">
                  Your Message <span class="text-orange-500">*</span>
                </label>
                <div class="relative">
                  <div class="absolute top-4 left-4 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project or inquiry..."
                    v-model="form.message"
                    class="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-orange-400 focus:bg-white transition-all duration-200 resize-none"
                    rows="6"
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                class="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                ref="submitButton"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="lg:w-5/12 w-full space-y-6" ref="contactDetails">
          <!-- Contact Info Card -->
          <div class="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white">
            <h3 class="text-2xl font-bold mb-6">Contact Information</h3>
            <div class="space-y-6">
              <!-- Address -->
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
                  <Icon name="material-symbols:add-location" class="text-white text-2xl" />
                </div>
                <div>
                  <h4 class="font-bold text-lg mb-1">Office Address</h4>
                  <p class="text-orange-50 text-sm leading-relaxed">
                    88 Evo road, GRA,<br />Port Harcourt, Rivers State.
                  </p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
                  <Icon name="material-symbols:attach-email" class="text-white text-2xl" />
                </div>
                <div>
                  <h4 class="font-bold text-lg mb-1">Email Us</h4>
                  <a href="mailto:info@t30energies.com" class="text-orange-50 hover:text-white text-sm transition-colors duration-200 underline-offset-2 hover:underline">
                    info@t30energies.com
                  </a>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
                  <Icon name="material-symbols:phone-enabled-sharp" class="text-white text-2xl" />
                </div>
                <div>
                  <h4 class="font-bold text-lg mb-1">Call Us</h4>
                  <div class="space-y-1">
                    <p>
                      <a href="tel:+2349160000873" class="text-orange-50 hover:text-white text-sm transition-colors duration-200 underline-offset-2 hover:underline">
                        +(234)-916-000-0873
                      </a>
                    </p>
                    <p>
                      <a href="tel:+2348097459745" class="text-orange-50 hover:text-white text-sm transition-colors duration-200 underline-offset-2 hover:underline">
                        +(234)-809-745-9745
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media Card -->
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h4 class="font-bold text-xl text-gray-900 mb-4">Connect With Us</h4>
            <p class="text-gray-600 text-sm mb-6">Follow us on social media for updates and insights</p>
            <div class="flex items-center gap-4">
              <a href="#" class="w-12 h-12 rounded-xl bg-orange-100 hover:bg-orange-500 flex items-center justify-center text-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg" title="Facebook">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="w-12 h-12 rounded-xl bg-orange-100 hover:bg-orange-500 flex items-center justify-center text-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg" title="Twitter">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="w-12 h-12 rounded-xl bg-orange-100 hover:bg-orange-500 flex items-center justify-center text-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg" title="Instagram">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="w-12 h-12 rounded-xl bg-orange-100 hover:bg-orange-500 flex items-center justify-center text-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg" title="LinkedIn">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Business Hours Card -->
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h4 class="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
              <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Business Hours
            </h4>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Monday - Friday:</span>
                <span class="font-semibold text-gray-900">8:00 AM - 5:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Saturday:</span>
                <span class="font-semibold text-gray-900">9:00 AM - 2:00 PM</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Sunday:</span>
                <span class="font-semibold text-gray-900">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Map Section -->
  <section class="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h3 class="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h3>
        <div class="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
        <p class="text-lg text-gray-600">
          Located in the heart of Port Harcourt, we're easy to find and always ready to welcome you.
        </p>
      </div>
      <div class="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
        <iframe
          class="w-full h-96 md:h-[500px]"
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