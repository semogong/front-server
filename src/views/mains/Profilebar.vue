<template>
    <div class="vw20 vh100 p-4 ms-sm-auto backcolor-lightgray">
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
                        <button class="mx-3 vh5 fw-bold" style="border: none; background-color: #D9D9D9; border-radius: 5px; width: 7vw; font-size: 1.1rem">게시글 작성하기</button>
                        <button class="mx-3 vh5 fw-bold" style="border: none; background-color: #D9D9D9; border-radius: 5px; width: 7vw; font-size: 1.1rem"  @click="$router.push('/profile')">프로필 더보기</button>
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
                <div class="vh5 w-100 fw-bold text-center" style="color: #0038FF">30분뒤 ‘열공’ 상태로 전환됩니다</div>
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
</template>


<script>
export default {
    name: 'Profilevar',
}

</script>

<style scoped>

</style>
