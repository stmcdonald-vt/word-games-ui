<script setup lang="ts">

const props = defineProps<{
    name: string
    filePath: string
    description: string
    destination: string
}>()

</script>

<template>
    <div class="card">
        <img :src=filePath class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">{{ description }}</p>
            <router-link :to="destination" class="btn btn-primary">Play</router-link>
        </div>
    </div>
</template>

<style scoped>

</style>