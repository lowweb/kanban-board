import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useStateStore } from './stateStore'

export const useContextMenuStore = defineStore('contextMenuStore', () => {
    const stateStore = useContextMenuStore()
    const menuButtonVisible = ref(true)

    const toggleMenuButtonVisible = () => {
        menuButtonVisible.value = !menuButtonVisible.value 
    }


    return {
        menuButtonVisible,                                                                            
        toggleMenuButtonVisible
    }
})