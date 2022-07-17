<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header.vue';
import Card from './components/Card.vue';

</script>

<template>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->

  <Header title="Games with Words!"></Header>
  <div class="card-wrapper">
    <Card v-for="n in 10" name="Panda" filePath="src/redpanda.jpg"/>
  </div>
  
</template>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

</style>
