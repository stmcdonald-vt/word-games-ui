<script setup lang="ts">

const props = defineProps<{
  word: string
}>()

</script>

<template>
  <span :aria-label="`Correct response: ${word}`">{{ word }}</span>
</template>

<style scoped>

</style>