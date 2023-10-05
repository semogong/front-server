<template>
  <div class="mt-4">
    <div class="w100 fs-5 fw-bold">비밀번호 찾기</div>

    <div class="w100 h25">
      <div class="form-floating my-2">
        <input type="email" class="form-control" id="floatingInput" placeholder="Email" v-model="state.form.email">
        <label for="floatingEmail">이메일</label>
      </div>

      <div class="d-sm-flex justify-content-between my-3">
        <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 35%;"
                @click="$router.push('/login')">취소
        </button>
        <button v-if="state.send==''" class="btn btn-primary py-2 fw-bold" type="submit"
                style="background-color: #012060; width: 60%;"
                @click="submitEmailInfo">찾기
        </button>
        <button v-if="state.send=='wait'" class="btn btn-primary py-2 fw-bold" type="submit"
                style="background-color: #012060; width: 60%;">조회중
        </button>
        <button v-if="state.send=='send'" class="btn btn-primary py-2 fw-bold" type="submit"
                style="background-color: #012060; width: 60%;"
                @click="submitEmailInfo">다시 찾기
        </button>
      </div>
    </div>

    <div class="d-sm-flex w100">
      <p v-if="state.statusCode=='0000'" class="m-auto fw-bold" style="color: #0038FF">{{ state.clientMsg }}</p>
      <p v-if="state.statusCode!='0000'" class="m-auto fw-bold" style="color: #FF0000">{{ state.clientMsg }}</p>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import {reactive} from "vue";

export default {
  name: 'FindPw',

  setup() {
    const state = reactive({
      statusCode: "",
      clientMsg: "",
      data: "",
      form: {
        email: "",
      },
      send: "",
    })

    const submitEmailInfo = () => {
      state.send = "wait";
      axios.post("/api/v1/login/find-pw", state.form).then((res) => {
        console.log(res.data);
        state.statusCode = res.data["statusCode"]
        state.clientMsg = res.data["data"]["clientMsg"];
        state.send = "send";
      })
    }

    return {state, submitEmailInfo}
  },
}
</script>