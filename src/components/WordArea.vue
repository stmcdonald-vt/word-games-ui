<script setup lang="ts">
import WordPlaceholder from "./WordPlaceholder.vue"
import Word from "./Word.vue"
const props = defineProps<{
  lengths: number[]
  confirmed: string[]
}>()

</script>

<template>
  <h2>Words</h2>
  <ul class="list-group">
    <Word v-for="word in confirmed" class="list-group-item" :word="word"/>
    <WordPlaceholder v-for="length in lengths" class="list-group-item" :length="length"/>
  </ul>
</template>

<style scoped>

</style>