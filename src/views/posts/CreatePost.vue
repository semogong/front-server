<template>
  <div class="post">
    <div class="overlay" @click="$emit('close-edit-modal'),this.$router.go(-1)"></div>]

    <div class="modal-card d-sm-flex justify-content-center">

      <div class="vw75 h-100" style="background-color: white;">
        <!-- contents -->
        <div class="w-100 p-5 d-sm-flex justify-content-between" style=" height: 10%; border: solid #E3E3E3; border-width: 0px 0px 3px 0px ">
          <div class="d-sm-flex align-items-center">
            <div class="mx-1"><img style="width: 2vw;" :src="require('@/assets/images/profile-user.png')"></div>
            <div class="fs-5 fw-bold mx-2">{{state.data}}</div>
            <div class="mx-2" style="color: #828282">2023.07.11 07:24</div>
          </div>
          <div class="d-sm-flex align-items-center">

            <div><button style="background-color: white;"><img style="width: 1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);" :src="require('@/assets/images/list.png')" ></button>
            </div>
          </div>

        </div>
        <div class="w-100 p-5 overflow-y-scroll hidden_scroll" style="background-color: white; height: 80%;">
          <input class="w-100 h-5 fs-5 p-4" placeholder="제목" v-model="state.form.title">
          <input class="w-100 h-5 fs-5 p-4" placeholder="소제목" v-model="state.form.subtitle">
          <input class="w-100 h-5 fs-5 p-4" placeholder="태그" v-model="state.form.tag">
          <textarea class="w-100 h-75 fs-5 p-4" placeholder="내용" v-model="state.form.content"></textarea>
        </div>
        <div class="w-100 p-3 d-sm-flex justify-content-lg-start px-5" style="background-color: white; height: 10%;">
          <div class="d-sm-flex justify-content-lg-start w-25">
          </div>
          <div class="w-50 d-sm-flex justify-content-center h-75"><button style="background-color:#012060; color: white; width: 25%; height: 100%; border-radius: 5px;" @click="createPost">게시하기</button></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

import axios from "axios";
import {reactive} from "vue";
import router from "@/router/router";

export default {
  name: 'CreatePost',
  data(){
    return{
      msg:'',

    }
  },

  setup(){
    const state = reactive({
      form:{
        title:"",
        subtitle:"",
        tag:"",
        content:"",
      },
      clientMsg:"",
      statusCode:"",
    })

    const createPost = () => {
      axios.post("/api/v1/main/create-post",state.form).then((res) => {
        state.statusCode = res.data["statusCode"];
        state.msg = res.data["msg"];
        state.data = res.data["data"];
        console.log(state.statusCode)
        console.log(state.msg);
        console.log(state.data);
        router.push("/");
      })
    }

    axios.post("/api/v1/main/load-create-post").then((res) => {
      state.statusCode = res.data["statusCode"];
      state.msg = res.data["msg"];
      state.data = res.data["data"]["memberName"];
      console.log(state.statusCode)
      console.log(state.msg);
      console.log(state.data);
    })

    return{state,createPost}
  }
}
</script>

<style scoped>
.post,.overlay{
  width: 100%;
  height: 100%;
  position: fixed;
  left:0px;
  top:0px;
}

.overlay{
  opacity: 0.5;
  background-color: black;
}

.modal-card{
  position:relative;
  background-color: white;
  width: 70vw;
  height: 95vh;
  margin: auto;
}

</style>