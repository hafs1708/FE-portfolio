<template>
    <div data-theme="forest" class="drawer drawer-end">
        <input v-model="show_drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side overflow-hidden">
            <label @click="show_drawer = !show_drawer" aria-label="close sidebar" class="drawer-overlay"></label>
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
const props = defineProps({
    toggleDrawer: Boolean,
    menus: Array
})

const show_drawer = ref(props.toggleDrawer);

//use Watch Effect to Hadle Toggle => check setiap perubahan variable
watchEffect(() => {
    // Check perubahan dari props.toggleDrawer
    show_drawer.value = props.toggleDrawer;
})


</script>