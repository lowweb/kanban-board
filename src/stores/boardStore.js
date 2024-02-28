import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useStateStore } from './stateStore'

export const useBoardStore = defineStore('boardStore', () => {
  const stateStore = useStateStore()
  const board = ref([])
  //заглушка - фиктивный генератор id для заданий
  const maxId = ref(8)

  const getBoard = async () => {
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

  const addNewTask = (columnId, columnTitle) => {
    stateStore.setActiveColumnId(columnId)
    stateStore.setActiveColumnTitle(columnTitle)
    board.value
      .find((column) => column.id === stateStore.activeColumnId)
      .tasks.push({ id: maxId.value, data: '' })
    stateStore.setActiveTaskId(maxId.value++)
    stateStore.toggleTaskEditable()
    stateStore.toggleNewTaskEditable()
  }

  const saveTaskChanges = (data) => {
    board.value
      .find((column) => column.id === stateStore.activeColumnId)
      .tasks.find((task) => task.id === stateStore.activeTaskId).data = data
  }

  return {
    board,
    maxId,
    getBoard,
    deleteTask,
    addNewTask,
    saveTaskChanges
  }
})
