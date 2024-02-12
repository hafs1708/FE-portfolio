import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {

    // LATIHAN STATE MANAGEMENTWITH PINIA
    state: () => ({
        count: 0
    }),
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        to10() {
            this.count = 10
        }
    },
})