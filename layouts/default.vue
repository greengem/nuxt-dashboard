<template>
    <div class="flex grow text-ctp-text relative">
        <SidebarPrimary />
        <!-- <SidebarSecondary /> -->
        <main class="flex flex-col grow ml-16">
            <slot />
        </main>
    </div>
</template>
