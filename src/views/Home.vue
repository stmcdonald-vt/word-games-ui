<script setup lang="ts">
  import Card from '../components/Card.vue'
  import soupURL from '../assets/alphabet-soup.jpg'
  import constructionURL from '../assets/construction.jpg'
</script>
<template>
  <div class="card-wrapper">
    <Card name="Alphabet Soup" :filePath="soupURL" description="This game is all about anagrams! Given a bowl of alphabet soup, can you uncover the hidden words?" destination="/alphabet-soup"/>
    <Card v-for="n in 5" name="Coming Soon" :filePath="constructionURL" description="This game is under construction! Thank you for your patience!" destination="/"/>
  </div>
</template>
