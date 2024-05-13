<template>
    <aside class="fixed w-16 top-16 bottom-0 left-0 bg-ctp-crust flex flex-col justify-between overflow-y-scroll no-scrollbar">
      <ul class="flex flex-col gap-5 py-5 items-center">
        <li v-for="link in links" :key="link.name">
          <NuxtLink :href="link.path"
             :class="{ 'text-ctp-mauve': route.path === link.path, 'text-ctp-text': route.path !== link.path }"
             class="hover:text-ctp-mauve">
             <Icon :name="link.icon" size="28" />
          </NuxtLink>
        </li>
      </ul>
      <ul class="flex flex-col gap-5 py-5 items-center">
        <Icon name="tabler:moon-stars" size="28" />
        <button v-if="loggedIn" @click="handleSignOut">
          <Icon name="tabler:logout" size="28" />
        </button>
      </ul>
    </aside>
  </template>
  
  
  
  <script setup lang="ts">
  
  import links from '@/constants/links';
  
  const { status, data, signIn, signOut } = useAuth()

  const loggedIn = computed(() => status.value === 'authenticated')

  const route = useRoute()

  async function handleSignOut() {
    await signOut()
  }
  
  </script>
  