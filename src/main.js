import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/global.scss'

const app = createApp(App).use(router, axios, VueAxios)
app.use(store)
app.mount('#app')
