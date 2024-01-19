<template>
    <div class="min-h-screen py-12" id="project">
        <div class="rounded-2xl border border-neutral w-fit px-4 py-1 flex items-center gap-2">
            <LucideUserRound :size="16" />
            <div class="uppercase text-sm font-light">Project</div>
        </div>
        <div class="mt-10">
            <div class="text-4xl font-semibold">Latest Project</div>
            <!-- LIST PROJECT -->
            <div class="grid grid-cols-2 gap-6 mt-8">
                <!-- PROJECT ITEM -->
                <div class="col-span-2 md:col-span-1 group" v-for="j in 4" :key="j">
                    <div class="flex justify-between items-end">
                        <div class="font-semibold text-xl text-accent group-hover:text-accent">Judul Project</div>
                        <div>20 Jan 2020 - Present</div>
                    </div>
                    <!-- IMAGE -->
                    <div class="aspect-video bg-neutral rounded-xl group-hover:scale-110 duration-300"></div>
                    <!-- SKILL -->
                    <div class="flex flex-nowrap overflow-hidden gap-2 mt-2">
                        <div v-for="m in 10" :key="m" class="border border-neutral rounded-xl px-3 text-nowrap">Skill
                            {{ m
                            }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>
