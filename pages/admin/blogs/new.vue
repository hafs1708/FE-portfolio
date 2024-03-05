<template>
    <div>
        <div class="font-semibold mb-6 pb-2 border-b border-b-neutral flex items-center justify-between">
            <div class="flex items-center gap-2">
                <LucideGraduationCap :size="26" /> C R E A T E _ B L O G
            </div>
        </div>

        <!-- TITLE -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Title</div>
            <input v-model="formData.title" type="text" placeholder="Title"
                class="input input-bordered w-full max-w-xs">
            <div class="text-error text-right text-sm" v-if="errors.title">{{ errors.title }}</div>
        </label>

        <!-- CONTENT -->
        <label class="form-control w-full max-w-xs">
            <div class="label label-text">Content</div>
            <textarea v-modal="formData.content" rows="10" class="textarea textarea-bordered"
                placeholder="Content"></textarea>
            <div class="text-error text-right text-sm" v-if="errors.content">{{ errors.content }}</div>
        </label>

        <div class="flex justify-end gap-2 my-4">
            <NuxltLink to="/admin/blogs" class="btn">Cancel</NuxltLink>
            <button class="btn btn-neutral">Save</button>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const errors = ref({
    title: '',
    content: ''
});

const formData = ref({
    title: '',
    content: ''
});

</script>