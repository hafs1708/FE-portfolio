<template>
    <div class="max-w-7xl mx-auto px-4">
        <!--HEADER-->
        <div class="flex justify-between items-end my-4 border-b border-b-neutral pt-6 max-md:pt-20 pb-3">
            <div class="text-4xl font-bold">fullName</div>
            <NuxtLink to="/project" class="text-xl">Project</NuxtLink>
        </div>

        <!--PHOTOS-->
        <div>
            <Carousel :items-to-show="1.5" :wrapAround="true" :autoplay="3000">
                <Slide v-for="photo in project.photos" :key="photo.id">
                    <div class="asppect-video w-full">
                        <div class="w-full h-full flex justify-center bg-contain">
                            <img :src="apiUri + photo.path" :alt="project.title" class="h-full">
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
        </div>

        <!--TITLE-->
        <div class="border-b border-b-neutral">
            <div class="text-4xl font-semibold my-4 text-accent">{{ project.title }}</div>
            <div class="flex justify-between">
                <div class="font-light text-sm">{{ project.readStartDate }} - {{ project.endDate }}</div>
                <div>{{ status }}</div>
            </div>
        </div>

        <!--DESCRIPTION-->
        <div class="mt-2">
            <div v-if="project.company">
                <span class="font-semibold">Company:</span> {{ project.company }}
            </div>
            <div v-if="project.url">
                <span class="font-semibold">Url:</span> <a :href="project.url" target="__blank">{{ project.url }}</a>
            </div>
            <div class="my-4 text-justify">{{ project.description }}</div>
        </div>
    </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const route = useRoute();
const projectID = route.params.id;

const config = useRuntimeConfig()
const apiUri = config.public.apiUri;

const project = await $fetch('/api/project/' + projectID);

// modify status string
const status = computed(() => {
    return project.status.replaceAll('_', ' ')
});

</script>
