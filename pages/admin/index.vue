<template>
    <div>
        Halaman Dashboard
    </div>
    <div>
        Counter : {{ CounterStore.count }}
        <div class="flex gap-4">
            <button class="btn btn-primary " @click="CounterStore.increment">Add Count</button>
            <button class="btn btn-primary " @click="CounterStore.decrement">Dec Count</button>
        </div>
    </div>

    <div>
        Name {{ AuthStore.user.name }}
    </div>
    <div>
        Email {{ AuthStore.user.email }}
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'admin',
    middleware: ['auth']
});

const CounterStore = useCounterStore();
const AuthStore = useAuthStore();

AuthStore.getUser();
</script>
