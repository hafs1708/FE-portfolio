<template>
    <div class="min-h-screen py-12" id="blog">
        <div class="rounded-2xl border border-neutral w-fit px-4 py-1 flex items-center gap-2">
            <LucideNewspaper :size="16" />
            <div class="uppercase text-sm font-light">Blog</div>
        </div>
        <div class="flex flex-col gap-6 mt-10">
            <div class="text-4xl font-semibold">Latest Blog</div>
            <!-- LIST BLOG -->
            <div class="grid grid-cols-10 gap-3 group hover:bg-cyan-950 p-2 rounded-xl" v-for="m in 4" :key="m">
                <!-- IMAGE -->
                <div class="aspect-video bg-neutral col-span-4 xl:col-span-3 rounded-lg group-hover:scale-105 duration-300">
                </div>
                <div class="col-span-6 xl:col-span-7">
                    <div class="text-2xl font-semibold group-hover:text-accent">Judul Blog</div>
                    <div class="font-light line-clamp-2 xl:line-clamp-3">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt error consequuntur fuga voluptate
                        corrupti maiores architecto quia doloribus est, vitae dolor eaque facere atque, voluptatem
                        doloremque modi aliquam animi quas perspiciatis amet distinctio expedita porro numquam! Rerum maxime
                        laborum quos illum corrupti est dignissimos magni atque incidunt ipsa ipsum id modi similique nemo,
                        iste saepe voluptatem illo debitis? Consequuntur, quidem! Dolore laudantium, incidunt maxime, quae
                        nesciunt, necessitatibus ullam dolores nobis sequi tenetur tempora magnam perspiciatis accusantium
                        quas rerum soluta? Qui, quasi excepturi totam nesciunt rem delectus sapiente, sed, dicta ullam
                        placeat quibusdam laudantium exercitationem dolorum? Voluptatum esse illo quisquam eum?
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
