<template>
    <div v-if="showBooks">
        {{ title }} - {{ author }} - {{ age }}
    </div>
    <button @click="toggleShowBooks">
        <span v-if="showBooks">Hide Books</span>
        <span v-else>Show Books</span>
    </button>
    <!-- <button @click="age++">Increase age</button>
    <button @click="age--">Decrease age</button>
    <div @click="changeTitle('Oathbringer')">Change book title</div> -->
</template>

<script>
export default {
    data() {
        return {
            showBooks: true,
            title: "The Final Empire",
            author: "Fairuz Ad-Dailamy",
            age: 25
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
}
</script>

<style lang="scss" scoped>

</style>