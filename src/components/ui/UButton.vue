<script setup></script>

<template>
  <span class="button">
    <slot></slot>
  </span>
</template>

<style lang="scss">
.button {
  padding: 9px 75px;
  border: 1px solid #c4cad4;
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #1c2530;

  &:hover {
    background-color: #c3cad3;
  }
}
</style>
