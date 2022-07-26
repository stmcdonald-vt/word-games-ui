import { createApp } from 'vue'
import './style.css'
import './scss/styles.scss'
import app from './App.vue'
import router from './router/index'

createApp(app).use(router).mount('#app')
