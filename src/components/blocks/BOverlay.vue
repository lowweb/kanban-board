<script setup></script>
<template>
  <div class="overlay" />
</template>
<style lang="scss">
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
