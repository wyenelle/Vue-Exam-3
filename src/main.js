import { createApp } from 'vue'
import './style.css'
import router from './routes/index.js'
import App from './App.vue'
import {store } from './store/store.js'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(AOS.init())

app.use(store)

app.use(router)

app.mount('#app')
