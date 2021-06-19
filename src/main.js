import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import '@/assets/scss/global.scss'

createApp(App).use(router, axios, VueAxios).mount('#app')
