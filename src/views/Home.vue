<script setup lang="ts">
  import Card from '../components/Card.vue'
  import imgURL from '../assets/alphabet-soup.jpg'
</script>
<template>
  <div class="card-wrapper">
    <Card name="Alphabet Soup" :filePath="imgURL" description="This game is all about anagrams! Given a bowl of alphabet soup, can you uncover the hidden words?" destination="/alphabet-soup"/>
    <Card v-for="n in 10" name="Panda" filePath="src/redpanda.jpg" description="This game is about pandas :)" destination="/"/>
  </div>
</template>
