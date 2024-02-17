<template>
    <div>
        <div class="font-semibold mb-6 border-b-neutral/25">USER SETTING</div>

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
                <input v-model="formData.email" type="text" placeholder="Email"
                    class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm pr-2" v-if="errors.email">{{ errors.email }}</div>
            </label>

            <!-- PASSWORD -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Password</div>
                <input v-model="formData.password" type="password" placeholder="Password"
                    class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm pr-2" v-if="errors.password">{{ errors.password }}</div>
            </label>

            <!-- CONFIRM PASSWORD -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Confirm Password</div>
                <input v-model="formData.confirm_password" type="password" placeholder="Confirm Password"
                    class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm pr-2" v-if="errors.confirm_password">{{ errors.confirm_password }}
                </div>
            </label>
        </div>
        <button class="btn btn-neutral my-5" @click="handleUpdate">Update</button>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const AuthStore = useAuthStore();

const errors = ref({});
const formData = ref({
    name: AuthStore.name,
    email: AuthStore.email,
    password: '',
    confirm_password: ''
});

const handleUpdate = () => {
    // confirm
    // validasi 
    // fetch data update
}

</script>