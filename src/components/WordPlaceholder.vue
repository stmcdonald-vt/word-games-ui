<script setup lang="ts">

const props = defineProps<{
  length: number
}>()

</script>

<template>
  <span>{{ "____ ".repeat(length)}}</span>
</template>

<style scoped>

</style>