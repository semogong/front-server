<template>
  <div class="mt-4">
    <div class="w100 fs-5 fw-bold">아이디 찾기</div>

    <div class="w100 h25">
      <div class="form-floating my-2">
        <input type="text" class="form-control" id="floatingInput" placeholder="Name" v-model="state.form.name">
        <label for="floatingId">이름</label>
      </div>

      <div class="d-sm-flex justify-content-between my-3">
        <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 35%;"
                @click="$router.push('/login')">취소
        </button>
        <button class="btn btn-primary py-2 fw-bold" type="submit" style="background-color: #012060; width: 60%;"
                @click="submitNameInfo">찾기
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
  name: 'FindId',

  setup() {
    const state = reactive({
      statusCode: "",
      clientMsg: "",
      data: "",
      form: {
        name: "",
      },
    })

    const submitNameInfo = () => {
      axios.post("/api/v1/login/find-id", state.form).then((res) => {
        console.log(res.data);
        state.statusCode = res.data["statusCode"]
        state.clientMsg = res.data["data"]["clientMsg"];
      })
    }

    return {state, submitNameInfo}
  },

}
</script>
