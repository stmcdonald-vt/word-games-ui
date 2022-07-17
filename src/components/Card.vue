<script setup lang="ts">

export interface Props {
    name: string
    filePath: string
    comingSoon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    comingSoon: false
})

const filePath: string = props.filePath; 
</script>

<template>
    <div class="card">
        <img class="panel" v-if="!comingSoon" :src=filePath />
        <div class="panel" v-else>Coming Soon</div>
        <span>{{ name }}</span>
    </div>
</template>

<style scoped>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        min-height: 15rem;
    }

    .panel {
        max-width: 100%;
        max-height: 100%;
        min-height: 80%;
    }

    div.panel {
        color: white;
        background-color: black;
        text-align: center;
    }

    span {
        display: block;
        text-align: center;
    }
</style>