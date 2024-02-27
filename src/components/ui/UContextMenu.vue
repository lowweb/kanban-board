<script setup>
const props = defineProps({
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <ul class="contextmenu" :style="{ top: y + 'px', left: x + 'px' }">
    <li class="contextmenu__item" @click.stop="$emit('makeEdit')">
      <img src="@/assets/icn/icn-edit.svg" alt="edit" />
      Редактировать
    </li>
    <li class="contextmenu__item" @click.stop="$emit('deleteTask')">
      <img src="@/assets/icn/icn-trash.svg" alt="edit" />
      Удалить
    </li>
  </ul>
</template>

<style lang="scss">
.contextmenu {
  position: fixed;
  list-style: none;
  padding: 8px 0;
  background-color: #ffffff;
  z-index: 3;
  border: 1px solid #e3e5e8;
  border-radius: 4px;
  box-shadow:
    0px 8px 16px rgba(0, 0, 0, 0.06),
    0px 8px 8px rgba(0, 0, 0, 0.08);

  &__item {
    padding: 5px 10px;
    display: flex;
    gap: 8px;

    &:hover {
      background-color: #e1f1ff;
    }
  }
}
</style>
