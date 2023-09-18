<template>
    <div class="mt-4">
        <div class="w100 fs-5 fw-bold">아이디 찾기</div>

        <div class="w100 h25">
            <div class="form-floating my-2">
                <input type="text" class="form-control" id="floatingInput" placeholder="Name" v-model="state.form.name">
                <label for="floatingId">이름</label>
            </div>

            <div class="d-sm-flex justify-content-between my-3">
                <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 35%;" @click="restFormInfo()">취소</button>
                <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 60%;" @click="submitNameInfo()">확인</button>
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

export default {
  name: 'FindId',

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

    const submitNameInfo = ()=>{
      axios.post("/api/v1/login/find-id", state.form).then((res) =>{
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
        }

      })
    }

    return {state,submitNameInfo}
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