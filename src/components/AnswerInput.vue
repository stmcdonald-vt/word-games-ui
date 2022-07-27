<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['guess-submitted'])

const guess = ref("");

function submitGuess(this: any) {
  let allLetters: RegExp = /^[A-Za-z]+$/;
  if (!guess.value.match(allLetters)) {
    alert("Only letters are allowed!")
    guess.value = "";
    return
  }
  emit('guess-submitted', guess.value);
  guess.value = "";
}
</script>

<template>
  <div class="input-group mb-3">
    <form @submit.prevent="submitGuess">
      <label for="guess-input" class="form-label">Take a Guess</label>
      <input v-model="guess" type="text" class="form-control mb-2" placeholder="Type your answer" id="guess-input">
      <button class="btn btn-outline-secondary btn-sm" type="submit" id="button-addon2">Submit</button>
    </form>

  </div>
</template>