<template>
    <h1>Ninja Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    <Result v-if="showResult" :score="score" />
</template>

<script>
// Challenge
//  - when the game ends, show the results component
//  - output the score inside the results component

import Block from './components/Block.vue'
import Result from './components/Result.vue'

export default {
    name: 'App',
    components: { Block, Result },
    data() {
        return {
            isPlaying: false,
            delay: null,
            score: null,
            showResult: false
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
            this.showResult = true
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
button {
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
}
</style>