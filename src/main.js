import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routerController from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import Editor from 'primevue/editor';


createApp(App)
    .use(PrimeVue)
    .component('Editor', Editor)
    .use(store)
    .use(routerController)
    .mount('#app')
