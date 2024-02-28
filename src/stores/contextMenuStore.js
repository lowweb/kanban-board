import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useStateStore } from './stateStore'

export const useContextMenuStore = defineStore('contexMenuStore', () => {
  const stateStore = useStateStore()

  const contextMenu = ref({ show: false, x: 0, y: 0 })
  const showContextMenu = (event, taskId, columnId, taskData, columnTitle) => {
    const el = event.target.getBoundingClientRect()
    contextMenu.value.show = true
    contextMenu.value.x = el.left
    contextMenu.value.y = el.top + 20
    stateStore.setActiveColumnId(columnId)
    stateStore.setActiveColumnTitle(columnTitle)
    stateStore.setActiveTaskId(taskId)
    stateStore.setActiveTaskData(taskData)
  }
  const hideContextMenu = () => {
    contextMenu.value.show = false
  }
  return {
    contextMenu,
    showContextMenu,
    hideContextMenu
  }
})
