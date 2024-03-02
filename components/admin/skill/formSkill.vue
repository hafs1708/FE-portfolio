<template>
    <input v-model="show_modal" type="checkbox" class="modal-toggle" />
    <div class="modal" role="dialog">
        <div class="modal-box">
            <!-- x Corner button -->
            <form method="dialog">
                <label class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="$emit('close')">✕</label>
            </form>

            <h3 class="font-bold text-lg">CREATE SKILL</h3>

            <!-- TITLE -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Title</div>
                <input v-model="formData.title" type="text" placeholder="Type Here"
                    class="input input-bordered w-full max-w-xs" />
                <div class="text-error text-right text-sm" v-if="errors.title">{{ errors.title }}</div>
            </label>

            <!-- CATEGORY -->
            <label class="form-control w-full max-w-xs gap-2">
                <div class="label label-text">Category</div>
                <input v-model="formData.category" type="text" placeholder="Search"
                    class="input input-bordered w-full max-w-xs uppercase" />
                <div class="text-error text-right text-sm" v-if="errors.category">{{ errors.category }}</div>

                <!-- Category Selector -->
                <label class="mt-2 text-sm">Select Category</label>
                <select @change="(e) => formData.category = e.target.value"
                    class="select select-bordered select-sm w-full max-w-xs">
                    <option v-for="cat in SkillStore.categories" :key="cat.id" :value="cat.title">{{ cat.title }}
                    </option>
                </select>

                <!-- <div class="flex flex-wrap gap-2 mt-2">
                    <button v-for="cat in SkillStore.categories" :key="cat" @click="formData.category"
                        class="btn btn-xs w-min text-nowrap">
                        {{ cat.title }}
                    </button>
                </div> -->
            </label>

            <!-- SVG -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">SVG</div>

                <div v-html="formData.svg" class="w-20 h-20 bg-neutral/10 rounded-full p-6 mb-2 mx-auto"></div>

                <textarea v-model="formData.svg" rows="2" class="textarea textarea-primary"
                    placeholder="SVG"></textarea>
                <div class="text-error text-right text-sm" v-if="errors.svg">{{ errors.svg }}</div>
            </label>

            <div class="modal-action">
                <div class="text-xs text-error" v-if="fetchError">{{ fetchError }}</div>
                <label @click="$emit('close')" class="btn btn-outline btn-error">Cancel</label>
                <label @click="handleSave" class="btn btn-primary">{{ text_confirm || 'Create' }}
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

const emits = defineEmits(['close', 'saved']);
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
        title: '',
        category: '',
        svg: ''
    }
});

// handle save 
const SkillStore = useSkillStore();
const handleSave = async () => {
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