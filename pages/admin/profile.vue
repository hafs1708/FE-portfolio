<template>
    <div>
        <div class="font-semibold mb-6 border-b-neutral/25">P R O F I L E</div>

        <div role="tablist" class="tabs tabs-bordered">
            <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Profile" checked />
            <div role="tabpanel" class="tab-content p-10">
                <AdminProfile v-if="ProfileStore.profile != null" />
            </div>

            <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Social Media" />
            <div role="tabpanel" class="tab-content p-10">
                <AdminProfileSocialMedia v-if="ProfileStore.profile != null" />
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const ProfileStore = useProfileStore();
onBeforeMount(async () => {
    if (ProfileStore.profile == null) {
        // get profile if state profile is null
        await ProfileStore.get();
    }
});
</script>
