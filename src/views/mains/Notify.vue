<template>
    <div style="background-color: #EEEEEE;">
        <div class="w-100 vh5 p-3">
            <div class="d-sm-flex justify-content-between align-items-center w-100 h-100" >
                <div><img :src="require('@/assets/images/return.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
                <div @click="$emit('close-side')"><img  :src="require('@/assets/images/close.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
            </div>
        </div>
        <div class="w-100 vh10 text-center fs-2 fw-bolder">
            알림
        </div>
        <div class="w-100 vh85">

          <div class="d-sm-flex justify-content-lg-start align-items-center h10 mb-1 p-3" style="background-color: #D9D9D9" @click="isNotifyDetail=true">
            <div class="m-auto w20"><div class="text-ceter d-sm-flex align-items-center justify-content-center fw-bold" style="background-color:#78AD0A; border-radius: 50%; color: white; width: 3vw; height: 3vw;">공지</div></div>
            <div class="fw-bold w80 m-auto">[업데이트] 8/1 (화) ver1.2.379 마이너버전</div>
          </div>
          <div v-if="isNotifyDetail" @click="isNotifyDetail=false" class="w100 mb-3" style="background-color:#D9D9D9; height: 30vh;"></div>

          <div class="d-sm-flex justify-content-lg-start align-items-center h10 mb-5 p-3" style="background-color: #D9D9D9">
            <div class="m-auto w20"><div class="text-ceter d-sm-flex align-items-center justify-content-center fw-bold" style="background-color:#BFBFBF; border-radius: 50%; width: 3vw; height: 3vw;">알림</div></div>
            <div class="fw-bold w80 m-auto text-truncate">"<router-link to="/profile">박정빈</router-link>”님이 회원님의 게시글에 댓글을 달았습니다.</div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Notify',
  data(){
      return{
        isNotifyDetail:false,
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
