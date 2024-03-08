import { defineStore } from 'pinia';
import { useApiStore } from './apiStore';

export const useProjectStore = defineStore('project', {
    state: () => ({
        data: null
        // data: {data: [], total: 10, maxPage: 2}
    }),
    getters: {
        projects: (state) => state.data ? state.data.data : [],
        limit: (state) => state.data ? state.data.limit : 10,
        maxPage: (state) => state.data ? state.data.maxPage : 1,
        total: (state) => state.data ? state.data.total : 0
    },
    actions: {
        async get(page = 1, search = '') {
            const Api = useApiStore();
            this.data = await Api.get(`/projects?limit=12&page=${page}&search=${search}`);
        },
        // async getById(id) {
        //     const Api = useApiStore();
        //     return Api.get('/project/' + id);
        // },
        async create(data, skills, photos) {
            console.log(photos);
            const Api = useApiStore();

            data = Validate(isCreateProject, data);

            // buat FORM DATA
            const formData = new FormData();
            // key => value
            const array_keys = Object.keys(data);
            console.log(array_keys);

            for (const key of array_keys) {
                // append by key and value
                formData.append(key, data[key]);
            }

            for (let i = 0; i < skills.length; i++) {
                const id = skills[i];
             
                formData.append(`skills[${i}]`, id)
            }

            // append foto dengan loop
            for(const photo of photos) {
                formData.append('photos', photo)
            }

            await Api.post('/project', formData);
        },
        // async update(id, data, new_photos) {
        //     const Api = useApiStore();
            
        //     // validasi
        //     // data = Validate(isUpdateBlog, data);

        //     // buat FORM DATA
        //     // const formData = new FormData();
        //     // formData.append("title", data.title);
        //     // formData.append("content", data.content);

        //     // // append photo lama by looping
        //     // for (let i = 0; i < data.photos.length; i++) {
        //     //     const id = data.photos[i];
                
        //     //     formData.append(`photos[${i}]`, id)
        //     // }

        //     // // append foto baru
        //     // for ( const photo of new_photos) {
        //     //     formData.append('photos', photos);
        //     // }

        //     // await Api.put(`/blog/${id}`, formData)
        // },
        async remove(id) {
            const Api = useApiStore();

            await Api.delete('/project/' + id)
        },
    }
});