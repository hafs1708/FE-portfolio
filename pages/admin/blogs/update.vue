<template>
    <div v-if="data">
        <div class="font-semibold mb-6 pb-2 border-b border-b-neutral flex items-center justify-between">
            <div class="flex items-center gap-2">
                <LucideGraduationCap :size="26" /> U P D A T E _ B L O G: " {{ data.title }}"
            </div>
        </div>

        <!-- TITLE -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Title</div>
            <input v-model="formData.title" type="text" placeholder="Title"
                class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm" v-if="errors.title">{{ errors.title }}</div>
        </label>

        <!-- PHOTOS -->
        <div class="my-4">
            <div class="label label-text pb-0">Photos</div>

            <div class="overflow-auto">
                <!-- loop photo preview -->
                <div class="flex flex-nowrap overflow-x-auto gap-2">
                    <div v-for="(photo, i) in photoPreviews" :key="(photo, i)"
                        class="min-w-60 max-w-60 aspect-video rounded-lg overflow-hidden bg-neutral/10 flex justify-center items-center relative">
                        <img :src="photo.path" class="max-h-full max-w-full">

                        <!-- action button -->
                        <div class="dropdown dropdown-end absolute right-0 top-0">
                            <div tabindex="0" role="button"
                                class="btn btn-sm px-1 m-1 btn-opacity-70 rounded-md border-0">
                                <LucideMoreVertical :size="16" />
                            </div>
                            <ul tabindex="0"
                                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button @click="photoPreviews.splice(index, 1); file_photos.splice(index, 1)"
                                        class="btn btn-sm btn-error my-1">
                                        <LucideTrash2 :size="16" />
                                        Remove
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- dummy -->
                    <div v-if="!photoPreviews.length" class="h-32 lg:h-40 aspect-video rounded bg-neutral/20"></div>
                </div>
            </div>

            <div class="pt-5">
                <input @change="handleFile" type="file" multiple accept="image/*" :disabled="photoPreviews.length >= 10"
                    class="file-input file-input-bordered w-full max-w-xs" />
            </div>
        </div>

        <!-- CONTENT -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Content</div>
            <textarea v-model="formData.content" rows="10" class="textarea textarea-bordered"
                placeholder="Content"></textarea>
            <div class="text-error text-right text-sm" v-if="errors.content">{{ errors.content }}</div>
        </label>

        <div class="flex justify-end gap-2 my-4">
            <NuxtLink to="/admin/blogs" class="btn">Cancel</NuxtLink>
            <button @click="showCreateConfirmation = true" class="btn btn-neutral">Save</button>
        </div>
    </div>

    <!-- Modal confirmation -->
    <LazyAdminModalConfirm :show="showCreateConfirmation" text_confirm="save" @close="showCreateConfirmation = false"
        @saved="handleSave">
        Are you sure to save this new blog ?
    </LazyAdminModalConfirm>
</template>

<script setup>
import Joi from 'joi';

definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

// check query
const BlogStore = useBlogStore();
const route = useRoute();
const { id } = route.query;

const config = useRuntimeConfig();
const apiUri = config.public.apiUri;

const fetch_data = await BlogStore.getById(id);
const data = ref(fetch_data);

const errors = ref({
    title: '',
    content: ''
});

const formData = ref({
    title: data.value ? data.value.title : '',
    content: data.value ? data.value.content : ''
});

// map photo
const current_photos = data.value.photos.map(photo => {
    return {
        path: apiUri + photo.path,
        id: photo.id
    }
});

// // PHOTO PREVIEW
// [
//     {
//         path: 'http://localhost/upload/photo/asjdkfjdfji.jpg',
//         id: 10,
//         // data foto lama
//     },
//     {
//         // foto baru
//         path: 'data:image/png;anfufjudjf.............'
//     }
// ]

const photoPreviews = ref(current_photos);
const file_photos = [];
const handleFile = (e) => {
    for (const file of e.target.files) {

        // convert file to data url
        // data yang bisa dibaca di tag <img src= />
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (photoPreviews.value.length < 10) {
                // tampung photo
                file_photos.push(file);

                // tampung preview
                photoPreviews.value.push({
                    path: reader.result,
                    // tanpa id karena foto baru
                })
            }
        }
    }

    // reset input file selected
    e.target.value = ''
};

// HANDLE SAVE
const showCreateConfirmation = ref(false);
const fetchError = ref('');
const isLoading = ref(false);
const handleSave = async () => {
    // reset error
    errors.value = {};
    fetchError.value = '';

    // hide confirmation
    showCreateConfirmation.value = false;

    try {
        isLoading.value = true;
        const dataUpdate = { ...formData.value };

        // tambahin foto lama
        dataUpdate.photos = [];
        for (const p of photoPreviews.value) {
            if (p.id != undefined) {
                dataUpdate.photos.push(p.id);
            }
        }

        // do fetch update
        await BlogStore.update(data.value.id, dataUpdate, file_photos)

        navigateTo('/admin/blogs');
    } catch (error) {
        isLoading.value = false;
        // reset loading indicator
        // isLoading.value = false

        if (error instanceof Joi.ValidationError) {
            // joi error
            errors.value = joiError(error);
        } else {
            if (error.data) {
                // fetch error
                fetchError.value = error.data.message;
            } else {
                // code error
                console.log(error);
            }
        }
    }
}
</script>