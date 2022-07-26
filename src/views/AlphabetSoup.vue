<script setup lang="ts">
  import LevelSelect from '../components/LevelSelect.vue';
  import LetterChoices from '../components/LetterChoices.vue';
  import AnswerInput from '../components/AnswerInput.vue'
  import WordArea from '../components/WordArea.vue';
  const levels: string[] = ["level 1", "level 2", "level 3"];
  const letters: string[] = ["A", "B", "C", "D"];
  const lengths: number[] = [2, 4, 5, 4];

</script>

<template>
    <!-- On the Left Side -->
    <LevelSelect :levels="levels"/>
    <LetterChoices :letters="letters"/>
    <WordArea :lengths="lengths"/>
    <AnswerInput/>

</template>

<style scoped></style>
