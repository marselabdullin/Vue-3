<template>
  <button :class="`btn ${color}`" @click="$emit('action')">
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    color: {
      type: String,
      default: '',
      validator(value) {
        return ['', 'primary', 'danger'].includes(value)
      }
    }
  },
  emits: ['action']
}
</script>

<style scoped>

</style>
