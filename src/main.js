import './assets/styling/main.css'
import {router} from "@/routes/router.js";
import { createApp } from 'vue'
import App from './App.vue'
import store from './store';

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
