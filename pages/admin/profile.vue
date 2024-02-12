<template>
    <div>
        Halaman Profile
    </div>
    <div>
        Counter : {{ CounterStore.count }}
    </div>
    <button class="btn btn-primary " @click="to10">To 10</button>
</template>

<script setup>
definePageMeta({
    layout: 'admin'
});

const CounterStore = useCounterStore();

const to10 = () => {
    CounterStore.to10();
}
</script>
