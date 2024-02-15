export default defineNuxtRouteMiddleware(async (to, from) => {
    // cek token -> melalui cookie
    const token = useCookie('token');
    // console.log(token.value);

    const AuthStore = useAuthStore();

    if (to.path != '/admin/login') {
        // bukan halalman login
        // check token
        if (!token.value) {
            return navigateTo('/admin/login');
        }

        // kondisi token ada
        if (!AuthStore.user) {
            // fetch data user
            await AuthStore.getUser();

            // kalo error, atau data tetap null, balik ke halalman login

            if (!AuthStore.user) {
                return navigateTo('/admin/login')
            }
        }
    } else {
        // ke halaman login
        // check token, kalo ada return ke halaman index
        if (token.value) {
            return navigateTo('/admin');
        }
    }


    // cek user data
});