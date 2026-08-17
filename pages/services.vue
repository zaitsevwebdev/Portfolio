<script setup lang="ts">
useSeoMeta({
  title: 'Послуги з розробки сайтів - Zaitsev.dev',
  description:
    'Розробка сайтів-візиток, лендингів та індивідуальних сайтів для малого бізнесу на Vue і Nuxt.'
})
</script>

<template>
  <main class="services-page">
    <ServicesHero />
    <ServicesCatalog />
    <ServicesAdditional />
    <ServicesProcess />
    <ServicesCard />
  </main>
</template>

<style scoped lang="scss">
.services-page {
  min-height: 100vh;
  background-color: $primary-bg;
}
</style>