<template>
    <div class="flex flex-col gap-4">
        <!-- NAME -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Name</div>
            <input v-model="formData.name" type="text" placeholder="Name" class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm" v-if="errors.name">{{ errors.name }}</div>
        </label>

        <!-- EMAIL -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Email</div>
            <input v-model="formData.email" type="text" placeholder="Email" class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm pr-2" v-if="errors.email">{{ errors.email }}</div>
        </label>
    </div>
    <div class="flex items-center gap-2">
        <label class="btn btn-neutral my-5" @click="confirm = true">Update</label>
        <div class="text-error">{{ fetchError }}</div>
    </div>

    <!-- MODAL CONFIRM -->
    <AdminModalConfirm :show="confirm" @close="confirm = false" @saved="handleUpdate" />
    <AdminModalSuccess :show="success" @close="success = false" />
</template>

<script setup>
// setup layout and middleware
import Joi from 'joi';
const AuthStore = useAuthStore();

const errors = ref({});
const fetchError = ref('');

const formData = ref({
    name: AuthStore.user.name,
    email: AuthStore.user.email,
});

const confirm = ref(false);
const success = ref(false);

const handleUpdate = async () => {
    errors.value = {}
    fetchError.value = '';

    try {
        console.log('masuk handle update')
        await AuthStore.updateUser(formData.value);
        confirm.value = false;
        success.value = true;
    } catch (error) {
        console.log('ada error')
        console.log(error)
        confirm.value = false;

        if (error instanceof Joi.ValidationError) {
            // joi error
            errors.value = joiError(error);
        }
        else {
            // fetch error
            fetchError.value = error.data.message;
        }
    }
}

</script>


