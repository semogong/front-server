<template>
  <div class="w100 h50 d-sm-flex justify-content-center my-5" v-for="(val,index) in posts" :key="index">
    <div class="vw20 vh25 p-3 mx-2" style="border-radius: 10px; background-color: #F3F3F3" >
      <div class="w100 h25 fw-bold fs-3">맨땅에 헤딩</div>
      <div class="w100 h20 d-sm-flex justify-content-lg-start">
        <div class="w50 h100 d-sm-flex justify-content-center">
          <div class="fw-bold fs-5 mx-2" style="color: gray">그룹장</div>
          <div class="fw-bold fs-5 mx-2">파브르</div>
        </div>
        <div class="w50 h100 d-sm-flex justify-content-center">
          <div class="fw-bold fs-5 mx-2" style="color: gray">목표시간</div>
          <div class="fw-bold fs-5 mx-2">6시간</div>
        </div>
      </div>

      <div class="w100 h20 d-sm-flex justify-content-lg-start">
        <div class="w50 h100 d-sm-flex justify-content-center">
          <div class="fw-bold fs-5 mx-2" style="color: gray">출석률</div>
          <div class="fw-bold fs-5 mx-2">68%</div>
        </div>
        <div class="w50 h100 d-sm-flex justify-content-center">
          <div class="fw-bold fs-5 mx-2" style="color: gray">공부량</div>
          <div class="fw-bold fs-5 mx-2">128시간</div>
        </div>
      </div>

      <div class="w100 h20 d-sm-flex justify-content-lg-start">
        <div class="w50 h100 d-sm-flex justify-content-center">
          <div class="fw-bold fs-5 mx-2" style="color: gray">인원</div>
          <div class="fw-bold fs-5 mx-2">1/6명</div>
        </div>
        <div class="w50 h100 d-sm-flex justify-content-center">
          <div class="fw-bold fs-5 mx-2" style="color: gray">시작된지</div>
          <div class="fw-bold fs-5 mx-2">6일</div>
        </div>
      </div>

      <div class="w100 h20 fs-5 fw-bold text-center">그냥 열심히 하자</div>
    </div>
    <div class="vw20 vh25 p-3 mx-2" style="border-radius: 10px; background-color: #F3F3F3" >
    </div>
  </div>
</template>
<script>
export default {
  name:'ProfileGroup',
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

</style>