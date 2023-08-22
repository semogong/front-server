<template>
    <div style="background-color: #EEEEEE;">
        <div class="w-100 vh5 p-3">
            <div class="d-sm-flex justify-content-between align-items-center w-100 h-100" >
                <div @click="isStarEdit=false,isRotate=0" ><img :src="require('@/assets/images/return.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
                <div @click="$emit('close-side')"><img  :src="require('@/assets/images/close.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
            </div>
        </div>
        <div class="w-100 vh10 text-center fs-2 fw-bolder">
            스타
        </div>
        <div class="w100 vh75 overflow-y-scroll hidden_scroll">
          <div class="w100 p-3">
            <div class="h15 w100 fs-5 fw-bold ms-3 mb-3">열공중</div>
            <div class="w100  ">
              <div class="d-sm-flex justify-content-center mb-3">
                <div class="vw5 vh10 m-auto p-1" style="background-color: #D9D9D9" v-for="(val,index) in 3" :key="index">
                  <div class="w100 h10 d-sm-flex justify-content-between">
                    <div class="w10 h100" style="background-color: #007DC3; border-radius: 50%"></div>
                    <svg v-if="isStarEdit==true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" style="color: #C60000">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>
                  <div class="w100 h50 d-sm-flex justify-content-center">
                    <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 2vw; height: 2vw;">
                  </div>
                  <div class="w100 h20 d-sm-flex justify-content-center fw-bold" style="font-size: 1rem">
                    이재훈
                  </div>
                  <div class="w100 h20 d-sm-flex justify-content-center" style="font-size: 0.8rem">
                    공부하기 싫다
                  </div>
                </div>
              </div>

              <div class="d-sm-flex justify-content-center mb-3">
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
              </div>

              <div class="d-sm-flex justify-content-center mb-3">
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
              </div>
            </div>
          </div>

          <div class="w100 p-3">
            <div class="h15 w100 fs-5 fw-bold ms-3 mb-3">공부중</div>
            <div class="w100">
              <div class="d-sm-flex justify-content-center mb-3">
                <div class="vw5 vh10 m-auto p-1" style="background-color: #D9D9D9" v-for="(val,index) in 3" :key="index">
                  <div class="w100 h10 d-sm-flex justify-content-between">
                    <div class="w10 h100" style="background-color: #4AAF05; border-radius: 50%"></div>
                    <svg v-if="isStarEdit==true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" style="color: #C60000">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>
                  <div class="w100 h50 d-sm-flex justify-content-center">
                    <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 2vw; height: 2vw;">
                  </div>
                  <div class="w100 h20 d-sm-flex justify-content-center fw-bold" style="font-size: 1rem">
                    이재훈
                  </div>
                  <div class="w100 h20 d-sm-flex justify-content-center" style="font-size: 0.8rem">
                    공부하기 싫다
                  </div>
                </div>
              </div>

              <div class="d-sm-flex justify-content-center mb-3">
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
              </div>

              <div class="d-sm-flex justify-content-center mb-3">
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
              </div>
            </div>
          </div>

          <div class="w100 p-3">
            <div class="h15 w100 fs-5 fw-bold ms-3 mb-3">휴식중</div>
            <div class="w100 ">
              <div class="d-sm-flex justify-content-center mb-3">
                <div class="vw5 vh10 m-auto p-1" style="background-color: #D9D9D9" v-for="(val,index) in 3" :key="index">
                  <div class="w100 h10 d-sm-flex justify-content-between">
                    <div class="w10 h100" style="background-color: #FB8832; border-radius: 50%"></div>
                    <svg v-if="isStarEdit==true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" style="color: #C60000">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>
                  <div class="w100 h50 d-sm-flex justify-content-center">
                    <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 2vw; height: 2vw;">
                  </div>
                  <div class="w100 h20 d-sm-flex justify-content-center fw-bold" style="font-size: 1rem">
                    이재훈
                  </div>
                  <div class="w100 h20 d-sm-flex justify-content-center" style="font-size: 0.8rem">
                    공부하기 싫다
                  </div>
                </div>
              </div>

              <div class="d-sm-flex justify-content-center mb-3">
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
              </div>

              <div class="d-sm-flex justify-content-center mb-3">
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
              </div>
            </div>
          </div>

          <div class="w100 p-3">
            <div class="h15 w100 fs-5 fw-bold ms-3 mb-3">오프라인</div>
            <div class="w100  ">
              <div class="d-sm-flex justify-content-center mb-3">
                <div class="vw5 vh10 m-auto p-1" style="background-color: #D9D9D9" v-for="(val,index) in 3" :key="index">
                  <div class="w100 h10 d-sm-flex justify-content-between">
                    <div class="w10 h100" style="background-color: #FF5756; border-radius: 50%"></div>
                    <svg v-if="isStarEdit==true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" style="color: #C60000">
                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </div>
                  <div class="w100 h50 d-sm-flex justify-content-center">
                    <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 2vw; height: 2vw;">
                  </div>
                  <div class="w100 h20 d-sm-flex justify-content-center fw-bold" style="font-size: 1rem">
                    이재훈
                  </div>
                  <div class="w100 h20 d-sm-flex justify-content-center" style="font-size: 0.8rem">
                    공부하기 싫다
                  </div>
                </div>
              </div>

              <div class="d-sm-flex justify-content-center mb-3">
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
              </div>

              <div class="d-sm-flex justify-content-center mb-3">
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
                <div class="vw5 vh10 m-auto" style="background-color: #5B5B5B"></div>
              </div>
            </div>
          </div>
        </div>
      <div class="w100 vh10 d-sm-flex align-items-center justify-content-end px-4" style="background-color: #EEEEEE">
        <transition name="showstaredit"><div v-if="isRotate%2==1 && isStarEdit==false" @click="isStarEdit=true" class="w40 h60 fw-bold d-sm-flex align-items-center justify-content-center me-3" style="background-color: #D9D9D9; border-radius: 10px; font-size: 1.2rem">즐겨찾기 관리</div></transition>
        <svg v-if="isStarEdit==false"  @click="isRotate+=1" :class="{Rotate:isRotate%2==1}" xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vw" fill="currentColor" class="bi bi-plus-circle-fill " viewBox="0 0 16 16" style="color: #012060;">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
        </svg>
      </div>


    </div>
</template>


<script>
export default {
    name: 'Star',
  data(){
      return{
        isRotate:0,
        isStarEdit:false,
      }
  }
}

</script>

<style scoped>
.Rotate{
  animation: abc 0.25s;
  transform: rotate(-45deg);
}

@keyframes abc {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}

.showstaredit-enter-active {
  animation: show 0.25s;
}

.showstaredit-leave-active {
  animation: close 0s reverse;
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
