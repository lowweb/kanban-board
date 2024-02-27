<script setup>
import { computed } from 'vue'
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
  // stateStore.toggleIsNewTaskEdit()
  boardStore.addNewTask()
}

</script>

<template>
  <div class="board">
    <BColumn
      v-for="column in boardStore.board"
      v-bind:key="column.id"
      :title="column.title"
      :titleColor="column.titleColor"
      @dragover.prevent
    >
      <BTask
        v-for="task in column.tasks"
        :key="task.id"
        :data="task.data"
        :taskId="task.id"
        :columnId="column.id"
        :draggable="!stateStore.taskEditeble"
      >
      </BTask>
      <UAddButton
        v-if="!(stateStore.taskEditeble && stateStore.activeColumnId === column.id)"
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
