<template>
  <div class="post">
      <edit-post class="post" v-if="isPostEditViewed" @close-edit-modal="isPostEditViewed=false,isPostContent=true" style="z-index: 5"></edit-post>

      <router-link to="/"><div class="overlay" @click="$emit('close-modal')"></div>]</router-link>

      <div v-if="isPostContent" class="modal-card d-sm-flex justify-content-center">

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
                <router-link :to="`/post/${this.$route.params.id}/edit`"><button @click="isPostEditViewed=true,isPostContent=false"  style="background-color: white;"><img style="width: 1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);" :src="require('@/assets/images/list.png')" ></button></router-link>
              </div>

            </div>
            <div class="w-100 p-5 overflow-y-scroll hidden_scroll" style="background-color: white; height: 85%;">
              <div class="w-100 text-center fs-1 fw-bold">Spring Boot API</div>
              <div class="w-100  text-center fs-3 fw-bold" style="height: 10%; color: gray">Chapter 1.  개요</div>
              <div class="w-100 h-25 fs-5 p-4">
                {{msg}}
              </div>
            </div>
            <div class="w-100 p-3 d-sm-flex justify-content-lg-start px-5" style="background-color: white; height: 5%;">
              <div class="fw-bold ms-3" style="color: #666666">#Java</div>
              <div class="fw-bold ms-3" style="color: #666666">#Spring Boot</div>
              <div class="fw-bold ms-3" style="color: #666666">#JPA</div>
              <div class="fw-bold ms-3" style="color: #666666">#SQL</div>
            </div>
          </div>

          <!-- comments -->
          <div class="vw25 h-100" style="background-color: white; border: solid #E3E3E3; border-width: 0px 0px 0px 3px;">
            <div class="w-100 d-sm-flex justify-content-lg-start align-items-end p-3" style="height: 10%; ">
              <div class="fs-3 fw-bold" style="color: black">댓글</div>
            </div>
            <div class="w-100 overflow-y-scroll hidden_scroll p-3" style="height: 85%;">
              <div class="d-sm-flex justify-content-center my-3" v-for="index in [1,2,3,4,5,6,7,8,9,10]" :key="index"  style="height:fit-content;">
                <div class="h-100" style="width: 80%;">
                  <div class="w-100 d-sm-flex justify-content-lg-start h-50">
                    <div class="d-sm-flex align-items-center"><img style="width: 1.5vw;" :src="require('@/assets/images/profile-user.png')"></div>
                    <div class="d-sm-flex align-items-center ms-2 fw-bold" style="font-size: 1rem;">박정빈</div>
                    <div class="d-sm-flex align-items-center ms-3" style="font-size: 0.8rem; color: gray">30분전</div>
                  </div>
                  <div class="mt-2" style="height: fit-content">뭐라는거야 재훈아...뭐라는거야 재훈아..</div>
                </div>
                <div style="width: 20%;">
                  <button class="h-100 w-100" style="background-color: white">
                    <img style="width: 1vw;" :src="require('@/assets/images/thumb-up.png')">
                  </button>
                </div>
              </div>
            </div>
            <div class="w-100" style="height: 5%;">
              <div class="w-100 h-100 d-sm-flex justify-content-center">
                <div class="h-100" style="width: 80%;"><input class="w-100 h-100" style="border: #E3E3E3 1px solid;"  placeholder="댓글을 입력하세요"></div>
                <div class="h-100" style="width: 20%;"><button class="w-100 h-100" style="background-color: #012060; color: white">게시</button></div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>
<script>

import axios from "axios";
import EditPost from "@/views/posts/EditPost.vue";
export default {
    name: 'Post',
  components: {EditPost},
    data(){
        return{
          msg:'',
          isPostEditViewed:false,
          isPostContent:true
        }
    },
    created() {
        // const idx = this.$store.getters.selectedPostId;
        const router_idx = this.$route.params.id;
        const urls = '/api/items/'+router_idx;
        console.log(router_idx);
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

</style>