<template>
    <div class="min-h-screen flex">
        <div class="bg-slate-600 min-h-screen grow grid grid-cols-10">
            <div class="col-span-10 md:col-span-3 min-h-screen bg-orange-200">
                <div class="md:fixed">content 1 fixed</div>
            </div>
            <div class="col-span-10 md:col-span-7 bg-orange-600">
                <div class="min-h-screen bg-lime-200">section 1</div>
                <div class="min-h-screen bg-lime-400">section 2</div>
                <div class="min-h-screen bg-lime-600">section 3</div>
            </div>
        </div>
        <div class="bg-slate-300 min-h-screen w-28 flex-none max-md:hidden">
            <div class="fixed">ini sidebar</div>
        </div>
    
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>