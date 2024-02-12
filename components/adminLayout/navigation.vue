<template>
    <ul class="menu bg-neutral lg:rounded-box p-4 w-[250px] max-lg:min-h-screen lg:min-h-full text-white">
        <li class="my-2 font-light">MAIN MENU</li>
        <template v-for="(menu, i) in menus" :key="i">
            <AdminLayoutNavigationItem :menu="menu" />
        </template>
    </ul>
</template>

<script setup>

const menus = [
    {
        title: "Dashbord",
        to: "/admin",
        icon: resolveComponent("LucideLayoutDashboard")
    },
    {
        title: "Profile",
        to: "/admin/profile",
        icon: resolveComponent("LucideLayoutDashboard")
    },
    {
        title: "Project",
        to: "/admin/project",
        icon: resolveComponent("LucideLayoutDashboard"),
    }
];

</script>
