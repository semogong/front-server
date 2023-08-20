import {createRouter ,createWebHistory} from 'vue-router';

import LoginFrame from "@/views/logins/Login.vue";
import Login from "@/views/logins/LoginHome.vue";
import Join from "@/views/logins/GeneralJoin.vue";
import Auth from "@/views/logins/JoinAuth.vue";
import FindId from "@/views/logins/FindId.vue";
import FindPW from "@/views/logins/FindPw.vue";
import SocialJoin from "@/views/logins/SocialJoin.vue";

import Main from "@/views/mains/Main.vue";
import Notify from "@/views/mains/Notify.vue";
import Search from "@/views/mains/Search.vue";
import Group from "@/views/mains/Group.vue";
import Chat from "@/views/mains/Chat.vue";
import Star from "@/views/mains/Star.vue";
import Rank from "@/views/mains/Rank.vue";

import EditPost from "@/views/posts/EditPost.vue";
import Post from "@/views/posts/Post.vue";
import Profile from "@/views/profiles/Profile.vue";


const routes = [

    {
        path:'/login',
        name: 'LoginFrame',
        component:LoginFrame,
        children: [{
            path: '/login',
            component: Login
        },{
            path: '/join',
            component: Join
        },{
            path: '/auth',
            component: Auth
        },{
            path: '/find-id',
            component: FindId
        },{
            path: '/find-pw',
            component: FindPW
        },{
            path: '/social-join',
            component: SocialJoin
        }
        ]
    },


    // Main page
    {
        path:'/',
        name: 'main',
        component:Main,
        children:[{
            path:'post/:id',
            component:Post,
            children:[{
                path:'edit',
                component:EditPost
            }]
        },{
            path:'notify',
            component:Notify
        },{
            path:'search',
            component:Search
        },{
            path:'group',
            component:Group
        },{
            path:'chat',
            component:Chat
        },{
            path:'star',
            component:Star
        },{
            path:'rank',
            component:Rank
        }
        ]
    },
    {
        path:'/profile',
        name: 'profile',
        component:Profile,
    }
];

const router = new createRouter({
    history:createWebHistory(),
    routes,
});

export default router;