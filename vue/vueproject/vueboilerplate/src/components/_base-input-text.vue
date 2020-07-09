<script>
export default {
  inheritAttrs: false,
  model: {
    event: 'update',
  },
  props: {
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return [
          'email',
          'number',
          'password',
          'search',
          'tel',
          'text',
          'url',
        ].includes(value)
      },
    },
  },
}
</script>

<template>
  <input
    :type="type"
    :class="$style.input"
    v-bind="$attrs"
    @input="$emit('update', $event.target.value)"
    v-on="$listeners"
  />
</template>

<style lang="scss" module>
@import '@design';
.input {
  @extend %typography-small;

  display: block;
  width: 100%;
  padding: $size-input-padding-vertical $size-input-padding-horizontal;
  margin-bottom: $size-grid-padding;
  line-height: 1;
  border: $size-input-border solid $color-input-border;
  border-radius: $size-input-border-radius;
}
</style>
