export default defineEventHandler(async (event) => {
    // ambil id berdasarkan parameter
    const id = getRouterParam(event, 'id');

    // ambil alamat dari server backend 
    const config = useRuntimeConfig();
    const apiUri = config.apiUri;

    try {
        return await $fetch(apiUri + '/project/' + id);
        // return await $fetch(`${apiUri}/blog/${id}`);
    } catch (error) {
        throw error;
    }
});
