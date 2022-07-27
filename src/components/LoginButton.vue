<script setup lang="ts">

defineProps<{ msg: string }>()
</script>

<template>
  <button class="btn btn-primary">{{ msg }}</button>
</template>

<style scoped>
</style>
