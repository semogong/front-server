<template>

    <div class="vw100 vh100 d-sm-flex ">
        <!-- post -->
        <transition name="post"><router-view></router-view></transition>

        <!-- sidebar -->
        <div class="sidebar vw5 vh100" style="background-color: #012060" @mouseover="show=1" @mouseleave="show=0" :class="{sidehover:!isSideViewed}">
            <div class="vh75 row align-self-center justify-content-center mt-5">
                <div class="text-center">
                    <div @click="isSideViewed=false,controlSidebr(0)" class="d-sm-flex justify-content-center align-items-center" style="color:white;">
                        <img :src="imgUrls0[this.isSidebar[0]]"  class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert();">
                        <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="show==1" class="m-auto pe-3 fs-5">홈</div></transition>
                    </div>
                </div>

                <div class="text-center">
                    <div class="d-sm-flex justify-content-center align-items-center" style="color:white" @click="isSideViewed=true,controlSidebr(1)">
                        <img :src="imgUrls1[this.isSidebar[1]]" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="show==1" class="m-auto pe-3 fs-5">알림</div></transition>
                    </div>
                </div>

                <div class="text-center">
                    <div class="d-sm-flex justify-content-center align-items-center" style="color:white" @click="isSideViewed=true,controlSidebr(2)">
                        <img :src="imgUrls2[this.isSidebar[2]]" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="show==1" class="m-auto pe-3 fs-5">검색</div></transition>
                    </div>
                </div>

                <div class="text-center">
                    <div class="d-sm-flex justify-content-center align-items-center" style="color:white" @click="isSideViewed=true,controlSidebr(3)">
                        <img :src="imgUrls3[this.isSidebar[3]]" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="show==1" class="m-auto pe-3 fs-5">그룹</div></transition>
                    </div>
                </div>

                <div class="text-center">
                    <div class="d-sm-flex justify-content-center align-items-center" style="color:white" @click="isSideViewed=true,controlSidebr(4)">
                        <img :src="imgUrls4[this.isSidebar[4]]" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="show==1" class="m-auto pe-3 fs-5">채팅</div></transition>
                    </div>
                </div>

                <div class="text-center">
                    <div class="d-sm-flex justify-content-center align-items-center" style="color:white" @click="isSideViewed=true,controlSidebr(5)">
                        <img :src="imgUrls5[this.isSidebar[5]]" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="show==1" class="m-auto pe-3 fs-5">스타</div></transition>
                    </div>
                </div>

                <div class="text-center">
                    <div class="d-sm-flex justify-content-center align-items-center" style="color:white" @click="isSideViewed=true,controlSidebr(6)">
                        <img :src="imgUrls6[this.isSidebar[6]]" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="show==1" class="m-auto pe-3 fs-5">랭킹</div></transition>
                    </div>
                </div>
            </div>
        </div>


        <!-- sidebar detail -->
        <transition name="sidebar" >
            <div class="vw25 vh100" style="background-color: #EEEEEE" v-if="isSideViewed==true">
                <div v-if="isSidebar[1]==1">
                    <Notify @close-side="isSideViewed=false,controlSidebr(0)"></Notify>
                </div>

                <div v-if="isSidebar[2]==1">
                    <Search @close-side="isSideViewed=false,controlSidebr(0)"></Search>
                </div>

                <div v-if="isSidebar[3]==1">
                    <Group @close-side="isSideViewed=false,controlSidebr(0)"></Group>
                </div>

                <div v-if="isSidebar[4]==1">
                    <Chat @close-side="isSideViewed=false,controlSidebr(0)"></Chat>
                </div>

                <div v-if="isSidebar[5]==1">
                    <Star @close-side="isSideViewed=false,controlSidebr(0)"></Star>
                </div>

                <div v-if="isSidebar[6]==1">
                    <Rank @close-side="isSideViewed=false,controlSidebr(0)"></Rank>
                </div>
            </div>
        </transition>


        <!-- mainbar -->
        <div class="vw70 vh100 d-sm-flex justify-content-center mainbar" style="background-color: white">
            <div class="vw50 vh100 overflow-y-scroll hidden_scroll p-3">
                <!-- post -->
                <div v-for="(val,index) in posts" :key="index" class="w-100 d-sm-flex justify-content-center my-4" style="border-radius: 15px;">
                    <router-link :to="`/post/${index}`"><PostPreview @click="isPostViewed=true,selectPost(index)"></PostPreview></router-link>
                </div>
            </div>
        </div>

        <!-- profilebar -->
        <Profilevar></Profilevar>
    </div>
