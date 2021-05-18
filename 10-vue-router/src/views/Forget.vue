<template>
  <div class="card">
    <h2>Забыли пароль? Так вспоминайте!</h2>

    <button class="btn" @click="goToLogin">Обратно к логину</button>
    <!--    <button class="btn" @click="$router.push('/login')">Обратно к логину</button>-->
  </div>
</template>

<script>
export default {
  methods: {
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>
