import "@/style/main.scss"
import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/routes/router.ts";

createApp(App)
    .use(router)
    .mount('#app')

