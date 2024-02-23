<template>
    <div>
        <div class="font-semibold mb-6 pb-2 border-b border-b-neutral flex items-center justify-between">
            <div class="flex items-center gap-2">
                <LucideGraduationCap :size="26" /> E D U C A T I O N
            </div>
            <button class="btn btn-neutral" @click="showForm = true">
                <LucidePlus :size="16" /> Add Education
            </button>
        </div>

        <input v-model="filter" type="text" placeholder="Search"
            class="input input-sm input-bordered input-primary w-full max-w-xs" />

        <div class="overflow-x-auto">
            <table class="table table-zebra">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Institution</th>
                        <th class="text-center">Periode</th>
                        <th class="text-center">Major</th>
                        <th class="text-center">Degree</th>
                        <th class="text-center">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="edu in dataTable" :key="edu.id">
                        <th>{{ edu.id }}</th>
                        <td>{{ edu.institutionName }}</td>
                        <td class="text-center">{{ edu.startYear }} - {{ edu.endYear }}</td>
                        <td class="text-center">{{ edu.major }}</td>
                        <td class="text-center">{{ edu.degree }}</td>
                        <td>
                            <div class="flex gap-2 justify-center">
                                <button class="btn btn-neutral">
                                    <LucidePencilLine :size="16" />
                                </button>
                                <button class="btn btn-error" @click="showRemoveModal = true; removeData = edu">
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
            <div v-if="removeData" class="font-bold">{{ removeData.institutionName }}</div>
        </AdminModalConfirm>

        <!-- Modal success alert -->
        <AdminModalSuccess :show="showsuccessModal" @close="showsuccessModal = false" />

        <!-- FORM MODAL -->
        <AdminEducationForm :show="showForm" text_confirm="saved" @close="showForm = false" @saved="saved" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const EduStore = useEducationStore();
onBeforeMount(async () => {
    await EduStore.get();
});


const filter = ref('');
const dataTable = computed(() => {
    // pastikan huruf lower
    const search = filter.value.toLowerCase();

    if (search != '') {
        return EduStore.educations.filter(edu => {
            const institutionName = edu.institutionName.toLowerCase();
            return institutionName.includes(search)
        });
    } else {
        // return semua data
        return EduStore.educations;
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
        await EduStore.delete(id);

        // success modal
        showsuccessModal.value = true;

        // hide modal
        showRemoveModal.value = false;

        // refresh data
        await EduStore.get();
    } catch (error) {
        console.log(error);
    }
}

// CREATE
const showForm = ref(false);

// berhasil create eduaction
const saved = async () => {
    // tutup form
    showForm.value = false;

    // buka form success
    showsuccessModal.value = true;

    // fetch ulang data education
    await EduStore.get();
}

</script>