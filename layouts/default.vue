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
                    <a href="#" class="tooltip tooltip-left" data-tip="Home">
                        <lucideHome :size="16" class="text-secondary" />
                    </a>
                    <NuxtLink :to="{ path: '/', hash: '#about' }" class="tooltip tooltip-left" data-tip="About">
                        <LucideUserRound :size="16" class="text-secondary" />
                    </NuxtLink>
                    <NuxtLink :to="{ path: '/', hash: '#resume' }" class="tooltip tooltip-left" data-tip="Resume">
                        <LucideLayoutPanelLeft :size="16" class="text-secondary" />
                    </NuxtLink>
                    <NuxtLink :to="{ path: '/', hash: '#project' }" class="tooltip tooltip-left" data-tip="Project">
                        <LucideBriefcase :size="16" class="text-secondary" />
                    </NuxtLink>
                    <NuxtLink :to="{ path: '/', hash: '#testimonial' }" class="tooltip tooltip-left" data-tip="Testimonial">
                        <LucideUserRound :size="16" class="text-secondary" />
                    </NuxtLink>
                    <NuxtLink :to="{ path: '/', hash: '#content' }" class="tooltip tooltip-left" data-tip="Content">
                        <LucideMail :size="16" class="text-secondary" />
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
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side overflow-hidden">
            <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
            <div class="menu p-14 w-80 min-h-full bg-base-200 text-base-content">
                <div class="px-4 text-2xl">Menu</div>
                <ul class="menu">
                    <!-- Sidebar content here -->
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#home' }" class="flex gap items-start">
                            <LucideHome :size="16" class="text-secondary" />
                            <div>Home</div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#about' }" class="flex gap items-start">
                            <LucideUserRound :size="16" class="text-secondary" />
                            <div>About</div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#resume' }" class="flex gap items-start">
                            <LucideLayoutPanelLeft :size="16" class="text-secondary" />
                            <div>Resume</div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#project' }" class="flex gap items-start">
                            <LucideBriefcase :size="16" class="text-secondary" />
                            <div>Project</div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#testimonial' }" class="flex gap items-start">
                            <LucideUserRound :size="16" class="text-secondary" />
                            <div>Testimonial</div>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink :to="{ path: '/', hash: '#content' }" class="flex gap items-start">
                            <LucideMail :size="16" class="text-secondary" />
                            <div>Content</div>
                        </NuxtLink>
                    </li>
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

<style>
html {
    scroll-behavior: smooth;
}
</style>