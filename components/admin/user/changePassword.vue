<template>
    <div class="flex flex-col gap-4">
        <!-- PASSWORD -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Old Password</div>
            <input v-model="formData.current_password" type="password" placeholder="Current Password"
                class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm pr-2" v-if="errors.current_password">{{
                errors.current_password }}
            </div>
        </label>

        <label class="form-control w-full max-w-xs">
            <div class="label label-text">New Password</div>
            <input v-model="formData.password" type="password" placeholder="Password"
                class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm pr-2" v-if="errors.password">{{ errors.password }}</div>
        </label>

        <!-- CONFIRM PASSWORD -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Confirm New Password</div>
            <input v-model="formData.confirm_password" type="password" placeholder="Confirm Password"
                class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm pr-2" v-if="errors.confirm_password">{{
                errors.confirm_password }}
            </div>
        </label>
    </div>
    <div class="flex items-center gap-2">
        <label class="btn btn-neutral w-[320px] mt-7 gap-4" @click="confirm = true">
            U P D A T E
            <span v-show="isLoading" class="loading loading-bars loading-md"></span>
        </label>
        <div class="text-error">{{ fetchError }}</div>
    </div>

    <!-- MODAL CONFIRM -->
    <LazyAdminModalConfirm :show="confirm" text_confirm="Change Password" @close="confirm = false"
        @saved="handleUpdate" />
    <LazyAdminModalSuccess :show="success" @close="success = false" />
</template>

<script setup>
// setup layout and middleware
import Joi from "joi";
const isLoading = ref(false)
const AuthStore = useAuthStore();

const errors = ref({});
const fetchError = ref('');

const formData = ref({
    current_password: '',
    password: '',
    confirm_password: ''
});

const confirm = ref(false);
const success = ref(false);

const handleUpdate = async () => {
    // reset errors
    errors.value = {};
    fetchError.value = '';

    try {
        await AuthStore.update(formData.value)
        // fetch data update
        confirm.value = false;
        success.value = true;
    } catch (error) {
        // console.log(error);
        confirm.value = false;
        if (error instanceof Joi.ValidationError) {
            // joi error 
            errors.value = joiError(error);
        } else {
            // fetch error
            fetchError.value = error.data.message;
        }
    }


}

</script>
