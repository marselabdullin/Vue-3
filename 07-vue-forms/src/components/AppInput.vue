<template>
  <div class="form-control" :class="{invalid: error && !modelValue.length}">
    <label :for="id">{{ label }}</label>
    <input
        type="text"
        :id="id"
        :placeholder="placeholder"
        :value="modelValue"
        @input="change"
    >
    <small v-if="error && !modelValue.length">{{ error }}</small>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    label: String,
    placeholder: String,
    error: String
  },
  emits: ['update:modelValue'],
  data() {
    return {
      id: 'input-' + Math.random()
    }
  },
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>
