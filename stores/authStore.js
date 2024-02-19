import { defineStore } from 'pinia';
import { loginValidation, updateUserValidation } from '~/utils/authValidation';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null
    }),
    actions: {
        async login(data) {
            try {
                // get api uri
                const Api = useApiStore();

                // throw jika error
                data = Validate(loginValidation, data);

                // isi state user
                this.user = await Api.post('/login', data);

                // redirect ke halaman homepage
                navigateTo('/admin');

            } catch (error) {
                throw error
            }
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
        },
        async update(data) {
            data = Validate(updateUserValidation, data);

            // fetch 
            const Api = useApiStore();

            // fetch user update
            this.user = await Api.put('/user', data);
        }
    }
});