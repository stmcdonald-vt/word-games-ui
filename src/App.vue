<script setup lang="ts">
import Header from './components/Header.vue';
import Card from './components/Card.vue';
import router from './router';

</script>

<template>
  <Header title="Games with Words!"></Header>
  <router-view/>
</template>

<style scoped>
.card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

</style>
