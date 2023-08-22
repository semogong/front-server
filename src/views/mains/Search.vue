<template>
    <div style="background-color: #EEEEEE;">
        <div class="w-100 vh5 p-3">
            <div class="d-sm-flex justify-content-between align-items-center w-100 h-100" >
                <div><img :src="require('@/assets/images/return.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
                <div @click="$emit('close-side')"><img  :src="require('@/assets/images/close.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
            </div>
        </div>
        <div class="w-100 vh10 text-center fs-2 fw-bolder">
            검색
        </div>
        <div class="w100 vh85">
          <div class="w100 h5 d-sm-flex justify-content-center">
            <div class="w20 h100 m-auto mx-3 color-white back-color1 backcolor-navy fw-bold d-sm-flex align-items-center justify-content-center rounded-2" @click="isSearchOption[0]+=1" :class="{FocusColor:isSearchOption[0]%2==1,UnFocusColor:isSearchOption[0]%2==0}">프로필</div>
            <div class=" w20 h100 m-auto mx-3 color-white fw-bold d-sm-flex align-items-center justify-content-center rounded-2" @click="isSearchOption[1]+=1" :class="{FocusColor:isSearchOption[1]%2==1,UnFocusColor:isSearchOption[1]%2==0}">게시글</div>
            <div class=" w20 h100 m-auto mx-3 color-white fw-bold d-sm-flex align-items-center justify-content-center rounded-2" @click="isSearchOption[2]+=1" :class="{FocusColor:isSearchOption[2]%2==1,UnFocusColor:isSearchOption[2]%2==0}">그룹</div>
          </div>
          <div class="w100 h5 d-sm-flex justify-content-center align-items-center">
            <input class="w75 h100 abc fs-5 fw-bold" style="border-radius: 2px solid gray; border-radius: 5px 5px 5px 5px;" @click="isSearchFocus+=1">
          </div>
          <div class="w100 d-sm-flex justify-content-center">
            <div v-if="isSearchFocus%2==0" class="w75 vh25  p-4" style="background-color: white; border-radius: 5px 5px 5px 5px;">
              <div class="fs-5 fw-bold text-lg-start w100 mb-3">Spring</div>
              <div class="fs-5 fw-bold text-lg-start w100 mb-3">Spring Boot</div>
              <div class="fs-5 fw-bold text-lg-start w100 mb-3">Spring Security</div>
              <div class="fs-5 fw-bold text-lg-start w100 mb-3">Spring Data JPA</div>
              <div class="fs-5 fw-bold text-lg-start w100 mb-3">Spring Data JPA 활용</div>
            </div>
          </div>

          <div class="vh30 w100 p-3" v-if="isSearchOption[0]%2==1">
            <div class="h15 w100 fs-5 fw-bold ms-3">검색된 프로필</div>
            <div class="h80 w100 hidden_scroll overflow-y-scroll">
              <div class="d-sm-flex justify-content-center mb-3">
                <div class="vw5 vh10 m-auto p-1" style="background-color: #D9D9D9" v-for="(val,index) in 3" :key="index">
                  <div class="w100 h10"><div class="w10 h100" style="background-color: #007DC3; border-radius: 50%"></div></div>
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
          <div class="vh20 w100 p-3" v-if="isSearchOption[2]%2==1">
            <div class="h20 w100 fs-5 fw-bold ms-3">검색된 그룹</div>
            <div class="h80 w100 hidden_scroll overflow-y-scroll ms-3">
              <div class="d-sm-flex justify-content-lg-start mb-3">
                <div class="vw15 vh10" style="background-color: #5B5B5B"></div>
              </div>

              <div class="d-sm-flex justify-content-lg-start mb-3">
                <div class="vw15 vh10" style="background-color: #5B5B5B"></div>
              </div>
            </div>
          </div>

        </div>

    </div>
</template>


<script>
export default {
    name: 'Search',
  data(){
      return{
        isSearchFocus:1,
        isSearchOption:[0,0,0],
      }
  }
}

</script>

<style scoped>
.abc{
  background-image: url("/src/assets/images/search2.svg");
  background-repeat: no-repeat;
  background-position-x:13vw;
  background-position-y: center;
  background-color: #D9D9D9;;

}
input{
  padding-left:1vw;
  padding-right: 2.5vw;
  border: none;
}
input:focus{
  border: none;
}

.FocusColor{
  background-color: #012060;
}

.UnFocusColor{
  background-color: #8E8E8E;
}
</style>
