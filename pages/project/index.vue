<template>
    <div class="max-w-7xl mx-auto px-4 pb-16">
        <!--HEADER-->
        <IndexHeader :title="'Projects'" :url="'/project'" />

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
                <template v-for="project in projects.data" :key="project">
                    <ProjectThumbnail :project="project" class="w-full" />
                </template>
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
definePageMeta({
    middleware: ['profile']
});

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
