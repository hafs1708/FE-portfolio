<template>
    <div class="flex flex-col gap-4">
        <!-- GITHUB -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Github</div>
            <input v-model="formData.github" type="text" placeholder="Github" class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm" v-if="errors.github">{{ errors.github }}</div>
        </label>

        <!-- gitlab -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Gitlab</div>
            <input v-model="formData.gitlab" type="text" placeholder="Gitlab" class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm" v-if="errors.gitlab">{{ errors.gitlab }}</div>
        </label>

        <!-- instagram -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Instagram</div>
            <input v-model="formData.instagram" type="text" placeholder="Instagram"
                class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm" v-if="errors.instagram">{{ errors.instagram }}</div>
        </label>

        <!-- Facebook -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Facebook</div>
            <input v-model="formData.facebook" type="text" placeholder="Facebook"
                class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm" v-if="errors.facebook">{{ errors.facebook }}</div>
        </label>

        <!-- twitter -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Twitter</div>
            <input v-model="formData.twitter" type="text" placeholder="Twitter"
                class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm" v-if="errors.twitter">{{ errors.twitter }}</div>
        </label>

        <!-- Linkedin -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Linkedin</div>
            <input v-model="formData.linkedin" type="text" placeholder="Linkedin"
                class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm" v-if="errors.linkedin">{{ errors.linkedin }}</div>
        </label>

        <!-- Discord -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Discord</div>
            <input v-model="formData.discord" type="text" placeholder="Discord"
                class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm" v-if="errors.discord">{{ errors.discord }}</div>
        </label>

        <div class="flex items-center gap-2">
            <label class="btn btn-neutral w-[320px] mt-7 gap-4" @click="confirm = true">
                U P D A T E
                <span v-show="isLoading" class="loading loading-bars loading-md"></span>
            </label>
            <div class="text-error">{{ fetchError }}</div>
        </div>
    </div>

    <!-- MODAL CONFIRM -->
    <AdminModalConfirm :show="confirm" @close="confirm = false" @saved="handleUpdate">
        <h3 class="font-bold text-lg">Confirm</h3>
        <p class="py-4">Are you sure to update social media ?</p>
    </AdminModalConfirm>

    <!-- MODAL SUCCESS -->
    <AdminModalSuccess :show="success" @close="success = false" />
</template>

<script setup>
import Joi from "joi";
const ProfileStore = useProfileStore();

const formData = ref({
    github: ProfileStore.profile.github,
    gitlab: ProfileStore.profile.gitlab,
    instagram: ProfileStore.profile.instagram,
    facebook: ProfileStore.profile.facebook,
    twitter: ProfileStore.profile.twitter,
    linkedin: ProfileStore.profile.linkedin,
    discord: ProfileStore.profile.discord
});

// Handle Error 
const errors = ref({});
const fetchError = ref('');

// Confirmation
const confirm = ref(false);
const isLoading = ref(false);
const success = ref(false);


// Handle Update 
const handleUpdate = async () => {
    // do update when isLoading == false
    if (isLoading.value == false) {
        isLoading.value = true;
    }

    confirm.value = false;
    // reser error
    errors.value = {};
    fetchError.value = '';

    try {
        await ProfileStore.update(formData.value);
        success.value = true;
        isLoading.value = false;
    } catch (error) {
        // reset loading indicator
        isLoading.value = false;

        if (error instanceof Joi.ValidationError) {
            // Joi error
            errors.value = joiError(error);
        } else {
            // fetch error
            fetchError.value = error.data.message;
        }
        // console.log(error);
    }
}
</script>