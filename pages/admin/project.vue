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
    layout: 'admin'
});

const CounterStore = useCounterStore();
</script>
