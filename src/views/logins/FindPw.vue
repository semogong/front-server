<template>
    <div class="mt-4">
        <div class="w100 fs-5 fw-bold">비밀번호 찾기</div>

        <div class="w100 h25">
            <div class="form-floating my-2">
                <input type="email" class="form-control" id="floatingInput" placeholder="Email" v-model="state.form.email">
                <label for="floatingEmail">이메일</label>
            </div>

            <div class="d-sm-flex justify-content-between my-3">
                <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 35%;" @click="restFormInfo()">취소</button>
                <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 60%;" @click="submitEmailInfo()">확인</button>
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

export default {
  name: 'FindPw',

  setup(){
    const store = useStore()
    const state = reactive({
      form:{
        email:"",
        password:"",
        name:"",
      },
      clientMsg:"",
      statusCode:"",
    })

    const submitEmailInfo = ()=>{
      axios.post("/api/v1/login/find-pw", state.form).then((res) =>{
        console.log(res.data);
        state.statusCode = res.data["statusCode"]
        state.clientMsg = res.data["data"]["clientMsg"];

        // 로그인 정보가 조건에 맞으면
        if (state.statusCode == "0000"){
          store.state.form.email = state.form.email;
          store.state.form.password = state.form.password;
          store.state.form.name = state.form.name;
        }

      })
    }

    return {state,submitEmailInfo}
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