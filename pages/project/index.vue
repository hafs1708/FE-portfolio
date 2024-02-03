<template>
    <div class="max-w-7xl mx-auto px-4 pb-16">
        <!--HEADER-->
        <div class="flex justify-between items-end my-4 border-b border-b-neutral pt-6 max-md:pt-20 pb-3">
            <div class="text-4xl font-bold">Fullname</div>
            <div class="text-xl">Projects</div>
        </div>

        <template v-if="projects">
            <!--PAGINATION BUTTON-->
            <div class="flex max-md:flex-col justify-between items-end">
                <div class="max-md:w-full text-4xl font-semibold my-6">My Latest <span class="text-accent">Projects</span>
                </div>
                <div class="join my-2">
                    <button class="join-item btn" :class="{ 'btn-disabled': page == 1 }" @click="page--">«</button>
                    <button class="join-item btn">Page {{ projects.page }}</button>
                    <button class="join-item btn" :class="{ 'btn-disabled': !page == maxPage }" @click="page++">»</button>
                </div>
            </div>

            <!--LOOPS DATA BLOGS-->
            <div class="grid grid-cols-3 gap-6">
                <NuxtLink :to="'project/' + project.id" v-for="project in projects.data" :key="project"
                    class="w-full group">
                    <div class="text-accent text-xl font-bold">{{ project.title }}</div>
                    <div class="text-sm font-light">{{ project.shortDateTime }}</div>
                    <div class="group-hover:scale-105 duration-300 mt-1">
                        <!--image data-->
                        <img v-if="project.photos.length" :src="apiUri + project.photos[0].path" alt=""
                            class="w-full aspect-video rounded-xl">
                        <!--image dummy-->
                        <div v-else class="w-full aspect-video bg-neutral rounded-xl"></div>
                        <div class="lime-clamp-2 font-light">{{ project.description }}</div>
                    </div>
                </NuxtLink>
            </div>

            <!--PAGINATION BUTTON-->
            <div class="flex justify-end items-end my-5">
                <div class="join my-2">
                    <button class="join-item btn" :class="{ 'btn-disabled': page == 1 }" @click="page--">«</button>
                    <button class="join-item btn">Page {{ projects.page }}</button>
                    <button class="join-item btn" :class="{ 'btn-disabled': !page == maxPage }" @click="page++">»</button>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const apiUri = config.public.apiUri;

// ambil data blogs melalui server nuxt
const projects = ref(null);
const maxPage = ref(1);
const page = ref(1);

const fetchData = async () => {
    projects.value = await $fetch('/api/project?page=' + page.value);
    maxPage.value = projects.value.maxPage;
}

// register on before moount
onBeforeMount(async () => {
    await fetchData();
});

// watch effect
watchEffect(async () => {
    await fetchData();
});
</script>
