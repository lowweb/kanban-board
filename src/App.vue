<script setup>
import { onMounted } from 'vue'
import { useBoardStore } from '@/stores/boardStore'
const boardStore = useBoardStore()
onMounted(() => {
  boardStore.getBoard()
})
</script>

<template>
  <main class="page__main">
    <RouterView></RouterView>
  </main>
</template>

<style scoped lang="scss"></style>
