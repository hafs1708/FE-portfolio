<template>
    <div class="max-w-7xl mx-auto px-4 pb-16">
        <!--HEADER-->
        <div class="flex justify-between items-end my-4 border-b border-b-neutral pt-6 max-md:pt-20 pb-3">
            <div class="text-4xl font-bold">Fullname</div>
            <div class="text-xl">Blogs</div>
        </div>

        <!--PAGINATION BUTTON-->
        <div class="flex justify-between items-end">
            <div class="text-4xl font-semibold my-6">My Latest <span class="text-accent">Blogs</span></div>
            <div class="join">
                <button class="join-item btn" :class="{ 'btn-disabled': page == 1 }" @click="page--">«</button>
                <button class="join-item btn">Page {{ blogs.page }}</button>
                <button class="join-item btn" :class="{ 'btn-disabled': !page == maxPage }" @click="page++">»</button>
            </div>
        </div>

        <!--LOOPS DATA BLOGS-->
        <div class="grid grid-cols-3 gap-6">
            <NuxtLink :to="'blog/' + blog.id" v-for="blog in blogs.data" :key="blog" class="w-full group">
                <div class="text-accent text-xl font-bold">{{ blog.title }}</div>
                <div class="text-sm font-light">{{ blog.shortDateTime }}</div>
                <div class="group-hover:scale-105 duration-300 mt-1">
                    <!--image data-->
                    <img v-if="blog.photos.length" :src="apiUri + blog.photos[0].path" alt=""
                        class="w-full aspect-video rounded-xl">
                    <!--image dummy-->
                    <div v-else class="w-full aspect-video bg-neutral rounded-xl"></div>
                    <div class="lime-clamp-2 font-light">{{ blog.content }}</div>
                </div>
            </NuxtLink>
        </div>

        <!--PAGINATION BUTTON-->
        <div class="flex justify-between items-end mt-6">
            <div class="join">
                <button class="join-item btn" :class="{ 'btn-disabled': page == 1 }" @click="page--">«</button>
                <button class="join-item btn">Page {{ blogs.page }}</button>
                <button class="join-item btn" :class="{ 'btn-disabled': !page == maxPage }" @click="page++">»</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const apiUri = config.public.apiUri;

// ambil data blogs melalui server nuxt
const blogs = ref(null);
blogs.value = await $fetch('/api/blog');

const maxPage = blogs.value.maxPage;
const page = ref(1);

watchEffect(async () => {
    blogs.value = await $fetch('/api/blog?page=' + page.value);
});

</script>
