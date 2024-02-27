import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialogStore', () => {
  const isShown = ref(false)
  const showDialog = () => {
    isShown.value = true
  }
  const hideDialog = () => {
    isShown.value = false
  }
  return {
    isShown,
    showDialog,
    hideDialog
  }
})
