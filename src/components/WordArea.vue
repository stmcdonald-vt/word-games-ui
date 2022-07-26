<script setup lang="ts">
import WordPlaceholder from "./WordPlaceholder.vue"
const props = defineProps<{
  lengths: number[]
}>()

</script>

<template>
  <ul class="list-group">
    <WordPlaceholder v-for="length in lengths" class="list-group-item" :length="length"/>
  </ul>
</template>

<style scoped>

</style>