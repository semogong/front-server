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
    <div class="vw60 vh100 d-sm-flex justify-content-center mainbar m-auto">
      <div class="vw60" style="background-color: white;">
        <div class="w100 h25 w-50 d-sm-flex justify-content-center align-items-center">
          <div class="mx-3"><img :src="require('@/assets/images/profile-user.png')"
                                 style="border-radius: 50%; width: 8vw; height: 8vw;"></div>
          <div class="mx-3">
            <div class="fw-bold fs-2">이재훈</div>
            <div class="fs-5">bloom your potential, grow together</div>
          </div>
        </div>
        <div class="w100 h20 d-sm-flex justify-content-center">
          <div class="w-50 p-2">
            <div class="vh5 w-100">
              <div class="w-100 vh5 d-sm-flex justify-content-center">
                <div class="w-50 text-center fs-5 fw-bold" style="color: #666666">직무</div>
                <div class="w-50 text-center fs-5 fw-bold">백엔드 개발자</div>
              </div>
            </div>
            <div class="vh5 w-100">
              <div class="w-100 vh5 d-sm-flex justify-content-center">
                <div class="w-50 text-center fs-5 fw-bold" style="color: #666666">스타</div>
                <div class="w-50 text-center fs-5 fw-bold">32</div>
              </div>
            </div>
            <div class="vh5 w-100">
              <div class="w-100 vh5 d-sm-flex justify-content-center">
                <div class="w-50 text-center fs-5 fw-bold" style="color: #666666">랭크</div>
                <div class="w-50 text-center fs-5 fw-bold" style="color: #AD00FF">L1</div>
              </div>
            </div>
          </div>

          <div class="w-50 p-2">
            <div class="vh5 w-100">
              <div class="w-100 vh5 d-sm-flex justify-content-center">
                <div class="w-50 text-center fs-5 fw-bold" style="color: #666666">학습효율</div>
                <div class="w-50 text-center fs-5 fw-bold">99%</div>
              </div>
            </div>
            <div class="vh5 w-100">
              <div class="w-100 vh5 d-sm-flex justify-content-center">
                <div class="w-50 text-center fs-5 fw-bold" style="color: #666666">학습시간</div>
                <div class="w-50 text-center fs-5 fw-bold">120시간 50분</div>
              </div>
            </div>
            <div class="vh5 w-100">
              <div class="w-100 vh5 d-sm-flex justify-content-center">
                <div class="w-50 text-center fs-5 fw-bold" style="color: #666666">관심분야</div>
                <div class="w-50 text-center fs-5 fw-bold">Java, Spring Boot, JPA</div>
              </div>
            </div>
          </div>
        </div>

        <div class="w100 h5 d-sm-flex justify-content-center">
          <div class="d-sm-flex justify-content-center w-75">

            <div class="d-sm-flex justify-content-center align-items-center m-auto" @click="controlOption(0)">
              <div class="mx-1">
                <svg class="bi bi-file-text" fill="currentColor" height="24"
                     viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg" :class="{changeBold:isProfileOptionState[0]==1,changeUnBold:isProfileOptionState[0]==0}">
                  <path
                      d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                  <path
                      d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                </svg>
              </div>
              <div :class="{changeBold:isProfileOptionState[0]==1,changeUnBold:isProfileOptionState[0]==0}">게시글</div>
            </div>


            <div class="d-sm-flex justify-content-center align-items-center m-auto" @click="controlOption(1)">
              <div class="mx-1">
                <svg class="bi bi-save" fill="currentColor" height="24" viewBox="0 0 16 16"
                     width="24" xmlns="http://www.w3.org/2000/svg" :class="{changeBold:isProfileOptionState[1]==1,changeUnBold:isProfileOptionState[1]==0}">
                  <path
                      d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                </svg>
              </div>
              <div class="mx-1" :class="{changeBold:isProfileOptionState[1]==1,changeUnBold:isProfileOptionState[1]==0}">보관함</div>
            </div>


            <div class="d-sm-flex justify-content-center align-items-center m-auto" @click="controlOption(2)">
              <div class="mx-1">
                <svg class="bi bi-star" fill="currentColor" height="24" :class="{changeBold:isProfileOptionState[2]==1,changeUnBold:isProfileOptionState[2]==0}" viewBox="0 0 16 16"
                     width="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
              </div>
              <div class="mx-1" :class="{changeBold:isProfileOptionState[2]==1,changeUnBold:isProfileOptionState[2]==0}">즐겨찾기</div>
            </div>


            <div class="d-sm-flex justify-content-center align-items-center m-auto" @click="controlOption(3)">
              <div class="mx-1">
                <svg class="bi bi-people" fill="currentColor" height="24" :class="{changeBold:isProfileOptionState[3]==1,changeUnBold:isProfileOptionState[3]==0}" viewBox="0 0 16 16"
                     width="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                </svg>
              </div>
              <div class="mx-1" :class="{changeBold:isProfileOptionState[3]==1,changeUnBold:isProfileOptionState[3]==0}">그룹</div>
            </div>


            <div class="d-sm-flex justify-content-center align-items-center m-auto" @click="controlOption(4)">
              <div class="mx-1">
                <svg class="bi bi-graph-down" fill="currentColor" height="24" :class="{changeBold:isProfileOptionState[4]==1,changeUnBold:isProfileOptionState[4]==0}"
                     viewBox="0 0 16 16" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h1v15h15v1H0V0Zm14.817 11.887a.5.5 0 0 0 .07-.704l-4.5-5.5a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61 4.15 5.073a.5.5 0 0 0 .704.07Z"
                        fill-rule="evenodd"/>
                </svg>
              </div>
              <div class="mx-1" :class="{changeBold:isProfileOptionState[4]==1,changeUnBold:isProfileOptionState[4]==0}">통계</div>
            </div>
          </div>
        </div>
        <div class="w100 vh45 scroll overflow-y-scroll">
          <ProfileMain v-if="isProfileOptionState[0]==1"></ProfileMain>
          <ProfileSave v-if="isProfileOptionState[1]==1"></ProfileSave>
          <ProfileStar v-if="isProfileOptionState[2]==1"></ProfileStar>
          <ProfileGroup v-if="isProfileOptionState[3]==1"></ProfileGroup>
          <ProfileStatic v-if="isProfileOptionState[4]==1"></ProfileStatic>
        </div>
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
import ProfileMain from "@/views/profiles/ProfileMain.vue";
import ProfileSave from "@/views/profiles/ProfileSave.vue";
import ProfileStar from "@/views/profiles/ProfileStar.vue";
import ProfileGroup from "@/views/profiles/ProfileGroup.vue";
import ProfileStatic from "@/views/profiles/ProfileStatic.vue";


export default {
  name: 'Profile',
  components: {
    ProfileStatic,
    ProfileGroup, ProfileStar, ProfileSave, ProfileMain, Rank, Star, Chat, Group, Search, Notify},
  data() {
    return {
      isSideHovered: false,
      isSideViewed: false,
      isPostViewed: false,
      isSidebarState: [0, 0, 0, 0, 0, 0, 0],
      isProfileOptionState: [1, 0, 0, 0, 0],
      isSidebarFrom: 0,
      isOptionFrom:0,
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
    controlOption(to) {
      this.isProfileOptionState[this.isOptionFrom] = 0;
      this.isProfileOptionState[to] = 1;
      this.isOptionFrom = to;
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
    width: 20vw;
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

.sidebar, .mainbar {
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

.changeUnBold{
  color: #CDCDCD;
}
.changeBold{
  color:#5B5B5B;
}
</style>
