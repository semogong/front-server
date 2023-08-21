<template>
  <div class="w100 h50 d-sm-flex justify-content-center my-5" v-for="(val,index) in posts" :key="index">
    <div class="vw15 vh25 p-3 mx-2" style="border-radius: 10px; background-color: #F3F3F3" >
      <div class="w100 h50 d-sm-flex justify-content-center">
        <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 5vw; height: 5vw;">
      </div>
      <div class="w100 h30 d-sm-flex justify-content-center fs-5 fw-bold">
        {{val.editor}}
      </div>
      <div class="w100 h20 d-sm-flex justify-content-center">
        공부하기 싫다
      </div>
    </div>
    <div class="vw15 vh25 p-3 mx-2" style="border-radius: 10px; background-color: #F3F3F3" >
      <div class="w100 h50 d-sm-flex justify-content-center">
        <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 5vw; height: 5vw;">
      </div>
      <div class="w100 h30 d-sm-flex justify-content-center fs-5 fw-bold">
        {{val.editor}}
      </div>
      <div class="w100 h20 d-sm-flex justify-content-center">
        공부하기 싫다
      </div>
    </div>
    <div class="vw15 vh25 p-3 mx-2" style="border-radius: 10px; background-color: #F3F3F3" >
      <div class="w100 h50 d-sm-flex justify-content-center">
        <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 5vw; height: 5vw;">
      </div>
      <div class="w100 h30 d-sm-flex justify-content-center fs-5 fw-bold">
        {{val.editor}}
      </div>
      <div class="w100 h20 d-sm-flex justify-content-center">
        공부하기 싫다
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'ProfileStar',
  data(){
    return{
      posts: [
        { id: 1, title: 'Post 1', editor:'박정빈',editTime:"30분전"},
        { id: 2, title: 'Post 2', editor:'박승일',editTime:"1시간전"},
        { id: 3, title: 'Post 3', editor:'이재훈',editTime:"2시간전"},
          ]
    }
  }
}

</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

</style>