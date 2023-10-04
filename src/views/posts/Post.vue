<template>

  <div class="post">

    <edit-post class="post" v-if="isPostEditViewed" @close-edit-modal="isPostEditViewed=false,isPostContent=true"
               style="z-index: 2"></edit-post>

    <div class="overlay"  @click="$emit('close-modal'), this.$router.go(-1)"></div>
      ]

    <div v-if="isPostContent" class="modal-card d-sm-flex justify-content-center">
      <div class="vw75 h-100" style="background-color: white;">
        <!-- contents -->
        <div class="w-100 p-5 d-sm-flex justify-content-between"
             style=" height: 10%; border: solid #E3E3E3; border-width: 0px 0px 3px 0px ">
          <div class="d-sm-flex align-items-center">
            <div class="mx-1"><img style="width: 2vw;" :src="require('@/assets/images/profile-user.png')"></div>
            <div class="fs-5 fw-bold mx-2">{{ state.names }}</div>
            <div class="mx-2" style="color: #828282">{{ state.times }}</div>
          </div>
          <div class="d-sm-flex align-items-center" style="position: relative">
            <div class="mx-3 d-sm-flex justify-content-center align-items-center">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye"
                     viewBox="0 0 16 16">
                  <path
                      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                </svg>
              </button>
              <div class="ms-2">10</div>
            </div>
            <div class="mx-3 d-sm-flex justify-content-center align-items-center">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path
                      d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                </svg>
              </button>
              <div class="ms-2">10</div>
            </div>
            <div class="mx-3 d-sm-flex justify-content-center align-items-center">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save"
                     viewBox="0 0 16 16">
                  <path
                      d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                </svg>
              </button>
              <div class="ms-2">
                10
              </div>
            </div>
            <div class="dropdown ms-5">
              <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                      style="background-color: white">
                <img
                    style="width: 1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"
                    :src="require('@/assets/images/list.png')">
              </button>
              <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="dropdownMenuButton1">
                <li @click="isPostEditViewed=true,isPostContent=false">
                  <router-link :to="`${this.$route.path}/edit`" class="dropdown-item">수정하기</router-link>
                </li>
                <li @click="isPostEditViewed=true,isPostContent=false">
                  <router-link :to="`${this.$route.path}/edit`" class="dropdown-item">삭제하기</router-link>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div class="w-100 p-5 overflow-y-scroll hidden_scroll" style="background-color: white; height: 85%;">
          <div class="w-100 text-center fs-1 fw-bold">{{ state.data.title }}</div>
          <div class="w-100  text-center fs-3 fw-bold" style="height: 10%; color: gray">{{ state.data.subtitle }}</div>
          <div class="w-100 h-25 fs-5 p-4">
            {{ state.data.content }}
          </div>
        </div>
        <div class="w-100 p-3 d-sm-flex justify-content-lg-start px-5" style="background-color: white; height: 5%;">
          <div class="fw-bold ms-3" style="color: #666666">{{state.data.tag}}</div>
        </div>
      </div>

      <!-- comments -->
      <div class="vw25 h-100" style="background-color: white; border: solid #E3E3E3; border-width: 0px 0px 0px 3px;">
        <div class="w-100 d-sm-flex justify-content-lg-start align-items-end p-3" style="height: 10%; ">
          <div class="fs-3 fw-bold" style="color: black">댓글</div>
        </div>
        <div class="w-100 overflow-y-scroll hidden_scroll p-3" style="height: 85%;">
          <div class="d-sm-flex justify-content-center my-3" v-for="index in [1,2,3,4,5,6,7,8,9,10]" :key="index"
               style="height:fit-content;">
            <div class="h-100" style="width: 80%;">
              <div class="w-100 d-sm-flex justify-content-lg-start h-50">
                <div class="d-sm-flex align-items-center"><img style="width: 1.5vw;"
                                                               :src="require('@/assets/images/profile-user.png')"></div>
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
            <div class="h-100" style="width: 80%;"><input class="w-100 h-100" style="border: #E3E3E3 1px solid;"
                                                          placeholder="댓글을 입력하세요"></div>
            <div class="h-100" style="width: 20%;">
              <button class="w-100 h-100" style="background-color: #012060; color: white">게시</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import EditPost from "@/views/posts/EditPost.vue";
import {reactive} from "vue";
import axios from "axios";

export default {
  name: 'Post',
  components: {EditPost},
  data() {
    return {
      msg: '',
      isPostEditViewed: false,
      isPostContent: true
    }
  },
  setup() {

    const state = reactive({
      form: {
        email: "",
        password: "",
        name: "",
      },
      clientMsg: "",
      statusCode: "",
      data:"",
      names:"",
      times:"",

    })

    return{state}
  },
  created() {
    const router_idx = this.$route.params.id;
    const urls = "/api/v1/main/post/" + router_idx;
    axios.post(urls).then((res) => {
      this.state.statusCode = res.data["statusCode"];
      this.state.msg = res.data["msg"];
      this.state.data = res.data["data"]["post"];
      this.state.names = res.data["data"]["post"]["member"]["name"];
      this.state.times = res.data["data"]["post"]["formedCreatedAt"];
    })

  },
}
</script>

<style scoped>
.post, .overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;

}

.overlay {
  opacity: 0.5;
  background-color: black;
}

.modal-card {
  position: relative;
  background-color: white;
  width: 70vw;
  height: 95vh;
  margin: auto;
}

button {
  background-color: white;
}
</style>