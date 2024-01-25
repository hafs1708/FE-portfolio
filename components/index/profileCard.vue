<template>
    <div class="md:fixed min-h-screen md:flex md:items-center md:w-[38%] lg:w-[32%] xl:w-[25%]">
        <div class="border rounded-3xl p-12 w-full flex flex-col gap-6">
            <!-- NAME & TITLE -->
            <div class="flex justify-between items-end">
                <div class="text-3xl font-bold">{{ profile.firstname }} {{ profile.lastname }}</div>
                <div class="text-right text-nowrap">{{ profile.job }}</div>
            </div>
            <!-- IMAGE / FOTO -->
            <div class="aspect-square bg-neutral rounded-2xl"></div>
            <!-- EMAIL, LOKASI -->
            <div class="text-2xl font-semibold text-center">
                <div>{{ profile.email }}</div>
                <div>{{ profile.city }}, {{ profile.country }}</div>
            </div>
            <!-- COPYRIGHT -->
            <div class="text-center font-thin text-white/50">&copy; {{ year }} {{ profile.lastname }}, All Rights Reserved
            </div>
            <!-- SOCIAL BUTTON -->
            <div class="flex justify-between">
                <div class="btn btn-outline btn-circle border-neutral hover:bg-transparent hover:border-accent">
                    <LucideInstagram :size="20" class="text-accent" />
                </div>
                <div class="btn btn-outline btn-circle border-neutral hover:bg-transparent hover:border-accent">
                    <LucideTwitter :size="20" class="text-accent" />
                </div>
                <div class="btn btn-outline btn-circle border-neutral hover:bg-transparent hover:border-accent">
                    <LucideGithub :size="20" class="text-accent" />
                </div>
                <div class="btn btn-outline btn-circle border-neutral hover:bg-transparent hover:border-accent">
                    <LucideGlobe :size="20" class="text-accent" />
                </div>
            </div>

            <!-- HIRE ME BUTTON -->
            <button class="btn btn-neutral w-full rounded-2xl hover:bg-transparent hover:border-accent">
                <LucideMail />
                <div>HIRE ME</div>
            </button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    profile: Object
});

const year = new Date().getFullYear();

</script>
