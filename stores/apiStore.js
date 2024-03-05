import { defineStore } from 'pinia';

export const useApiStore = defineStore('api', {
    actions: {
        // get
        async get(path) {
            // get api uri
            const config = useRuntimeConfig();
            const apiUri = config.public.apiUri;

            try {
                const data = await $fetch(apiUri + path, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                });

                // RETURN DATA
                return data
            } catch (error) {
                this.handleError(error);
            }
        },
        // POST
        async post(path, data) {
            const config = useRuntimeConfig();
            const apiUri = config.public.apiUri;

            if (!(data instanceof FormData)) {
                // jika data bukan formdata
                data = JSON.stringify(data);
            }

            try {
                const response = await $fetch(apiUri + path, {
                    method: 'POST',
                    body: data,
                    credentials: 'include'
                });

                // RETURN DATA
                return response
            } catch (error) {
                this.handleError(error);
            }
        },
        // put
        async put(path, data) {
            // get api uri
            const config = useRuntimeConfig();
            const apiUri = config.public.apiUri;

            if (!(data instanceof FormData)) {
                // jika data bukan form data ubah ke json
                data = JSON.stringify(data);
            }

            try {
                const response = await $fetch(apiUri + path, {
                    method: 'PUT',
                    body: data,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                });

                // RETURN DATA
                return response
            } catch (error) {
                this.handleError(error);
            }
        },
        // patch
        async patch(path, data) {
            // get api uri
            const config = useRuntimeConfig();
            const apiUri = config.public.apiUri;

            const jsonData = JSON.stringify(data);

            try {
                const response = await $fetch(apiUri + path, {
                    method: 'PATCH',
                    body: jsonData,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                });

                // RETURN DATA
                return response
            } catch (error) {
                this.handleError(error);
            }
        },
        // delete
        async delete(path) {
            // get api uri
            const config = useRuntimeConfig();
            const apiUri = config.public.apiUri;

            try {
                const response = await $fetch(apiUri + path, {
                    method: 'Delete',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                });

                // RETURN DATA
                return response
            } catch (error) {
                this.handleError(error);
            }
        },
        handleError(error) {
            // 401 UNAUTHORIZED / BELUM LOGIN
            if (error.status == 401) {
                // hapus token dari cookie
                const token = useCookie('token');
                token.value = '';

                // lempar ke halaman login
                return navigateTo('/admin/login');
            }

            // 400 BAD REQUEST
            if (error.status == 400) {
                throw error;
            };

            // SELAIN 401 & 400
            throw createError({
                statusCode: error.status || 500, // default code 500
                statusMessage: error.data.message || 'Internal Server Error!' // default message
            });

        }
    }
});