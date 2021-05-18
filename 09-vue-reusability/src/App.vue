<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n('app.title') }}</h2>

      <button class="btn" @click="changeLang">{{ $i18n('app.changeLngBtn') }}</button>
      <button class="btn primary" @click="modal = true">
        Открыть модальное окно
      </button>
      <teleport to="body">
        <app-modal v-if="modal" @close="modal = false"></app-modal>
      </teleport>
    </div>
  </div>
</template>

<script>
import AppModal from '@/components/AppModal'

export default {
  components: {AppModal},
  inject: ['changeI18n'],
  data() {
    return {
      modal: false
    }
  },
  methods: {
    changeLang() {
      this.changeI18n()
      this.$forceUpdate()
    }
  }
}
</script>

