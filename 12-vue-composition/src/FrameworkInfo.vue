<template>
  <div class="card">
    <p>Название: <strong>{{ name }}</strong></p>
    <p>Версия: <strong>{{ version }} ({{ doubleVersion }})</strong></p>

    <button class="btn warning" @click="changeToThree">Изменить на 3 версию</button>

    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import {computed, inject} from 'vue'

export default {
  props: ['name', 'version'],
  emits: ['change-version'],
  // computed: {
  //   doubleVersion() {
  //     return this.version * 2
  //   }
  // }
  setup(props, context) {
    const doubleVersion = computed(() => version.value * 2)

    function changeToThree() {
      context.emit('change-version', 3)
    }

    const name = inject('name')
    const version = inject('version')

    return {
      name,
      version,
      doubleVersion,
      changeToThree
    }
  }
}
</script>
