<template>

  <div class="vw100 vh100 d-sm-flex ">
    <!-- post -->
    <transition name="post"><router-view></router-view></transition>

    <!-- sidebar -->
    <div class="sidebar vw5 vh100" style="background-color: #012060" @mouseover="isSideHovered=true" @mouseleave="isSideHovered=false" :class="{sidehover:!isSideViewed}">
      <div class="vh75 row align-self-center justify-content-center mt-5">
        <div class="text-center">
          <div @click="isSideViewed=false,controlSidebr(0) ,$router.push('/')" class="d-sm-flex justify-content-center align-items-center icon" style="color:white;">
            <img :src="imgUrls0[this.isSidebar[0]]"  class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert();">
            <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="isSideHovered" class="m-auto pe-3 fs-5">홈</div></transition>
          </div>
        </div>

        <div class="text-center">
          <div class="d-sm-flex justify-content-center align-items-center icon" style="color:white" @click="isSideViewed=true,controlSidebr(1)">
            <img :src="imgUrls1[this.isSidebar[1]]" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
            <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="isSideHovered" class="m-auto pe-3 fs-5">알림</div></transition>
          </div>
        </div>

        <div class="text-center">
          <div class="d-sm-flex justify-content-center align-items-center icon" style="color:white" @click="isSideViewed=true,controlSidebr(2)">
            <img :src="imgUrls2[this.isSidebar[2]]" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
            <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="isSideHovered" class="m-auto pe-3 fs-5">검색</div></transition>
          </div>
        </div>

        <div class="text-center">
          <div class="d-sm-flex justify-content-center align-items-center icon" style="color:white" @click="isSideViewed=true,controlSidebr(3)">
            <img :src="imgUrls3[this.isSidebar[3]]" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
            <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="isSideHovered" class="m-auto pe-3 fs-5">그룹</div></transition>
          </div>
        </div>

        <div class="text-center">
          <div class="d-sm-flex justify-content-center align-items-center icon" style="color:white" @click="isSideViewed=true,controlSidebr(4)">
            <img :src="imgUrls4[this.isSidebar[4]]" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
            <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="isSideHovered" class="m-auto pe-3 fs-5">채팅</div></transition>
          </div>
        </div>

        <div class="text-center">
          <div class="d-sm-flex justify-content-center align-items-center icon" style="color:white" @click="isSideViewed=true,controlSidebr(5)">
            <img :src="imgUrls5[this.isSidebar[5]]" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
            <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="isSideHovered" class="m-auto pe-3 fs-5">스타</div></transition>
          </div>
        </div>

        <div class="text-center">
          <div class="d-sm-flex justify-content-center align-items-center icon" style="color:white" @click="isSideViewed=true,controlSidebr(6)">
            <img :src="imgUrls6[this.isSidebar[6]]" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
            <transition name="bounce" :class="{showtext:isSideViewed}"><div v-if="isSideHovered" class="m-auto pe-3 fs-5">랭킹</div></transition>
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
    <div class="w100 vh100 d-sm-flex justify-content-center mainbar" style="background-color: wheat">
      <div class="vw60" style="background-color: white">
        <div>이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈이재훈</div>
      </div>
    </div>

  </div>
</template>

<script>


import Notify from "@/views/mains/Notify.vue";
import Search from "@/views/mains/Search.vue";
import Group from "@/views/mains/Group.vue";
import Chat from "@/views/mains/Chat.vue";
import Star from "@/views/mains/Star.vue";
import Rank from "@/views/mains/Rank.vue";

export default {
  name: 'Profile',
  components: {Rank, Star, Chat, Group, Search, Notify},
  data() {
    return {
      isSideHovered:false,
      isPostViewed:false,
      isSideViewed:false,
      isSidebar:[1,0,0,0,0,0,0],
      isSidebarFrom:0,
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
    controlSidebr(to){
      this.isSidebar[this.isSidebarFrom] = 0;
      this.isSidebar[to] = 1;
      this.isSidebarFrom = to;
    },
  }
}

</script>


<style scoped>

/* if hover sidebar, show text */
.bounce-enter-active {
  animation: bounce-in 0.4s;
}
.bounce-leave-active {
  animation: bounce-in 0s reverse;
}

/* if click the post preview, show post */
.post-enter-active {
  animation: open 0.1s;
}
.post-leave-active {
  animation: close 0s reverse;
}

/* if select sidebar menu, open the sidebar detail */
.sidebar-enter-active {
  animation: show 0.25s;
}
.sidebar-leave-active {
  animation: end 0s reverse;
}

@keyframes show {
  0% {
    width: 0vw;
    opacity: 0;
  }
  100% {
    width: 25vw;
    opacity: 1;
  }
}

@keyframes open {
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


.icon:hover{
  transform: scale(1.2);
}

.post{
  z-index: 1;
}
</style>
