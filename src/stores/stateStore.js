import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('stateStore', () => {
  const activeTaskId = ref()
  const activeColumnId = ref()
  const activeTaskData = ref()
  const activeColumnTitle = ref()
  const taskEditable = ref(false)
  const newTaskEditable = ref(false)

  const toggleTaskEditable = () => {
    taskEditable.value = !taskEditable.value
  }
  const toggleNewTaskEditable = () => {
    newTaskEditable.value = !newTaskEditable.value
  }
  const setActiveTaskId = (id) => {
    activeTaskId.value = id
  }
  const setActiveColumnId = (id) => {
    activeColumnId.value = id
  }
  const setActiveTaskData = (data) => {
    activeTaskData.value = data
  }
  const setActiveColumnTitle = (data) => {
    activeColumnTitle.value = data
  }

  return {
    // contextMenu,
    activeTaskId,
    activeColumnId,
    activeColumnTitle,
    activeTaskData,
    taskEditable,
    newTaskEditable,
    setActiveTaskData,
    setActiveTaskId,
    setActiveColumnId,
    toggleTaskEditable,
    toggleNewTaskEditable,
    setActiveColumnTitle
  }
})
