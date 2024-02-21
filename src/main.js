import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routerController from './router'

createApp(App)
    .use(routerController)
    .mount('#app')
