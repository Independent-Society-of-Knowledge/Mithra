import {createRouter, createWebHistory} from "vue-router";
import Home from "../pages/Home.vue";
import LearnMore from "../pages/LearnMore.vue";
import Docs from "../pages/Docs.vue";
import Canvas from "../pages/Canvas.vue";
import FourOFour from "../pages/http-status-pages/FourOFour.vue";

const routes = [
    {path: "/", component: Home},
    {path: "/learn-more", component: LearnMore},
    {path: "/docs", component: Docs},
    {path: "/canvas", component: Canvas},
    {path: "/:pathMatch(.*)*", component: FourOFour}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export  default router