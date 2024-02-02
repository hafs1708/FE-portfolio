export default defineEventHandler(async (event) => {
    try {
        // Menghandle SSR
        return await $fetch('http://localhost:5000/portfolio');
    } catch (error) {
        throw error;
    }

});