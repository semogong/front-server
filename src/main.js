import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'

import Login from "@/views/Login.vue"
import Join from "@/views/Join.vue"
import Auth from "@/views/Auth.vue";
import socialJoin from "@/views/socialJoin.vue";
import findID from "@/views/findID.vue";
import findPW from "@/views/findPW.vue";


const routes = [
    {
        path:'/login',
        name: 'login',
        component:Login
    },
    {
        path:'/join',
        name: 'join',
        component:Join
    },
    {
        path:'/auth',
        name: 'auth',
        component:Auth
    },
    {
        path:'/social-join',
        name: 'social-join',
        component: socialJoin
    },
    {
        path:'/find-id',
        name: 'find-id',
        component:findID
    },
    {
        path:'/find-pw',
        name: 'find-pw',
        component:findPW
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')