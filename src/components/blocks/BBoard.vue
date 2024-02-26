<script setup>
import BColumn from '@/components/blocks/BColumn.vue'
import BTask from '@/components/blocks/BTask.vue'
import UAddButton from '../ui/UAddButton.vue'
import UContextMenu from '../ui/UContextMenu.vue'
import { useBoardStore } from '@/stores/boardStore'
import { useStateStore } from '@/stores/stateStore'
const boardStore = useBoardStore()
const stateStore = useStateStore()

const onAdd = (columnId) => {
  stateStore.setActiveColumnId(columnId)
  stateStore.toggleIsNewTaskEdit()
}
</script>

<template>
  <div class="board">
    <BColumn
      v-for="(column, columnIndex) in boardStore.board"
      v-bind:key="column.id"
      :title="column.title"
      :titleColor="column.titleColor"
      @dragover.prevent
    >
      <BTask
        v-for="(task, taskIndex) in column.tasks"
        :key="task.id"
        :data="task.data"
        :taskId="task.id"
        :columnId="column.id"
        draggable="true"
      >
      </BTask>
      <BTask
        v-if="stateStore.isNewTaskEdit && column.id === stateStore.activeColumnId"
        :taskId="12321"
        :columnId="column.id"
        draggable="true"
      >
      </BTask>
      <UAddButton
        v-if="!stateStore.isNewTaskEdit && column.id != stateStore.activeColumnId"
        @click="onAdd(column.id)"
      />
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
