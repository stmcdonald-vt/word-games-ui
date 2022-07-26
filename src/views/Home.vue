<script setup lang="ts">
  import Card from '../components/Card.vue'
</script>
<template>
  <div class="card-wrapper">
    <Card v-for="n in 10" name="Panda" filePath="src/redpanda.jpg" description="This game is about pandas :)" destination="/alphabet-soup"/>
  </div>
</template>
