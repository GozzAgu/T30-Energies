<template>
  <!-- Company story -->
  <section class="section bg-white">
    <div class="container-x">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-4">
          <div class="lg:sticky lg:top-28">
            <span class="eyebrow">Who we are</span>
            <h2 class="display mt-4 text-4xl leading-tight sm:text-5xl">
              A future defined by innovation
            </h2>
            <p class="mt-5 text-lg text-neutral-600">
              We are not only delivering projects, we are building Nigeria's energy and infrastructure future.
            </p>

            <!-- Company profile download -->
            <div class="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
              <div class="flex items-center gap-3">
                <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-600 text-white">
                  <Icon name="material-symbols:description-outline" class="text-2xl" />
                </div>
                <div>
                  <p class="font-semibold text-neutral-900">Company Profile</p>
                  <p class="text-sm text-neutral-500">2025 · PDF</p>
                </div>
              </div>
              <a
                href="/T30 Energies Profile 2025.pdf"
                target="_blank"
                class="btn btn-md btn-ink mt-5 w-full"
              >
                <Icon name="material-symbols:download" class="text-lg" />
                Download profile
              </a>
            </div>
          </div>
        </div>

        <div class="space-y-6 text-lg leading-relaxed text-neutral-600 lg:col-span-8">
          <p>
            T30 Energies Limited is a forward-thinking Nigerian energy and engineering company committed to delivering innovative solutions that advance the nation's energy and infrastructure landscape. Rooted in a vision to promote sustainability, efficiency, and reliability, we leverage Nigeria's abundant resources and engineering expertise to provide value-driven services across multiple sectors.
          </p>
          <p>
            Our <span class="font-semibold text-neutral-900">CNG Solutions and Conversion Services</span> are designed to support Nigeria's transition toward cleaner and more affordable energy. From advanced CNG toolkits to vehicle conversions, refilling infrastructure, heavy-duty applications, and capacity-building programs, we champion the domestication of natural gas as a viable energy alternative for households, businesses, and the transport sector.
          </p>
          <p>
            In addition, T30 Energies offers <span class="font-semibold text-neutral-900">Civil Engineering Services</span> tailored to Nigeria's infrastructure development needs. We deliver durable, cost-effective, and sustainable construction solutions, ensuring compliance with local and international standards.
          </p>
          <p>
            Through our <span class="font-semibold text-neutral-900">Engineering Procurement</span> capabilities, we provide clients with access to high-quality equipment, technology, and technical expertise. Coupled with our <span class="font-semibold text-neutral-900">Material Procurement Services</span>, we guarantee efficient supply chain management and reliable delivery of construction and industrial materials that meet stringent quality benchmarks.
          </p>
          <p>
            We further support large-scale operations with <span class="font-semibold text-neutral-900">Project Management</span> and <span class="font-semibold text-neutral-900">Manpower Recruitment &amp; Training</span> services. Our approach combines global best practices with a deep understanding of local conditions to deliver projects on time, within scope, and with a skilled workforce.
          </p>
          <p class="font-medium text-neutral-900">
            At T30 Energies, our commitment to excellence and integrity positions us as a trusted partner in driving Nigeria's energy transition and infrastructure advancement.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team -->
  <section class="section bg-neutral-50">
    <div class="container-x">
      <div class="max-w-2xl">
        <span class="eyebrow">Our people</span>
        <h2 class="display mt-4 text-4xl leading-tight sm:text-5xl">Meet our team</h2>
        <p class="mt-5 text-lg text-neutral-600">
          Dedicated professionals bringing together decades of experience and expertise to deliver exceptional results.
        </p>
      </div>

      <div class="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
        <button
          v-for="(member, index) in teamMembers"
          :key="index"
          @click="openMember(member)"
          class="group flex flex-col items-center text-center"
        >
          <div class="relative">
            <img
              :src="member.image"
              :alt="member.name"
              class="h-28 w-28 rounded-full object-cover object-top ring-2 ring-transparent transition-all duration-300 group-hover:ring-orange-400 sm:h-32 sm:w-32"
            />
          </div>
          <div class="mt-5">
            <h4 class="font-semibold text-neutral-900">{{ member.name }}</h4>
            <p class="mt-0.5 text-sm text-orange-600">{{ member.role }}</p>
          </div>
        </button>
      </div>
    </div>
  </section>

  <!-- Bio modal -->
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="selectedMember"
        class="fixed inset-0 z-[100] flex items-end justify-center bg-neutral-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        @click.self="closeMember"
      >
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-6 sm:scale-95"
          enter-to-class="opacity-100 translate-y-0 sm:scale-100"
        >
          <div
            v-if="selectedMember"
            class="relative flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl bg-white sm:rounded-3xl"
          >
            <button
              @click="closeMember"
              class="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-neutral-600 backdrop-blur transition-colors hover:bg-neutral-100 hover:text-neutral-900"
              aria-label="Close"
            >
              <Icon name="material-symbols:close-rounded" class="text-xl" />
            </button>

            <div class="flex items-center gap-4 border-b border-neutral-100 p-6">
              <img
                :src="selectedMember.image"
                :alt="selectedMember.name"
                class="h-16 w-16 rounded-2xl object-cover object-top ring-1 ring-neutral-200"
              />
              <div>
                <h3 class="text-xl font-semibold text-neutral-900">{{ selectedMember.name }}</h3>
                <p class="text-sm font-medium text-orange-600">{{ selectedMember.role }}</p>
              </div>
            </div>

            <div class="overflow-y-auto p-6">
              <p class="text-[15px] leading-relaxed text-neutral-600">{{ selectedMember.bio }}</p>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const teamMembers = ref([
  {
    name: 'Lanre Oluseye',
    role: 'MD/CEO',
    image: '/lanre.png',
    bio: 'Lanre Oluseye is a passionate architect and visionary leader known for his ability to motivate and inspire audiences as a conference speaker. With an Executive MBA from the esteemed Metropolitan Business School in the United Kingdom, he equips himself with advanced business acumen that complements his architectural expertise. He is an alumnus of several prestigious institutions, including the Graduate School of Business at the University of Cape Town, where he gained deep insights into global business practices, as well as the Dale Carnegie Institute, renowned for its focus on leadership and personal development, and the London School of Economics and Political Science, where he explored the intersection of economics and social sciences. In addition to his formal education, Lanre is a Certified International Project Manager (CIPM), showcasing his proficiency in managing complex projects across various sectors. His recognition as a Fellow of the American Academy of Project Managers (FAAPM) reflects his commitment to excellence and leadership in project management. Recently, he has further broadened his expertise by qualifying as a Certified Emotional Intelligence Specialist, enabling him to harness the power of emotional intelligence to enhance teamwork and drive positive change within organizations. Lanre’s multifaceted background and dedication to his craft make him a prominent figure in both architecture and project management.',
  },
  {
    name: 'Efetobore Umiaghwa',
    role: 'General Manager',
    image: '/efe.png',
    bio: 'Efetobore Umiaghwa is a dedicated professional with a strong academic foundation in oil and gas engineering, having graduated from All Nations University, Ghana. With six years of extensive experience in the Energy sector, Efetobore has developed vast knowledge and expertise in the industry. She is pursuing her Master of Science (MSc) in Oil and Gas and Energy Management from Port-Harcourt Business School, further enhancing her skills and capabilities.',
  },
  {
    name: 'Samson Eboh',
    role: 'Head of IT & Communications',
    image: '/samson.png',
    bio: 'Eboh Samson is a results-driven professional with a degree in International Studies and Diplomacy from the prestigious University of Benin. With over three years of experience in the oil and gas industry and more than seven years in Information Technology, he brings a rare blend of strategic insight and technical expertise. Certified in Data Analysis and Project Management, Samson leverages innovation and precision to deliver impactful, technology-driven solutions across diverse sectors.',
  },
  {
    name: 'Otu Jacobs',
    role: 'Engineering/Fabrications',
    image: '/otu.png',
    bio: 'Otu Jacobs holds a Higher National Diploma in Welding and Fabrication Engineering Technology from the Petroleum Training Institute, Effurun, Delta State, and is certified as a Professional Scrum Master (PSM) and Project Management Professional (PMP). With over a decade of experience, including 7 years in the oil and gas industry, he brings knowledge and expertise to every project he undertakes.',
  },
  {
    name: 'Oluwatobi Iyanda',
    role: 'Business Development Manager',
    image: '/tobi.png',
    bio: 'Oluwatobi Iyanda holds a Bachelor of Agriculture (B.Agric) in Horticulture from the Federal University of Agriculture, Abeokuta. She has extensive experience in business development across various sectors and has been a Business Development Manager in the oil and gas sector for seven years. To enhance her expertise, she has undergone specialized training and obtained certifications in business development, equipping her with advanced skills in market analysis, strategic planning, client relationship management, and project management.',
  },
  {
    name: 'Promise Udoh',
    role: 'Head of Operations',
    image: '/udoh.png',
    bio: 'Promise Udoh is a skilled civil engineer with a Higher National Diploma in Civil Engineering and five years of extensive experience in the oil and gas sector. His strong technical expertise and operational oversight skills ensure the successful execution of projects with precision and excellence. Promise\'s dedication and attention to detail make him a vital asset to any team.',
  },
  {
    name: 'Chinwe Wilcox',
    role: 'Accountant',
    image: '/chinwe.png',
    bio: 'Chinwe Wilcox is an accomplished accounting professional with a robust academic foundation. She holds a Bachelor of Science (BSc) degree in Accounting from Michael Okpara University of Agriculture, Umudike, and a Master of Science (MSc) degree in Accounting from Rivers State University. With over 10 years of advancing experience across various functions in the financial services sector, Chinwe has developed a keen expertise in accounting and finance.',
  },
]);

const selectedMember = ref(null);

const openMember = (member) => {
  selectedMember.value = member;
  if (import.meta.client) document.body.style.overflow = 'hidden';
};

const closeMember = () => {
  selectedMember.value = null;
  if (import.meta.client) document.body.style.overflow = '';
};

const onKeydown = (e) => {
  if (e.key === 'Escape') closeMember();
};

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
  if (import.meta.client) document.body.style.overflow = '';
});
</script>
