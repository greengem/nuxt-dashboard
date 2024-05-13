<template>
    <button @click="$event => signIn('github')" class="bg-ctp-mauve text-ctp-base flex items-center gap-2 px-4 py-2 rounded-lg text-sm">
        <IconBrandGithub size="18" stroke="1.5" />
        <span>Sign in with GitHub</span>
    </button>
</template>

<script setup lang="ts">
    const { signIn } = useAuth()
</script>