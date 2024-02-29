<template>
    <input v-model="show_modal" type="checkbox" class="modal-toggle" />
    <div class="modal" role="dialog">
        <div class="modal-box">
            <!-- x Corner button -->
            <form method="dialog">
                <label class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="$emit('close')">✕</label>
            </form>

            <h3 class="font-bold text-lg"> {{ data ? `UPDATE: ${data.company}` : `CREATE EXPERIENCE` }}</h3>

            <!-- COMPANY -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Company</div>
                <input v-model="formData.company" type="text" placeholder="Company"
                    class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm" v-if="errors.company">{{ errors.company }}</div>
            </label>

            <!-- TITLE -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Title</div>
                <input v-model="formData.title" type="text" placeholder="Title"
                    class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm" v-if="errors.title">{{ errors.title }}</div>
            </label>

            <!-- LOCATION -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Location</div>
                <input v-model="formData.location" type="text" placeholder="Location"
                    class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm" v-if="errors.location">{{ errors.location }}</div>
            </label>

            <!-- DESCRIPTION -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Description</div>
                <textarea v-model="formData.description" rows="5" class="textarea textarea-primary"
                    placeholder="Description"></textarea>
                <div class="text-error text-right text-sm" v-if="errors.description">{{ errors.description }}</div>
            </label>

            <div class="modal-action">
                <label class="btn" @click="$emit('close')">Close!</label>
                <label @click="save" class="btn btn-neutral">
                    {{ data ? 'Update' : 'Save' }}
                    <span v-show="isLoading" class="loading loading-bars loading-md"></span>
                </label>
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
const emit = defineEmits(['close', 'saved']);

const props = defineProps({
    data: Object,
    show: Boolean,
    text_confirm: String
});

const show_modal = ref(false);
const isLoading = ref(false);

const formData = ref({});
const fetchError = ref('');
const errors = ref({});

watchEffect(() => {
    show_modal.value = props.show;

    // reset form
    formData.value = {
        company: props.data ? props.data.company : '',
        title: props.data ? props.data.title : '',
        location: props.data ? props.data.location : '',
        description: props.data ? props.data.description : ''
    };
});

// handle save 
const ExpStore = useExperienceStore();
const save = async () => {
    // reset error 
    errors.value = {};
    fetchError.value = '';

    try {
        // show loading indicator
        isLoading.value = true;

        // ubah data endYear jika kosong menjadi null
        if (!formData.value.endYear) formData.value.endYear = null;

        if (!props.data) {
            // jika tidak ada -> create
            await ExpStore.create(formData.value);
        } else {
            // jika ada -> update
            await ExpStore.update(props.data.id, formData.value);
        }

        // hide loading indicator
        isLoading.value = false;

        // emit saved
        emit('saved');
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