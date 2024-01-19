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
            <label @click="toggleDrawer = !toggleDrawer" class="btn btn-outline border-neutral btn-circle mt-8">
                <lucideMenu :size="22" class="text-accent" />
            </label>
        </div>
    </div>

    <!-- MOBILE MENU DRAWER -->
    <IndexDefaultLayoutMenuDrawer :toggleDrawer="toggleDrawer" :menus="menus" />
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
        icon: resolveComponent('LucideNewspaper')
    },
    {
        path: '/',
        hash: '#experience',
        title: 'Experience',
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
        icon: resolveComponent('LucideWrench')
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