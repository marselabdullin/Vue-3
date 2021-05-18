<template>
  <div class="container">
    <div class="card">
      <h2
          v-color:[type].blink.hover="myColor"
      >Директивы</h2>

      <div class="form-control">
        <label for="inp">Поле ввода</label>
        <input id="inp" type="text" v-focus>
      </div>

      <button class="btn" @click="myColor = 'darkgreen'">Сделать зеленым</button>
      <button class="btn" @click="type = type === 'color' ? 'backgroundColor' : 'color'">Переключить тип</button>
    </div>
  </div>
</template>

<script>
import focusDirective from '@/focusDirective'
import colorDirective from '@/colorDirective'

export default {
  data() {
    return {
      myColor: 'darkred',
      type: 'color'
    }
  },
  directives: {
    focus: focusDirective,
    color: colorDirective
  }
}
</script>

