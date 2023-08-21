<template>
  <div class="w100 h50 d-sm-flex justify-content-center my-3" v-for="(val,index) in posts" :key="index">
    <div class="w70 h100 p-3" style="border-radius: 10px; background-color: #F3F3F3" >
      <router-link :to="`/profile/post/${index}`">
        <div class="w100 h15 my-1 fw-bold fs-4 d-sm-flex align-items-center">JAVA + SPRING BOOT</div>
        <div class="w100 h10 my-1 fw-bold fs-5 d-sm-flex align-items-center" style="color: #BBBBBB">Chapter 1: 개요</div>
        <div class="w100 h50 my-1 d-sm-flex align-items-center">
          SpringBoot API
          Chapter 3 [API 개발 고급(2)]
          컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)
          SpringBoot API
          Chapter 3 [API 개발 고급(2)]
          컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name:'ProfileMain',
  data(){
    return{
      posts: [
        { id: 1, title: 'Post 1', editor:'박정빈',editTime:"30분전"},
        { id: 2, title: 'Post 2', editor:'박승일',editTime:"1시간전"},
        { id: 3, title: 'Post 3', editor:'이재훈',editTime:"2시간전"},
        { id: 4, title: 'Post 4', editor:'박정빈',editTime:"30분전"},
        { id: 5, title: 'Post 5', editor:'박승일',editTime:"1시간전"},
        { id: 6, title: 'Post 6', editor:'이재훈',editTime:"2시간전"},],
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