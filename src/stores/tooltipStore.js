import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTooltipStore = defineStore('tooltipStore', () => {
  const isShown = ref(false)
  const actionName = ref()
  const showTooltip = (name) => {
    setActionName(name)
    isShown.value = true
    setTimeout(() => hideTooltip(), 3000)
  }
  const hideTooltip = () => {
    isShown.value = false
  }

  const setActionName = (name) => {
    actionName.value = name
  }
  return {
    isShown,
    showTooltip,
    hideTooltip,
    actionName,
    setActionName
  }
})
