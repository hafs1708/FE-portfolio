import { defineStore } from 'pinia';
import { useApiStore } from './apiStore';

export const useBlogStore = defineStore('blog', {
    state: () => ({
        data: null
        // data: {data: [], total: 10, maxPage: 2}
    }),
    getters: {
        blogs: (state) => state.data ? state.data.data : [],
        limit: (state) => state.data ? state.data.limit : 10,
        maxPage: (state) => state.data ? state.data.maxPage : 1,
        total: (state) => state.data ? state.data.total : 0
    },
    actions: {
        async get(page = 1, search = '') {
            const Api = useApiStore();
            this.data = await Api.get(`/blogs?limit=12&page=${page}&search=${search}`);
        },
        async getById(id) {
            const Api = useApiStore();
            return Api.get('/blog/' + id);
        },
        async create(data, photos) {
            const Api = useApiStore();

            data = Validate(isCreateBlog, data);

            // buat FORM DATA
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("content", data.content);

            // append foto dengan loop
            for(const photo of photos) {
                formData.append('photos', photo)
            }

            await Api.post('/blog/', formData);
        },
        async update(data, new_photos) {
            const Api = useApiStore();
            
            // validasi
            data = Validate(isUpdateBlog, data);

            console.log('data setelah validasi')
            console.log(data);

            // buat FORM DATA
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("content", data.content);

            // append photo lama by looping
            for (let i = 0; i < data.photos.length; i++) {
                const id = data.photos[i];
                
                formData.append(`photos[${i}]`, id)
            }

            // append foto baru
            for ( const photo of new_photos) {
                formData.append('photos', photos);
            }

            await Api.put(`/blog/${id}`, formData)
        },
        async remove(id) {
            const Api = useApiStore();

            await Api.delete('/blog/' + id)
        },
    }
});