<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: <strong>{{ openRate }}</strong> | Прочитано: <strong>{{ readRate }}</strong></span>
    </div>

    <app-news
      v-for="item in news"
      :title="item.title"
      :key="item.id"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @unread-news="unreadNews"
    ></app-news>
  </div>
</template>

<script>
import AppNews from '@/components/AppNews'

export default {
  name: 'App',
  components: {
    // 'app-news': AppNews,
    // 'AppNews': AppNews,
    AppNews
  },
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: 'Новость про президента',
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Новость про вакцину',
          id: 2,
          isOpen: false,
          wasRead: false
        }
      ],
      openRate: 0,
      readRate: 0
    }
  },
  methods: {
    openNews() {
      this.openRate++
    },
    readNews(id) {
      const index = this.news.findIndex((news) => news.id === id)
      this.news[index].wasRead = true
      this.readRate++
    },
    unreadNews(id) {
      const news = this.news.find((news) => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  },
  provide() {
    return {
      title: 'Список всех новостей',
      news: this.news
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  color: darkred;
}
</style>
