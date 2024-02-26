import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('stateStore', () => {
  const contextMenu = ref({ show: false, x: 0, y: 0 })
  const activeTaskId = ref()
  const taskEditeble = ref(false)
  const editText = ref()

  const showContextMenu = (el, id) => {
    contextMenu.value.show = true
    contextMenu.value.x = el.left
    contextMenu.value.y = el.top + 20
    setActiveTaskId(id)
  }
  const hideContextMenu = () => {
    contextMenu.value.show = false
    // toggleTaskEditeble()
  }
  const toggleTaskEditeble = () => {
    taskEditeble.value = !taskEditeble.value
  }
  const setActiveTaskId = (id) => {
    activeTaskId.value = id
  }

  return {
    contextMenu,
    activeTaskId,
    editText,
    showContextMenu,
    setActiveTaskId,
    hideContextMenu,
    toggleTaskEditeble,
    taskEditeble
  }
})
