<template>
    <div data-theme="light" class="w-screen h-screen max-w-screen min-h-screen bg-indigo-400 overflow-x-hidden">

        <!--MOBILE HEADER-->
        <div class="lg:hidden h-[70px] relative border-b border-white/20 px-3 sm:px-8">
            <div class="h-full flex justify-between items-center">
                <a href="" class="flex flex-none gap-4 items-center">
                    <ImagesSun class="h-8" />
                    <div>Njah</div>
                </a>

                <label for="menu-toggle" class="btn btn-ghost">
                    <LucideAlignRight :size="24" />
                </label>
            </div>
        </div>

        <!--MAIN HEADER-->
        <div class="h-[70px] relative border-b border-white/20 px-3 sm:px-8 md:py-0 mb-12">
            <div class="h-full flex items-center lg:divide-x divide-white/20">

                <!--Sisi Kiri-->
                <a href="" class="max-lg:hidden flex-none flex gap-4 items-center pr-4">
                    <ImagesSun class="mx-1 h-8" />
                    <div class="font-semibold">Njah_</div>
                </a>

                <!--Sisi Kanan-->>
                <div class="grow">
                    <div class="pl-4 text-slate-800">
                        <div class="text-sm breadcrumbs">
                            <ul>
                                <li><a>Home</a></li>
                                <li><a>Documents</a></li>
                                <li><a>Add Documents</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!--Avatar-->
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn w-10 h-10 min-h-10 btn-circle m-1">
                        <div class="h-full flex justify-between items-center">
                            <LucideUser :size="24" class="text-primary" />
                        </div>
                    </div>
                    <div class="dropdown-content z-[1] menu bg-base-100 shadow rounded w-52">
                        <div class="p-2 border-b">
                            <div class="font-semibold">Hafshoh Najah</div>
                            <div class="text-xs">Administrator</div>
                        </div>
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

        <!--CONTENT-->
        <div class="w-full h-screen px-3 lg:px-8">
            <div class="wrapper drawer lg:drawer-open rounded-2xl lg:rounded-3xl overflow-hidden">
                <input id="menu-toggle" type="checkbox" class="drawer-toggle" />
                <!--MAIN CONTENT-->
                <div class="lg:z-[1] drawer-content bg-primary max-lg:rounded-2xl rounded-r-2xl lg:rounded-r-3xl">
                    <div class="w-full h-full bg-base-200 rounded-2xl lg:rounded-3xl p-3 lg:p-8">
                        content
                    </div>
                </div>
                <div class="drawer-side lg:bg-primary rounded-l-2xl lg:rounded-l-3xl">
                    <label for="menu-toggle" aria-label="close sidebar" class="drawer-overlay"></label>
                    <div class="lg:w-full h-full lg:z-[10]">
                        <!-- NAVIGATION -->
                        <ul class="menu bg-primary p-4 w-[250px] min-h-full text-white">
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </ul>
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

<style>
.wrapper::before {
    content: "";
    width: 95%;
    -webkit-animation: 0.4s intro-wrapper-animation ease-in-out 0.33333s;
    animation: 0.4s intro-wrapper-animation ease-in-out 0.33333s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-delay: 0.1s;
    animation-delay: 0.1s;
    border-radius: 1.3rem;
    position: absolute;
    left: 0px;
    right: 18px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -1rem;
    height: 100px;
    background-color: rgb(255 255 255 / 0.1);
}

@keyframes intro-wrapper-animation {
    100% {
        @apply opacity-100;
        transform: translateX(0px);
    }
}
</style>
