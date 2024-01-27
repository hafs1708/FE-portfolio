<template>
    <div data-theme="forest" class="min-h-screen flex text-default">
        <!-- MAIN CONTENT -->
        <div class="min-h-screen grow">
            <slot></slot>
        </div>
        <!-- SIDE MENU -->
        <DefaultLayoutSideMenu :menus="menus" />

        <!-- SIDE MENU TOGGLE BUTTON -->
        <div class="z-10 md:hidden drawer-content fixed right-8">
            <!-- Page content here -->
            <label @click="toggleDrawer = !toggleDrawer" class="btn btn-outline border-neutral btn-circle mt-8">
                <lucideMenu :size="22" class="text-accent" />
            </label>
        </div>
    </div>

    <!-- MOBILE MENU DRAWER -->
    <DefaultLayoutMenuDrawer :toggleDrawer="toggleDrawer" :menus="menus" />
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
]
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>