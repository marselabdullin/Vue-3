<template>
  <component :is="layout + '-layout'" v-if="layout"></component>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import AuthLayout from '@/layouts/AuthLayout'
import {useRoute} from 'vue-router'
import {computed} from 'vue'

export default {
  components: {AuthLayout, MainLayout},
  setup() {
    const route = useRoute()
    const layout = computed(() => route.meta.layout)

    return {
      layout
    }
  }
}
</script>
