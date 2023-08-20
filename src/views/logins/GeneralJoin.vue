<template>
    <div class="mt-4">
        <div class="w100 fs-5 fw-bold">일반 회원가입</div>

        <form class="w100 h50">
            <div class="form-floating my-2">
                <input type="email" class="form-control"  id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">이메일</label>
            </div>

            <div class="form-floating my-2">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">비밀번호</label>
            </div>

            <div class="form-floating my-2">
                <input type="password" class="form-control" id="floatingInput" placeholder="Password">
                <label for="floatingPassword">닉네임</label>
            </div>

            <div class="d-sm-flex justify-content-between my-3">
                <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 35%;" @click="$router.push('/login')">취소</button>
                <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 60%;" @click="$router.push('/auth')">다음</button>
            </div>
        </form>

        <div class="d-sm-flex w100">
            <p class="m-auto fw-bold" style="color: #FF0000">로그인 정보를 다시 확인해주세요</p>
        </div>
    </div>
</template>



<script>
export default {
    name: 'GeneralJoin'
}
</script>

<style scoped>
</style>