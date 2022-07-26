<script setup lang="ts">

const props = defineProps<{
  levels: string[]
}>()

</script>

<template>
  <ul class="nav flex-column">
    <li v-for="level in levels" class="nav-item">
      <a class="nav-link active" aria-current="page" href="#">{{ level }}</a>
    </li>
  </ul>
</template>

<style scoped>

</style>