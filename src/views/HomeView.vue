<script setup>
import BBoard from '@/components/blocks/BBoard.vue'
import UDialog from '@/components/ui/UDialog.vue'
import UButton from '@/components/ui/UButton.vue'
import { useTooltipStore } from '@/stores/tooltipStore'
const tooltipStore = useTooltipStore()
import { useStateStore } from '@/stores/stateStore'
import { useDialogStore } from '@/stores/dialogStore'
import { useBoardStore } from '@/stores/boardStore'

const stateStore = useStateStore()
const dialogStore = useDialogStore()
const boardStore = useBoardStore()

const deleteTask = () => {
  boardStore.deleteTask()
  dialogStore.hideDialog()
  tooltipStore.showTooltip('Задача удалена из')
}
</script>

<template>
  <BBoard />
  <UDialog :show="dialogStore.isShown" @closeDialog="dialogStore.hideDialog()">
    <template #dtitle> Удалить задачу?</template>
    <template #dbody>{{ stateStore.activeTaskData }}</template>
    <template #dfooter>
      <UButton @click.stop="deleteTask">Удалить</UButton>
      <UButton @click.stop="dialogStore.hideDialog()">Отменить</UButton>
    </template>
  </UDialog>
</template>
