<template>
    <div class="min-h-screen py-12 flex flex-col" id="about">
        <div class="rounded-2xl border border-neutral w-fit px-4 py-1 flex items-center gap-2">
            <LucideUserRound :size="16" />
            <div class="uppercase text-sm font-light">About</div>
        </div>
        <div class="flex flex-col gap-12 mt-10 grow">
            <div class="text-6xl leading-tight">Say Hi from <span class="text-accent">Drake</span>, Webflow Designer and
                Developer</div>
            <div class="font-light">
                Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work for agencies,
                consulted for startups, and collaborated with talented people to create digital products for both business
                and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone
                design problem at a time.
            </div>
            <div class="flex items-end gap-20 grow pb-20">
                <div>
                    <div class="text-4xl text-accent font-bold">10+</div>
                    <div>YEARS OF <br> EXPERIENCE</div>
                </div>
                <div>
                    <div class="text-4xl text-accent font-bold">10+</div>
                    <div>PROJECT <br> COMPLETED</div>
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