<template>
  <div class="card">
    <ul>
      <li v-for="(item, idx) in 5">
        <slot :iter="item" :index="idx">{{iter}}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppList'
}
</script>

<style scoped>

</style>
