/*
 * Copyright © 2024 Independent Society of Knowledge
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact Information:
 * Independent Society of Knowledge
 * Email: projects@iskportal.com
 *
 * SPDX-License-Identifier: GPL-2.0-or-later
 *
 * Developed by: Amir H. Ebrahimnezhad (if you helped or your commits are going to be pulled please add your name and email with a comma.)
 * Email:        ceo@iskportal.com
 * version 1.0.0
 *
 */
import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/pages/HomeView.vue'
import Canvas from '@/pages/Canvas.vue'
import LearnMore from "@/pages/LearnMore.vue";

const routes = [
    {path: '/', component: HomeView},
    {path: '/canvas', component: Canvas},
    {path: '/doc', component: LearnMore},
    {
        path: '/:pathMatch(.*)*',
        redirect: "/",
    },
]


export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
})