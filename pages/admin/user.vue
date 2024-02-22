<template>
    <div>
        <div class="font-semibold mb-6 border-b border-b-neutral">U S E R _ S E T T I N G</div>

        <div role="tablist" class="tabs tabs-bordered">
            <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="User Detail" checked />
            <div role="tabpanel" class="tab-content p-10">
                <AdminUserDetail />
            </div>

            <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Change Password" />
            <div role="tabpanel" class="tab-content p-10">
                <AdminUserChangePassword />
            </div>
        </div>
    </div>
</template>

<script setup>
// setup layout and middleware
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

</script>