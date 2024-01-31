export default defineEventHandler(async (event) => {
    // Menghandle SSR
    return await $fetch('http://localhost:5000/portfolio');
});