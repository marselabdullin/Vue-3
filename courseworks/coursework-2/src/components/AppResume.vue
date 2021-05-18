<template>
  <div class="card card-w70">
    <h3 v-if="!resumeBlocks.length">Добавьте первый блок, чтобы увидеть результат</h3>
    <component
      v-else
      v-for="(block, index) in resumeBlocks"
      :key="index"
      :is="componentName(block.type)"
      :value="block.value"
    ></component>
  </div>
</template>

<script>
import AppResumeTitle from '@/components/AppResumeTitle'
import AppResumeAvatar from '@/components/AppResumeAvatar'
import AppResumeSubtitle from '@/components/AppResumeSubtitle'
import AppResumeText from '@/components/AppResumeText'

export default {
  name: 'AppResume',
  props: {
    resumeBlocks: Array
  },
  methods: {
    componentName(type) {
      return 'app-resume-' + type
    }
  },
  components: {AppResumeText, AppResumeSubtitle, AppResumeAvatar, AppResumeTitle}
}
</script>

<style scoped>

</style>
