<template>
    <div class="vw50 vh50" style="background-color: #F9F9F9">
          <div class="header w-100 vh5 d-sm-flex align-items-center ps-4" style="background-color: #012060; border-radius: 10px 10px 0 0">
              <div style="width: 2vw"><img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; filter: invert(); width: 1.5vw; height: 1.5vw;"></div>
              <div class="fw-bold" style="color:white; width: 4vw;">박정빈</div>
              <div style="color:lightgray; font-size: 1rem; width: 4vw;">30분전</div>
          </div>

          <div class="body vh45 w-100 pe-5" style="border: lightgray 1px solid; border-radius: 0px 0px 10px 10px">
              <div class="vh15 w-100 d-sm-flex align-items-center">
                  <div class="ms-5">
                      <div class="fs-1 fw-bold">JAVA + SPRING BOOT</div>
                      <div class="fs-3 fw-bold" style="color: gray">Chapter 1: 개요</div>
                  </div>
              </div>
              <div class="vh25 w-100">
                  <div class="ms-5">
                      <div class="fs-5">SpringBoot API
                          Chapter 3 [API 개발 고급(2)]
                          컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)SpringBoot API
                          Chapter 3 [API 개발 고급(2)]
                          컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)SpringBoot API
                          Chapter 3 [API 개발 고급(2)]
                          컬렉션 조회 최적화 (Entity 직접 반환, DTO로 변환하여 반환, Fetch Join & Distinct로 성능 최적화, Fetch Join & hibernate.default_batch_fetch_size 를 통해 최적화)</div>
                  </div>
              </div>
              <div class="vh5 w-100">
                  <div class="ms-5 d-sm-flex justify-content-between">
                      <div class="d-sm-flex justify-content-center">
                          <div class="mx-1 fw-bold">#Java</div>
                          <div class="mx-1 fw-bold">#Spring</div>
                          <div class="mx-1 fw-bold">#JPA</div>
                      </div>
                      <div class="d-sm-flex justify-content-center">
                          <div class="mx-1 fw-bold">조회 10</div>
                          <div class="mx-1 fw-bold">추천 9</div>
                          <div class="mx-1 fw-bold">저장 1</div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
</template>
<script>
export default {
    name: 'PostPreview',
}

</script>

<style>
a {
    text-decoration: none;
    color: black;
}
</style>