</template>

<script>


import Notify from "@/views/mains/Notify.vue";
import Search from "@/views/mains/Search.vue";
import Group from "@/views/mains/Group.vue";
import Chat from "@/views/mains/Chat.vue";
import Star from "@/views/mains/Star.vue";
import Rank from "@/views/mains/Rank.vue";
import Profilevar from "@/views/mains/Profilebar.vue";
import PostPreview from "@/views/posts/PostPreview.vue";

export default {

    name: 'Main',
    components: {PostPreview, Profilevar, Rank, Star, Chat, Group, Search, Notify},
    data() {
        return {
            show: 0,
            isPostViewed:false,
            isSideViewed:false,
            isSidebar:[1,0,0,0,0,0,0],
            isSidebarFrom:0,
            posts: [
                { id: 1, title: 'Post 1', editor:'박정빈',editTime:"30분전"},
                { id: 2, title: 'Post 2', editor:'박승일',editTime:"1시간전"},
                { id: 3, title: 'Post 3', editor:'이재훈',editTime:"2시간전"},
                { id: 4, title: 'Post 4', editor:'박정빈',editTime:"30분전"},
                { id: 5, title: 'Post 5', editor:'박승일',editTime:"1시간전"},
                { id: 6, title: 'Post 6', editor:'이재훈',editTime:"2시간전"},],
            imgUrls0:[require('@/assets/images/home.png'),require('@/assets/images/home_fill.png')],
            imgUrls1:[require('@/assets/images/notification.png'),require('@/assets/images/notification_fill.png')],
            imgUrls2:[require('@/assets/images/search.png'),require('@/assets/images/search_fill.png')],
            imgUrls3:[require('@/assets/images/group.png'),require('@/assets/images/group_fill.png')],
            imgUrls4:[require('@/assets/images/chat.png'),require('@/assets/images/chat_fill.png')],
            imgUrls5:[require('@/assets/images/star.png'),require('@/assets/images/start_fill.png')],
            imgUrls6:[require('@/assets/images/ranking.png'),require('@/assets/images/ranking_fill.png')],

        };
    },
    methods:{
        selectPost(postId){
            this.$store.dispatch('setSelectedPostId',postId);
        },
        controlSidebr(to){
            this.isSidebar[this.isSidebarFrom] = 0;
            this.isSidebar[to] = 1;
            this.isSidebarFrom = to;
        },
    }
}

</script>


<style scoped>

.bounce-enter-active {
    animation: bounce-in 0.4s;
}
.bounce-leave-active {
    animation: bounce-in 0s reverse;
}

.post-enter-active {
    animation: show 0.1s;
}
.post-leave-active {
    animation: close 0s reverse;
}

.sidebar-enter-active {
    animation: open 0.5s;
}
.sidebar-leave-active {
    animation: end 0s reverse;
}

@keyframes open {
    0% {
        width: 0vw;
        opacity: 0;
    }
    90%{
        opacity: 0;
    }
    100% {
        width: 25vw;
        opacity: 1;
    }
}

@keyframes show {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}



@keyframes bounce-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

a {
    text-decoration: none;
    color: black;
}

.sidebar,.mainbar {
    transition: all 0.4s;
    z-index: 0;
}

.showtext{
    display: none;
}

.sidehover:hover{
    width: 10vw;
}
.sidehover:hover + .mainbar{
    width: 65vw;
}


.post{
    z-index: 1;
}
</style>
