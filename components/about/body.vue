<template>
  <section class="bg-gradient-to-b from-gray-50 to-white text-gray-800">
    <div class="max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6 md:px-12">
      <!-- Company Profile PDF Button -->
      <div class="text-center mb-12 md:mb-20 bg-gradient-to-r from-orange-50 to-gray-50 rounded-2xl p-6 md:p-12 shadow-inner">
        <div class="w-16 h-16 md:w-20 md:h-20 bg-orange-500 rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-lg">
          <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Company Profile</h2>
        <p class="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
          Download our comprehensive company profile to learn more about T30 Energies, our services, and our achievements
        </p>
        <a
          href="/T30 Energies Profile 2025.pdf"
          target="_blank"
          class="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm md:text-base"
        >
          <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
          <span class="hidden sm:inline">Download Company Profile (PDF)</span>
          <span class="sm:hidden">Download Profile</span>
        </a>
      </div>

      <!-- Team Section -->
      <div class="text-center mb-8 md:mb-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Meet Our Team</h2>
        <div class="w-20 md:w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-4 md:mb-6"></div>
        <p class="mt-4 text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
          Our team of dedicated professionals brings together decades of experience and expertise to deliver exceptional results in the energy sector.
        </p>
      </div>

      <div class="mt-8 md:mt-12 space-y-4 md:space-y-6">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 border border-gray-100"
          :class="{ 'ring-2 ring-orange-400': member.isOpen }"
        >
          <button
            @click="toggleAccordion(index)"
            class="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer hover:bg-gray-50 transition-colors duration-200"
          >
            <div class="flex items-center gap-4 md:gap-6">
              <div class="relative">
                <img
                  :src="member.image"
                  :alt="member.name"
                  class="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover ring-4 ring-orange-100 transition-transform duration-300"
                  :class="{ 'scale-110': member.isOpen }"
                />
                <div class="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg class="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <h4 class="text-lg md:text-2xl font-bold text-gray-900 mb-1 truncate">{{ member.name }}</h4>
                <p class="text-sm md:text-base text-orange-600 font-semibold truncate">{{ member.role }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <span class="hidden lg:block text-sm text-gray-500 font-medium">
                {{ member.isOpen ? 'Click to close' : 'Click to learn more' }}
              </span>
              <div
                class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-100 flex items-center justify-center transform transition-transform duration-300"
                :class="{ 'rotate-180 bg-orange-500': member.isOpen }"
              >
                <svg
                  class="w-4 h-4 md:w-5 md:h-5 transition-colors duration-300"
                  :class="member.isOpen ? 'text-white' : 'text-orange-600'"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </button>

          <transition name="accordion">
            <div v-if="member.isOpen" class="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-gray-100 bg-gradient-to-br from-gray-50 to-orange-50">
              <div class="bg-white rounded-xl p-4 md:p-6 shadow-inner">
                <p class="text-sm md:text-base text-gray-700 leading-relaxed">{{ member.bio }}</p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const teamMembers = ref([
  {
    name: 'Lanre Oluseye',
    role: 'MD/CEO',
    image: '/lanre.png',
    bio: 'Lanre Oluseye is a passionate architect and visionary leader known for his ability to motivate and inspire audiences as a conference speaker. With an Executive MBA from the esteemed Metropolitan Business School in the United Kingdom, he equips himself with advanced business acumen that complements his architectural expertise. He is an alumnus of several prestigious institutions, including the Graduate School of Business at the University of Cape Town, where he gained deep insights into global business practices, as well as the Dale Carnegie Institute, renowned for its focus on leadership and personal development, and the London School of Economics and Political Science, where he explored the intersection of economics and social sciences. In addition to his formal education, Lanre is a Certified International Project Manager (CIPM), showcasing his proficiency in managing complex projects across various sectors. His recognition as a Fellow of the American Academy of Project Managers (FAAPM) reflects his commitment to excellence and leadership in project management. Recently, he has further broadened his expertise by qualifying as a Certified Emotional Intelligence Specialist, enabling him to harness the power of emotional intelligence to enhance teamwork and drive positive change within organizations. Lanre’s multifaceted background and dedication to his craft make him a prominent figure in both architecture and project management.',
    showBio: false
  },
  {
    name: 'Samson Eboh',
    role: 'Head of IT & Communications',
    image: '/samson.png',
    bio: 'Eboh Samson is a results-driven professional with a degree in International Studies and Diplomacy from the prestigious University of Benin. With over three years of experience in the oil and gas industry and more than seven years in Information Technology, he brings a rare blend of strategic insight and technical expertise. Certified in Data Analysis and Project Management, Samson leverages innovation and precision to deliver impactful, technology-driven solutions across diverse sectors.',
    showBio: false
  },
  {  
    name: 'Otu Jacobs',
    role: 'Engineering/Fabrications',
    image: '/otu.png',
    bio: 'Otu Jacobs holds a Higher National Diploma in Welding and Fabrication Engineering Technology from the Petroleum Training Institute, Effurun, Delta State, and is certified as a Professional Scrum Master (PSM) and Project Management Professional (PMP). With over a decade of experience, including 7 years in the oil and gas industry, he brings knowledge and expertise to every project he undertakes.',
    showBio: false
  },
  {
    name: 'Oluwatobi Iyanda',
    role: 'Business Development Manager',
    image: '/tobi.png',
    bio: 'Oluwatobi Iyanda holds a Bachelor of Agriculture (B.Agric) in Horticulture from the Federal University of Agriculture, Abeokuta. She has extensive experience in business development across various sectors and has been a Business Development Manager in the oil and gas sector for seven years. To enhance her expertise, she has undergone specialized training and obtained certifications in business development, equipping her with advanced skills in market analysis, strategic planning, client relationship management, and project management. ',
    showBio: false
  },
  {
    name: 'Promise Udoh',
    role: 'Head of Operations',
    image: '/udoh.png',
    bio: 'Promise Udoh is a skilled civil engineer with a Higher National Diploma in Civil Engineering and five years of extensive experience in the oil and gas sector. His strong technical expertise and operational oversight skills ensure the successful execution of projects with precision and excellence. Promises dedication and attention to detail make him a vital asset to any team.',
    showBio: false
  },
  {
    name: 'Chinwe Wilcox',
    role: 'Accountant',
    image: '/chinwe.png',
    bio: 'Chinwe Wilcox is an accomplished accounting professional with a robust academic foundation. She holds a Bachelor of Science (BSc) degree in Accounting from Michael Okpara University of Agriculture, Umudike, and a Master of Science (MSc) degree in Accounting from Rivers State University. With over 10 years of advancing experience across various functions in the financial services sector, Chinwe has developed a keen expertise in accounting and finance.',
    showBio: false
  },
]);

const toggleAccordion = (index) => {
  teamMembers.value.forEach((member, i) => {
    member.isOpen = i === index ? !member.isOpen : false; // Only open one at a time
  });
};
</script>


<style scoped>
/* Accordion Animation */
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
