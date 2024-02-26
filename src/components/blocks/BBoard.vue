<script setup>
import BColumn from '@/components/blocks/BColumn.vue'
import BTask from '@/components/blocks/BTask.vue'
import UContextMenu from '../ui/UContextMenu.vue'
import { useBoardStore } from '@/stores/boardStore'
import { useStateStore } from '@/stores/stateStore'
const boardStore = useBoardStore()
const stateStore = useStateStore()
</script>

<template>
  <div class="board">
    <BColumn
      v-for="(column, columnIndex) in boardStore.board"
      v-bind:key="column.id"
      :title="column.title"
      :titleColor="column.titleColor"
    >
      <BTask
        v-for="(task, taskIndex) in column.tasks"
        :key="task.id"
        :data="task.data"
        :taskId="task.id"
      >
      </BTask>
    </BColumn>
    <UContextMenu
      v-if="stateStore.contextMenu.show"
      :x="stateStore.contextMenu.x"
      :y="stateStore.contextMenu.y"
    />
  </div>
</template>

<style lang="scss">
.board {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 8px;
  width: 100%;
}
</style>
