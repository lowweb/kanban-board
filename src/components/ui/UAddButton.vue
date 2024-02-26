<script setup></script>
<template>
  <button class="add-button">Добавить</button>
</template>
<style lang="scss">
.add-button {
  border: none;
  background-color: transparent;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #3d86f4;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  &::before {
    content: '';
    background-image: url(@/assets/icn/icn-task-add.svg);
    width: 20px;
    height: 20px;
  }
}
</style>
