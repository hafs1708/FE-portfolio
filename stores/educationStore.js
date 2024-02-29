import { defineStore } from 'pinia';
import { useApiStore } from './apiStore';
import { isEducation } from '~/utils/educationValidation.js';

export const useEducationStore = defineStore('educations', {
    state: () => ({
        educations: null
    }),
    actions: {
        async get() {
            const Api = useApiStore();
            this.educations = await Api.get('/educations');
        },
        async delete(id) {
            const Api = useApiStore();
            await Api.delete('/education/' + id);
        },
        async create(data) {
            const Api = useApiStore();

            // validasi 
            data = Validate(isEducation, data);

            await Api.post('/education', data);
        },
        async update(id, data) {
            const Api = useApiStore();

            // validasi 
            data = Validate(isEducation, data);

            await Api.put(`/education/${id}`, data);
        }
    }
});