<template>
    <aside class="fixed w-64 top-16 bottom-0 left-16 bg-ctp-mantle">
      <ul class="flex flex-col gap-5 p-5">
        <li v-for="link in links" :key="link.name" class="text-sm">
          <a :href="link.path"
             :class="{ 'text-ctp-mauve': route.path === link.path, 'text-ctp-text': route.path !== link.path }"
             class="hover:text-ctp-mauve">
            {{ link.name }}
          </a>
        </li>
      </ul>
    </aside>
  </template>
  
  
  
  <script setup lang="ts">
  
  import links from '@/constants/links';
  
  const route = useRoute()
  
  </script>
  