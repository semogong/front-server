<template>
    <div class="mt-4">
        <div class="w100 fs-5 fw-bold">일반 회원가입 - 인증</div>

        <form class="w100 h25">
            <div class="form-floating my-2">
                <input type="email" class="form-control"  id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">인증코드</label>
            </div>

            <div class="d-sm-flex justify-content-between my-3">
                <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 35%;" @click="$router.push('/join')">뒤로</button>
                <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 60%;" @click="$router.push('/login')">가입</button>
            </div>
        </form>

        <div class="d-sm-flex w100">
            <p class="m-auto fw-bold" style="color: #FF0000">잘못된 인증코드입니다</p>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Auth'
}
</script>

<style>

</style>