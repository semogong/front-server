import {createRouter ,createWebHistory} from 'vue-router';
import Login from "@/views/logins/Login.vue";
import Join from "@/views/logins/Join.vue";
import Auth from "@/views/logins/Auth.vue";
import socialJoin from "@/views/logins/socialJoin.vue";
import findID from "@/views/logins/findID.vue";
import findPW from "@/views/logins/findPW.vue";
import Main from "@/views/mains/Main.vue";
import Notify from "@/views/mains/Notify.vue";
import Search from "@/views/mains/Search.vue";
import Group from "@/views/mains/Group.vue";
import Chat from "@/views/mains/Chat.vue";
import Star from "@/views/mains/Star.vue";
import Rank from "@/views/mains/Rank.vue";
import Post from "@/views/posts/Post.vue";

const routes = [
    // 라우트 설정
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
        path:'/',
        name: 'main',
        component:Main
    },
    {
        path:'/notify',
        name: 'notify',
        component:Notify
    },
    {
        path:'/search',
        name: 'search',
        component:Search
    },
    {
        path:'/group',
        name: 'group',
        component:Group
    },
    {
        path:'/chat',
        name: 'chat',
        component:Chat
    },
    {
        path:'/star',
        name: 'star',
        component:Star
    },
    {
        path:'/rank',
        name: 'rank',
        component:Rank
    },
    {
        path:'/post',
        name: 'post',
        component:Post
    }

];

const router = new createRouter({
    history:createWebHistory(),
    routes,
});

export default router;