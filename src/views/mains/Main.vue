<template>

    <div class="vw100 vh100 d-sm-flex ">
        <!-- sidebar -->
        <div class="sidebar vw5 vh100" style="background-color: #012060" @mouseover="show=1" @mouseleave="show=0">
            <div class="vh75 row align-self-center justify-content-center mt-5">
                <div class="text-center">
                    <router-link to="/main" class="d-sm-flex justify-content-center align-items-center" style="color:white;">
                        <img :src="require('@/assets/images/home_fill.png')" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert();">
                        <transition name="bounce"><div v-if="show==1" class="m-auto pe-3 fs-5">홈</div></transition>
                    </router-link>
                </div>

                <div class="text-center">
                    <router-link to="/notify" class="d-sm-flex justify-content-center align-items-center" style="color:white">
                        <img :src="require('@/assets/images/notification.png')" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce"><div v-if="show==1" class="m-auto pe-3 fs-5">알림</div></transition>
                    </router-link>
                </div>

                <div class="text-center">
                    <router-link to="/search" class="d-sm-flex justify-content-center align-items-center" style="color:white">
                        <img :src="require('@/assets/images/search.png')" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce"><div v-if="show==1" class="m-auto pe-3 fs-5">검색</div></transition>
                    </router-link>
                </div>

                <div class="text-center">
                    <router-link to="/group" class="d-sm-flex justify-content-center align-items-center" style="color:white">
                        <img :src="require('@/assets/images/group.png')" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce"><div v-if="show==1" class="m-auto pe-3 fs-5">그룹</div></transition>
                    </router-link>
                </div>

                <div class="text-center">
                    <router-link to="/chat" class="d-sm-flex justify-content-center align-items-center" style="color:white">
                        <img :src="require('@/assets/images/chat.png')" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce"><div v-if="show==1" class="m-auto pe-3 fs-5">채팅</div></transition>
                    </router-link>
                </div>

                <div class="text-center">
                    <router-link to="/star" class="d-sm-flex justify-content-center align-items-center" style="color:white">
                        <img :src="require('@/assets/images/star.png')" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce"><div v-if="show==1" class="m-auto pe-3 fs-5">친구</div></transition>
                    </router-link>
                </div>

                <div class="text-center">
                    <router-link to="/rank" class="d-sm-flex justify-content-center align-items-center" style="color:white">
                        <img :src="require('@/assets/images/ranking.png')" class="m-auto" style="width: 1.5vw; height: 1.5vw; filter: invert()">
                        <transition name="bounce"><div v-if="show==1" class="m-auto pe-3 fs-5">랭킹</div></transition>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- mainbar -->
        <div class="vw70 vh100 d-sm-flex justify-content-center mainbar" style="background-color: white">
            <div class="vw50 vh100 overflow-y-scroll scroll p-3">
                <!-- post -->
                <router-link to="/post">
                <div class="w-100 d-sm-flex justify-content-center my-4" style="border-radius: 15px;">
                    <div class="vw50 vh50" style="background-color: #F9F9F9">
                        <div class="header w-100 vh5 d-sm-flex align-items-center ps-4" style="background-color: #012060; border-radius: 10px 10px 0 0">
                            <div style="width: 2vw"><img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; filter: invert(); width: 1.5vw; height: 1.5vw;"></div>
                            <div class="fw-bold" style="color:white; width: 4vw;">박정빈</div>
                            <div style="color:lightgray; font-size: 1rem; width: 4vw;"> 30분전</div>
                        </div>

                        <div class="body vh45 w-100 pe-5" style="border: lightgray 1px solid; border-radius: 0px 0px 10px 10px">
                            <div class="vh15 w-100 d-sm-flex align-items-center">
                                <div class="ms-5">
                                    <div class="fs-1 fw-bold">JAVA + SPRING BOOT</div>
                                    <div class="fs-3 fw-bold" style="color: gray">Chapter 1: 개요</div>
                                </div>
                            </div>
                            <div class="vh25 w-100">
                                <div class="ms-5">
                                    <div class="fs-5">SpringBoot API
                                        Chapter 3 [API 개발 고급(2)]
                                        컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)SpringBoot API
                                        Chapter 3 [API 개발 고급(2)]
                                        컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)SpringBoot API
                                        Chapter 3 [API 개발 고급(2)]
                                        컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)</div>
                                </div>
                            </div>
                            <div class="vh5 w-100">
                                <div class="ms-5 d-sm-flex justify-content-between">
                                    <div class="d-sm-flex justify-content-center">
                                        <div class="mx-1 fw-bold">#Java</div>
                                        <div class="mx-1 fw-bold">#Spring</div>
                                        <div class="mx-1 fw-bold">#JPA</div>
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
                </router-link>

                <!-- post -->
                <router-link to="/post">
                <div class="w-100 d-sm-flex justify-content-center my-4" style="border-radius: 15px;">
                    <div class="vw50 vh50" style="background-color: #F9F9F9">
                        <div class="header w-100 vh5 d-sm-flex align-items-center ps-4" style="background-color: #012060; border-radius: 10px 10px 0 0">
                            <div style="width: 2vw"><img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; filter: invert(); width: 1.5vw; height: 1.5vw;"></div>
                            <div class="fw-bold" style="color:white; width: 4vw;">박정빈</div>
                            <div style="color:lightgray; font-size: 1rem; width: 4vw;"> 30분전</div>
                        </div>

                        <div class="body vh45 w-100 pe-5" style="border: lightgray 1px solid; border-radius: 0px 0px 10px 10px">
                            <div class="vh15 w-100 d-sm-flex align-items-center">
                                <div class="ms-5">
                                    <div class="fs-1 fw-bold">JAVA + SPRING BOOT</div>
                                    <div class="fs-3 fw-bold" style="color: gray">Chapter 1: 개요</div>
                                </div>
                            </div>
                            <div class="vh25 w-100">
                                <div class="ms-5">
                                    <div class="fs-5">SpringBoot API
                                        Chapter 3 [API 개발 고급(2)]
                                        컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)SpringBoot API
                                        Chapter 3 [API 개발 고급(2)]
                                        컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)SpringBoot API
                                        Chapter 3 [API 개발 고급(2)]
                                        컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)</div>
                                </div>
                            </div>
                            <div class="vh5 w-100">
                                <div class="ms-5 d-sm-flex justify-content-between">
                                    <div class="d-sm-flex justify-content-center">
                                        <div class="mx-1 fw-bold">#Java</div>
                                        <div class="mx-1 fw-bold">#Spring</div>
                                        <div class="mx-1 fw-bold">#JPA</div>
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
                </router-link>
            </div>
        </div>



        <!-- profilebar -->
        <div class="vw25 vh100 p-5" style="background-color: #EEEEEE">
            <div class="w-100 vh60 d-sm-flex justify-content-center my-1" style="border:2px solid #B6B6B6; border-radius: 10px;">
                <div class="w-100">
                    <div class="w-100 vh5 d-sm-flex justify-content-end align-items-center px-3"><router-link to="/a"><img :src="require('@/assets/images/gear.png')" style="width: 1.5vw; height: 1.5vw;"></router-link></div>
                    <div class="w-100 vh20 d-sm-flex justify-content-center align-items-center">
                        <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 8vw; height: 8vw;">
                    </div>
                    <div class="w-100 vh5 d-sm-flex justify-content-center align-items-center">
                        <img :src="require('@/assets/images/medal.png')" style="width: 1.5vw; height: 1.5vw">
                        <div class="fs-3 fw-bold">노래하는 박정빈</div>
                    </div>
                    <div class="vh15 w-100 mx-4 my-4">
                        <div class="w-100 vh5 d-sm-flex justify-content-center">
                            <div class="w-25 text-center fs-5 fw-bold" style="color: #666666">직무</div>
                            <div class="w-75 text-center fs-5 fw-bold">백엔드 개발자</div>
                        </div>
                        <div class="w-100 vh5 d-sm-flex justify-content-center">
                            <div class="w-25 text-center fs-5 fw-bold" style="color: #666666">관심분야</div>
                            <div class="w-75 text-center fs-5 fw-bold">Java, Spring, JPA</div>
                        </div>
                        <div class="w-100 vh5 d-sm-flex justify-content-center">
                            <div class="w-25 text-center fs-5 fw-bold" style="color: #666666">공부시간</div>
                            <div class="w-75 text-center fs-5 fw-bold">120시간 50분</div>
                        </div>
                        <div class="w-100 vh5 d-sm-flex justify-content-center">
                            <div class="w-25 text-center fs-5 fw-bold" style="color: #666666">공부효율</div>
                            <div class="w-75 text-center fs-5 fw-bold">74%</div>
                        </div>
                    </div>
                    <div class="w-100 vh10 mt-4 d-sm-flex justify-content-end align-items-center">
                        <div class="w-100 d-sm-flex justify-content-center">
                            <button class="m-auto vh5 fs-5 fw-bold" style="border: none; background-color: #D9D9D9; border-radius: 10px; width: 9vw;">게시글 작성하기</button>
                            <button class="m-auto vh5 fs-5 fw-bold" style="border: none; background-color: #D9D9D9; border-radius: 10px; width: 9vw;" >프로필 더보기</button>
                        </div>

                    </div>
                </div>
            </div>

            <div class="w-100 vh30 d-sm-flex justify-content-center my-3" style="border:2px solid #B6B6B6; border-radius: 10px;">
                <div class="w-100 vh30">
                    <div class="w-100 d-sm-flex justify-content-center mt-3" style="height: 6vh">
                        <div class="vw10 h-100 d-sm-flex align-items-center"><div class="fw-bold text-center" style="font-size: 3rem">17:20:20</div></div>
                        <div class="d-sm-flex justify-content-center w-25">
                            <div class="m-auto"><button @click="$router.push('/pause')" style="border: 0px;"><img style="width: 1.5vw; height: 1.5vw;" :src="require('@/assets/images/pause.png')"></button></div>
                            <div class="m-auto"><button @click="$router.push('/stop')" style="border: 0px;"><img style="width: 1.5vw; height: 1.5vw;" :src="require('@/assets/images/stop.png')"></button></div>
                        </div>
                    </div>
                    <div class="vh5 w-100 fw-bold text-center" style="color: #012060">30분뒤 ‘열공’ 상태로 전환됩니다</div>
                    <div class="vh5 w-100">
                        <div class="w-100 vh5 d-sm-flex justify-content-center">
                            <div class="w-50 text-center fs-5 fw-bold" style="color: #666666">오늘의 공부시간</div>
                            <div class="w-50 text-center fs-5 fw-bold">120시간 50분</div>
                        </div>
                    </div>
                    <div class="vh5 w-100">
                        <div class="w-100 vh5 d-sm-flex justify-content-center">
                            <div class="w-50 text-center fs-5 fw-bold" style="color: #666666">오늘의 공부효율</div>
                            <div class="w-50 text-center fs-5 fw-bold">74%</div>
                        </div>
                    </div>
                    <div class="vh5 w-100">
                        <div class="w-100 vh5 d-sm-flex justify-content-center">
                            <div class="w-50 text-center fs-5 fw-bold" style="color: #666666">오늘 나는</div>
                            <div class="w-50 text-center fs-5 fw-bold">평균이상</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>


<script>
export default {
    name: 'Main',
    data() {
        return {
            show: 0
        };
    },
}

</script>


<style scoped>

.bounce-enter-active {
    animation: bounce-in 0.4s;
}
.bounce-leave-active {
    animation: bounce-in 0s reverse;
}


@keyframes bounce-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}


html,body{
    height: 100%;
}

a {
    text-decoration: none;
    color: black;
}

.sidebar,.mainbar {
    transition: all 0.4s;
}


.sidebar:hover{
    width: 10vw;
}
.sidebar:hover + .mainbar{
    width: 65vw;
}
</style>
