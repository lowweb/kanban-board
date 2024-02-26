<script setup>
const props = defineProps({
  title: {
    type: String,
    default: () => ''
  },
  titleColor: {
    type: String,
    default: () => '#F53D5C'
  }
})
</script>

<template>
  <div class="column">
    <div class="column__title" :style="`--title-color: ${titleColor}`">{{ title }}</div>
    <div class="column__body">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.column {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background-color: var(--color-grey);
  min-width: 177px;
  border-radius: 8px;

  &__title {
    padding: 7px 32px;
    height: 32px;
    background-color: tomato;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    background-color: var(--title-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__body {
    padding: 8px 16px 0px 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: scroll;
  }
}
</style>
