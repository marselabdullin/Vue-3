<template>
  <div class="container">
    <app-alert
        v-if="alert"
        text="Сообщение"
        title="Внимание!"
        type="danger"
        closable
        @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{ alert ? 'Скрыть' : 'Показать' }} сообщение</button>
    </div>

    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from './AppAlert'
import AppBlock from '@/components/AppBlock'
import alertMixin from '@/alertMixin'

export default {
  mixins: [alertMixin],
  components: {AppBlock, AppAlert}
}
</script>

