<template>
    <div class="mt-4">
        <div class="w100 fs-5 fw-bold">로그인</div>
        <div class="w100">
            <div class="form-floating my-2">
                <input type="email" class="form-control"  id="floatingInput" placeholder="name@example.com" v-model="state.form.email">
                <label for="floatingInput">이메일</label>
            </div>

            <div class="form-floating my-2">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="state.form.password">
                <label for="floatingPassword">비밀번호</label>
            </div>

            <div class="form-check my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                    로그인 정보 저장
                </label>
            </div>
            <button class="btn btn-primary w100 py-2 fw-bold" type="submit" style="background-color: #012060" @click="submitLoginInfo()">로그인</button>
        </div>

        <div class="d-sm-flex my-2 w100">
            <p class="m-auto fw-bold" style="color: #FF0000">{{ state.msg }}</p>
        </div>

        <div class="d-sm-flex my-3 w100">
            <div class="m-auto"><router-link to="/join">회원가입</router-link></div>
            <div class="m-auto"><router-link to="/find-id">아이디 찾기</router-link></div>
            <div class="m-auto"><router-link to="/find-pw">비밀번호 찾기</router-link></div>
        </div>

        <div class="d-sm-flex my-5 m-auto w100">
            <div class="m-auto w25"><img @click="$router.push('/social-join')" class="w100" :src="require('@/assets/images/btnG_축약형.png')"></div>
            <div class="m-auto w25"><img @click="$router.push('/social-join')" class="w100" :src="require('@/assets/images/btnG_축약형.png')"></div>
            <div class="m-auto w25"><img @click="$router.push('/social-join')" class="w100" :src="require('@/assets/images/btnG_축약형.png')"></div>
        </div>
    </div>
</template>



<script>
import axios from "axios";
import router from "@/router/router";
import {reactive} from "vue";
import {useStore} from "vuex";

export default {
  name: 'LoginHome',

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
      auth:"",
    })

    const submitLoginInfo = ()=>{
      axios.post("/api/v1/login/check-login", state.form).then((res) =>{
        console.log(res.data);
        state.statusCode = res.data["statusCode"]
        state.clientMsg = res.data["data"]["clientMsg"];

        // 로그인 정보가 조건에 맞으면
        if (state.statusCode == "0000"){
          store.state.form.email = state.form.email;
          store.state.form.password = state.form.password;
          store.state.form.name = state.form.name;
          router.push("/");

        }

      })
    }

    return {state,submitLoginInfo}
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
a{
  text-decoration: none;
  color: #B5B5B5;
}
</style>