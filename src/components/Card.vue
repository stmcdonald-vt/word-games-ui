<script setup lang="ts">

const props = defineProps<{
    name: string
    filePath: string
}>()

const filePath: string = props.filePath; 
</script>

<template>
    <div class="card">
        <img :src=filePath />
        <span>{{ name }}</span>
    </div>
</template>

<style scoped>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }

    span {
        display: block;
        text-align: center;
    }
</style>