<template>
  <app-loader v-if="loading"></app-loader>
  <p v-else-if="!comments.length">
    <button @click="getComments" class="btn primary">Загрузить комментарии</button>
  </p>
  <div class="card" v-else>
    <h2>Комментарии</h2>
    <ul class="list">
      <li class="list-item" v-for="comment in comments" :key="comment.id">
        <div>
          <p><strong>{{ comment.email }}</strong></p>
          <small>{{ comment.body }}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import AppLoader from '@/components/AppLoader'

export default {
  name: 'AppComments',
  components: {AppLoader},
  data() {
    return {
      comments: [],
      loading: false
    }
  },
  methods: {
    async getComments() {
      this.loading = true
      try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=42')

        this.comments = data
        this.loading = false
      } catch (e) {
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>

</style>
