<script setup lang="ts">
import LoginButton from './LoginButton.vue'

defineProps<{
    title: string
}>();
</script>

<template>
    <header>
        <h1>{{ title }}</h1>
        <div class="login-wrapper">
          <LoginButton msg="Login"/>
          <LoginButton msg="Signup"/> 
        </div>
        
    </header>
</template>

<style scoped>
header {
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
}

.login-wrapper {

}
</style>