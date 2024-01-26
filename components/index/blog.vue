<template>
    <div class="min-h-screen py-12" id="blog">
        <div class="rounded-2xl border border-neutral w-fit px-4 py-1 flex items-center gap-2">
            <LucideNewspaper :size="16" />
            <div class="uppercase text-sm font-light">Blog</div>
        </div>
        <div class="flex flex-col gap-6 mt-10">
            <div class="text-4xl font-semibold">Latest Blog</div>
            <!-- LIST BLOG -->
            <div class="grid grid-cols-10 gap-3 group hover:bg-cyan-950 p-2 rounded-xl" v-for="(blog, i) in blogs" :key="i">
                <!-- IMAGE -->
                <div class="aspect-video bg-neutral col-span-4 xl:col-span-3 rounded-lg group-hover:scale-105 duration-300">
                </div>
                <div class="col-span-6 xl:col-span-7 flex flex-col">
                    <div class="text-2xl font-semibold group-hover:text-accent">{{ blog.title }}</div>
                    <div class="grow font-light line-clamp-2 xl:line-clamp-3">{{ blog.content }}</div>

                    <!--TODO generate readable date-->
                    <div class="text-xs text-white/50">{{ blog.createdAT }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    blogs: Array
});
</script>
