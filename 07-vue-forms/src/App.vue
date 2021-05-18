<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
      <!--      <div class="form-control" :class="{invalid: errors.name && !name.length}">-->
      <!--        <label for="name">Как тебя зовут?</label>-->
      <!--        <input-->
      <!--            type="text"-->
      <!--            id="name"-->
      <!--            placeholder="Введи имя"-->
      <!--            v-model.trim="name"-->
      <!--        >-->
      <!--        <small v-if="errors.name && !name.length">{{ errors.name }}</small>-->
      <!--      </div>-->

      <app-input
          label="Как тебя зовут?"
          placeholder="Введи имя"
          :error="errors.name"
          v-model="name"
      ></app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
            type="number"
            id="age"
            v-model.number="age"
        >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input v-model="relocate" type="radio" name="trip" value="Yes"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input v-model="relocate" type="radio" name="trip" value="No"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="Vuex"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="CLI"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="Router"/> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Правила</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="agree"/> С правилами согласен</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput'

export default {
  data() {
    return {
      name: '',
      age: 27,
      city: 'kzn',
      relocate: 'Yes',
      skills: [],
      agree: null,
      errors: {
        name: null
      }
    }
  },
  methods: {
    formIsValid() {
      let isValid = true

      if (this.name.length === 0) {
        this.errors.name = 'Имя не может быть пустым'
        isValid = false
      } else {
        this.errors.name = null
      }

      return isValid
    },
    submitHandler() {

      if (this.formIsValid()) {
        console.group('Form Data')
        console.log('Name:', this.name)
        console.log('Age:', this.age)
        console.log('City:', this.city)
        console.log('Relocate:', this.relocate)
        console.log('Skills:', this.skills)
        console.log('Agree:', this.agree)
        console.groupEnd()
      }
    }
  },
  components: {AppInput}
}
</script>

<style>
.form-control small {
  color: #e53935;
}

.form-control.invalid input {
  border-color: #e53935;
}
</style>
