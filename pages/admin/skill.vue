<template>
    <div>
        <div class="font-semibold mb-6 pb-2 border-b border-b-neutral flex items-center justify-between">
            <div class="flex items-center gap-2">
                <LucideWrench :size="26" /> S K I L L
            </div>
            <button class="btn btn-neutral" @click="showForm = true">
                <LucidePlus :size="16" /> Add Skill
            </button>
        </div>

        <div class="flex 0 gap-4">
            <select name="" id="" class="w-60">
                <option value="">All Categories</option>
                <!-- draw categories -->
            </select>
            <div class="w-full">
                <input v-model="filter" type="text" placeholder="Search"
                    class="grow input input-sm input-bordered w-full" />
            </div>
        </div>

        <div class="overflow-x-auto">
            <table class="table table-zebra">
                <!-- head -->
                <thead>
                    <tr>
                        <th class="text-center">SVG</th>
                        <th class="text-center">Title</th>
                        <th class="text-center">Category</th>
                        <th class="text-center">Projects</th>
                        <th class="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="skill in dataTable" :key="skill.id">
                        <th>
                            <div v-html="skill.svg" class="w-8 overflow-hidden"></div>
                        </th>
                        <td>{{ skill.title }}</td>
                        <td class="text-center">{{ skill.category.title }}</td>
                        <td class="text-center">{{ skill.projects }}</td>
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
        <LazyAdminSkillFormSkill :show="showForm" text_confirm="save" @close="showForm = false" @saved="saved" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

// REMOVE
const SkillStore = useSkillStore();
const removeData = ref(null); // isi dengan data education
const showRemoveModal = ref(false);
const showsuccessModal = ref(false);
const filter = ref('');

onBeforeMount(async () => {
    await SkillStore.get();
});

const dataTable = computed(() => {
    // pastikan huruf lower
    const search = filter.value.toLowerCase();

    if (search != '') {
        return SkillStore.skills.filter(skill => {
            const company = skill.company.toLowerCase();
            return company.includes(search)
        });
    } else {
        // return semua data
        return SkillStore.skills;
    }
});


const handleRemove = async () => {
    try {
        const id = removeData.value.id;

        // process delete
        await SkillStore.delete(id);

        // success modal
        showsuccessModal.value = true;

        // hide modal
        showRemoveModal.value = false;

        // refresh data
        await SkillStore.get();
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
