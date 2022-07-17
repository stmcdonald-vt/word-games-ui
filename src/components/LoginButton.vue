<script setup lang="ts">

defineProps<{ msg: string }>()
</script>

<template>
  <button>{{ msg }}</button>
</template>

<style scoped>
  button {
    font-size: 1.25rem;
  }
</style>
