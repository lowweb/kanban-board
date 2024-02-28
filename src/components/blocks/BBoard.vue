<script setup>
import { ref } from 'vue'
import BColumn from '@/components/blocks/BColumn.vue'
import BTask from '@/components/blocks/BTask.vue'
import UContextMenu from '../ui/UContextMenu.vue'
import UIconButton from '../ui/UIconButton.vue'
import UToolTip from '../ui/UToolTip.vue'
import { useBoardStore } from '@/stores/boardStore'
import { useStateStore } from '@/stores/stateStore'
import { useDialogStore } from '@/stores/dialogStore'
import { useTooltipStore } from '@/stores/tooltipStore'
const boardStore = useBoardStore()
const stateStore = useStateStore()
const dialogStore = useDialogStore()
const tooltipStore = useTooltipStore()
import InlineSvg from 'vue-inline-svg'
import draggable from 'vuedraggable'

const deleteTask = () => {
  dialogStore.showDialog()
  stateStore.hideContextMenu()
}

const makeEdit = () => {
  stateStore.toggleTaskEditable()
  stateStore.hideContextMenu()
}

const onEndDrag = (evt) => {
  stateStore.setActiveColumnTitle(evt.to.dataset.column)
  stateStore.setActiveTaskData(evt.item.firstChild.dataset.value)
  tooltipStore.showTooltip('Задача перенесенна в ')
}
</script>

<template>
  <div class="board">
    <BColumn
      v-for="column in boardStore.board"
      v-bind:key="column.id"
      :title="column.title"
      :titleColor="column.titleColor"
    >
      <draggable
        v-model="column.tasks"
        group="tasks"
        item-key="id"
        class="column__body"
        :data-column="column.title"
        @end="onEndDrag"
      >
        <template #item="{ element: task }">
          <BTask
            :key="task.id"
            :data="task.data"
            :taskId="task.id"
            :columnId="column.id"
            :columnTitle="column.title"
          >
          </BTask>
        </template>
        <template #footer>
          <UIconButton
            class="add-button"
            v-if="!(stateStore.taskEditable && stateStore.activeColumnId === column.id)"
            @click="boardStore.addNewTask(column.id, column.title)"
          >
            <template #iconButton>
              <inline-svg src="../../src/assets/icn/icn-task-add.svg" />
            </template>
            <template #textButton> Добавить </template>
          </UIconButton>
        </template>
      </draggable>
    </BColumn>
  </div>
  <UToolTip :isshow="tooltipStore.isShown" @closeTooltip="tooltipStore.hideTooltip()">
    <template #tooltipTitle>{{
      tooltipStore.actionName + ' ' + stateStore.activeColumnTitle
    }}</template>
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
