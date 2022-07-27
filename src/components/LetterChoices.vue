<script setup lang="ts">

const props = defineProps<{
  letters: string[]
}>()

</script>

<template>
  <h2>Letters</h2>
  <ul class="list-group">
    <li v-for="letter in letters" class="list-group-item">{{ letter }}</li>
  </ul>
</template>

<style scoped>

</style>