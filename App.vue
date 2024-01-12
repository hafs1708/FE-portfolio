<template>
    <h1>Ninja Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    <p v-if="showResults">Reaction Time: {{ score }} ms</p>
</template>

<script>
import Block from './components/Block.vue'

export default {
    name: 'App',
    components: { Block },
    data() {
        return {
            isPlaying: false,
            delay: null,
            score: null,
            showResults: false
        }
    },
    methods: {
        start() {
            this.delay = 2000 + Math.random() * 5000
            this.isPlaying = true
        },
        endGame(reactionTime) {
            this.score = reactionTime
            this.isPlaying = false,
            this.showResults = true
        }
    }
}
</script>

<style>
#app {
    font-family: Arial;
    text-align: center;
    color: #444;
    margin-top: 60px;
}
</style>