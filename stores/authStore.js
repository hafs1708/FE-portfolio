import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null
    }),
    actions: {
        async login(data) {
            // get api uri
            const Api = useApiStore();

            // isi state user
            this.user = await Api.post('/login');

            // redirect ke halaman homepage
            navigateTo('/admin');
        },
        async logout() {
            const Api = useApiStore();
            await Api.delete('/logout')

            // //redirect ke home halaman login
            navigateTo('/admin/login');
        },
        async getUser() {
            // get api uri
            const Api = useApiStore();

            // fetch data using Api method
            // return data, ditaro ke state
            this.user = await Api.get('/user');
        }
    }
});