<script setup lang="ts">

const props = defineProps<{
    name: string
    filePath: string
}>()

const filePath: string = props.filePath; 
</script>

<template>
    <!-- <div class="card">
        <img :src=filePath />
        <span>{{ name }}</span>
    </div> -->

    <div class="card">
        <img :src=filePath class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>

<style scoped>

</style>