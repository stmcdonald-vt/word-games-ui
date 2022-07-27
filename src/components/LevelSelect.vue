<script setup lang="ts">

const props = defineProps<{
  levels: number[]
}>()

</script>

<template>
  <h2>Level Select</h2>
  <ul class="nav justify-content-center text-center gy-3">
    <li v-for="level in levels" class="nav-item">
      <button @click="$emit('level-selected', level)" class="btn btn-outline-dark" aria-current="page">{{ "Level " + level }}</button>
    </li>
  </ul>
</template>

<style scoped>

</style>