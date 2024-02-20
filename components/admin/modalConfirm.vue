<template>
    <!-- MODAL CONFIRM -->
    <!-- Put this part before </body> tag -->
    <input v-model="show_modal" type="checkbox" class="modal-toggle" />
    <div class="modal" role="dialog">
        <div class="modal-box">
            <!-- x Corner button -->
            <form method="dialog">
                <label class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" @click="$emit('close')">✕</label>
            </form>

            <h3 class="font-bold text-lg">Confirm</h3>
            <p class="py-4">Are you sure ?</p>
            <div class="modal-action">
                <label class="btn" @click="$emit('close')">Close!</label>
                <label class="btn btn-neutral" @click="$emit('saved')">Save</label>
            </div>
        </div>
        <!-- Click Outside -->
        <form method="dialog" class="modal-backdrop">
            <label @click="$emit('close')">close</label>
        </form>
    </div>
</template>

<script setup>
const props = defineProps({
    show: Boolean
});

defineEmits(['close', 'saved']);

const show_modal = ref(false);

watchEffect(() => {
    show_modal.value = props.show;
});
</script>
