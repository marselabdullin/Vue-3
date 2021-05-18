<template>
  <div class="card" v-if="task">
    <h2>{{task.title}}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="task.status"/>
    </p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{task.description}}</p>
    <div>
      <button class="btn" @click="changeStatus('progress')">Взять в работу</button>
      <button class="btn primary" @click="changeStatus('done')">Завершить</button>
      <button class="btn danger" @click="changeStatus('cancel')">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{id}}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
  components: {AppStatus},
  setup() {
    const store = useStore()
    const route = useRoute()
    const id = +route.params.id

    const task = computed(() => {
      return store.getters.tasks.find((i) => i.id === id)
    })

    function changeStatus(status) {
      store.commit('changeStatus', {id, status})
    }

    return {
      task,
      id,
      changeStatus
    }
  }
}
</script>
