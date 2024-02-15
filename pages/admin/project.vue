<template>
    <div>
        Halaman Project
    </div>
    <div>
        Counter : {{ CounterStore.count }}
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const CounterStore = useCounterStore();
</script>
