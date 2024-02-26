import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useStateStore } from './stateStore'

export const useBoardStore = defineStore('boardStore', () => {
  const stateStore = useStateStore()
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

  const deleteTask = () => {
    const newElements = board.value
      .find((column) => column.id === stateStore.activeColumnId)
      .tasks.filter((task) => task.id != stateStore.activeTaskId)
    board.value.find((column) => column.id === stateStore.activeColumnId).tasks = newElements
  }

  return {
    board,
    getBoard,
    deleteTask
  }
})
