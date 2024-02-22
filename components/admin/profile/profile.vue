<template>
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="flex flex-col gap-4">
            <!-- EMAIL -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Email</div>
                <input v-model="formData.email" type="text" placeholder="Email"
                    class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm pr-2" v-if="errors.email">{{ errors.email }}</div>
            </label>

            <!-- FIRST NAME -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">First Name</div>
                <input v-model="formData.firstname" type="text" placeholder="First Name"
                    class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm" v-if="errors.firstname">{{ errors.firstname }}</div>
            </label>

            <!-- LAST NAME -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Last Name</div>
                <input v-model="formData.lastname" type="text" placeholder="Last Name"
                    class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm" v-if="errors.lastname">{{ errors.lastname }}</div>
            </label>

            <!-- DOB -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Date of Birth</div>

                <DatePicker v-model="formData.dob" color="gray">
                    <template #default="{ togglePopover }">
                        <button @click="togglePopover" class="btn btn-outline border-neutral/25 font-normal">
                            {{ dayjs(formData.dob).format('D MMMM YYYY') }}
                        </button>
                    </template>
                </DatePicker>
                <div class="text-error text-right text-sm" v-if="errors.dob">{{ errors.dob }}</div>
            </label>

            <!-- ADDRESS -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Address</div>
                <input v-model="formData.address" type="text" placeholder="Address"
                    class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm" v-if="errors.address">{{ errors.address }}</div>
            </label>

            <!-- CITY -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">City</div>
                <input v-model="formData.city" type="text" placeholder="City" class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm" v-if="errors.city">{{ errors.city }}</div>
            </label>

            <!-- COUNTRY -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Country</div>
                <input v-model="formData.country" type="text" placeholder="Country"
                    class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm" v-if="errors.country">{{ errors.country }}</div>
            </label>

            <!-- JOB -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Job</div>
                <input v-model="formData.job" type="text" placeholder="Job" class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm" v-if="errors.job">{{ errors.job }}</div>
            </label>

            <!-- PHONE -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Phone</div>
                <input v-model="formData.phone" type="text" placeholder="Phone"
                    class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm" v-if="errors.phone">{{ errors.phone }}</div>
            </label>

            <!-- Website -->
            <label class="form-control w-full max-w-xs">
                <div class="label label-text">Website</div>
                <input v-model="formData.website" type="text" placeholder="Website"
                    class="input input-bordered w-full max-w-xs">
                <div class="text-error text-right text-sm" v-if="errors.website">{{ errors.website }}</div>
            </label>
        </div>

        <div>
            <div>
                Avatar
                <div class="w-60 aspect-square bg-neutral/30 md:mx-auto rounded-xl overflow-hidden">
                    <div v-if="!avatar" class="w-full h-full"></div>
                    <img v-else :src="avatar" class="object-cover min-h-full min-w-full">
                </div>
                <div class="flex md:justify-center mt-4">
                    <input @change="handleFile" type="file" accept="image/*"
                        class="file-input file-input-bordered w-full max-w-xs" />
                </div>
            </div>
            <!-- BIO -->
            <label class="form-control w-full">
                <div class="label label-text">Bio</div>
                <textarea v-model="formData.bio" placeholder="Bio" rows="10" class="textarea textarea-bordered"></textarea>
                <div class="text-error text-right text-sm pr-2" v-if="errors.name">{{ errors.bio }}</div>
            </label>
        </div>
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
        <p class="py-4">Are you sure to update profile ?</p>
    </AdminModalConfirm>

    <!-- MODAL SUCCESS -->
    <AdminModalSuccess :show="success" @close="success = false" />
</template>


<script setup>
import { DatePicker } from 'v-calendar';
import dayjs from 'dayjs';
import Joi from 'joi';

const config = useRuntimeConfig();
const apiUri = config.public.apiUri;
const ProfileStore = useProfileStore();

const formData = ref({
    email: ProfileStore.profile.email,
    firstname: ProfileStore.profile.firstname,
    lastname: ProfileStore.profile.lastname,
    dob: ProfileStore.profile.dob,
    address: ProfileStore.profile.address,
    city: ProfileStore.profile.city,
    country: ProfileStore.profile.country,
    job: ProfileStore.profile.job,
    phone: ProfileStore.profile.phone,
    bio: ProfileStore.profile.bio,
    website: ProfileStore.profile.website
});

// AVATAR
// if else shortcut
// valuenya = apiuri + avatar || null
const avatar = ref(
    ProfileStore.profile.avatar
        ? apiUri + ProfileStore.profile.avatar
        : null
);

let file_avatar = null;
const handleFile = (e) => {
    if (e.target.files.length) {
        const file = e.target.files[0];
        file_avatar = file;

        // convert file to dataurl
        // data yang bisa dibaca di tag <img src= />
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            avatar.value = reader.result;
        }
    }
}

// Confirmation
const confirm = ref(false);
const success = ref(false);
const isLoading = ref(false);

// Handle Update 
const errors = ref({});
const fetchError = ref('');

const handleUpdate = async () => {
    // do update when isLoading == false
    if (isLoading.value == false) {
        isLoading.value = true;
    }

    // loading indicator
    confirm.value = false;

    // reser error
    errors.value = {};
    fetchError.value = '';

    try {
        await ProfileStore.update(formData.value, file_avatar);
        success.value = true;
        isLoading.value = false;
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
        console.log(error);
    }
}
</script>