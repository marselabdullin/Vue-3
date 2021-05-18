<template>
  <app-loader v-if="loading"></app-loader>

  <app-page v-else-if="request" title="Заявка" back>
    <p><strong>Имя владельца</strong>: {{ request.fio }}</p>
    <p><strong>Телефон</strong>: {{ request.phone }}</p>
    <p><strong>Сумма</strong>: {{ currency(request.amount) }}</p>
    <p><strong>Статус</strong>:
      <app-status :type="request.status"></app-status>
    </p>

    <div class="form-control">
      <label for="status">Статус</label>
      <select name="status" id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

    <button class="btn danger" @click="remove">Удалить</button>
    <button class="btn primary" @click="update" v-if="hasChanges">Обновить</button>
  </app-page>

  <h3 v-else class="text-center text-white">
    Заявки с ID = {{ id }} нет.
  </h3>
</template>

<script>
import AppPage from '@/components/ui/AppPage'
import {useRoute, useRouter} from 'vue-router'
import {computed, onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import AppLoader from '@/components/ui/AppLoader'
import AppStatus from '@/components/ui/AppStatus'
import {currency} from '@/utils/currency-formatter'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    const loading = ref(false)
    const request = ref()
    const status = ref()
    const id = route.params.id

    onMounted(async () => {
      loading.value = true

      request.value = await store.dispatch('request/loadById', id)
      status.value = request.value.status

      loading.value = false
    })

    const hasChanges = computed(() => request.value.status !== status.value)

    const remove = async () => {
      await store.dispatch('request/remove', id)
      router.push('/')
    }

    const update = async () => {
      await store.dispatch('request/update', {...request.value, status: status.value, id})
      request.value.status = status.value
    }

    return {
      loading,
      request,
      id,
      status,
      hasChanges,
      currency,
      remove,
      update
    }
  },
  components: {AppStatus, AppLoader, AppPage}
}
</script>
