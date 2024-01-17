<template>
    <div data-theme="forest" class="min-h-screen flex text-default">
        <!-- MAIN CONTENT -->
        <div class="min-h-screen grow grid grid-cols-10">
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
        <div class="md:hidden drawer-content fixed right-8">
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
                    <!-- <li>
                        <NuxtLink :to="{ path: '/', hash: '#home' }" @click="toggleDrawer = !toggleDrawer"
                            class="flex gap items-start">
                            <LucideHome :size="16" class="text-secondary" />
                            <div>Home</div>
                        </NuxtLink>
                    </li> -->
                    <li v-for="(menu, i) in menus" :key="i">
                        <NuxtLink :to="{ path: '/', hash: '#about' }" @click="toggleDrawer = !toggleDrawer"
                            class="flex gap items-start">
                            <component :is="menu.icon" size="16" class="text-secondary" />
                            <div>{{ menu.title }}</div>
                        </NuxtLink>
                    </li>
                    <!-- <li>
                        <NuxtLink :to="{ path: '/', hash: '#resume' }" @click="toggleDrawer = !toggleDrawer"
                            class="flex gap items-start">
                            <LucideLayoutPanelLeft :size="16" class="text-secondary" />
                            <div>Resume</div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#project' }" @click="toggleDrawer = !toggleDrawer"
                            class="flex gap items-start">
                            <LucideBriefcase :size="16" class="text-secondary" />
                            <div>Project</div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#testimonial' }" @click="toggleDrawer = !toggleDrawer"
                            class="flex gap items-start">
                            <LucideUserRound :size="16" class="text-secondary" />
                            <div>Testimonial</div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#content' }" @click="toggleDrawer = !toggleDrawer"
                            class="flex gap items-start">
                            <LucideMail :size="16" class="text-secondary" />
                            <div>Content</div>
                        </NuxtLink>
                    </li> -->
                </ul>
                <div class="px-4 py-4 text-2xl">Social</div>
                <div class="menu flex flex-row gap-6 pl-6">
                    <a href="#">
                        <LucideInstagram :size="16" class="text-secondary" />
                    </a>
                    <a href="#">
                        <LucideTwitter :size="16" class="text-secondary" />
                    </a>
                    <a href="#">
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
        hash: '#resume',
        title: 'Resume',
        icon: resolveComponent('LucideLayoutPanelLeft')
    },
    {
        path: '/',
        hash: '#project',
        title: 'Project',
        icon: resolveComponent('LucideBriefcase')
    },
    {
        path: '/',
        hash: '#testimonial',
        title: 'Testimonial',
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