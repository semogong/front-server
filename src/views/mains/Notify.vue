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
        <div class="w-100 vh85 hidden_scroll overflow-y-scroll">

          <div class="d-sm-flex justify-content-lg-start align-items-center h10 mb-1 p-3" style="background-color: #D9D9D9" @click="isNotifyDetail[0]+=1">
            <div class="m-auto w20"><div class="text-ceter d-sm-flex align-items-center justify-content-center fw-bold" style="background-color:#78AD0A; border-radius: 50%; color: white; width: 3vw; height: 3vw;">공지</div></div>
            <div class="fw-bold w80 m-auto">[업데이트] 8/1 (화) ver1.2.379 마이너버전</div>
          </div>

          <transition name="ShowNotifyDetail"><div v-if="isNotifyDetail[0]%2==0" @click="isNotifyDetail[0]+=1" class="w100 mb-3 p-3" style="background-color:#D9D9D9; height: 30vh;">
            <div class="w100 120 text-lg-end" style="color: #828282">2023.07.31 19:47</div>
            <div class="w100 h80 text-center mt-3 hidden_scroll overflow-y-scroll">
              안녕하세요. GM학구입니다.

              7/6(목) ~ 7/18(화) 사이 운영정책 위반 사실이 확인되어
              이용 제한 조치가 적용된 메이플ID는 총 5,933개입니다.

              지난 공지로 안내드린 것과 같이최근 메이플스토리 내 채팅 정책 및 게임과 무관한 내용을
              홍보 · 광고하는 채팅에 대한 단속을 강화하고 있습니다.

              이에, 비매너 채팅 이용 기록이 확인된 용사님께는
              운영정책에 따른 적절한 조치가 이뤄지고 있는 점 다시 한번 안내드립니다.
              용사님들께서는 다른 용사님들께 불편을 주는 채팅 이용에 대해 주의를 부탁드립니다.

              안녕하세요. GM학구입니다.

              7/6(목) ~ 7/18(화) 사이 운영정책 위반 사실이 확인되어
              이용 제한 조치가 적용된 메이플ID는 총 5,933개입니다.

              지난 공지로 안내드린 것과 같이최근 메이플스토리 내 채팅 정책 및 게임과 무관한 내용을
              홍보 · 광고하는 채팅에 대한 단속을 강화하고 있습니다.

              이에, 비매너 채팅 이용 기록이 확인된 용사님께는
              운영정책에 따른 적절한 조치가 이뤄지고 있는 점 다시 한번 안내드립니다.
              용사님들께서는 다른 용사님들께 불편을 주는 채팅 이용에 대해 주의를 부탁드립니다.
            </div>
          </div></transition>

          <div class="d-sm-flex justify-content-lg-start align-items-center h10 mb-1 p-3" style="background-color: #D9D9D9" @click="isNotifyDetail[1]+=1">
            <div class="m-auto w20"><div class="text-ceter d-sm-flex align-items-center justify-content-center fw-bold"   style="background-color:#BFBFBF; border-radius: 50%; width: 3vw; height: 3vw;">알림</div></div>
            <div class="fw-bold w80 m-auto text-truncate">"<router-link to="/profile">박정빈</router-link>”님이 회원님의 게시글에 댓글을 달았습니다.</div>
          </div>

          <transition name="ShowNotifyDetail"><div v-if="isNotifyDetail[1]%2==0" @click="isNotifyDetail[1]+=1" class="w100 mb-3" style="background-color:#D9D9D9; height: 30vh;"></div></transition>

          <div class="d-sm-flex justify-content-lg-start align-items-center h10 mb-1 p-3" style="background-color: #D9D9D9" @click="isNotifyDetail[2]+=1">
            <div class="m-auto w20"><div class="text-ceter d-sm-flex align-items-center justify-content-center fw-bold"   style="background-color:#BFBFBF; border-radius: 50%; width: 3vw; height: 3vw;">알림</div></div>
            <div class="fw-bold w80 m-auto text-truncate">"<router-link to="/profile">박정빈</router-link>”님이 회원님의 게시글에 댓글을 달았습니다.</div>
          </div>

          <transition name="ShowNotifyDetail"><div v-if="isNotifyDetail[2]%2==0" @click="isNotifyDetail[2]+=1" class="w100 mb-3" style="background-color:#D9D9D9; height: 30vh;"></div></transition>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Notify',
  data(){
      return{
        isNotifyDetail:[1,1,1],
      }
  }
}

</script>

<style scoped>

.ShowNotifyDetail-enter-active {
    animation: bounce-in 0.25s;
}

.ShowNotifyDetail-enter-activeleave-active {
    animation: bounce-in 0.4s reverse;
}

@keyframes bounce-in {
    0% {
        height: 0vh;
      opacity: 0;
    }
    50%{
      opacity: 0;
    }
    100% {
        height: 30vh;
    }
}


a {
  text-decoration: none;
  color: black;
}
</style>
