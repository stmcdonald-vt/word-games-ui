import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import AlphabetSoup from '/src/views/AlphabetSoup.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/alphabet-soup',
        name: 'Alphabet Soup',
        component: AlphabetSoup,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router