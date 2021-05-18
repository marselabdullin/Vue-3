<template>
  <div class="container column">
    <app-resume-form
      @addResumeBlock="addResumeBlock"
    ></app-resume-form>
    <app-resume :resumeBlocks="resumeBlocks"></app-resume>
  </div>
  <div class="container">
    <app-comments></app-comments>
  </div>
</template>

<script>
import AppResumeForm from '@/components/AppResumeForm'
import AppResume from '@/components/AppResume'
import AppComments from '@/components/AppComments'

export default {
  data() {
    return {
      resumeBlocks: [],
    }
  },
  methods: {
    addResumeBlock(item) {
      this.resumeBlocks.push(item)
    }
  },
  components: {AppComments, AppResume, AppResumeForm}
}
</script>

<style>

</style>
