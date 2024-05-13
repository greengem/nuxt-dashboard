<template>
  <NuxtLayout>
    <Navbar />
    <div class="p-5">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  useHead({
    title: 'Nuxt Personal Dashboard',
    meta: [
      { name: 'description', content: 'A personal dashboard to monitor all your things' }
    ],
    bodyAttrs: {
      class: 'min-h-dvh flex flex-col grow bg-ctp-base'
    }
  })
</script>
