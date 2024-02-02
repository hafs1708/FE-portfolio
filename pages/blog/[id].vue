<template>
    <div class="max-w-7xl mx-auto">
        <!--TITLE-->
        <div class="text-4xl font-semibold">{{ blog.title }}</div>
        <!--PHOTOS-->
        <div>
            <img v-for="photo in blog.photos" :key="photo" :src="apiUri + photo.path" alt="blog.title">
        </div>
        <!--CONTENT-->
        <div>{{ blog.content }}</div>
    </div>
</template>

<script setup>
const route = useRoute();
const blogID = route.params.id;

const config = useRuntimeConfig()
const apiUri = config.public.apiUri;

const blog = await $fetch('/api/blog/' + blogID);
</script>
