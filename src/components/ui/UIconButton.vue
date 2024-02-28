<script setup></script>

<template>
  <button class="icon-button">
    <slot name="iconButton"></slot>
    <slot name="textButton"></slot>
  </button>
</template>

<style lang="scss">
.icon-button {
  border: none;
  background-color: transparent;
  display: flex;
  padding: 0;
  align-items: center;
}
.menu-button {
  z-index: 3;
  height: 12px;
  &:hover path {
    stroke: var(--color-dark-blue);
  }
}

.add-button {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: var(--color-dark-blue);
  cursor: pointer;
  gap: 8px;
}
</style>
