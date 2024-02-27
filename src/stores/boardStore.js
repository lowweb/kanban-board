import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useStateStore } from './stateStore'

export const useBoardStore = defineStore('boardStore', () => {
  const stateStore = useStateStore()
  const board = ref([])
  // заглышка для создание новых записей 
  const maxId = ref(8)
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
  const addNewTask = () => {
    if (!board.value.find((column) => column.id === stateStore.activeColumnId).hasOwnProperty("tasks")) {
      board.value.find((column) => column.id === stateStore.activeColumnId).tasks=[]
    }

  board.value.find((column) => column.id === stateStore.activeColumnId).tasks.push({'id': maxId.value, "data" : ""})
  stateStore.setActiveTaskId(maxId.value++)
  stateStore.toggleTaskEditeble()
  stateStore.toggleIsNewTaskEdit()
  }

  return {
    board,
    maxId,
    getBoard,
    deleteTask,
    addNewTask
  }
})
