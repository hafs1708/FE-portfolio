<template>
    <div data-theme="light" class="w-screen h-screen max-w-screen min-h-screen bg-primary">
        <!--HEADER-->
        <div class="h-[70px] relative border-b border-white/[0.08] px-3 sm:px-8 md:py-0 mb-12">
            <div class="h-full flex items-center divide-x divide-white/20">

                <!--Sisi Kiri-->
                <a href="" class="flex gap-4 items-center pr-4">
                    <ImagesSun class="h-8" />
                    <div class="font-semibold">Njah_</div>
                </a>

                <div class="grow flex justify-between pl-4 items-center">
                    <!--breadcrumb-->
                    <div class="text-sm breadcrumbs">
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Documents</a></li>
                            <li><a>Add Documents</a></li>
                        </ul>
                    </div>

                    <!--Avatar-->
                    <div class="dropdown dropdown-end">
                        <div tabindex="0" role="button" class="btn w-10 h-10 min-h-10 btn-circle m-1">
                            <div class="h-full flex justify-between items-center">
                                <LucideUser :size="24" class="text-primary" />
                            </div>
                        </div>
                        <div class="dropdown-content z-[1] menu bg-base-100 shadow rounded w-52">
                            <div class="font-semibold">Hafshoh Najah</div>
                            <div class="text-xs">Administrator</div>
                            <ul tabindex="0" class="p-2">
                                <li>
                                    <a>
                                        <LucideUser :size="16" /> User
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <LucideLogOut :size="16" /> Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: false
});
</script>

<style></style>