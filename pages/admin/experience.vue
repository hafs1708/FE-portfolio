<template>
    <div>
        <div class="font-semibold mb-6 pb-2 border-b border-b-neutral flex items-center justify-between">
            <div class="flex items-center gap-2">
                <LucideAward :size="26" /> E X P E R I E N C E
            </div>
            <button class="btn btn-neutral" @click="editData = null; showForm = true">
                <LucidePlus :size="16" /> Add Experience
            </button>
        </div>

        <input v-model="filter" type="text" placeholder="Search"
            class="input input-sm input-bordered input-primary w-full max-w-xs" />

        <div class="overflow-x-auto max-lg:hidden">
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
                        <td class="text-center">{{ exp.readStartDate }} - {{ exp.readEndDate }}</td>
                        <td>
                            <div class="flex gap-2 justify-center">
                                <button @click="editData = exp; showForm = true" class="btn btn-neutral">
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

        <!-- MOBILE -->
        <div class="lg:hidden flex flex-col gap-2 sm:gap-4">
            <div v-for="exp in dataTable" :key="exp.id" class="card bg-base-100 shadow-xl">
                <div class="card-body max-sm:p-4">
                    <div class="flex justify-between">
                        <div>
                            <div class="font-semibold">{{ exp.company }}</div>
                            <td class="text-sm">{{ exp.readStartDate }} - {{ exp.readEndDate }}</td>
                        </div>

                        <div class="dropdown dropdown-end">
                            <div tabindex="0" role="button" class="btn m-1">
                                <LucideMoreVertical :size="16" />
                            </div>
                            <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button @click="editData = exp; showForm = true" class="btn btn-sm my-1 btn-success">
                                        <LucidePencilLine :size="16" />
                                        Edit
                                    </button>
                                </li>
                                <li>
                                    <button @click="showRemoveModal = true; removeData = exp"
                                        class="btn btn-sm btn-error my-1">
                                        <LucideTrash2 :size="16" />
                                        Remove
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="grid grid-cols-10 gap-3">
                        <button class="col-span-6 btn btn-neutral flex justify-between">
                            <div>Location:</div>
                            <div class="font-normal">{{ exp.location }}</div>
                        </button>
                        <button class="col-span-4 btn btn-neutral flex justify-between">
                            <div>Title:</div>
                            <div class="font-normal">{{ exp.title }}</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal confirmation -->
        <AdminModalConfirm :show="showRemoveModal" text_confirm="remove" @close="showRemoveModal = false"
            @saved="handleRemove">
            Are you sure to remove ?
            <div v-if="removeData" class="font-bold">{{ removeData.company }}</div>
        </AdminModalConfirm>

        <!-- Modal success alert -->
        <AdminModalSuccess :show="showsuccessModal" @close="showsuccessModal = false" />

        <!-- FORM MODAL -->
        <AdminExperienceFormExperience :data="editData" :show="showForm" text_confirm="saved" @close="showForm = false"
            @saved="saved" />
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
const removeData = ref(null); // isi dengan data experience
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

// CREATE
const showForm = ref(false);

// berhasil create experience
const saved = async () => {
    // tutup form
    showForm.value = false;

    // fetch ulang data experience
    await ExpStore.get();
}

// EDIT
const editData = ref(null);

</script>
