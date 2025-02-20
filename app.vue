<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "T30 Energies - Your Energy Solution",
  meta: [
    { name: "description", content: "T30 Energies provides sustainable and efficient energy solutions for businesses and homes." },
    { name: "keywords", content: "T30 Energies, renewable energy, solar panels, power solutions" },
    { name: "author", content: "T30 Energies" },
    { property: "og:title", content: "T30 Energies - Your Energy Solution" },
    { property: "og:description", content: "T30 Energies provides sustainable and efficient energy solutions for businesses and homes." },
    { property: "og:image", content: "/public/T30_Energies_Icon_only[1].png" },
    { property: "og:url", content: "https://www.t30energies.com" }
  ]
});
</script>