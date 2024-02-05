<template>
    <div class="max-w-7xl mx-auto px-4">
        <!--HEADER-->
        <div class="flex justify-between items-end my-4 border-b border-b-neutral pt-6 max-md:pt-20 pb-3">
            <div class="text-4xl font-bold">{{ fullName }}</div>
            <NuxtLink to="/project" class="text-xl">Project</NuxtLink>
        </div>

        <!--Content Project-->
        <div class="grid grid-cols-10 gap-6">
            <!-- Sisi Kiri -->
            <div class="col-span-full md:col-span-7">
                <!--PHOTOS-->
                <div v-if="project.photos.length" class="">
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
                <!-- Dummy Photo -->
                <div v-else class="aspect-video bg-neutral rounded-xl"></div>
            </div>

            <!--Sisi Kanan-->
            <div class="col-span-full md:col-span-3">
                <!--Date Detail-->
                <div class="font-light text-sm"><span class="font-semibold">DATE:</span> {{ project.readStartDate }} - {{
                    project.readEndDate }}</div>
                <div><span class="font-semibold">STATUS:</span> {{ status }}</div>

                <!--Company Detail-->
                <div v-if="project.company">
                    <span class="font-semibold">Company:</span> {{ project.company }}
                </div>

                <!--Url Detail-->
                <div v-if="project.url">
                    <span class="font-semibold">Url:</span> <a :href="project.url" target="__blank">{{ project.url }}</a>
                </div>

                <!-- Skills -->
                <template v-if="project.skills.length">
                    <div class="font-semibold mt-4">TECHNOLOGIES:</div>
                    <div class="flex flex-wrap gap-4">
                        <div v-for="skill in project.skills" :key="skill"
                            class="badge badge-lg badge-outline badge-accent text-nowrap px-4">
                            <div v-html="skill.svg" class="w-5 mr-2 bg-neutral-100 rounded"></div>
                            {{ skill.title }}
                        </div>
                    </div>
                </template>

                <!--DESCRIPTION-->
                <div class="mt-2 md:hidden">
                    <div class="my-4 text-justify">{{ project.description }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ['profile']
});

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

// fetch profile with nuxt state
const useProfile = useState('profile');
const profile = useProfile.value;
const fullName = computed(() => {
    return `${profile.firstname} ${profile.lastname}`;
});
</script>
