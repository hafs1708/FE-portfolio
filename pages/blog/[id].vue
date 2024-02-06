<template>
    <div class="max-w-7xl mx-auto px-4">
        <IndexHeader :title="'Blogs'" :url="'/blog'" />

        <!--PHOTOS-->
        <div>
            <Carousel :items-to-show="1.5" :wrapAround="true" :autoplay="3000">
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
definePageMeta({
    middleware: ['profile']
});

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const route = useRoute();
const blogID = route.params.id;

const config = useRuntimeConfig()
const apiUri = config.public.apiUri;

const blog = await $fetch('/api/blog/' + blogID);

// SEO and META
const { value: useProfile } = useState('profile');
const fullname = `${useProfile.firstname} ${useProfile.lastname}`;

const firstPhoto = blog.photos.length ? (apiUri + blog.photos[0].path) : '';

useSeoMeta({
    title: `${blog.title} - ${fullname} Blog`,
    description: blog.content,
    ogTitle: `${blog.title} - ${fullname} Blog`,
    ogDescription: blog.content,
    ogImage: firstPhoto,
    twitterCard: 'summary_large_image'
});

// END: SEO and META
</script>