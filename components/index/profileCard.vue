<template>
    <div class="md:fixed min-h-screen md:flex md:items-center md:w-[38%] lg:w-[32%] xl:w-[25%]">
        <div class="border rounded-3xl p-12 w-full flex flex-col gap-6">
            <!-- NAME & TITLE -->
            <div class="flex justify-between items-end">
                <div class="text-3xl font-bold">{{ fullName }}</div>
                <div class="text-right text-nowrap">{{ profile.job }}</div>
            </div>
            <!-- IMAGE / FOTO -->
            <div v-if="profile.avatar" class="aspect-square bg-neutral rounded-2xl overflow-hidden">
                <img :src="apiUri + profile.avatar" alt="" class="object-cover min-h-full min-w-full">
            </div>
            <!-- <div class="aspect-square bg-neutral rounded-2xl"></div> -->
            <!-- EMAIL, LOKASI -->
            <div class="text-2xl font-semibold text-center">
                <div>{{ profile.email }}</div>
                <div>{{ profile.city }}, {{ profile.country }}</div>
            </div>
            <!-- COPYRIGHT -->
            <div class="text-center font-thin text-white/50">&copy; {{ year }} {{ profile.lastname }}, All Rights Reserved
            </div>
            <!-- SOCIAL BUTTON -->
            <div class="flex flex-wrap justify-center gap-4">
                <a v-if="profile.instagram" :href="profile.instagram" target="__blank"
                    class="btn btn-outline btn-circle border-neutral hover:bg-transparent hover:border-accent">
                    <LucideInstagram :size="20" class="text-accent" />
                </a>
                <a v-if="profile.twitter" :href="profile.twitter" target="__blank"
                    class="btn btn-outline btn-circle border-neutral hover:bg-transparent hover:border-accent">
                    <LucideTwitter :size="20" class="text-accent" />
                </a>
                <a v-if="profile.github" :href="profile.github" target="__blank"
                    class="btn btn-outline btn-circle border-neutral hover:bg-transparent hover:border-accent">
                    <LucideGithub :size="20" class="text-accent" />
                </a>
                <a v-if="profile.gitlab" :href="profile.gitlab" target="__blank"
                    class="btn btn-outline btn-circle border-neutral hover:bg-transparent hover:border-accent">
                    <LucideGitlab :size="20" class="text-accent" />
                </a>
                <a v-if="profile.facebook" :href="profile.facebook" target="__blank"
                    class="btn btn-outline btn-circle border-neutral hover:bg-transparent hover:border-accent">
                    <LucideFacebook :size="20" class="text-accent" />
                </a>
                <a v-if="profile.linkedin" :href="profile.linkedin" target="__blank"
                    class="btn btn-outline btn-circle border-neutral hover:bg-transparent hover:border-accent">
                    <LucideLinkedin :size="20" class="text-accent" />
                </a>
                <a v-if="profile.website" :href="profile.website" target="__blank"
                    class="btn btn-outline btn-circle border-neutral hover:bg-transparent hover:border-accent">
                    <LucideGlobe :size="20" class="text-accent" />
                </a>
                <a v-if="profile.discord" :href="profile.discord" target="__blank"
                    class="btn btn-outline btn-circle border-neutral hover:bg-transparent hover:border-accent">
                    <IconsDiscord :size="20" class="w-6 stroke-accent fill-accent" />
                </a>
            </div>

            <!-- HIRE ME BUTTON -->
            <button class="btn btn-neutral w-full rounded-2xl hover:bg-transparent hover:border-accent">
                <LucideMail />
                <div>HIRE ME</div>
            </button>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const apiUri = config.public.apiUri;

const props = defineProps({
    profile: Object
});

// computing fullName
const fullName = computed(() => {
    return `${props.profile.firstname} ${props.profile.lastname}`;
    // return props.profile.firstname + ' ' + props.profile.lastname;
})


const year = new Date().getFullYear();

</script>
