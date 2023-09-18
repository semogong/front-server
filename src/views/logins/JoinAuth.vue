<template>
    <div class="mt-4">
        <div class="w100 fs-5 fw-bold">일반 회원가입 - 인증</div>

        <div class="w100 h25">
            <div class="form-floating my-2">
                <input type="email" class="form-control"  id="floatingInput" placeholder="name@example.com" v-model="state.form.code">
                <label for="floatingInput">인증코드</label>
            </div>

            <div class="d-sm-flex justify-content-between my-3">
                <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 35%;" @click="sendCode()">인증요청</button>
                <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 60%;" @click="checkCode()">가입</button>
            </div>
        </div>

        <div class="d-sm-flex w100">
          <p v-if="state.statusCode=='0000'" class="m-auto fw-bold" style="color: #0038FF">{{ state.msg }}</p>
          <p v-if="state.statusCode!='0000'" class="m-auto fw-bold" style="color: #FF0000">{{ state.msg }}</p>

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

  setup(){
    const store = useStore()
    const state = reactive({
      form:{
        email:store.state.form.email,
        password:store.state.form.password,
        name:store.state.form.name,
        code:store.state.form.code,
      },
      statusCode:"",
      msg:"",
      data:"",
    })

    const sendCode = ()=>{
      axios.post("/api/v1/join/send-code", store.state.form).then((res) =>{
        state.statusCode = res.data["statusCode"];
        state.msg = res.data["msg"];
        state.data = res.data["data"];
        console.log(state.statusCode);
        console.log(state.msg);
        console.log(state.data);
      })
    }

    const checkCode = ()=>{
      axios.post("/api/v1/join/check-code", state.form).then((res) =>{
        state.statusCode = res.data["statusCode"];
        state.msg = res.data["msg"];
        state.data = res.data["data"];
        console.log(state.statusCode);
        console.log(state.msg);
        console.log(state.data);

        if (state.statusCode=="0000"){
          window.alert("회원가입을 축하합니다!!");
          router.push("/login");
        }

      })
    }

    return {state,sendCode,checkCode}
  },

  methods: {
    incrementCount() {
      this.$store.commit('incrementCountMutation')
    },
    restLoginInfo(){
      this.$store.commit("restLoginInfo")
      this.$router.push('/login')
    },

  },
}
</script>

<style scoped>
</style>