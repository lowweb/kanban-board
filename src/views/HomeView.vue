<script setup>
import BBoard from '@/components/blocks/BBoard.vue'
import UDialog from '@/components/ui/UDialog.vue'
import UButton from '@/components/ui/UButton.vue'
import { useStateStore } from '@/stores/stateStore'
import { useDialogStore } from '@/stores/dialogStore'
import { useBoardStore } from '@/stores/boardStore'

const stateStore = useStateStore()
const dialogStore = useDialogStore()
const boardStore = useBoardStore()

const deleteTask = () => {
  boardStore.deleteTask()
  dialogStore.hideDialog()
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
