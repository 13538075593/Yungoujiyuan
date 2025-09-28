import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    history: [] as number[]
  }),

  getters: {
    doubleCount: (state) => state.count * 2,
    isEven: (state) => state.count % 2 === 0
  },

  actions: {
    increment() {
      this.count++
      this.history.push(this.count)
    },
    
    decrement() {
      this.count--
      this.history.push(this.count)
    },
    
    reset() {
      this.count = 0
      this.history.push(this.count)
    },
    
    setCount(value: number) {
      this.count = value
      this.history.push(this.count)
    }
  }
})

