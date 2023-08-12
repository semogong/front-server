<template>
    <div class="row w-100 h-100">
        <div class="m-auto align-self-center w-25" style="height: 60%;">
            <div class="w-100 mb-4">
                <a href="/login"><img :src="require('@/assets/images/logo.png')" class="w-100"></a>
            </div>

            <div class="w-100">
                <h5 class="fw-bold">비밀번호 찾기</h5>
            </div>

            <form class="w-100 h-25">
                <div class="form-floating my-2">
                    <input type="password" class="form-control" id="floatingInput" placeholder="Password">
                    <label for="floatingPassword">이메일</label>
                </div>

                <div class="d-sm-flex justify-content-between my-3">
                    <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 35%;" @click="$router.push('/login')">취소</button>
                    <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 60%;" @click="$router.push('/login')">확인</button>
                </div>
            </form>

            <div class="d-sm-flex w-100">
                <p class="m-auto fw-bold" style="color: #0038FF">이메일로 인증정보를 전송했습니다</p>
            </div>
        </div>
    </div>
</template>




<script>
export default {
    name: 'findPW'
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

.form-signin {
    max-width: 400px;
    padding: 1rem;
}
</style>