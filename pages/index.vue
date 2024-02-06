<template>
    <div class="grid grid-cols-10">
        <!-- PROFILE CARD -->
        <div class="col-span-10 lg:col-span-4 md:col-span-5 xl:col-span-3 min-h-screen p-6">
            <IndexProfileCard :profile="profile" />
        </div>
        <!-- SECTIONS -->
        <div class="col-span-10 md:col-span-5 lg:col-span-6 xl:col-span-7 p-6 lg:px-20 xl:px-40">
            <IndexAbout :profile="profile" />
            <IndexBlog :blogs="blogs" />
            <IndexExperience :experiences="experiences" />
            <IndexEducation :educations="educations" />
            <IndexProject :projects="projects" />
            <IndexSkill :skills="skills" />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ['profile']
});

// SEO and META
const { value: useProfile } = useState('profile');
const fullname = `${useProfile.firstname} ${useProfile.lastname}`;
const config = useRuntimeConfig();
const apiUri = config.public.apiUri;

useSeoMeta({
    title: fullname + ' Portfolio',
    description: useProfile.bio,
    ogTitle: fullname + ' Portfolio',
    ogDescription: useProfile.bio,
    ogImage: apiUri + useProfile.avatar,
    twitterCard: 'summary_large_image'
});

// END: SEO and META

// CSR fect, dirubah ke SSR (panggil api lewat server nuxt)
// METODE EXTRACT
const getPortfolio = async () => {
    try {
        return await $fetch('/api/portfolio');
    } catch (error) {
        throw createError(error);
    }
}
const { profile, blogs, experiences, educations, projects, skills } = await getPortfolio();

</script>