<script setup>
import InlineSvg from 'vue-inline-svg'
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <div class="dialog" v-if="show">
    <div class="dialog__content">
      <button @click.stop="$emit('closeDialog')" class="dialog__closeButton">
        <inline-svg src="../../src/assets/icn/icn-close.svg" />
      </button>
      <h5 class="dialog__title">
        <slot name="dtitle"></slot>
      </h5>
      <slot name="dbody"></slot>
      <div class="dialog__footer">
        <slot name="dfooter"></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  z-index: 5;
  &__closeButton {
    width: 24px;
    height: 24px;
    display: flex;
    border: none;
    padding: 0;
    background-color: #ffffff;
    position: absolute;
    right: 16px;
    top: 16px;

    &:hover path {
      stroke: tomato;
    }
  }
  &__content {
    position: relative;
    margin: auto;
    display: flex;
    padding: 24px 40px 40px 40px;
    gap: 24px;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 8px;
    color: #1c2530;
    max-width: 527px;
    box-shadow:
      0px 32px 48px rgba(0, 0, 0, 0.16),
      0px 16px 32px rgba(0, 0, 0, 0.1);
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-align: left;
  }

  &__footer {
    display: flex;
    gap: 24px;
  }
}
</style>
