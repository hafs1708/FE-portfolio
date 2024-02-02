export default defineEventHandler(async (event) => {
    // ambil alamat dari server backend 
    const config = useRuntimeConfig();
    const apiUri = config.apiUri;

    // ambil data blogs dari backend express
    try {
        return await $fetch(`${apiUri}/blogs?limit=9&page=1`);
    } catch (error) {
        throw error;
    }
});