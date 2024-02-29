<template>
    <input v-model="show_modal" type="checkbox" class="modal-toggle" />
    <div class="modal" role="dialog">
        <div class="modal-box">
            <!-- x Corner button -->
            <form method="dialog">
                <label class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="$emit('close')">✕</label>
            </form>

            <h3 class="font-bold text-lg"> {{ data ? `UPDATE: ${data.institutionName}` : `CREATE EDUCATION` }}</h3>

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
    formData.value = {};
});

// handle save 
const EduStore = useEducationStore();
const save = async () => {
    // reset error 
    errors.value = {};
    fetchError.value = '';

    try {
        // show loading indicator
        isLoading.value = true;

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