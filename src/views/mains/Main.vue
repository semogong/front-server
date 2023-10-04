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
        <div v-for="(val,index) in state.data" :key="index" class="w-100 d-sm-flex justify-content-center my-4" @click="$router.push(`/post/${val.id}`)">
<!--            <PostPreview @click="isPostViewed=true"></PostPreview>-->
          <div class="vw50 vh50" style="background-color: #F9F9F9">
            <div class="header w-100 vh5 d-sm-flex align-items-center ps-4" style="background-color: #012060; border-radius: 10px 10px 0 0">
              <div style="width: 2vw"><img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; filter: invert(); width: 1.5vw; height: 1.5vw;"></div>
              <div class="fw-bold" style="color:white; width: 4vw;">{{val.member.name}}</div>
              <div style="color:lightgray; font-size: 1rem; width: 10vw;">{{ val.formedCreatedAt }}</div>
            </div>

            <div class="body vh45 w-100 pe-5" style="border: lightgray 1px solid; border-radius: 0px 0px 10px 10px">
              <div class="vh15 w-100 d-sm-flex align-items-center">
                <div class="ms-5">
                  <div class="fs-1 fw-bold">{{ val.title }}</div>
                  <div class="fs-3 fw-bold" style="color: gray">{{val.subtitle}}</div>
                </div>
              </div>
              <div class="vh25 w-100" style="overflow: hidden">
                <div class="ms-5">
                  <div class="fs-5">{{val.content}}</div>
                </div>
              </div>
              <div class="vh5 w-100">
                <div class="ms-5 d-sm-flex justify-content-between">
                  <div class="d-sm-flex justify-content-center">
                    <div class="mx-1 fw-bold">{{val.tag}}</div>
                  </div>
                  <div class="d-sm-flex justify-content-center">
                    <div class="mx-1 fw-bold">조회 10</div>
                    <div class="mx-1 fw-bold">추천 9</div>
                    <div class="mx-1 fw-bold">저장 1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

import {reactive} from "vue";
import axios from "axios";

export default {
  name: 'Main',
  components: {Profilevar, Rank, Star, Chat, Group, Search, Notify},
  setup() {
    const state = reactive({
      form: {
        email: "",
        password: "",
        name: "",
      },
      clientMsg: "",
      statusCode: "",
      data:"",

    })

    axios.post("/api/v1/main/posts").then((res) => {
      state.statusCode = res.data["statusCode"];
      state.msg = res.data["msg"];
      state.data = res.data["data"]["posts"];
      console.log(state.statusCode)
      console.log(state.msg);
      console.log(state.data);
    })

    return{state}
  },

  data() {
    return {
      isSideHovered: false,
      isSideViewed: false,
      isPostViewed: false,
      isSidebarState: [1, 0, 0, 0, 0, 0, 0],
      isSidebarFrom: 0,
      posts: this.state.data,
      icons: [
        {id: 1, title: '알림', unfill: [require('@/assets/images/notification.png'), require('@/assets/images/notification_fill.png')]},
        {id: 2, title: '검색', unfill: [require('@/assets/images/search.png'), require('@/assets/images/search_fill.png')]},
        {id: 3, title: '그룹', unfill: [require('@/assets/images/group.png'), require('@/assets/images/group_fill.png')]},
        {id: 4, title: '채팅', unfill: [require('@/assets/images/chat.png'), require('@/assets/images/chat_fill.png')]},
        {id: 5, title: '스타', unfill: [require('@/assets/images/star.png'), require('@/assets/images/start_fill.png')]},
        {id: 6, title: '랭킹', unfill: [require('@/assets/images/ranking.png'), require('@/assets/images/ranking_fill.png')]}],
      homeIconUrls: [{id: 1, title: '홈', unfill: [require('@/assets/images/home.png'), require('@/assets/images/home_fill.png')]}],
    };
  },

  methods: {
    controlSidebar(to) {
      this.isSidebarState[this.isSidebarFrom] = 0;
      this.isSidebarState[to] = 1;
      this.isSidebarFrom = to;
    },
  },


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
