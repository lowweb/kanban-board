<script setup>
import { ref, computed } from 'vue'
import { useStateStore } from '@/stores/stateStore'
const stateStore = useStateStore()
import UMenuButton from '../ui/UMenuButton.vue'
import UClearButton from '../ui/UClearButton.vue'
import USaveButton from '../ui/USaveButton.vue'
import BOverlay from './BOverlay.vue'
import UTextArea from '../ui/UTextArea.vue'

const props = defineProps({
  data: {
    type: String,
    default: () => ''
  },
  taskId: {
    type: Number,
    required: true
  },
  columnId: {
    type: Number,
    required: true
  }
})
const textAreaDataValue = ref(props.data)

const isEditebleAndEquilTask = computed(
  () => stateStore.taskEditeble && props.taskId === stateStore.activeTaskId
)
const showContextMenu = (event, taskId, columnId) => {
  stateStore.showContextMenu(event.target.getBoundingClientRect(), taskId, columnId)
}
const hideContextMenu = () => {
  stateStore.hideContextMenu()
}

const saveTaskChanges = () => {
  stateStore.toggleTaskEditeble()
}

const clearTaskDataValue = () => {
  textAreaDataValue.value = ''
}
</script>

<template>
  <div class="task" :class="{ 'task--edit': isEditebleAndEquilTask }">
    <UTextArea
      v-model="textAreaDataValue"
      :data-value="textAreaDataValue"
      :readonly="!stateStore.taskEditeble"
      placeholder="Введите текст..."
    />
    <div class="task__button">
      <UMenuButton
        class="task__menu"
        @click.stop="showContextMenu($event, taskId, columnId)"
        v-if="!stateStore.taskEditeble"
      />
      <UClearButton v-if="isEditebleAndEquilTask" @click.stop="clearTaskDataValue" />
      <USaveButton v-if="isEditebleAndEquilTask" @click.stop="saveTaskChanges" />
    </div>

    <BOverlay @click="hideContextMenu" v-if="stateStore.contextMenu.show" />
  </div>
</template>

<style lang="scss">
.task {
  display: flex;
  position: relative;
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  padding: 8px 4px 8px 8px;
  border-radius: 4px;
  border: 1px solid #e3e5e8;
  height: fit-content;
  background: #ffffff;

  &--edit {
    border: 1px solid #3d86f4;
  }

  &__data {
    display: inline-block;
    word-wrap: break-word;
    flex: 0 1 auto;
    width: calc(100% - 25px);
  }
  &:last-child {
    margin-bottom: 8px;
  }

  &:focus {
    outline: none;
    box-shadow:
      0px 8px 16px rgba(0, 0, 0, 0.06),
      0px 8px 8px rgba(0, 0, 0, 0.08);
  }
  &:hover {
    outline: none;
    box-shadow:
      0px 8px 16px rgba(0, 0, 0, 0.06),
      0px 8px 8px rgba(0, 0, 0, 0.08);
  }

  &__button {
    // position: absolute;
    // right: 4px;
    // top: 4px;
    margin-left: auto;
    display: flex;
    flex-direction: column;
  }
}
</style>
