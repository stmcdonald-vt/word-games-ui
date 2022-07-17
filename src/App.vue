<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header.vue';
import Card from './components/Card.vue';

</script>

<template>
  <Header title="Games with Words!"></Header>
  <div class="card-wrapper">
    <Card v-for="n in 10" name="Panda" filePath="src/redpanda.jpg"/>
  </div>
  
</template>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem
}

</style>
