<template>
    <div style="background-color: #EEEEEE;">
        <div class="w-100 vh5 p-3">
            <div class="d-sm-flex justify-content-between align-items-center w-100 h-100" >
                <div @click="isRotate=0,isChatState[0]=1,controlSidebar(0)"><img :src="require('@/assets/images/return.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
                <div @click="$emit('close-side')"><img  :src="require('@/assets/images/close.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
            </div>
        </div>
        <div v-if="isChatState[0]==1" class="w-100 vh10 text-center fs-2 fw-bolder">채팅</div>
        <div v-if="isChatState[1]==1" class="w-100 vh10 text-center fs-2 fw-bolder">채팅 관리</div>
        <div v-if="isChatState[2]==1" class="w-100 vh10 text-center fs-2 fw-bolder">채팅 만들기</div>
        <div v-if="isChatState[3]==1" class="w-100 vh10 text-center fs-2 fw-bolder">{{this.Name}}</div>

      <div class="w100 vh75 overflow-y-scroll hidden_scroll" v-if="isChatState[0]==1">
        <div class="d-sm-flex justify-content-lg-start align-items-center h10 mb-1 p-3" style="background-color: #D9D9D9" v-for="(val,index) in chats" :key="index" @click="isChatState[3]=1,controlSidebar(3),nameset(val.name)">
          <div class="w10 ms-2">
            <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 2vw; height: 2vw;">
          </div>
          <div class="fw-bold w20 text-center fs-5">{{val.name}}</div>
          <div class="w50 text-truncate text-lg-start" style="color: gray;">{{val.preview}}</div>
          <div  class="fw-bold w20 text-center" style="color: #828282">{{val.time}}</div>
        </div>
      </div>

      <div class="w100 vh75 overflow-y-scroll hidden_scroll" v-if="isChatState[1]==1">
        <div class="d-sm-flex justify-content-lg-start align-items-center h10 mb-1 p-3" style="background-color: #D9D9D9" v-for="(val,index) in 3" :key="index">
          <div class="w10 ms-2">
            <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 2vw; height: 2vw;">
          </div>
          <div class="fw-bold w20 text-center fs-5">박정빈</div>
          <div class="w50 text-truncate text-lg-start" style="color: gray;">재훈아 커피나무 가자</div>
          <div  class="fw-bold w20 fs-5" style="color: #B90000">나가기</div>
        </div>
      </div>

      <div class="w100 vh75 overflow-y-scroll hidden_scroll" v-if="isChatState[2]==1">
        <div class="fw-bold fs-5 mb-3 ms-3">스타 목록</div>
        <div class="d-sm-flex justify-content-lg-start align-items-center h10 mb-1 p-3" style="background-color: #D9D9D9" v-for="(val,index) in 3" :key="index">
          <div class="w10 ms-2">
            <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 2vw; height: 2vw;">
          </div>
          <div class="fw-bold w20 text-center fs-5">박정빈</div>
          <div class="w50 text-truncate text-lg-start" style="color: gray;"></div>
          <div  class="fw-bold w20 fs-5" style="color: #0038FF">새 채팅</div>
        </div>

        <div class="fw-bold fs-5 mt-5 mb-3 ms-3">그룹원 목록</div>
        <div class="d-sm-flex justify-content-lg-start align-items-center h10 mb-1 p-3" style="background-color: #D9D9D9" v-for="(val,index) in 3" :key="index">
          <div class="w10 ms-2">
            <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 2vw; height: 2vw;">
          </div>
          <div class="fw-bold w20 text-center fs-5">박정빈</div>
          <div class="w50 text-truncate text-lg-start" style="color: gray;"></div>
          <div  class="fw-bold w20 fs-5" style="color: #0038FF">새 채팅</div>
        </div>
      </div>

      <div class="w100 vh75 overflow-y-scroll hidden_scroll" v-if="isChatState[3]==1">
        <div class="w100 h100" style="background-color: #D9D9D9">
          <div class="w100 p-3" style="height: 93%;">
            <div class="w100 h10">
              <div class="h50 d-sm-flex justify-content-lg-start align-items-center ms-2">
                <div><img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 1.2vw; height: 1.2vw;"></div>
                <div class="fw-bold ms-1">박승일</div>
              </div>
              <div class="d-sm-flex justify-content-lg-start">
              <div class="h50 ms-4 p-2 fw-bold d-sm-flex align-items-center" style="background-color: white; color: #656565; width: fit-content; border-radius: 10px;">재훈아 뭐하니</div>
              <div class="w10 d-sm-flex align-items-end ms-2" style="color: #828282">23:09</div>
              </div>
            </div>
          </div>
          <div class="w100 d-sm-flex align-items-center justify-content-center" style="background-color: white; height: 7%;">
            <input class="w90 h100" style="border: none;" placeholder="채팅을 입력하세요">
            <div class="h100" style="width: 20%;">
              <button class="w-100 h-100" style="background-color: #012060; color: white">전송</button>
            </div>
          </div>
        </div>
      </div>

      <div class="w100 vh10 d-sm-flex align-items-center justify-content-end px-4" style="background-color: #EEEEEE">
        <transition name="showstaredit"><div v-if="isRotate%2==1" @click="isChatState[2]=1, controlSidebar(2)" class="w40 h60 fw-bold d-sm-flex align-items-center justify-content-center me-3" style="background-color: #D9D9D9; border-radius: 10px; font-size: 1.2rem">새 채팅 만들기</div></transition>
        <transition name="showstaredit"><div v-if="isRotate%2==1" @click="isChatState[1]=1, controlSidebar(1)"  class="w35 h60 fw-bold d-sm-flex align-items-center justify-content-center me-3" style="background-color: #D9D9D9; border-radius: 10px; font-size: 1.2rem">채팅 관리</div></transition>
        <svg @click="isRotate+=1" :class="{Rotate:isRotate%2==1}"  xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vw" fill="currentColor" class="bi bi-plus-circle-fill " viewBox="0 0 16 16" style="color: #012060;">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
        </svg>
      </div>
    </div>
</template>


<script>
export default {
    name: 'Chat',

  data(){
    return{
      isChatState:[1,0,0,0],
      isRotate:0,
      isChatEdit:0,
      isMakeChat:0,
      isChatFrom:0,
      Name:'',
      chats:[{name:'박정빈',preview:'재훈아 커피나무 가자',time:'하루전'},
        {name:'이재훈',preview:'재훈아 나무커피 가자',time:'12시간전'},
        {name:'박승일',preview:'재훈아 나무나무 가자',time:'30분전전'}]
    }
  },
  methods: {
    controlSidebar(to) {
      this.isChatState[this.isChatFrom] = 0;
      this.isChatState[to] = 1;
      this.isChatFrom = to;
    },
    nameset(val){
      this.Name=val;
    }
  }
}

</script>

<style scoped>
.Rotate{
  animation: abc 0.25s;
  transform: rotate(-45deg);
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
