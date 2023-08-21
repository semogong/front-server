import {createRouter ,createWebHistory} from 'vue-router';

import LoginFrame from "@/views/logins/Login.vue";
import Login from "@/views/logins/LoginHome.vue";
import Join from "@/views/logins/GeneralJoin.vue";
import Auth from "@/views/logins/JoinAuth.vue";
import FindId from "@/views/logins/FindId.vue";
import FindPW from "@/views/logins/FindPw.vue";
import SocialJoin from "@/views/logins/SocialJoin.vue";
import Main from "@/views/mains/Main.vue";
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
        }
        ]
    },
    {
        path:'/profile',
        name: 'profile',
        component:Profile,
        children:[{
            path:'post/:id',
            component:Post,
            children:[{
                path:'edit',
                component:EditPost
            }]
        }
        ]
    },
];

const router = new createRouter({
    history:createWebHistory(),
    routes,
});

export default router;