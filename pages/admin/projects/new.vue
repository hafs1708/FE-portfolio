<template>
    <div>
        <div class="font-semibold mb-6 pb-2 border-b border-b-neutral flex items-center justify-between">
            <div class="flex items-center gap-2">
                <LucideBriefcase :size="26" />N E W _ P R O J E C T
            </div>
        </div>

        <!-- TITLE -->
        <label class="form-control w-full">
            <div class="label label-text">Title</div>
            <input v-model="formData.title" type="text" placeholder="Title" class="input input-bordered w-full">
            <div class="text-error text-right text-sm" v-if="errors.title">{{ errors.title }}</div>
        </label>

        <!-- PERIODE -->
        <div class="flex gap-3">
            <div class="form-control w-min text-nowrap">
                <div class="label label-text pb-0">Start Date</div>
                <DatePicker v-model="formData.startDate" color="gray">
                    <template #default="{ togglePopover }">
                        <button @click="togglePopover" class="btn btn-outline border-neutral/25 font-normal">
                            {{ dayjs(formData.startDate).format('D MMMM YYYY') }}
                        </button>
                    </template>
                </DatePicker>
            </div>
            <div class="form-control w-min min-w-20 text-nowrap">
                <div class="label label-text pb-0">End Date</div>
                <div class="flex items-center gap-3">
                    <DatePicker v-model="formData.endDate" color="gray">

                        <template #default="{ togglePopover }">
                            <button @click="togglePopover"
                                class="btn btn-outline border-neutral/25 font-normal min-w-32" :disabled="isPresent">
                                {{ isPresent ? '-' : dayjs(formData.endDate).format('D MMMM YYYY') }}
                            </button>
                        </template>
                    </DatePicker>
                    <input type="checkbox" v-model="isPresent" class="checkbox" @change="handlePresent" /> PRESENT
                </div>
            </div>
        </div>

        <!-- STATUS -->
        <div class="label label-text pb-0">Status Project</div>
        <div class="flex gap-4">
            <div class="form-control">
                <label class="label cursor-pointer flex justify-start gap-2">
                    <input v-model="formData.status" type="radio" name="status" class="radio checked:bg-red-500"
                        value="ON_PROGRESS" checked />
                    <span class="label-text">ON_PROGRESS</span>
                </label>
            </div>
            <div class="form-control">
                <label class="label cursor-pointer flex justify-start gap-2">
                    <input v-model="formData.status" type="radio" name="status" class="radio checked:bg-red-500"
                        value="MAINTENANCE" checked />
                    <span class="label-text">MAINTENANCE</span>
                </label>
            </div>
            <div class="form-control">
                <label class="label cursor-pointer flex justify-start gap-2">
                    <input v-model="formData.status" type="radio" name="status" class="radio checked:bg-red-500"
                        value="COMPLETE" checked />
                    <span class="label-text">COMPLETE</span>
                </label>
            </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-2">
            <!-- COMPANY -->
            <label class="form-control w-full">
                <div class="label label-text">Company</div>
                <input v-model="formData.company" type="text" placeholder="Company" class="input input-bordered w-full">
                <div class="text-error text-right text-sm" v-if="errors.company">{{ errors.company }}</div>
            </label>

            <!-- URL -->
            <label class="form-control w-full">
                <div class="label label-text">Url</div>
                <input v-model="formData.url" type="text" placeholder="Url" class="input input-bordered w-full">
                <div class="text-error text-right text-sm" v-if="errors.url">{{ errors.url }}</div>
            </label>

            <!-- GITHUB -->
            <label class="form-control w-full">
                <div class="label label-text">Github</div>
                <input v-model="formData.github" type="text" placeholder="Github" class="input input-bordered w-full">
                <div class="text-error text-right text-sm" v-if="errors.github">{{ errors.github }}</div>
            </label>

            <!-- GITLAB -->
            <label class="form-control w-full">
                <div class="label label-text">Gitlab</div>
                <input v-model="formData.gitlab" type="text" placeholder="Gitlab" class="input input-bordered w-full">
                <div class="text-error text-right text-sm" v-if="errors.gitlab">{{ errors.gitlab }}</div>
            </label>
        </div>

        <!-- DESCRIPTION -->
        <label class="form-control w-full">
            <div class="label label-text">Description</div>
            <textarea v-model="formData.description" type="text" placeholder="Description"
                class="textarea textarea-bordered h-52"></textarea>
            <div class="text-error text-right text-sm" v-if="errors.description">{{ errors.description }}</div>
        </label>

    </div>
</template>


<script setup>
import dayjs from 'dayjs';
import { DatePicker } from 'v-calendar';

definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const formData = ref({
    title: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    status: 'ON_PROGRESS',
    url: '',
    github: '',
    gitlab: '',
    company: ''
});
const errors = ref({});

// handle present
const isPresent = ref(true);
const handlePresent = (e) => {
    const checked = e.target.checked;
    formData.value.endDate = checked ? null : new Date()
}
</script>
