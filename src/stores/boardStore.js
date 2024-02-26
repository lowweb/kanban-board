import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBoardStore = defineStore('boardStore', () => {
  const board = ref([])

  const getBoard = async () => {
    // loader.value = true;
    try {
      const res = await fetch('../../src/api/board.json')
      const data = await res.json()
      board.value = data
    } catch (err) {
      console.log(err)
    }
  }

  return {
    board,
    getBoard
  }
})
