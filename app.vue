<script setup lang="ts">

  import '~/assets/css/main.css'

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

<template>
  <Navbar />
  <NuxtLayout>
    <div class="p-5">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
