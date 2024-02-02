export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const apiUri = config.apiUri;
    try {
        // Menghandle SSR
        return await $fetch(apiUri + '/portfolio');
    } catch (error) {
        throw error;
    }

});