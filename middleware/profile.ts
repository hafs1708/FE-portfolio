export default defineNuxtRouteMiddleware(async (to, from) => {
    // handle fetch profile data

    console.log("fetch profile data from middleware");
    const useProfile = useState('profile');

    if (!useProfile.value) {
        const fetchProfile = await $fetch('/api/profile');
        useProfile.value = fetchProfile;
    }
});