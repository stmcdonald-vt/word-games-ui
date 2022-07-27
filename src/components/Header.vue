<script setup lang="ts">
import LoginButton from './LoginButton.vue'

defineProps<{
    title: string
}>();
</script>

<template>
  <header>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          {{ title }}
        </router-link>
        <div class="login-wrapper">
          <LoginButton msg="Login"/>
          <LoginButton msg="Signup"/> 
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  margin-bottom: 2rem;
}
.container-fluid {
  /* background-color: lightgray; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
}

.login-wrapper > * {
  margin: .1rem;
}
</style>