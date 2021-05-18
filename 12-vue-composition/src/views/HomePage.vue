<template>
  <app-alert
      v-if="alert"
      title="Работаем с Composition"
      type="danger"
      @close="close"
  ></app-alert>

  <div class="card">
    <h1>Vue Composition Api</h1>
    <small>data, methods, computed, watch</small>

    <div class="form-control">
      <!--        <input type="text" ref="textInput">-->
      <input type="text" v-model="firstName">
    </div>

    <button class="btn" @click="change">Изменить</button>

    <button class="btn danger" @click="toggle">{{alert ? 'Закрыть' : 'Показать'}} сообщение</button>
  </div>

  <framework-info
      @change-version="changeVersion"
  >
    <template #footer>
      This is footer
    </template>
  </framework-info>
</template>

<script>
import FrameworkInfo from '../FrameworkInfo'
import AppAlert from '../AppAlert'

import {
  ref,
  reactive,
  toRefs,
  isRef,
  isReactive,
  computed,
  watch,
  provide,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'
import {useAlert} from '../use/alert'

export default {
  setup() {
    const {alert, close, toggle} = useAlert()

    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')

    // onBeforeMount(() => {
    //   console.log('onBeforeMount')
    // })

    // onMounted(() => {
    //   console.log('onMounted')
    // })

    // console.log(isRef(name)) // true
    // console.log(isRef(name.value)) // false

    // const framework = reactive({
    //   name: 'VueJS',
    //   version: 3
    // })

    // console.log(isReactive(framework)) // true
    // console.log(isReactive(framework.name)) // false

    // const doubleVersion = computed(() => version.value * 2)

    // watch(doubleVersion, (newValue, oldValue) => {
    //   console.log(newValue)
    //   console.log(oldValue)
    // })

    // watch([doubleVersion, name], (newValues, oldValues) => {
    //   console.log(newValue[0])
    //   console.log(oldValue[0])
    // })

    function changeInfo() {
      name.value = 'Vue JS!'
      version.value = 4

      // framework.name = 'Vue JS!'
      // framework.version = 4

      // console.log(textInput.value.value)
    }

    function changeVersion(value) {
      version.value = value
    }

    provide('name', name)
    provide('version', version)

    return {
      textInput,
      firstName,

      // doubleVersion,

      // framework,
      // ...toRefs(framework),

      change: changeInfo,
      changeVersion,

      alert, close, toggle
    }
  },
  components: {FrameworkInfo, AppAlert}
}
</script>
