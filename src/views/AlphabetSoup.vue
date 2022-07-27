<script setup lang="ts">
import LevelSelect from "../components/LevelSelect.vue";
import LetterChoices from "../components/LetterChoices.vue";
import AnswerInput from "../components/AnswerInput.vue";
import WordArea from "../components/WordArea.vue";
import axios from "axios";
import { onBeforeMount, reactive, Ref } from "vue";
const levels = reactive({
    options: [],
    current: 0,
    displayed: false,
});
const words: { letters: string[]; lengths: number[]; confirmed: string[] } =
    reactive({
        letters: [],
        lengths: [],
        confirmed: [],
    });

// Game functions
async function populateLevels() {
    try {
        const response = await axios.get(
            "http://localhost:3000/game/soup/levels"
        );
        levels.options = response.data;
    } catch (err) {
        console.log(err);
    }
}

async function updateLevel(id: number) {
    try {
        const response = await axios.get(
            `http://localhost:3000/game/soup/level/${id}`
        );
        words.letters = response.data.letters;
        words.lengths = response.data.lengths;
        levels.displayed = true;
        levels.current = id;
    } catch (err) {
        console.log(err);
    }
}

async function validateGuess(guess: string) {
    guess = guess.toUpperCase();
    if (words.confirmed.includes(guess)) {
        alert("Word has already been confirmed.");
        return;
    }

    try {
        const response = await axios.post(
            "http://localhost:3000/game/soup/validate",
            {
                level: levels.current,
                guess: guess,
            }
        );
        if (response.data) {
            console.log(guess + "valid!");
            words.confirmed.push(guess);
            let lengthIndex = words.lengths.indexOf(guess.length);
            words.lengths.splice(lengthIndex, 1);
            console.log(words.lengths);
        } else {
            console.log("not valid");
        }
    } catch (err) {
        console.log(err);
    }
}

// Game flow
onBeforeMount(() => {
    populateLevels();
});
</script>

<template>
    <!-- On the Left Side -->
    <div class="container-lg text-center">
        <div class="row">
            <div class="col-2">
                <LevelSelect @level-selected="updateLevel" :levels="levels.options" />
            </div>
            <div class="col-2">
                <LetterChoices :letters="words.letters" />
            </div>
            <div class="col-8">
                <WordArea :lengths="words.lengths" :confirmed="words.confirmed"/>
            </div>           
        </div>
        <div class="row">
            <div class="col-4 mx-auto my-3">
                <AnswerInput v-if="levels.displayed" @guess-submitted="validateGuess" />
            </div>
        </div>
    </div>
    

</template>

<style scoped></style>
