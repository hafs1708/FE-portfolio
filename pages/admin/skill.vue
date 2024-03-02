<template>
    <div>
        <div class="font-semibold mb-6 pb-2 border-b border-b-neutral flex items-center justify-between">
            <div class="flex items-center gap-2">
                <LucideWrench :size="26" /> S K I L L S
            </div>
            <button class="btn btn-neutral" @click="showForm = true; updateData = null">
                <LucidePlus :size="16" /> Add Skill
            </button>
        </div>

        <div class="flex gap-3">
            <input v-model="filter" type="text" placeholder="Search"
                class="input input-sm input-bordered input-primary w-full max-w-xs" />

            <!-- Category Selector -->
            <select v-model="selectedCategory" @change="filter = ''"
                class="select select-bordered select-sm w-full max-w-xs">
                <option value="all">All</option>
                <option v-for="cat in SkillStore.categories" :key="cat.id" :value="cat.id">{{ cat.title }}</option>
            </select>
        </div>

        <div class="overflow-x-auto max-lg:hidden">
            <table class="table table-zebra">
                <!-- head -->
                <thead>
                    <tr>
                        <th>SVG</th>
                        <th>Title</th>
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
                        <td class="font-semibold">{{ skill.title }}</td>
                        <td class="text-center text-xs">
                            <span
                                class="badge badge-sm badge-outline border-neutral/25 text-center font-semibold pb-px">
                                {{ skill.category.title }}
                            </span>
                        </td>
                        <td class="text-center">{{ skill._count.projects }}</td>
                        <td>
                            <div class="flex gap-2 justify-center">
                                <button @click="updateData = skill; showForm = true" class="btn btn-neutral">
                                    <LucidePencilLine :size="16" />
                                </button>
                                <button v-if="skill._count.projects == 0"
                                    @click="showRemoveModal = true; removeData = skill" class="btn btn-error">
                                    <LucideTrash2 :size="16" />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- MOBILE -->
        <div class="lg:hidden flex flex-col gap-3 sm:gap-4 pt-5">
            <div v-for="skill in dataTable" :key="skill.id" class="card bg-base-300 shadow-xl">
                <div class="card-body max-sm:p-4">
                    <div class="flex justify-between">
                        <div class="flex gap-4 items-center">
                            <div v-html="skill.svg" class="w-10 overflow-hidden"></div>
                            <div>
                                <td class="font-semibold">{{ skill.title }}</td>
                                <div class="text-sm">{{ skill.category.title }}</div>
                            </div>
                        </div>

                        <div class="dropdown dropdown-end">
                            <div tabindex="0" role="button" class="btn m-1">
                                <LucideMoreVertical :size="16" />
                            </div>
                            <ul tabindex="0"
                                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button @click="updateData = skill; showForm = true"
                                        class="btn btn-sm my-1 btn-success">
                                        <LucidePencilLine :size="16" />
                                        Edit
                                    </button>
                                </li>
                                <li>
                                    <button @click="showRemoveModal = true; removeData = skill"
                                        class="btn btn-sm btn-error my-1">
                                        <LucideTrash2 :size="16" />
                                        Remove
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <button
                        class="col-span-4 btn btn-neutral flex justify-between bg-base-300 shadow-lg shadow-green-500/50">
                        <div>Projects:</div>
                        <div class="font-normal">{{ skill._count.projects }}</div>
                    </button>
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

        <!-- SKILL FORM -->
        <AdminSkillFormSkill :data="updateData" :show="showForm" text_confirm="saved" @close="showForm = false"
            @saved="saved" />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const getData = async () => {
    await Promise.all([
        SkillStore.getCategories(),
        SkillStore.get()
    ]);
}

const SkillStore = useSkillStore();
onBeforeMount(async () => {
    await getData();
});

// REMOVE
const removeData = ref(null);
const showRemoveModal = ref(false);
const showsuccessModal = ref(false);

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

// CREATE FORM
const showForm = ref(false);
const updateData = ref(null);

// berhasil create eduaction
const saved = async () => {
    // tutup form
    showForm.value = false;

    // fetch ulang data education
    await getData();
}

// FILTER SELECTOR
const filter = ref('');
const selectedCategory = ref('all');

const dataTable = computed(() => {
    // pastikan huruf lower
    const search = filter.value.toLowerCase();
    const selectedCatID = selectedCategory.value;

    if (search != '') {
        return SkillStore.skills.filter(skill => {
            // pastikan huruf lower
            const title = skill.title.toLowerCase();

            if (selectedCatID == 'all') {
                return title.includes(search)
            } else {
                return title.includes(search) && skill.skillCategoryId == selectedCatID;
            }
        });
    } else {
        if (selectedCatID == 'all') {
            // return semua data
            return SkillStore.skills;
        } else {
            // return berdasarkan category id
            return SkillStore.skills.filter(skill => {
                return skill.skillCategoryId == selectedCatID;
            })
        }
    }
});
</script>
