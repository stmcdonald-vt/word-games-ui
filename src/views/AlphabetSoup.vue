<script setup lang="ts">
  import LevelSelect from '../components/LevelSelect.vue';
  import LetterChoices from '../components/LetterChoices.vue';
  const levels: string[] = ["level 1", "level 2", "level 3"];
  const letters: string[] = ["A", "B", "C", "D"];

</script>

<template>
    <Header title="Games with Words!"></Header>
    <!-- On the Left Side -->
    <LevelSelect :levels="levels"/>
    <LetterChoices :letters="letters"/>
    <WordArea/>
    <AnswerInput/>

</template>

<style scoped></style>
