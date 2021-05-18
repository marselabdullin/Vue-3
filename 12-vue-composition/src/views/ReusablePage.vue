<template>
  <app-alert
      v-if="alert"
      title="Работаем с Composition"
      type="primary"
      @close="close"
  ></app-alert>

  <div class="card">
    <h1>Переиспользование</h1>

    <button class="btn primary" @click="toggle">{{alert ? 'Закрыть' : 'Показать'}} сообщение</button>
    <button class="btn" @click="navigate">Перейти на главную</button>
  </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router'
import AppAlert from '../AppAlert'
import {useAlert} from '../use/alert'

export default {
  components: {AppAlert},
  setup() {
    // const {alert, close, toggle} = useAlert()
    const router = useRouter()
    const route = useRoute()

    console.log(route.path)

    function navigate() {
      router.push('/')
    }

    return {
      navigate,
      // alert,
      // toggle,
      // close
      ...useAlert(true)
    }
  }
}
</script>
