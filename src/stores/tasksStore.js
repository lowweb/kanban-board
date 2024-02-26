import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasksStore', ()=>{
  const tasks = ref([])

  const getTasks = async () => {
    // loader.value = true;
    try {
      const res = await fetch('../../src/api/tasks.json')
      const data = await res.json()
      tasks.value = data
    } catch (err) {
      console.log(err)
    }
  }

  return {
    tasks, 
    getTasks
  }
})