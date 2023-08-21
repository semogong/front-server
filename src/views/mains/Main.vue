<template>

  <div class="vw100 vh100 d-sm-flex justify-content-center">
    <!-- post -->
    <transition name="post">
      <router-view></router-view>
    </transition>

    <!-- sidebar -->
    <div :class="{SideHover:!isSideViewed}" class="sidebar vw5 vh100 backcolor-navy" @mouseleave="isSideHovered=false"
         @mouseover="isSideHovered=true">
      <div class="vh75 row align-self-center justify-content-center mt-5">
        <div class="text-center">
          <div class="d-sm-flex justify-content-center align-items-center icon"
               style="color:white;" @click="isSideViewed=false,controlSidebar(0), $router.push('/')">
            <img :src="homeIconUrls[0].unfill[isSidebarState[0]]" class="m-auto"
                 style="width: 1.5vw; height: 1.5vw; filter: invert();">
            <transition :class="{SideHoverText:isSideViewed}" name="bounce">
              <div v-if="isSideHovered" class="m-auto pe-3 fs-5">홈</div>
            </transition>
          </div>
        </div>

        <div v-for="(val,index) in icons" :key="index" class="text-center">
          <div class="d-sm-flex justify-content-center align-items-center icon" style="color:white"
               @click="isSideViewed=true,controlSidebar(index+1)">
            <img :src="icons[index].unfill[this.isSidebarState[index+1]]" class="m-auto"
                 style="width: 1.5vw; height: 1.5vw; filter: invert()">
            <transition :class="{SideHoverText:isSideViewed}" name="bounce">
              <div v-if="isSideHovered" class="m-auto pe-3 fs-5">{{ val.title }}</div>
            </transition>
          </div>
        </div>
      </div>
    </div>


    <!-- sidebar detail -->
    <transition name="sidebar">
      <div v-if="isSideViewed==true" class="vw20 vh100">
        <div v-if="isSidebarState[1]==1">
          <Notify @close-side="isSideViewed=false,controlSidebar(0)"></Notify>
        </div>

        <div v-if="isSidebarState[2]==1">
          <Search @close-side="isSideViewed=false,controlSidebar(0)"></Search>
        </div>

        <div v-if="isSidebarState[3]==1">
          <Group @close-side="isSideViewed=false,controlSidebar(0)"></Group>
        </div>

        <div v-if="isSidebarState[4]==1">
          <Chat @close-side="isSideViewed=false,controlSidebar(0)"></Chat>
        </div>

        <div v-if="isSidebarState[5]==1">
          <Star @close-side="isSideViewed=false,controlSidebar(0)"></Star>
        </div>

        <div v-if="isSidebarState[6]==1">
          <Rank @close-side="isSideViewed=false,controlSidebar(0)"></Rank>
        </div>
      </div>
    </transition>


    <!-- mainbar -->
    <div class="vw50 vh100 d-sm-flex justify-content-center ms-sm-auto">
      <div class="w100 vh100 overflow-y-scroll hidden_scroll p-3">
        <!-- post -->
        <div v-for="(val,index) in posts" :key="index" class="w-100 d-sm-flex justify-content-center my-4" @click="$router.push(`/post/${index}`)">
            <PostPreview @click="isPostViewed=true"></PostPreview>
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
      isSideHovered: false,
      isSideViewed: false,
      isPostViewed: false,
      isSidebarState: [1, 0, 0, 0, 0, 0, 0],
      isSidebarFrom: 0,
      posts: [
        {id: 1, title: 'Post 1', editor: '박정빈', editTime: "30분전"},
        {id: 2, title: 'Post 2', editor: '박승일', editTime: "1시간전"},
        {id: 3, title: 'Post 3', editor: '이재훈', editTime: "2시간전"},
        {id: 4, title: 'Post 4', editor: '박정빈', editTime: "30분전"},
        {id: 5, title: 'Post 5', editor: '박승일', editTime: "1시간전"},
        {id: 6, title: 'Post 6', editor: '이재훈', editTime: "2시간전"},],

      icons: [
        {
          id: 1,
          title: '알림',
          unfill: [require('@/assets/images/notification.png'), require('@/assets/images/notification_fill.png')]
        },
        {
          id: 2,
          title: '검색',
          unfill: [require('@/assets/images/search.png'), require('@/assets/images/search_fill.png')]
        },
        {id: 3, title: '그룹', unfill: [require('@/assets/images/group.png'), require('@/assets/images/group_fill.png')]},
        {id: 4, title: '채팅', unfill: [require('@/assets/images/chat.png'), require('@/assets/images/chat_fill.png')]},
        {id: 5, title: '스타', unfill: [require('@/assets/images/star.png'), require('@/assets/images/start_fill.png')]},
        {
          id: 6,
          title: '랭킹',
          unfill: [require('@/assets/images/ranking.png'), require('@/assets/images/ranking_fill.png')]
        }
      ],
      homeIconUrls: [
        {id: 1, title: '홈', unfill: [require('@/assets/images/home.png'), require('@/assets/images/home_fill.png')]}
      ],
    };
  },
  methods: {
    controlSidebar(to) {
      this.isSidebarState[this.isSidebarFrom] = 0;
      this.isSidebarState[to] = 1;
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
  99%{
    opacity: 0;
  }
  100% {
    width: 20vw;
    opacity: 1;
  }
}

@keyframes open {
  0% {
    opacity: 0;
  }
  99%{
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

.sidebar {
  transition: all 0.4s;
  z-index: 0;
}

.SideHoverText {
  display: none;
}

.SideHover:hover {
  width: 10vw;
}

.icon:hover {
  transform: scale(1.2);
}

.post {
  z-index: 1;
}
</style>
