export default defineEventHandler(async (event) => {
    // ambil id berdasarkan parameter
    const id = getRouterParam(event, 'id');

    // ambil data dari backend blog by id
    const config = useRuntimeConfig();
    const apiUri = config.apiUri;

    try {
        return await $fetch(apiUri + '/blog/' + id);
        // return await $fetch(`${apiUri}/blog/${id}`);
    } catch (error) {
        throw error;
    }
});