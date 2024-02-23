<template>
    <div>
        <div class="font-semibold mb-6 border-b border-b-neutral">E X P E R I E N C E</div>

        <input v-model="filter" type="text" placeholder="Search"
            class="input input-sm input-bordered input-primary w-full max-w-xs" />

        <div class="overflow-x-auto">
            <table class="table table-zebra">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Company</th>
                        <th class="text-center">Location</th>
                        <th class="text-center">Title</th>
                        <th class="text-center">Periode</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="exp in dataTable" :key="exp.id">
                        <th>{{ exp.id }}</th>
                        <td>{{ exp.company }}</td>
                        <td class="text-center">{{ exp.location }}</td>
                        <td class="text-center">{{ exp.title }}</td>
                        <td class="text-center">{{ exp.raedStarDate }} - {{ exp.readEndDate }}</td>
                        <td>
                            <div class="flex gap-2 justify-center">
                                <button class="btn btn-neutral">
                                    <LucidePencilLine :size="16" />
                                </button>
                                <button class="btn btn-error" @click="showRemoveModal = true; removeData = exp">
                                    <LucideTrash2 :size="16" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Modal confirmation -->
        <AdminModalConfirm :show="showRemoveModal" text_confirm="remove" @close="showRemoveModal = false"
            @saved="handleRemove">
            Are you sure to remove ?
            <div v-if="removeData" class="font-bold">{{ removeData.company }}</div>
        </AdminModalConfirm>

        <!-- Modal success alert -->
        <AdminModalSuccess :show="showsuccessModal" @close="showsuccessModal = false" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const ExpStore = useExperienceStore();
onBeforeMount(async () => {
    await ExpStore.get();
    console.log(ExpStore.experiences);
});


const filter = ref('');
const dataTable = computed(() => {
    // pastikan huruf lower
    const search = filter.value.toLowerCase();

    if (search != '') {
        return ExpStore.experiences.filter(exp => {
            const company = exp.company.toLowerCase();
            return company.includes(search)
        });
    } else {
        // return semua data
        return ExpStore.experiences;
    }
});

// REMOVE
const removeData = ref(null); // isi dengan data education
const showRemoveModal = ref(false);
const showsuccessModal = ref(false);

const handleRemove = async () => {
    try {
        const id = removeData.value.id;

        // process delete
        await ExpStore.delete(id);

        // success modal
        showsuccessModal.value = true;

        // hide modal
        showRemoveModal.value = false;

        // refresh data
        await ExpStore.get();
    } catch (error) {
        console.log(error);
    }
} 
</script>
