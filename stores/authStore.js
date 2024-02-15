import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {
            name: '',
            email: ''
        }
    }),
    actions: {
        async login(formData) {
            // get api uri
            const config = useRuntimeConfig();
            const apiUri = config.public.apiUri;

            // convert to json
            const jsonData = JSON.stringify(formData);

            const user = await $fetch(apiUri + '/login', {
                method: 'POST',
                body: jsonData,
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            // isi state user
            this.user = user;

            // redirect ke halaman homepage
            navigateTo('/admin');
        },
        async logout() {
            // get api uri
            const config = useRuntimeConfig();
            const apiUri = config.public.apiUri;

            await $fetch(apiUri + '/logout', {
                method: 'Delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            //redirect ke home halaman login
            navigateTo('/admin/login');
        }
    }
});