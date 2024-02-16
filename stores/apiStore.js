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
                console.log(error)
            }
        },
        // post
        async post(path, data) {
            // get api uri
            const config = useRuntimeConfig();
            const apiUri = config.public.apiUri;

            const jsonData = JSON.stringify(data);

            try {
                const data = await $fetch(apiUri + path, {
                    method: 'POST',
                    body: jsonData,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                });

                // return data
                return data
            } catch (error) {
                throw error
            }
        },
        // put
        // patch
        // delete
        async delete(path) {
            // get api uri
            const config = useRuntimeConfig();
            const apiUri = config.public.apiUri;

            try {
                const data = await $fetch(apiUri + path, {
                    method: 'Delete',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include'
                });

                // RETURN DATA
                return data
            } catch (error) {
                console.log(error);
            }
        }
    }
});