<template>
  <section class="bg-gray-50 text-gray-800">
    <div class="max-w-6xl mx-auto py-16 px-6 md:px-12">
      <h2 class="text-3xl font-bold text-gray-900 text-center">Meet the Team</h2>
      <p class="mt-4 text-gray-600 text-center">
        Our team of passionate individuals is here to bring our vision to life.
      </p>
      <div class="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-12">
        <div v-for="(member, index) in teamMembers" :key="index" class="text-center relative">
          <img
            :src="member.image"
            :alt="member.name"
            class="img w-32 h-32 mx-auto rounded-full shadow-lg"
          />
          <h4 class="mt-4 font-bold text-lg">{{ member.name }}</h4>
          <p class="text-gray-600 text-sm">{{ member.role }}</p>
          <button @click="toggleBio(index)" class="mt-2 text-orange-500 underline text-sm">
            {{ member.showBio ? 'Hide Bio' : 'View Bio' }}
          </button>
          <transition name="fade">
            <div v-if="member.showBio" class="absolute top-full left-1/2 transform -translate-x-1/2 w-[200rem] max-w-lg bg-white shadow-lg rounded-lg p-4 z-10">
              <p class="text-gray-600 text-sm text-start">{{ member.bio }}</p>
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
    image: '/images/1.png',
    bio: 'Lanre Oluseye is a passionate architect and visionary leader known for his ability to motivate and inspire audiences as a conference speaker. With an Executive MBA from the esteemed Metropolitan Business School in the United Kingdom, he equips himself with advanced business acumen that complements his architectural expertise. He is an alumnus of several prestigious institutions, including the Graduate School of Business at the University of Cape Town, where he gained deep insights into global business practices, as well as the Dale Carnegie Institute, renowned for its focus on leadership and personal development, and the London School of Economics and Political Science, where he explored the intersection of economics and social sciences. In addition to his formal education, Lanre is a Certified International Project Manager (CIPM), showcasing his proficiency in managing complex projects across various sectors. His recognition as a Fellow of the American Academy of Project Managers (FAAPM) reflects his commitment to excellence and leadership in project management. Recently, he has further broadened his expertise by qualifying as a Certified Emotional Intelligence Specialist, enabling him to harness the power of emotional intelligence to enhance teamwork and drive positive change within organizations. Lanre’s multifaceted background and dedication to his craft make him a prominent figure in both architecture and project management.',
    showBio: false
  },
  {
    name: 'Efetobore Umiaghwa',
    role: 'General Manager',
    image: '/images/6.png',
    bio: 'Oluwatobi Iyanda holds a Bachelor of Agriculture (B.Agric) in Horticulture from the Federal University of Agriculture, Abeokuta. She has extensive experience in business development across various sectors and has been a Business Development Manager in the oil and gas sector for seven years. To enhance her expertise, she has undergone specialized training and obtained certifications in business development, equipping her with advanced skills in market analysis, strategic planning, client relationship management, and project management. ',
    showBio: false
  },
  {
    name: 'Otu Jacobs',
    role: 'Engineering/Fabrications',
    image: '/images/3.png',
    bio: 'Promise Udoh is a skilled civil engineer with a Higher National Diploma in Civil Engineering and five years of extensive experience in the oil and gas sector. His strong technical expertise and operational oversight skills ensure the successful execution of projects with precision and excellence. Promises dedication and attention to detail make him a vital asset to any team.',
    showBio: false
  },
  {
    name: 'Oluwatobi Iyanda',
    role: 'Business Development Manager',
    image: '/images/2.png',
    bio: 'Chinwe Wilcox is an accomplished accounting professional with a robust academic foundation. She holds a Bachelor of Science (BSc) degree in Accounting from Michael Okpara University of Agriculture, Umudike, and a Master of Science (MSc) degree in Accounting from Rivers State University. With over 10 years of advancing experience across various functions in the financial services sector, Chinwe has developed a keen expertise in accounting and finance.',
    showBio: false
  },
  {
    name: 'Promise Udoh',
    role: 'Head of Operations',
    image: '/images/4.png',
    bio: 'Efetobore Umiaghwa is a dedicated professional with a strong academic foundation in oil and gas engineering, having graduated from All Nations University, Ghana. With six years of extensive experience in the Energy sector, Efetobore has developed vast knowledge and expertise in the industry. She is pursuing her Master of Science (MSc) in Oil and Gas and Energy Management from Port-Harcourt Business School, further enhancing her skills and capabilities.',
    showBio: false
  },
  {
    name: 'Chinwe Wilcox',
    role: 'Accountant',
    image: '/images/5.png',
    bio: 'Otu Jacobs holds a Higher National Diploma in Welding and Fabrication Engineering Technology from the Petroleum Training Institute, Effurun, Delta State, and is certified as a Professional Scrum Master (PSM) and Project Management Professional (PMP). With over a decade of experience, including 7 years in the oil and gas industry, he brings knowledge and expertise to every project he undertakes.',
    showBio: false
  },
]);

const toggleBio = (index) => {
  teamMembers.value[index].showBio = !teamMembers.value[index].showBio;
};
</script>

<style scoped>
.img {
  width: 8rem;
  height: 8rem;
  object-fit: cover;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
