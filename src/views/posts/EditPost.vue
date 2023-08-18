<template>
  <div class="post">
    <router-link :to="`/post/${this.$route.params.id}`"><div class="overlay" @click="$emit('close-edit-modal')"></div>]</router-link>

    <div class="modal-card d-sm-flex justify-content-center">

      <div class="vw75 h-100" style="background-color: white;">
        <!-- contents -->
        <div class="w-100 p-5 d-sm-flex justify-content-between" style=" height: 10%; border: solid #E3E3E3; border-width: 0px 0px 3px 0px ">
          <div class="d-sm-flex align-items-center">
            <div class="mx-1"><img style="width: 2vw;" :src="require('@/assets/images/profile-user.png')"></div>
            <div class="fs-5 fw-bold mx-2">김지완</div>
            <div class="mx-2" style="color: #828282">2023.07.11 07:24</div>
          </div>
          <div class="d-sm-flex align-items-center">
            <div class="mx-2">조회 1</div>
            <div class="mx-2">추천 1</div>
            <div class="mx-2 me-5">저장 1</div>
            <div><button style="background-color: white;"><img style="width: 1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);" :src="require('@/assets/images/list.png')" ></button>
            </div>
          </div>

        </div>
        <div class="w-100 p-5 overflow-y-scroll hidden_scroll" style="background-color: white; height: 80%;">
          <div class="w-100 text-center fs-1 fw-bold">Spring Boot API</div>
          <div class="w-100  text-center fs-3 fw-bold" style="height: 10%; color: gray">Chapter 1.  개요</div>
          <div class="w-100 h-25 fs-5 p-4">
            {{msg}}
          </div>
        </div>
        <div class="w-100 p-3 d-sm-flex justify-content-lg-start px-5" style="background-color: white; height: 10%;">
          <div class="d-sm-flex justify-content-lg-start w-25">
            <div class="fw-bold ms-3" style="color: #666666">#Java</div>
            <div class="fw-bold ms-3" style="color: #666666">#Spring Boot</div>
            <div class="fw-bold ms-3" style="color: #666666">#JPA</div>
            <div class="fw-bold ms-3" style="color: #666666">#SQL</div>
          </div>

          <div class="w-50 d-sm-flex justify-content-center h-75"><button style="background-color:#012060; color: white; width: 25%; height: 100%; border-radius: 5px;">저장하기</button></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

import axios from "axios";
export default {
  name: 'EditPost',
  data(){
    return{
      msg:'',

    }
  },
  created() {
    const idx = this.$store.getters.selectedPostId;
    const urls = '/api/items/'+idx;
    axios.get(urls).then((res)=>{
      this.msg = res.data;
    })

  },
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
button{
  border: none;
}

.post_option{
  position:relative;
  background-color: red;
  width: 10vw;
  height: 10vh;
  margin: auto;
  left:50vw;
  top:-30vh;
  z-index: 5;
}

</style>