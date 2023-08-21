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
        <div class="w-100 vh85" >
          <div class="w-100 h5 d-sm-flex justify-content-center">
            <div class="w30 h100 m-auto mx-3 color-white back-color1 backcolor-navy fw-bold d-sm-flex align-items-center justify-content-center rounded-2">프로필</div>
            <div class=" w30 h100 m-auto mx-3 color-white fw-bold d-sm-flex align-items-center justify-content-center rounded-2" style="background-color: #8E8E8E">게시글</div>
            <div class=" w30 h100 m-auto mx-3 color-white fw-bold d-sm-flex align-items-center justify-content-center rounded-2" style="background-color: #8E8E8E">그룹</div>
          </div>
          <div class="w100 h5 d-sm-flex justify-content-center align-items-center">
            <input class="w70 h100 abc fs-5 fw-bold" style="border-radius: 2px solid gray; border-radius: 5px 5px 5px 5px;" @click="isSearchFocus=true">
          </div>
          <div class="w100 d-sm-flex justify-content-center">
            <div v-if="isSearchFocus" class="w70 vh20 d-sm-flex justify-content-center" style="background-color: white"></div>
          </div>

        </div>

    </div>
</template>


<script>
export default {
    name: 'Search',
  data(){
      return{
        isSearchFocus:false,
      }
  }
}

</script>

<style scoped>
.abc{
  background-image: url("/src/assets/images/search2.svg");
  background-repeat: no-repeat;
  background-position-x:12vw;
  background-position-y: center;
  background-color: #D9D9D9;;

}
input{
  padding-left: 1vw;
  padding-right: 2vw;
  border: none;
}
input:focus{
  border: none;
}
</style>
