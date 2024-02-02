<template>
    <div class="max-w-7xl mx-auto px-4">
        <!--HEADER-->
        <div class="flex justify-between items-end my-4 border-b border-b-neutral pt-6 max-md:pt-20 pb-3">
            <div class="text-4xl font-bold">fullName</div>
            <div>blog</div>
        </div>

        <!--PHOTOS-->
        <div>
            <Carousel :items-to-show="1.5" :wrapAround="true" :autoplay="1000">
                <Slide v-for="photo in blog.photos" :key="photo.id">
                    <div class="asppect-video w-full">
                        <div class="w-full h-full flex justify-center bg-contain">
                            <img :src="apiUri + photo.path" :alt="blog.title" class="h-full">
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
        <div class="text-4xl font-semibold my-4 text-accent">{{ blog.title }}</div>
        <div class="font-light text-sm">{{ blog.shortDateTime }}</div>

        <!--CONTENT-->
        <div class="my-4 text-justify">{{ blog.content }}</div>
    </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const route = useRoute();
const blogID = route.params.id;

const config = useRuntimeConfig()
const apiUri = config.public.apiUri;

const blog = await $fetch('/api/blog/' + blogID);
</script>