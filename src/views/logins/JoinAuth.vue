<template>
  <div class="mt-4">
    <div class="w100 fs-5 fw-bold">일반 회원가입 - 인증</div>

    <div class="w100 h25">
      <div class="form-floating my-2">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
               v-model="state.form.code">
        <label for="floatingInput">인증코드</label>
      </div>

      <div class="d-sm-flex justify-content-between my-3">
        <button v-if="state.send==''" class="btn btn-primary py-2 fw-bold" type="submit"
                style="background-color: #012060; width: 35%;" @click="sendCode">인증요청
        </button>
        <button v-if="state.send=='wait'" class="btn btn-primary py-2 fw-bold" type="submit"
                style="background-color: #012060; width: 35%; color: lightgray">전송중
        </button>
        <button v-if="state.send=='send'" class="btn btn-primary py-2 fw-bold" type="submit"
                style="background-color: #012060; width: 35%; color: lightgray">전송완료
        </button>
        <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 60%;"
                @click="checkCode()">가입
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
import {useStore} from "vuex";
import router from "@/router/router";

export default {
  name: 'JoinAuth',

  setup() {
    const store = useStore()
    const state = reactive({
      statusCode: "",
      clientMsg: "",
      data: "",
      form: {
        email: store.state.form.email,
        password: store.state.form.password,
        name: store.state.form.name,
        code: store.state.form.code,
      },
      send: "",
    })

    const sendCode = () => {
      state.send = "wait";
      axios.post("/api/v1/join/send-code", state.form).then((res) => {
        console.log(res.data);
        state.statusCode = res.data["statusCode"]
        state.clientMsg = res.data["data"]["clientMsg"];
        state.send = "send";
      })
    }

    const checkCode = () => {
      axios.post("/api/v1/join/check-join", state.form).then((res) => {
        console.log(res.data);
        state.statusCode = res.data["statusCode"]
        state.clientMsg = res.data["data"]["clientMsg"];

        if (state.statusCode == "0000") {
          window.alert("세모공 회원가입을 축하합니다!!");
          router.push("/login");
        }

      })
    }

    return {state, sendCode, checkCode}
  },
}
</script>