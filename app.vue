<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "T30 Energies - Your Energy Solution",
  meta: [
    { name: 'google-site-verification', content: 'qdluOiipT70KGJP-XmoQTME6d6nsSjtnlVsdb1eGHFo' },
    { name: "description", content: "T30 Energies provides sustainable and efficient energy solutions for businesses and homes." },
    { name: "keywords", content: "T30 Energies, renewable energy, solar panels, power solutions" },
    { name: "author", content: "T30 Energies" },
    { property: "og:title", content: "T30 Energies - Your Energy Solution" },
    { property: "og:description", content: "T30 Energies provides sustainable and efficient energy solutions for businesses and homes." },
    { property: "og:image", content: "https://t30energies.com" },
    { property: "og:url", content: "https://www.t30energies.com" }
  ],
  link: [
    { rel: "icon", type: "image/png", href: "/T30_Energies_Icon_only[1].png" },
    { rel: "icon", type: "image/x-icon", href: "/T30_Energies_Icon_only[1].png" }
  ]
});
</script>