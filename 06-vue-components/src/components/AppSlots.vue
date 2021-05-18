<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>

    <app-list>
      <template
        #default="{iter, index}"
      >
        <span style="color: chocolate">
          Item: {{ iter }}
          <strong>(index {{ index }})</strong>
        </span>
      </template>
    </app-list>

    <app-block>
      <p>Текст для блока</p>

      <template v-slot:header>
        <h3>Заголовок!</h3>
      </template>

      <template #footer>
        <hr/>
        <small>Footer</small>
      </template>
    </app-block>
  </div>
</template>

<script>
import AppBlock from '@/components/AppBlock'
import AppList from '@/components/AppList'

export default {
  components: {AppBlock, AppList}
}

</script>

<style lang="scss" scoped>

</style>
