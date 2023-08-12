<template>
    <div class="d-sm-flex w-100 h-100">

        <div class="w-25" style="background-color: #b6b6b6">
            <div class="sidebar h-100" style="width: 20%;">
                <div class="h-75 row align-self-center">
                    <router-link to="/main" class="d-sm-flex w-100">
                        <div class="d-sm-flex w-100">
                            <div class="m-auto"><img :src="require('@/assets/images/home.png')" style="width: 30px; height: 30px; filter: invert()"></div>
                            <transition name="bounce" class="m-auto">
                                <div v-if="show==1"  style="color: white; width: 35%;">홈</div>
                            </transition>
                        </div>
                    </router-link>

                    <router-link to="/notify" class="d-sm-flex w-100">
                        <div class="d-sm-flex w-100">
                            <div class="m-auto"><img :src="require('@/assets/images/notification.png')" style="width: 30px; height: 30px; filter: invert()"></div>
                            <transition name="bounce" class="m-auto">
                                <div v-if="show==1"  style="color: white; width: 35%;">알림</div>
                            </transition>
                        </div>
                    </router-link>

                    <router-link to="/search" class="d-sm-flex w-100">
                        <div class="d-sm-flex w-100">
                            <div class="m-auto"><img :src="require('@/assets/images/search.png')" style="width: 30px; height: 30px; filter: invert()"></div>
                            <transition name="bounce" class="m-auto">
                                <div v-if="show==1"  style="color: white; width: 35%;">검색</div>
                            </transition>
                        </div>
                    </router-link>

                    <router-link to="/group" class="d-sm-flex w-100">
                        <div class="d-sm-flex w-100">
                            <div class="m-auto"><img :src="require('@/assets/images/group.png')" style="width: 30px; height: 30px; filter: invert()"></div>
                            <transition name="bounce" class="m-auto">
                                <div v-if="show==1"  style="color: white; width: 35%;">그룹</div>
                            </transition>
                        </div>
                    </router-link>

                    <router-link to="/chat" class="d-sm-flex w-100">
                        <div class="d-sm-flex w-100">
                            <div class="m-auto"><img :src="require('@/assets/images/messenger.png')" style="width: 30px; height: 30px; filter: invert()"></div>
                            <transition name="bounce" class="m-auto">
                                <div v-if="show==1"  style="color: white; width: 35%;">채팅</div>
                            </transition>
                        </div>
                    </router-link>

                    <router-link to="/star" class="d-sm-flex w-100">
                        <div class="d-sm-flex w-100">
                            <div class="m-auto"><img :src="require('@/assets/images/star.png')" style="width: 30px; height: 30px; filter: invert()"></div>
                            <transition name="bounce" class="m-auto">
                                <div v-if="show==1"  style="color: white; width: 35%;">친구</div>
                            </transition>
                        </div>
                    </router-link>

                    <router-link to="/rank" class="d-sm-flex w-100">
                        <div class="d-sm-flex w-100">
                            <div class="m-auto"><img :src="require('@/assets/images/ranking.png')" style="width: 30px; height: 30px; filter: invert()"></div>
                            <transition name="bounce" class="m-auto">
                                <div v-if="show==1"  style="color: white; width: 35%;">랭킹</div>
                            </transition>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="w-50 d-sm-flex justify-content-center" style="background-color: white">
            <div class="h-100 d-sm-flex justify-content-center w-100 overflow-y-scroll mainbar">
                <div class="posts" style="background-color: white; width: 90%;">

                    <div class="w-100 h-50 my-5"> <!-- post -->
                        <div class="header w-100 d-sm-flex justify-content-start align-items-center" style="height: 10%; background-color: #012060; border-radius: 10px 10px 0 0 ">
                            <div class="ms-4" style="width: 3%; height: 55%;"><img class="w-100 h-100" :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; filter: invert()"></div>
                            <div class="ms-2 fw-bold" style="color:white;">박정빈</div>
                            <div class="ms-4" style="color:lightgray; font-size: 14px;"> 30분전</div>
                        </div>
                        <div class="body pt-4 px-5" style="background-color: #F9F9F9; height: 90%; border-radius: 0 0 15px 15px;">
                            <div class="fw-bold fs-1" style="height: 15%;">JAVA + SPRING BOOT</div>
                            <div class="fw-bold fs-3" style="height: 15%; color: #BBBBBB;">Chapter 1: 개요</div>
                            <div class="fw-bolder" style="height: 60%; color: BLACK;">
                                SpringBoot API
                                Chapter 3 [API 개발 고급(2)]
                                컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)
                                React와 마찬가지로 클라이언트와 서버 상태를 따로 관리해 보려고 하는데 이게 잘못된 접근일까요? 다들 서버, 클라이언트를 분리 하셔서 프로젝트를 진행하시는지 아니면 둘다 구분없이 사용하시는지 궁금합니다.
                                안녕하세요 현재 백엔드 개발자를 목표로 공부하고 있는 비전공자 취준생입니다.

                                토이 프로젝트를 진행하면서 실력을 성장시키고 싶은데, 혼자 진행해야 하다보니 html, css, js보다 프론트엔드 프레임워크를 배워보고 싶은 생각이 들었습니다.

                                질문 1.
                                프론트엔드를 희망하지 않아도 리액트를 배우는 것이 좋을까요?? (개인프로젝트 진행용)

                                질문2.
                                svelte(svelteKit)이라는 프레임워크가 끌리는데 리액트나, 뷰를 놔두고 선택해도 될까요..??

                                아직 공부를 한지 얼마 되지 않아서 문장이 매끄럽지 못한점 죄송합니다.

                            </div>
                            <div class="d-sm-flex justify-content-between" style="height: 10%; color:#BBBBBB">
                                <div class="d-sm-flex justify-content-center">
                                    <div class="mx-1 fw-bold">#Java</div>
                                    <div class="mx-1 fw-bold">#Spring</div>
                                    <div class="mx-1 fw-bold">#JPA</div>
                                </div>
                                <div class="d-sm-flex justify-content-center" style="color: #BBBBBB">
                                    <div class="mx-1 fw-bold">조회 10</div>
                                    <div class="mx-1 fw-bold">추천 9</div>
                                    <div class="mx-1 fw-bold">저장 1</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-100 h-50 my-5"> <!-- post -->
                        <div class="header w-100 d-sm-flex justify-content-start align-items-center" style="height: 10%; background-color: #012060; border-radius: 10px 10px 0 0 ">
                            <div class="ms-4" style="width: 3%; height: 55%;"><img class="w-100 h-100" :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; filter: invert()"></div>
                            <div class="ms-2 fw-bold" style="color:white;">박정빈</div>
                            <div class="ms-4" style="color:lightgray; font-size: 14px;"> 30분전</div>
                        </div>
                        <div class="body pt-4 px-5" style="background-color: #F9F9F9; height: 90%; border-radius: 0 0 15px 15px;">
                            <div class="fw-bold fs-1" style="height: 15%;">JAVA + SPRING BOOT</div>
                            <div class="fw-bold fs-3" style="height: 15%; color: #BBBBBB;">Chapter 1: 개요</div>
                            <div class="fw-bolder" style="height: 60%; color: BLACK;">
                                SpringBoot API
                                Chapter 3 [API 개발 고급(2)]
                                컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)
                                React와 마찬가지로 클라이언트와 서버 상태를 따로 관리해 보려고 하는데 이게 잘못된 접근일까요? 다들 서버, 클라이언트를 분리 하셔서 프로젝트를 진행하시는지 아니면 둘다 구분없이 사용하시는지 궁금합니다.
                                안녕하세요 현재 백엔드 개발자를 목표로 공부하고 있는 비전공자 취준생입니다.

                                토이 프로젝트를 진행하면서 실력을 성장시키고 싶은데, 혼자 진행해야 하다보니 html, css, js보다 프론트엔드 프레임워크를 배워보고 싶은 생각이 들었습니다.

                                질문 1.
                                프론트엔드를 희망하지 않아도 리액트를 배우는 것이 좋을까요?? (개인프로젝트 진행용)

                                질문2.
                                svelte(svelteKit)이라는 프레임워크가 끌리는데 리액트나, 뷰를 놔두고 선택해도 될까요..??

                                아직 공부를 한지 얼마 되지 않아서 문장이 매끄럽지 못한점 죄송합니다.

                            </div>
                            <div class="d-sm-flex justify-content-between" style="height: 10%; color:#BBBBBB">
                                <div class="d-sm-flex justify-content-center">
                                    <div class="mx-1 fw-bold">#Java</div>
                                    <div class="mx-1 fw-bold">#Spring</div>
                                    <div class="mx-1 fw-bold">#JPA</div>
                                </div>
                                <div class="d-sm-flex justify-content-center" style="color: #BBBBBB">
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

        <div class="profilebar w-25 p-5 h-100" style="background-color: #EEEEEE">
            <div class="profile_top p-3 mt-3" style="height: 70%; background-color: #EEEEEE; border: 2px solid #B6B6B6; border-radius: 10px;">
                <div class="set d-sm-flex justify-content-end" style="height: 5%;">
                    <img :src="require('@/assets/images/gear.png')" @click="$router.push('/profile')">
                </div>
                <div class="img d-sm-flex justify-content-center" style="height: 25%;">
                    <div style="border-radius: 50%; width: 40%; height: 100%;">
                        <img :src="require('@/assets/images/profile-user.png')" class="w-100 h-100" style="border-radius: 50%;">
                    </div>
                </div>
                <div class="name w-100 mt-2" style="height: 10%;">
                    <div class="w-100 h-100 d-sm-flex justify-content-center">
                        <img :src="require('@/assets/images/medal.png')" style="width: 10%; height: 60%;">
                        <div class="fs-3 fw-bold">박정빈</div>
                    </div>
                </div>

                <div class="info w-100 p-2" style="height: 45%;">
                    <div class="d-sm-flex justify-content-center w-100 my-3">
                        <div class="w-50 text-lg-start fs-5 fw-bold" style="color:gray">직무</div>
                        <div class="w-50 text-center fs-5 fw-bold">백엔드 개발자</div>
                    </div>
                    <div class="d-sm-flex justify-content-center w-100 my-3">
                        <div class="w-50 text-lg-start fs-5 fw-bold" style="color:gray">관심분야</div>
                        <div class="w-50 text-center fs-5 fw-bold">Spring, Java, JPA</div>
                    </div>
                    <div class="d-sm-flex justify-content-center w-100 my-3">
                        <div class="w-50 text-lg-start fs-5 fw-bold" style="color:gray">총 공부시간</div>
                        <div class="w-50 text-center fs-5 fw-bold">120시간 50분</div>
                    </div>
                    <div class="d-sm-flex justify-content-center w-100 my-3">
                        <div class="w-50 text-lg-start fs-5 fw-bold" style="color:gray">총 공부효율</div>
                        <div class="w-50 text-center fs-5 fw-bold">100%</div>
                    </div>
                    <div class="d-sm-flex justify-content-center w-100 my-3">
                        <div class="w-50 text-lg-start fs-5 fw-bold" style="color:gray">자기소개</div>
                        <div class="w-50 text-center fw-bold" style="font-size: 17px;">개발자 박승일입니다</div>
                    </div>

                </div>

                <div class="add" style="height: 40%;">
                    <div class="d-sm-flex justify-content-center w-100 h-50 my-3">
                        <div class="w-50 h-50 mx-1"><button @click="$router.push('/post')" class="w-100 h-100 fs-5 fw-bold" style="border-radius: 5px; border: 0px; background-color: #D9D9D9;">게시글 작성</button></div>
                        <div class="w-50 h-50 mx-1"><button @click="$router.push('/profile')" class="w-100 h-100 fs-5 fw-bold" style="border-radius: 5px; border: 0px; background-color: #D9D9D9">프로필 더보기</button></div>
                    </div>
                </div>
            </div>

            <div class="profile_bottom p-2 my-4" style="height: 25%; background-color: #EEEEEE; border: 2px solid #B6B6B6; border-radius: 10px;">
                <div class="d-sm-flex justify-content-center w-100">
                    <div class="w-75 d-sm-flex justify-content-center">
                        <div class="fs-1 fw-bold w-75">10:12:14</div>
                    </div>
                    <div class="d-sm-flex justify-content-center w-50">
                        <div class="m-auto"><button @click="$router.push('/pause')" style="border: 0px;"><img class="w-50" :src="require('@/assets/images/pause.png')"></button></div>
                        <div class="m-auto"><button @click="$router.push('/stop')" style="border: 0px;"><img class="w-50" :src="require('@/assets/images/stop.png')"></button></div>
                    </div>
                </div>

                <div class="w-100 ms-4 d-sm-flex justify-content-start">
                    <div class="fw-bold" style="color: #0042CA;">30분뒤 ‘열공’ 상태로 전환됩니다</div>
                </div>


                <div class="info w-100 p-2 ms-3">
                    <div class="d-sm-flex justify-content-center w-100 my-1">
                        <div class="w-50 text-lg-start fs-5 fw-bold" style="color:gray">오늘의 공부 시간</div>
                        <div class="w-50 text-center fs-5 fw-bold">13시간 50분</div>
                    </div>
                    <div class="d-sm-flex justify-content-center w-100 my-1">
                        <div class="w-50 text-lg-start fs-5 fw-bold" style="color:gray">오늘의 공부 효율</div>
                        <div class="w-50 text-center fs-5 fw-bold">88%</div>
                    </div>
                    <div class="d-sm-flex justify-content-center w-100 my-1">
                        <div class="w-50 fs-5 fw-bold text-center" style="color:gray">오늘 나는</div>
                        <div class="w-50 text-center fs-5 fw-bold">평균이상</div>
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
            show: false,
            value:0
        };
    },
}

</script>


<style scoped>



html,
body {
    height: 100%;
}

a {
    text-decoration: none;
    color: #B5B5B5;
}

.sidebar {
    background-color: #012060;
}

</style>

<style>
.mainbar::-webkit-scrollbar {
    width: 10px;  /* 스크롤바의 너비 */
}

.mainbar::-webkit-scrollbar-thumb {
    background: #8B8B8B; /* 스크롤바의 색상 */
    border-radius: 5px;
}

.mainbar::-webkit-scrollbar-track {
    background: #E3E3E3  /*스크롤바 뒷 배경 색상*/
}
</style>