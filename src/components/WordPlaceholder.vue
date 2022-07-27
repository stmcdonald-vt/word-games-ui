<script setup lang="ts">

const props = defineProps<{
  length: number
}>()

</script>

<template>
  <span :aria-label="`Word placeholder: ${length} blanks`">{{ "____ ".repeat(length)}}</span>
</template>

<style scoped>

</style>