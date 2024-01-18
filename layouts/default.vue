<template>
    <div data-theme="forest" class="min-h-screen flex text-default">
        <!-- MAIN CONTENT -->
        <div class="min-h-screen grow">
            <slot></slot>
        </div>
        <!-- SIDE MENU -->
        <div class="min-h-screen w-28 flex-none max-md:hidden relative">
            <div class="fixed min-h-screen flex items-center">
                <div class="border border-neutral p-5 rounded-full flex flex-col gap-6">
                    <NuxtLink v-for="(menu, i) in menus" :key="i" :to="{ path: menu.path, hash: menu.hash }"
                        class="tooltip tooltip-left" :data-tip="menu.title">
                        <component :is="menu.icon" :size="16" class="text-secondary" />
                    </NuxtLink>
                </div>
            </div>
        </div>
        <!-- SIDE MENU TOGGLE BUTTON -->
        <div class="z-10 md:hidden drawer-content fixed right-8">
            <!-- Page content here -->
            <label for="my-drawer-4" class="btn btn-outline border-neutral btn-circle mt-8">
                <lucideMenu :size="22" class="text-accent" />
            </label>
        </div>
    </div>

    <!-- MOBILE MENU DRAWER -->
    <div data-theme="forest" class="drawer drawer-end">
        <input v-model="toggleDrawer" id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side overflow-hidden">
            <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
            <div class="menu p-14 w-80 min-h-full bg-base-200 text-base-content">
                <div class="px-4 text-2xl">Menu</div>
                <ul class="menu">
                    <!-- Sidebar content here -->
                    <li v-for="(menu, i) in menus" :key="i" class="my-2">
                        <NuxtLink :to="{ path: '/', hash: menu.hash }" @click="toggleDrawer = !toggleDrawer"
                            class="flex gap-2 items-start">
                            <component :is="menu.icon" size="16" class="text-secondary" />
                            <div>{{ menu.title }}</div>
                        </NuxtLink>
                    </li>
                </ul>
                <div class="px-4 py-4 text-2xl">Social</div>
                <div class="menu flex flex-row gap-6 pl-6">
                    <a href="https://www.instagram.com/" target="__blank">
                        <LucideInstagram :size="16" class="text-secondary" />
                    </a>
                    <a href="https://twitter.com/" target="__blank">
                        <LucideTwitter :size="16" class="text-secondary" />
                    </a>
                    <a href="https://google.com/" target="__blank">
                        <LucideGlobe2 :size="16" class="text-secondary" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Reactive boolean
// Toggle for open/close drawer
const toggleDrawer = ref(false);

const menus = [
    {
        path: '/',
        hash: '#',
        title: 'Home',
        icon: resolveComponent('LucideHome')
    },
    {
        path: '/',
        hash: '#about',
        title: 'About',
        icon: resolveComponent('LucideUserRound')
    },
    {
        path: '/',
        hash: '#blog',
        title: 'Blog',
        icon: resolveComponent('LucideNewsPaper')
    },
    {
        path: '/',
        hash: '#resume',
        title: 'Resume',
        icon: resolveComponent('LucideLayoutPanelLeft')
    },
    {
        path: '/',
        hash: '#education',
        title: 'Education',
        icon: resolveComponent('LucideGraduationCap')
    },
    {
        path: '/',
        hash: '#project',
        title: 'Project',
        icon: resolveComponent('LucideBriefcase')
    },
    {
        path: '/',
        hash: '#skill',
        title: 'Skill',
        icon: resolveComponent('LucideUserRound')
    },
    {
        path: '/',
        hash: '#content',
        title: 'Content',
        icon: resolveComponent('LucideMail')
    }
]
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>