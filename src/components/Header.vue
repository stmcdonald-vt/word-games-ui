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
        <a class="navbar-brand" href="#">
        <img src="/src/redpanda.jpg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        Bootstrap
        </a>
        <div class="login-wrapper">
          <LoginButton msg="Login"/>
          <LoginButton msg="Signup"/> 
        </div>
      </div>
    </nav>
  </header>
<!-- 
    <header>
        <h1>{{ title }}</h1>
        <div class="login-wrapper">
          <LoginButton msg="Login"/>
          <LoginButton msg="Signup"/> 
        </div>
        
    </header> -->
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