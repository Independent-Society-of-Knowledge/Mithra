import {createRouter, createWebHistory} from "vue-router";
import Home from "../pages/Home.vue";
import Docs from "../pages/Docs.vue";
import Canvas from "../pages/dashboard/Canvas.vue";
import FourOFour from "../pages/http-status-pages/FourOFour.vue";
import GetStarted from "../pages/GetStarted.vue";
import ShowCase from "../pages/ShowCase.vue";
import Signup from "../pages/auth/Signup.vue";
import Login from "../pages/auth/Login.vue";
import Dashboard from "../pages/dashboard/Dashboard.vue";

const routes = [
    {path: "/", component: Home},
    {path: "/get-started", component: GetStarted},
    {path: "/docs", component: Docs},
    {path: "/show-case", component: ShowCase},
    {path: "/auth/signup", component: Signup},
    {path: "/auth/login", component: Login},
    {path: "/dashboard", component: Dashboard},
    {path: "/dashboard/canvas", component: Canvas},
    {path: "/:pathMatch(.*)*", component: FourOFour}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export  default router