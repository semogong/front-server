<template>

    <div class="vw100 vh100 d-sm-flex ">
        <!-- post -->
        <transition name="post">
            <router-view></router-view>
        </transition>

        <!-- sidebar -->
        <div class="sidebar vw5 vh100" style="background-color: #012060" @mouseover="isSideHovered=true"
             @mouseleave="isSideHovered=false" :class="{sidehover:!isSideViewed}">
            <div class="vh75 row align-self-center justify-content-center mt-5">
                <div class="text-center">
                    <div @click="isSideViewed=false,controlSidebr(0) ,$router.push('/')"
                         class="d-sm-flex justify-content-center align-items-center icon" style="color:white;">
                        <img :src="imgUrls0[this.isSidebar[0]]" class="m-auto"
                             style="width: 1.5vw; height: 1.5vw; filter: invert();">
                        <transition name="bounce" :class="{showtext:isSideViewed}">
                            <div v-if="isSideHovered" class="m-auto pe-3 fs-5">홈</div>
                        </transition>
                    </div>
                </div>

                <div class="text-center">
                    <div class="d-sm-flex justify-content-center align-items-center icon" style="color:white"
                         @click="isSideViewed=true,controlSidebr(1)">
                        <img :src="imgUrls1[this.isSidebar[1]]" class="m-auto"
                             style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce" :class="{showtext:isSideViewed}">
                            <div v-if="isSideHovered" class="m-auto pe-3 fs-5">알림</div>
                        </transition>
                    </div>
                </div>

                <div class="text-center">
                    <div class="d-sm-flex justify-content-center align-items-center icon" style="color:white"
                         @click="isSideViewed=true,controlSidebr(2)">
                        <img :src="imgUrls2[this.isSidebar[2]]" class="m-auto"
                             style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce" :class="{showtext:isSideViewed}">
                            <div v-if="isSideHovered" class="m-auto pe-3 fs-5">검색</div>
                        </transition>
                    </div>
                </div>

                <div class="text-center">
                    <div class="d-sm-flex justify-content-center align-items-center icon" style="color:white"
                         @click="isSideViewed=true,controlSidebr(3)">
                        <img :src="imgUrls3[this.isSidebar[3]]" class="m-auto"
                             style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce" :class="{showtext:isSideViewed}">
                            <div v-if="isSideHovered" class="m-auto pe-3 fs-5">그룹</div>
                        </transition>
                    </div>
                </div>

                <div class="text-center">
                    <div class="d-sm-flex justify-content-center align-items-center icon" style="color:white"
                         @click="isSideViewed=true,controlSidebr(4)">
                        <img :src="imgUrls4[this.isSidebar[4]]" class="m-auto"
                             style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce" :class="{showtext:isSideViewed}">
                            <div v-if="isSideHovered" class="m-auto pe-3 fs-5">채팅</div>
                        </transition>
                    </div>
                </div>

                <div class="text-center">
                    <div class="d-sm-flex justify-content-center align-items-center icon" style="color:white"
                         @click="isSideViewed=true,controlSidebr(5)">
                        <img :src="imgUrls5[this.isSidebar[5]]" class="m-auto"
                             style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce" :class="{showtext:isSideViewed}">
                            <div v-if="isSideHovered" class="m-auto pe-3 fs-5">스타</div>
                        </transition>
                    </div>
                </div>

                <div class="text-center">
                    <div class="d-sm-flex justify-content-center align-items-center icon" style="color:white"
                         @click="isSideViewed=true,controlSidebr(6)">
                        <img :src="imgUrls6[this.isSidebar[6]]" class="m-auto"
                             style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce" :class="{showtext:isSideViewed}">
                            <div v-if="isSideHovered" class="m-auto pe-3 fs-5">랭킹</div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>


        <!-- sidebar detail -->
        <transition name="sidebar">
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
        <div class="w100 vh100 d-sm-flex justify-content-center mainbar">
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
                        <router-link to="/profile" class="d-sm-flex justify-content-center align-items-center m-auto">
                            <div class="d-sm-flex justify-content-center align-items-center m-auto">
                                <div class="mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16" style="color: #CDCDCD">
                                        <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                                    </svg>
                                </div>
                                <div style="color: #CDCDCD">게시글</div>
                            </div>
                        </router-link>

                        <router-link to="/profile-save" class="d-sm-flex justify-content-center align-items-center m-auto">
                            <div class="d-sm-flex justify-content-center align-items-center m-auto">
                                <div class="mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16" style="color: #CDCDCD">
                                        <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                                    </svg>
                                </div>
                                <div class="mx-1" style="color: #CDCDCD">보관함</div>
                            </div>
                        </router-link>

                        <router-link to="/profile-star" class="d-sm-flex justify-content-center align-items-center m-auto">
                            <div class="d-sm-flex justify-content-center align-items-center m-auto">
                                <div class="mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16" style="color: #CDCDCD">
                                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                                    </svg>
                                </div>
                                <div class="mx-1" style="color: #CDCDCD">즐겨찾기</div>
                            </div>
                        </router-link>


                        <router-link to="/profile-group" class="d-sm-flex justify-content-center align-items-center m-auto">
                            <div class="d-sm-flex justify-content-center align-items-center m-auto">
                                <div class="mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16" style="color: #CDCDCD">
                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                                    </svg>
                                </div>
                                <div class="mx-1" style="color: #CDCDCD">그룹</div>
                            </div>
                        </router-link>

                        <router-link to="/profile-static" class="d-sm-flex justify-content-center align-items-center m-auto">
                            <div class="d-sm-flex justify-content-center align-items-center m-auto">
                                <div class="mx-1" @click="$router.push('/profile-group')">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-graph-down" viewBox="0 0 16 16" style="color: #5B5B5B">
                                        <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 11.887a.5.5 0 0 0 .07-.704l-4.5-5.5a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61 4.15 5.073a.5.5 0 0 0 .704.07Z"/>
                                    </svg>
                                </div>
                                <div class="mx-1" style="color: #5B5B5B">통계</div>
                            </div>
                        </router-link>
                    </div>
                </div>

                <div class="w100 vh45 scroll overflow-y-scroll">
                    <div class="w100 h50 d-sm-flex justify-content-center my-3">
                        <div class="w70 h100 p-3" style="border-radius: 10px; background-color: #F3F3F3">
                            <div class="w100 h15 my-1 fw-bold fs-4 d-sm-flex align-items-center">JAVA + SPRING BOOT</div>
                            <div class="w100 h10 my-1 fw-bold fs-5 d-sm-flex align-items-center" style="color: #BBBBBB">Chapter 1: 개요</div>
                            <div class="w100 h50 my-1 d-sm-flex align-items-center">
                                SpringBoot API
                                Chapter 3 [API 개발 고급(2)]
                                컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)
                                SpringBoot API
                                Chapter 3 [API 개발 고급(2)]
                                컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)
                            </div>
                            <div class="w100 h15 fw-bold text-lg-end fs-5">
                                written by 박승일
                            </div>
                        </div>
                    </div>

                    <div class="w100 h50 d-sm-flex justify-content-center my-3">
                        <div class="w70 h100 p-3" style="border-radius: 10px; background-color: #F3F3F3">
                            <div class="w100 h15 my-1 fw-bold fs-4 d-sm-flex align-items-center">JAVA + SPRING BOOT</div>
                            <div class="w100 h10 my-1 fw-bold fs-5 d-sm-flex align-items-center" style="color: #BBBBBB">Chapter 1: 개요</div>
                            <div class="w100 h50 my-1 d-sm-flex align-items-center">
                                SpringBoot API
                                Chapter 3 [API 개발 고급(2)]
                                컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)
                                SpringBoot API
                                Chapter 3 [API 개발 고급(2)]
                                컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)
                            </div>
                            <div class="w100 h15 fw-bold text-lg-end fs-5">
                                written by 박승일
                            </div>
                        </div>
                    </div>
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

