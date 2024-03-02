import { defineStore } from 'pinia';
import { useApiStore } from './apiStore';

export const useSkillStore = defineStore('skill', {
    state: () => ({
        skills: null,
        categories: []
    }),
    actions: {
        async get() {
            const Api = useApiStore();

            this.skills = await Api.get('/skills');

            // RETURN VOID
        },
        async delete(id) {
            const Api = useApiStore();
            await Api.delete('/skill/' + id);
        },
        async getCategories() {
            const Api = useApiStore();
            
            this.categories = await Api.get('/skill_categories');
            
            // RETURN VOID
        },
        async create(data) {
            const Api = useApiStore();

            // validasi
            data = Validate(isSkill, data);

            // fetch create
            await Api.post('/skill', data);
        },
        async update(id, data) {
            const Api = useApiStore();
            
            // validasi 
            data = Validate(isSkill, data);

            return await Api.put(`/skill/${id}`, data);
        }
    }
});