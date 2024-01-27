<template>
    <div class="min-h-screen py-12" id="experience">
        <div class="rounded-2xl border border-neutral w-fit px-4 py-1 flex items-center gap-2">
            <LucideBriefcase :size="16" />
            <div class="uppercase text-sm font-light">Experience</div>
        </div>
        <div class="flex flex-col gap-6 mt-10">
            <div class="text-4xl font-semibold">Experience</div>
            <div>
                <!-- list experience -->
                <div class="flex gap-12 group" v-for="(exp, i) in experiences" :key="i">
                    <div class="flex flex-col items-center">
                        <LucideCircle :size="12" class="fill-neutral stroke-none group-hover:fill-accent" />
                        <div class="grow w-px bg-neutral"></div>
                    </div>
                    <div class="mb-10">
                        <div class="group-hover:text-accent">{{ exp.startDate }} - {{ exp.endDate ? exp.endDate : 'Present'
                        }}</div>
                        <div class="flex flex-col gap-4">
                            <div>
                                <div class="text-xl md:text-3xl xl:text-4xl font-semibold mt-2">{{ exp.title }}</div>
                                <div class="font-semibold">{{ exp.company }}</div>
                                <div class="font-light mt-4">{{ exp.description }}</div>
                            </div>
                            <!-- <div>
                                <div class="text-xl md:text-3xl xl:text-4xl font-semibold">Front-End WordPress Developer
                                </div>
                                <div class="font-light">Envato Market</div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    experiences: Array
});
</script>
