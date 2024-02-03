<template>
    <div class="min-h-screen py-12" id="project">
        <div class="rounded-2xl border border-neutral w-fit px-4 py-1 flex items-center gap-2">
            <LucideUserRound :size="16" />
            <div class="uppercase text-sm font-light">Project</div>
        </div>
        <div class="mt-10">
            <div class="text-4xl font-semibold">Latest Project</div>

            <!-- LIST PROJECT -->
            <div class="grid grid-cols-2 gap-6 mt-8">
                <!-- PROJECT ITEM -->
                <NuxtLink :to="'/project/' + project.id" class="col-span-2 md:col-span-1 group"
                    v-for="(project, i) in projects" :key="i">
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
                        <div v-for="skill in project.skills" :key="skill"
                            class="border border-neutral rounded-xl px-3 text-nowrap">{{ skill.title }}</div>
                    </div>
                </NuxtLink>

                <NuxtLink to="/project" class="btn btn-accent w-min truncate px-8 mx-auto">See All Projects</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    projects: Array
});

const config = useRuntimeConfig()
const apiUri = config.public.apiUri;
console.log(apiUri);

console.log("props.projects");
console.log(props.projects);

</script>
