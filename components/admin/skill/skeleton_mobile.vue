<template>
    <div class="flex flex-col gap-3 pt-5">
        <div v-for="n in 10" :key="n" class="card bg-base-100 shadow-xl">
            <div class="card-body max-sm:p-4">
                <div class="flex justify-between">
                    <div class="flex gap-3">
                        <div class="skeleton w-12 h-12 rounded"></div>
                        <div class="flex flex-col gap-1">
                            <div class="skeleton w-24 h-5"></div>
                            <div class="skeleton w-24 h-5"></div>
                        </div>
                    </div>
                    <div>
                        <div class="skeleton w-8 h-8 rounded"></div>
                    </div>
                </div>
                <div>
                    <div class="skeleton w-auto h-10"></div>
                </div>
            </div>
        </div>
    </div>
</template>