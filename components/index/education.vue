<template>
    <div class="min-h-screen py-12" id="education">
        <div class="rounded-2xl border border-neutral w-fit px-4 py-1 flex items-center gap-2">
            <LucideGraduationCap :size="16" />
            <div class="uppercase text-sm font-light">Education</div>
        </div>
        <div class="flex flex-col gap-6 mt-10">
            <div class="text-4xl font-semibold">Education</div>
            <div>
                <!-- list experience -->
                <div class="flex gap-6 md:gap-12 group" v-for="(edc, i) in educations" :key="i">
                    <div class="flex flex-col items-center">
                        <LucideCircle :size="12" class="fill-neutral stroke-none group-hover:fill-accent" />
                        <div class="grow w-px bg-neutral"></div>
                    </div>
                    <div class="mb-10">
                        <div class="group-hover:text-accent">{{ edc.readStartYear }} - {{ edc.readEndYear }}</div>
                        <div class="flex flex-col gap-4">
                            <div>
                                <div class="text-xl md:text-2xl xl:text-4xl font-semibold mt-5">{{ edc.institutionName }}
                                </div>
                                <div v-if="edc.major || edc.degree" class="font-light">
                                    <span v-if="edc.major">{{ edc.major }}</span> :
                                    <span v-if="edc.degree">{{ edc.degree }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    educations: Array
});
</script>
