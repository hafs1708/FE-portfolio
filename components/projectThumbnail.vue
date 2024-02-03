<template>
    <NuxtLink to="'/project/' + project.id" class="group">
        <div class="flex flex-col">
            <div class="font-semibold text-xl text-accent group-hover:text-accent truncate">{{ project.title }}
            </div>
            <div>{{ project.readStartDate }} - {{ project.readEndDate }}</div>
        </div>

        <!-- IMAGE -->
        <div class="rounded-xl aspect-video overflow-hidden group-hover:scale-105 duration-300">
            <!-- Tampilkan photo pertama -->
            <img v-if="project.photos.length" :src="apiUri + project.photos[0].path" :alt="project.title"
                class="object-cover">
            <!-- Tampilkan dummy -->
            <div v-else class="aspect-video bg-neutral"></div>
        </div>

        <!-- SKILL -->
        <div class="flex flex-nowrap overflow-hidden gap-2 mt-2">
            <div v-for="skill in project.skills" :key="skill" class="border border-neutral rounded-xl px-3 text-nowrap">{{
                skill.title }}</div>
        </div>
    </NuxtLink>
</template>

<script>
defineProps({
    project: Object
});

const config = useRuntimeConfig()
const apiUri = config.public.apiUri;

</script>