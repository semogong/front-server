<template>
    <div class="mt-4">
        <div class="w100 fs-5 fw-bold">일반 회원가입</div>

        <div class="w100 h50">
            <div class="form-floating my-2">
                <input type="email" class="form-control"  id="floatingInput" placeholder="name@example.com" v-model="state.form.email">
                <label for="floatingInput">이메일</label>
            </div>

            <div class="form-floating my-2">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="state.form.password">
                <label for="floatingPassword">비밀번호</label>
            </div>

            <div class="form-floating my-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="" v-model="state.form.name">
                <label for="floatingPassword">닉네임</label>
            </div>

            <div class="d-sm-flex justify-content-between my-3">
                <button class="btn btn-primary py-2 fw-bold" style="background-color: #012060; width: 35%;" @click="restFormInfo()">취소</button>
                <button class="btn btn-primary py-2 fw-bold" style="background-color: #012060; width: 60%;" @click="submitFormInfo()">다음</button>
            </div>
        </div>

        <div class="d-sm-flex w100">
            <p class="m-auto fw-bold" style="color: #FF0000">{{state.msg}}</p>
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

  setup(){
    const store = useStore()
    const state = reactive({
      form:{
        email:"",
        password:"",
        name:"",
      },
      statusCode:"",
      msg:"",
      data:"",
    })

    const submitFormInfo = ()=>{
      axios.post("/api/v1/join/check-form", state.form).then((res) =>{
        state.statusCode = res.data["statusCode"];
        state.msg = res.data["msg"];
        state.data = res.data["data"];
        console.log(state.statusCode)
        console.log(state.msg);
        console.log(state.data);

        // 로그인 정보가 조건에 맞으면
        if (state.statusCode == "0000"){
          store.state.form.email = state.form.email;
          store.state.form.password = state.form.password;
          store.state.form.name = state.form.name;
          router.push("/auth");
        }

      })
    }

    return {state,submitFormInfo}
  },

  methods: {
    restFormInfo(){
      this.$store.commit("restFormInfo")
      this.$router.push('/login')
    }

  },
}
</script>

<style scoped>
</style>