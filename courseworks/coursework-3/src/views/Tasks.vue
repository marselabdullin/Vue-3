<template>
  <h1 class="text-white center" v-if="!tasks.length">Задач пока нет</h1>
  <div v-else>
    <h3 class="text-white">Всего активных задач: {{activeTasks}}</h3>
    <div class="card" v-for="task in tasks" :key="task.id">
      <h2 class="card-title">
        {{task.title}}
        <AppStatus :type="task.status"/>
      </h2>
      <p>
        <strong>
          <small>
            {{ new Date(task.date).toLocaleDateString() }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="toTask(task.id)">Посмотреть</button>
    </div>
  </div>
</template>

<script>
import AppStatus from '../components/AppStatus'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {computed} from 'vue'

export default {
  components: {AppStatus},
  setup() {
    const store = useStore()
    const router = useRouter()

    const tasks = computed(() => store.getters.tasks)
    const activeTasks = computed(() => store.getters.activeTasks)

    function toTask(id) {
      router.push('/task/' + id)
    }

    return {
      tasks,
      activeTasks,
      toTask
    }
  }
}
</script>
