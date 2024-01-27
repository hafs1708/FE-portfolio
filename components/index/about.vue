<template>
    <div class="min-h-screen py-12 flex flex-col" id="about">
        <div class="rounded-2xl border border-neutral w-fit px-4 py-1 flex items-center gap-2">
            <LucideUserRound :size="16" />
            <div class="uppercase text-sm font-light">About</div>
        </div>
        <div class="flex flex-col gap-12 mt-10 grow">
            <div class="text-6xl leading-tight">Say Hi from <span class="text-accent">{{ profile.firstname }}</span>, <br>
                {{ profile.job }}
            </div>
            <div class="font-light">{{ profile.bio }}</div>
            <div class="flex items-end gap-20 grow pb-20">
                <!-- TODO pr-->
                <div v-if="profile.year_of_experience != 0">
                    <!-- based of year -->
                    <div class="text-4xl text-accent font-bold">{{ profile.year_of_experience }}</div>
                    <div>YEARS OF <br> EXPERIENCE</div>
                </div>
                <div v-else>
                    <!-- based of month -->
                    <div class="text-4xl text-accent font-bold">{{ profile.month_of_experience }}</div>
                    <div>MONTH OF <br> EXPERIENCE</div>
                </div>
                <!-- TODO pr-->
                <div>
                    <div class="text-4xl text-accent font-bold">{{ profile.count_project }} +</div>
                    <div>PROJECT <br> COMPLETED</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    profile: Object
});
</script>