<template>
    <div>
        <div class="font-semibold mb-6 border-b border-b-neutral">E D U C A T I O N</div>

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
                    </tr>
                </thead>
                <tbody>
                    <!-- row 1 -->
                    <tr v-for="edu in dataTable" :key="edu.id">
                        <th>{{ edu.id }}</th>
                        <th>{{ edu.institutionName }}</th>
                        <th class="text-center">{{ edu.startYear }} - {{ edu.endYear }}</th>
                        <th class="text-center">{{ edu.major }}</th>
                        <th class="text-center">{{ edu.degree }}</th>
                    </tr>
                </tbody>
            </table>
        </div>
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
    console.log(EduStore.educations);
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

</script>
