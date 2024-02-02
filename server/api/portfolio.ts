export default defineEventHandler(async (event) => {
    // Menghandle SSR
    const config = useRuntimeConfig();
    const apiUri = config.apiUri;

    try {
        return await $fetch(apiUri + '/portfolio');
    } catch (error) {
        throw error;
    }

});