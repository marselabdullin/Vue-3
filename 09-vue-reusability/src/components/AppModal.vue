<template>
  <div class="modal-backdrop" @click="$emit('close')">
    <div class="modal" @click.stop>
      <h3>Модальное окно</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo iure libero quas! Aperiam consequuntur dolorum
        mollitia necessitatibus quasi voluptate voluptatibus!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
  emits:['close']
}
</script>

<style scoped>

</style>
