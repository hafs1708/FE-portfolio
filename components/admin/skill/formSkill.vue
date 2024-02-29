<template>
    <input v-model="show_modal" type="checkbox" class="modal-toggle" />
    <div class="modal" role="dialog">
        <div class="modal-box">
            <!-- x Corner button -->
            <form method="dialog">
                <label class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="$emit('close')">✕</label>
            </form>

            <h3 class="font-bold text-lg">CREATE SKILL</h3>

            <div>
                Avatar
                <div class="w-60 aspect-square bg-neutral/30 md:mx-auto rounded-xl">
                    <div v-if="!avatar" class="w-full h-full"></div>
                    <img v-else :src="avatar" class="object-cover min-h-full min-w-full">
                </div>
                <div class="flex md:justify-center mt-2">
                    <input @change="handleFile" accept="image/*" type="file"
                        class="file-input file-input-bordered w-full max-w-xs" />
                </div>
            </div>
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Title</div>
                <input v-model="formData.title" type="text" placeholder="Type Here"
                    class="input input-bordered w-full max-w-xs" />
                <div class="text-error text-right text-sm" v-if="errors.title">{{ errors.title }}</div>
            </label>
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Category</div>
                <input v-model="formData.category" type="text" placeholder="Type Here"
                    class="input input-bordered w-full max-w-xs" />
                <div class="text-error text-right text-sm" v-if="errors.category">{{ errors.category }}</div>
            </label>
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Projects</div>
                <input v-model="formData.projects" type="text" placeholder="Type Here"
                    class="input input-bordered w-full max-w-xs" />
                <div class="text-error text-right text-sm" v-if="errors.projects">{{ errors.projects }}</div>
            </label>
            <div class="modal-action">
                <div class="text-xs text-error" v-if="fetchError">{{ fetchError }}</div>
                <label @click="$emit('close')" class="btn btn-outline btn-error">Cancel</label>
                <label @click="save" class="btn btn-primary">{{ text_confirm || 'Create' }}
                    <span v-show="isLoading" class="loading loading-spinner loading-md"></span>
                </label>
                <label class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="$emit('close')">×</label>
            </div>
        </div>
        <!-- Click Outside -->
        <form method="dialog" class="modal-backdrop">
            <label @click="$emit('close')">close</label>
        </form>
    </div>
</template>

<script setup>
import Joi from "joi";

const props = defineProps({
    show: Boolean,
    text_confirm: String
});

const emits = defineEmits(['close', 'saved']);
const show_modal = ref(false);
const isLoading = ref(false);
const formData = ref({});
const fetchError = ref('');
const errors = ref({});

watchEffect(() => {
    show_modal.value = props.show;

    // reset form
    formData.value = {
        svg: '',
        title: '',
        category: '',
        projects: ''
    }
});

// handle save 
const SkillStore = useSkillStore();
const save = async () => {
    // reset error 
    errors.value = {};
    fetchError.value = '';

    try {
        // show loading indicator
        isLoading.value = true;

        await SkillStore.create(formData.value);

        // hide loading indicator
        isLoading.value = false;

        // emit saved
        emits('saved');
    } catch (error) {
        // reset loading indicator
        isLoading.value = false;

        if (error instanceof Joi.ValidationError) {
            // Joi error
            errors.value = joiError(error);
        } else {
            if (error.data) {
                // fetch error
                fetchError.value = error.data.message;
            } else {
                console.error(error);
            }
        }

    }
}
</script>