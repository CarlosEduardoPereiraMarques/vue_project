import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routerController from './router'
import store from './store'

createApp(App)
    .use(store)
    .use(routerController)
    .mount('#app')
