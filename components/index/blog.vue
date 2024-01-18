<template>
    <div class="min-h-screen py-12" id="blog">
        <div class="rounded-2xl border border-neutral w-fit px-4 py-1 flex items-center gap-2">
            <LucideNewspaper :size="16" />
            <div class="uppercase text-sm font-light">BLOG</div>
        </div>
        <div class="flex flex-col gap-6 mt-10">
            <div class="text-4xl font-semibold">Latest Blog</div>
            <!-- LIST BLOG -->
            <div class="grid grid-cols-10 gap-3" v-for="m in 4" :key="m">
                <!-- IMAGE -->
                <div class="aspect-video bg-neutral col-span-3 rounded-lg"></div>
                <div class="col-span-7">
                    <div class="text-2xl font-semibold">Judul Blog</div>
                    <div class="font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus numquam quidem iste fuga ducimus
                        eveniet nisi temporibus asperiores ullam. Aliquam?
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
