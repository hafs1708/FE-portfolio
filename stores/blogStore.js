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
        async create(data, photos) {
            const Api = useApiStore();

            data = Validate(isCreateBlog, data);

            // buat FORM DATA
            const formData = new formData();
            formData.append("title", data.title);
            formData.append("content", data.content);

            // append foto dengan loop
            for(const photo of photos) {
                formData.append('photos', photos)
            }

            await Api.post('/blog/', formData);
        },
        async remove(id) {
            const Api = useApiStore();

            await Api.delete('/blog/' + id)
        },
    }
});