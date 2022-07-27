<script setup lang="ts">

defineProps<{ msg: string }>()
</script>

<template>
  <button class="btn btn-light">{{ msg }}</button>
</template>

<style scoped>
</style>
