<template>
  <div class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isValid" @click="createTask">Создать</button>
  </div>
</template>


<script>
import {computed, reactive, toRefs} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const task = reactive({
      title: '',
      date: null,
      description: '',
    })

    function createTask() {
      store.commit('createTask', {
        id: Date.now(),
        status: new Date(task.date) < new Date().setHours(0,0,0,0) ? 'cancel' : 'active',
        ...task
      })

      router.push('/')
    }

    const isValid = computed(() => {
      return task.title && task.date && task.description
    })

    return {
      ...toRefs(task),
      isValid,
      createTask
    }
  }
}
</script>
