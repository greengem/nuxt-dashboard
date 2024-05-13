<script setup lang="ts">

definePageMeta({
    auth: {
        unauthenticatedOnly: true,
        navigateAuthenticatedTo: '/dashboard',
    }
})

</script>

<template>
    <div class="bg-ctp-surface0 p-5 rounded-lg max-w-96 mx-auto">
        <h1 class="text-3xl">Login</h1>
        <hr class="my-3" />
        <GitHubLogin />
    </div>

</template>