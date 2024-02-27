<script setup>
import BColumn from '@/components/blocks/BColumn.vue'
import BTask from '@/components/blocks/BTask.vue'
import UContextMenu from '../ui/UContextMenu.vue'
import UIconButton from '../ui/UIconButton.vue'
import UToolTip from '../ui/UToolTip.vue'
import { useBoardStore } from '@/stores/boardStore'
import { useStateStore } from '@/stores/stateStore'
import { useDialogStore } from '@/stores/dialogStore'
const boardStore = useBoardStore()
const stateStore = useStateStore()
const dialogStore = useDialogStore()
import InlineSvg from 'vue-inline-svg'

const addNewTask = (columnId) => {
  stateStore.setActiveColumnId(columnId)
  boardStore.addNewTask()
}
const deleteTask = () => {
  dialogStore.showDialog()
  stateStore.hideContextMenu()
}
const makeEdit = () => {
  stateStore.toggleTaskEditeble()
  stateStore.hideContextMenu()
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
      <UIconButton
        class="add-button"
        v-if="!(stateStore.taskEditeble && stateStore.activeColumnId === column.id)"
        @click="addNewTask(column.id)"
      >
        <template #iconButton>
          <inline-svg src="../../src/assets/icn/icn-task-add.svg" />
        </template>
        <template #textButton> Добавить </template>
      </UIconButton>
    </BColumn>
  </div>
  <UToolTip>
    <template #tooltipTitle>frefefref</template>
    <template #tooltipBody>{{ stateStore.activeTaskData }}</template>
  </UToolTip>
  <UContextMenu
    v-if="stateStore.contextMenu.show"
    :x="stateStore.contextMenu.x"
    :y="stateStore.contextMenu.y"
    @deleteTask="deleteTask"
    @makeEdit="makeEdit"
  />
</template>

<style lang="scss">
.board {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 8px;
  width: 100%;
}
</style>