export default {
    name: 'ProfileStatic',
    components: {Rank, Star, Chat, Group, Search, Notify},
    data() {
        return {
            isSideHovered: false,
            isPostViewed: false,
            isSideViewed: false,
            isSidebar: [1, 0, 0, 0, 0, 0, 0],
            isSidebarFrom: 0,
            imgUrls0: [require('@/assets/images/home.png'), require('@/assets/images/home_fill.png')],
            imgUrls1: [require('@/assets/images/notification.png'), require('@/assets/images/notification_fill.png')],
            imgUrls2: [require('@/assets/images/search.png'), require('@/assets/images/search_fill.png')],
            imgUrls3: [require('@/assets/images/group.png'), require('@/assets/images/group_fill.png')],
            imgUrls4: [require('@/assets/images/chat.png'), require('@/assets/images/chat_fill.png')],
            imgUrls5: [require('@/assets/images/star.png'), require('@/assets/images/start_fill.png')],
            imgUrls6: [require('@/assets/images/ranking.png'), require('@/assets/images/ranking_fill.png')],

        };
    },
    methods: {
        controlSidebr(to) {
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

.sidebar, .mainbar {
    transition: all 0.4s;
    z-index: 0;
}

.showtext {
    display: none;
}

.sidehover:hover {
    width: 10vw;
}


.icon:hover {
    transform: scale(1.2);
}

.post {
    z-index: 1;
}
</style>
