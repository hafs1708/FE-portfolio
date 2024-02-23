import { defineStore } from 'pinia';
import { useApiStore } from './apiStore';

export const useExperienceStore = defineStore('experiences', {
    state: () => ({
        experiences: null
    }),
    actions: {
        async get() {
            const Api = useApiStore();

            this.experiences = await Api.get('/experiences');
        },
        async delete(id) {
            console.log(id);
            const Api = useApiStore();

            await Api.delete('/experience/' + id);
        }
    }
});