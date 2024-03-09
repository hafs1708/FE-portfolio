<template>
    <div>
        <div class="font-semibold mb-6 pb-2 border-b border-b-neutral flex items-center justify-between">
            <div class="flex items-center gap-2">
                <LucideGraduationCap :size="26" /> E D U C A T I O N
            </div>
            <button class="btn btn-neutral" @click="editData = null; showForm = true">
                <LucidePlus :size="16" /> Add Education
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
                        <th>Institution</th>
                        <th class="text-center">Periode</th>
                        <th class="text-center">Major</th>
                        <th class="text-center">Degree</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody v-if="EduStore.educations">
                    <!-- row 1 -->
                    <tr v-for="edu in dataTable" :key="edu.id">
                        <th>{{ edu.id }}</th>
                        <td>{{ edu.institutionName }}</td>
                        <td class="text-center">{{ edu.startYear }} - {{ edu.endYear || 'Present' }}</td>
                        <td class="text-center">{{ edu.major }}</td>
                        <td class="text-center">{{ edu.degree }}</td>
                        <td>
                            <div class="flex gap-2 justify-center">
                                <button @click="editData = edu; showForm = true" class="btn btn-neutral">
                                    <LucidePencilLine :size="16" />
                                </button>
                                <button class="btn btn-error" @click="showRemoveModal = true; removeData = edu">
                                    <LucideTrash2 :size="16" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <AdminEducationSkeletonTable v-else />
            </table>
        </div>

        <!-- MOBILE -->
        <div v-if="EduStore.educations" class="lg:hidden flex flex-col gap-2 sm:gap-4 pt-5">
            <div v-for="edu in dataTable" :key="edu.id" class="card bg-base-100 shadow-xl">
                <div class="card-body max-sm:p-4">
                    <div class="flex justify-between">
                        <div>
                            <div class="font-semibold">{{ edu.institutionName }}</div>
                            <td class="text-sm">Periode: {{ edu.startYear }} - {{ edu.endYear || 'Present' }}</td>
                        </div>

                        <div class="dropdown dropdown-end">
                            <div tabindex="0" role="button" class="btn m-1">
                                <LucideMoreVertical :size="16" />
                            </div>
                            <ul tabindex="0"
                                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button @click="editData = edu; showForm = true"
                                        class="btn btn-sm my-1 btn-success">
                                        <LucidePencilLine :size="16" />
                                        Edit
                                    </button>
                                </li>
                                <li>
                                    <button @click="showRemoveModal = true; removeData = edu"
                                        class="btn btn-sm btn-error my-1">
                                        <LucideTrash2 :size="16" />
                                        Remove
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="grid grid-cols-10 gap-3">
                        <button
                            class="col-span-6 btn btn-neutral flex justify-between bg-base-300 shadow-lg shadow-green-500/50">
                            <div>Major:</div>
                            <div class="font-normal">{{ edu.major }}</div>
                        </button>
                        <button
                            class="col-span-4 btn btn-neutral flex justify-between bg-base-300 shadow-lg shadow-green-500/50">
                            <div>Degree:</div>
                            <div class="font-normal">{{ edu.degree }}</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- SKELETON MOBILE -->
        <AdminEducationSkeletonMobile v-else />

        <!-- Modal confirmation -->
        <LazyAdminModalConfirm :show="showRemoveModal" text_confirm="remove" @close="showRemoveModal = false"
            @saved="handleRemove">
            Are you sure to remove ?
            <div v-if="removeData" class="font-bold">{{ removeData.institutionName }}</div>
        </LazyAdminModalConfirm>

        <!-- Modal success alert -->
        <LazyAdminModalSuccess :show="showsuccessModal" @close="showsuccessModal = false" />

        <!-- FORM MODAL -->
        <LazyAdminEducationForm v-if="showForm" :data="editData" :show="showForm" text_confirm="saved"
            @close="showForm = false" @saved="saved" />
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

// EDIT
const editData = ref(null);
</script>
