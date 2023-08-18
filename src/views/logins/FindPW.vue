<template>
    <div class="mt-4">
        <div class="w100 fs-5 fw-bold">비밀번호 찾기</div>

        <form class="w100 h25">
            <div class="form-floating my-2">
                <input type="password" class="form-control" id="floatingInput" placeholder="Password">
                <label for="floatingPassword">이메일</label>
            </div>

            <div class="d-sm-flex justify-content-between my-3">
                <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 35%;" @click="$router.push('/login')">취소</button>
                <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 60%;" @click="$router.push('/login')">확인</button>
            </div>
        </form>

        <div class="d-sm-flex w100">
            <p class="m-auto fw-bold" style="color: #0038FF">이메일로 인증정보를 전송했습니다</p>
        </div>
    </div>
</template>


<script>
export default {
    name: 'FindPw'
}
</script>

<style>

</style>