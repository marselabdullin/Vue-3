<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <app-button
      @action="open"
    >{{isNewsOpen ? 'Закрыть' : 'Открыть'}}</app-button>
    <app-button
      v-if="wasRead"
      color="danger"
      @action="$emit('unread-news', id)"
    >Отметить непрочитанной</app-button>
    <div v-if="isNewsOpen">
      <hr/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto earum
        eligendi eveniet fugiat ipsam, itaque iusto numquam odio officia.</p>
      <app-button
        v-if="!wasRead"
        color="primary"
        @action="read"
      >Прочесть новость</app-button>
      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppNewsList from '@/components/AppNewsList'

export default {
  name: 'AppNews',
  components: {
    AppButton,
    AppNewsList
  },
  // props: ['title'],
  props: {
    title: {
      type: String,
      required: true
    },
    id: Number,
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return typeof value === 'boolean'
      }
    },
    wasRead: Boolean
  },
  // emits: ['open-news', 'read-news'],
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      } else {
        console.warn('No id in read-news emit')
        return false
      }
    },
    'unread-news'(id) {
      if (id) {
        return true
      } else {
        console.warn('No id in unread-news emit')
        return false
      }
    }
  },
  data() {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      this.isNewsOpen && this.$emit('open-news')
    },
    read() {
      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    }
  }
}
</script>

<style scoped>

</style>
