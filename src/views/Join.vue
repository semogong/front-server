<template>
    <div class="row w-100 h-100">
        <div class="m-auto form-signin align-self-center w-100">
            <div class="d-sm-flex mb-4"><a href="/login"><img :src="require('@/assets/logo.png')" class="m-auto"></a></div>

            <form>
                <div class="form-floating my-1">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                    <label for="floatingInput">이메일</label>
                </div>

                <div class="form-floating my-1">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">비밀번호</label>
                </div>

                <div class="form-floating my-1">
                    <input type="password" class="form-control" id="" placeholder="Nickname">
                    <label for="floatingPassword">닉네임</label>
                </div>

                <div>
                    <button class="btn btn-primary w-25 py-2 fw-bold" type="submit" style="background-color: #012060">취소</button>
                    <button class="btn btn-primary w-75 py-2 fw-bold" type="submit" style="background-color: #012060">다음</button>
                </div>
            </form>

            <div class="d-sm-flex my-3 w-100"><p class="m-auto fw-bold" style="color: #FF0000">로그인 정보를 다시 확인해주세요</p></div>

        </div>
    </div>
</template>



<script>
export default {
    name: 'Join'
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
    max-width: 25vw;
    padding: 1rem;
}
</style>