<template>
  <div class="mt-4 w100 h100">
    <div class="w100 fs-5 fw-bold">일반 회원가입</div>
    <div class="w100 h50">

      <div class="form-floating my-2">
        <input type="email" class="form-control" id="floatingInput" placeholder="Email" v-model="state.form.email">
        <label for="floatingEmail">이메일</label>
      </div>

      <div class="form-floating my-2">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
               v-model="state.form.password">
        <label for="floatingPassword">비밀번호</label>
      </div>

      <div class="form-floating my-2">
        <input type="text" class="form-control" id="floatingInput" placeholder="Name" v-model="state.form.name">
        <label for="floatingId">이름</label>
      </div>


      <div class="d-sm-flex justify-content-between my-3 row">
        <div class="col-4">
          <button class="btn btn-primary py-2 fw-bold w100" style="background-color: #012060;"
                  @click="$router.push('/login')">취소
          </button>
        </div>
        <div class="col-8">
          <button class="btn btn-primary py-2 fw-bold w100" style="background-color: #012060;"
                  @click="submitFormInfo">다음
          </button>
        </div>
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
import router from "@/router/router";
import {reactive} from "vue";
import {useStore} from "vuex";

export default {
  name: 'GeneralJoin',

  setup() {
    const store = useStore();
    const state = reactive({
      statusCode: "",
      clientMsg: "",
      data: "",
      form: {
        email: "",
        password: "",
        name: "",
      },
    })

    const submitFormInfo = () => {
      axios.post("/api/v1/join/check-form", state.form).then((res) => {
        console.log(res.data);
        state.statusCode = res.data["statusCode"]
        state.clientMsg = res.data["data"]["clientMsg"];

        if (state.statusCode == "0000") {
          store.state.form.email = state.form.email;
          store.state.form.password = state.form.password;
          store.state.form.name = state.form.name;
          router.push("/auth");
        }
      })
    }

    return {state, submitFormInfo}
  },
}
</script>