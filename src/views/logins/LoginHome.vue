<template>
    <div class="mt-4">
        <div class="w100 fs-5 fw-bold">로그인</div>
        <form class="w100">
            <div class="form-floating my-2">
                <input type="email" class="form-control"  id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">이메일</label>
            </div>

            <div class="form-floating my-2">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">비밀번호</label>
            </div>

            <div class="form-check my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    로그인 정보 저장
                </label>
            </div>
            <button class="btn btn-primary w100 py-2 fw-bold" type="submit" style="background-color: #012060" @click="$router.push('/')">로그인</button>
        </form>

        <div class="d-sm-flex my-2 w100">
            <p class="m-auto fw-bold" style="color: #FF0000">로그인 정보를 다시 확인해주세요</p>
        </div>

        <div class="d-sm-flex my-3 w100">
            <div class="m-auto"><router-link to="/join">회원가입</router-link></div>
            <div class="m-auto"><router-link to="/find-id">아이디 찾기</router-link></div>
            <div class="m-auto"><router-link to="/find-pw">비밀번호 찾기</router-link></div>
        </div>

        <div class="d-sm-flex my-5 m-auto w100">
            <div class="m-auto w25"><img @click="$router.push('/social-join')" class="w100" :src="require('@/assets/images/btnG_축약형.png')"></div>
            <div class="m-auto w25"><img @click="$router.push('/social-join')" class="w100" :src="require('@/assets/images/btnG_축약형.png')"></div>
            <div class="m-auto w25"><img @click="$router.push('/social-join')" class="w100" :src="require('@/assets/images/btnG_축약형.png')"></div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'LoginHome'
}
</script>

<style scoped>
a{
  text-decoration: none;
  color: #B5B5B5;
}
</style>