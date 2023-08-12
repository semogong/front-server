import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from 'vue-router'

import Login from "@/views/logins/Login.vue"
import Join from "@/views/logins/Join.vue"
import Auth from "@/views/logins/Auth.vue";
import socialJoin from "@/views/logins/socialJoin.vue";
import findID from "@/views/logins/findID.vue";
import findPW from "@/views/logins/findPW.vue";
import Main from "@/views/mains/Main.vue";
import Notify from "@/views/mains/Notify.vue";


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
    },
    {
        path:'/main',
        name: 'main',
        component:Main
    },
    {
        path:'/notify',
        name: 'notify',
        component:Notify
    }
    // {
    //     path:'/search',
    //     name: 'search',
    //     component:Search
    // },
    // {
    //     path:'/group',
    //     name: 'group',
    //     component:Group
    // },
    // {
    //     path:'/chat',
    //     name: 'chat',
    //     component:Chat
    // },
    // {
    //     path:'/star',
    //     name: 'star',
    //     component:Star
    // },
    // {
    //     path:'/rank',
    //     name: 'rank',
    //     component:Rank
    // }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')