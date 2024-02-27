<script setup>
import { ref, computed } from 'vue'
import { useStateStore } from '@/stores/stateStore'
const stateStore = useStateStore()
import BOverlay from './BOverlay.vue'
import UTextArea from '../ui/UTextArea.vue'
import UIconButton from '../ui/UIconButton.vue'
import InlineSvg from 'vue-inline-svg'

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
const showContextMenu = (event, taskId, columnId, taskData) => {
  stateStore.showContextMenu(event.target.getBoundingClientRect(), taskId, columnId, taskData)
}
const hideContextMenu = () => {
  stateStore.hideContextMenu()
}

const saveTaskChanges = () => {
  stateStore.toggleTaskEditeble()
  stateStore.setActiveTaskData(textAreaDataValue.value)
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
      <UIconButton
        class="menu-button"
        @click.stop="showContextMenu($event, taskId, columnId, data)"
        v-if="!isEditebleAndEquilTask"
      >
        <template #iconButton>
          <inline-svg src="../../src/assets/icn/icn-submenu.svg" />
        </template>
      </UIconButton>
      <UIconButton v-if="isEditebleAndEquilTask" @click.stop="clearTaskDataValue">
        <template #iconButton>
          <inline-svg src="../../src/assets/icn/icn-task-del.svg" />
        </template>
      </UIconButton>
      <UIconButton v-if="isEditebleAndEquilTask" @click.stop="saveTaskChanges">
        <template #iconButton>
          <inline-svg src="../../src/assets/icn/icn-task-save.svg" />
        </template>
      </UIconButton>
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
