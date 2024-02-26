<script setup>
const model = defineModel({})
const props = defineProps({
  readonly: {
    type: Boolean,
    default: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  refvalue: {
    type: String
  }
})
</script>

<template>
  <div class="text-area">
    <textarea
      oninput="this.parentNode.dataset.value = this.value"
      rows="1"
      v-model="model"
      :readonly="readonly"
      ref="textedit"
      :placeholder="placeholder"
    ></textarea>
  </div>
</template>

<style lang="scss">
.text-area {
  display: inline-grid;

  &::after,
  textarea {
    width: auto;
    min-width: 1em;
    grid-area: 1 / 2;
    font: inherit;
    resize: none;
    background: none;
    appearance: none;
    border: none;
    overflow: hidden;
    outline: none;
  }

  &::after {
    content: attr(data-value) ' ';
    visibility: hidden;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}
</style>
