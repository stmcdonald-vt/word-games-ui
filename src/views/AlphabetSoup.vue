<script setup lang="ts">
  import LevelSelect from '../components/LevelSelect.vue';
  const levels = ["level 1", "level 2", "level 3"]
</script>

<template>
    <Header title="Games with Words!"></Header>
    <!-- On the Left Side -->
    <LevelSelect :levels="levels"></LevelSelect>
    <!-- <PlayArea>
      <LetterBowl>

      </LetterBowl>
    </PlayArea> -->

</template>

<style scoped></style>
