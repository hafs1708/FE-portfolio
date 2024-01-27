<template>
    <div class="min-h-screen py-12" id="skill">
        <div class="rounded-2xl border border-neutral w-fit px-4 py-1 flex items-center gap-2">
            <LucideWrench :size="16" />
            <div class="uppercase text-sm font-light">Skill</div>
        </div>
        <div class="mt-10">
            <!-- SUBTITLE -->
            <div class="text-4xl font-semibold mb-6">Every great <span class="text-accent">Project</span> bagin with
                willingness to <span class="text-accent">Learn</span></div>

            <!-- List of skills with category -->
            <div v-for="(category, i) in skills" :key="i" class="mb-6">
                <div class="uppercase font-semibold text-accent">{{ category.title }}</div>
                <div class="flex flex-wrap gap-6">
                    <div v-for="(skill, k) in category.Skill" :key="k" class="group">
                        <!-- SVG -->
                        <div class="aspect-square bg-white/75 p-2 w-16 rounded-md flex items-center justify-center group-hover:scale-110 duration-300"
                            v-html="skill.svg">
                        </div>
                        <!-- TITLE -->
                        <div class="text-center text-sm
                         group-hover:text-accent text-nowrap">{{ skill.title }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    skills: Array
})
</script>
