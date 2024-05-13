<template>
  <nav class="bg-ctp-crust flex items-center justify-between h-16 text-ctp-text border-b-2 border-ctp-mauve">

    <div class="flex items-center gap-2 mx-4 text-ctp-mauve">
      <Icon name="tabler:tools" size="28" />
      <NuxtLink href="/" class="text-2xl tracking-tight font-light">ACME.TM</NuxtLink>
    </div>

    <div class="p-5 flex items-center">
      <img 
        v-if="loggedIn && data && data.user" 
        :src="data.user?.image || 'fallback-image-url'" 
        alt="User Avatar" 
        class="h-8 w-8 rounded-full ring-2 ring-offset-2 ring-offset-ctp-crust ring-ctp-mauve"
      >
      <button v-else @click="handleSignIn">Sign In</button>
    </div>

  </nav>
</template>

<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth()

const loggedIn = computed(() => status.value === 'authenticated')

async function handleSignIn() {
  await signIn('github')
}

async function handleSignOut() {
  await signOut()
}
</script>