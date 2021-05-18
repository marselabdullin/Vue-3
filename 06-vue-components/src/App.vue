<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и асинхронные компоненты</h2>

      <app-async-component></app-async-component>

      <app-button
        ref="myBtn"
        :color="oneColor"
        @action="active = 'one'"
      >
        One
      </app-button>
      <app-button
        :color="twoColor"
        @action="active = 'two'"
      >
        Two
      </app-button>
    </div>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'
import AppTextOne from '@/components/AppTextOne'
import AppTextTwo from '@/components/AppTextTwo'
import AppAsyncComponent from '@/components/AppAsyncComponent'

export default {
  data() {
    return {
      active: 'one'
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.componentName = 'new component'
    // }, 1500)

    console.log(this.$refs.myBtn)
  },
  computed: {
    // componentName() {
    //   return 'app-text-' + this.active
    // },
    componentName: {
      get() {
        return 'app-text-' + this.active
      },
      set(value) {
        console.log('componentName', value)
      }
    },
    oneColor() {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor() {
      return this.active === 'two' ? 'primary' : ''
    }
  },
  components: {AppAsyncComponent, AppButton, AppTextOne, AppTextTwo}
}
</script>

<style lang="scss" scoped>

</style>
