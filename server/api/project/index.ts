export default defineEventHandler(async (event) => {
    // ambil alamat dari server backend 
    const config = useRuntimeConfig();
    const apiUri = config.apiUri;

    // ambil query page
    const { page } = getQuery(event);

    // ambil data blogs dari backend express
    try {
        return await $fetch(`${apiUri}/projects?limit=9&page=${page}`);
    } catch (error) {
        throw error;
    }
});