<template>
    <!--HEADER-->
    <div class="flex justify-between items-end my-4 border-b border-b-neutral pt-6 max-md:pt-20 pb-3">
        <div class="text-4xl font-bold">{{ fullName }}</div>
        <NuxtLink to="/blog" class="text-xl">Blog</NuxtLink>
    </div>
</template>

<script setup>
defineProps({
    title: String,
    url: String
});

// fetch profile with nuxt state
const useProfile = useState('profile');
const profile = useProfile.value;
const fullName = computed(() => {
    return `${profile.firstname} ${profile.lastname}`;
});
</script>

<style lang="scss" scoped></style>