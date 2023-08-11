<template>
    <div class="row w-100 h-100">
        <div class="m-auto align-self-center w-25" style="height: 60%;">
            <div class="w-100 mb-4">
                <a href="/login"><img :src="require('@/assets/logo.png')" class="w-100"></a>
            </div>

            <div class="w-100">
                <h5 class="fw-bold">로그인</h5>
            </div>

            <form class="w-100">
                <div class="form-floating my-2">
                    <input type="email" class="form-control"  id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">이메일</label>
                </div>

                <div class="form-floating my-2">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">비밀번호</label>
                </div>

                <div class="form-check text-start my-3">
                    <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        로그인 정보 저장
                    </label>
                </div>
                <button class="btn btn-primary w-100 py-2 fw-bold" type="submit" style="background-color: #012060" @click="$router.push('/main')">로그인</button>
            </form>

            <div class="d-sm-flex my-2 w-100">
                <p class="m-auto fw-bold" style="color: #FF0000">로그인 정보를 다시 확인해주세요</p>
            </div>

            <div class="d-sm-flex my-3 w-100">
                <div class="m-auto"><router-link to="/join">회원가입</router-link></div>
                <div class="m-auto"><router-link to="/find-id">아이디 찾기</router-link></div>
                <div class="m-auto"><router-link to="/find-pw">비밀번호 찾기</router-link></div>
            </div>

            <div class="d-sm-flex my-5 m-auto w-100">
                <div class="m-auto w-25"><a @click="$router.push('/social-join')"><img :src="require('@/assets/btnG_축약형.png')" class="w-100"></a></div>
                <div class="m-auto w-25"><a href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/"><img :src="require('@/assets/btnG_축약형.png')" class="w-100"></a></div>
                <div class="m-auto w-25"><a href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/"><img :src="require('@/assets/btnG_축약형.png')" class="w-100"></a></div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'Login'
}
</script>



<style>
html,
body {
    height: 100%;
}

a{
    text-decoration: none;
    color: #B5B5B5;
}


</style>