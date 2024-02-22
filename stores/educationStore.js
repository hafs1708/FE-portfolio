import { defineStore } from 'pinia';
import { useApiStore } from './apiStore';

export const useEducationStore = defineStore('educations', {
    state: () => ({
        educations: null
    }),
    actions: {
        async get() {
            const Api = useApiStore();

            this.educations = await Api.get('/educations');
        }
    }
});