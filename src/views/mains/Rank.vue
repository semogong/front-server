<template>
    <div style="background-color: #EEEEEE;">
        <div class="w-100 vh5 p-3">
            <div class="d-sm-flex justify-content-between align-items-center w-100 h-100" >
                <div><img :src="require('@/assets/images/return.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
                <div @click="$emit('close-side')"><img  :src="require('@/assets/images/close.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
            </div>
        </div>
        <div class="w-100 vh10 d-sm-flex justify-content-center text-center fs-2 fw-bolder">랭킹
        </div>
        <div class="w100 vh85 ms-5">
          <div class="w80 h5 d-sm-flex justify-content-lg-start" style="margin-bottom: unset">
            <div class="w30 h60 mx-1 color-white back-color1 backcolor-navy fw-bold d-sm-flex align-items-center justify-content-center rounded-2" @click="isRankOption[0]=1,isRankOption[1]=0,isRankOption[2]=0" :class="{FocusColor:isRankOption[0]%2==1,UnFocusColor:isRankOption[0]%2==0}">개인</div>
            <div class=" w30 h60 mx-1  color-white fw-bold d-sm-flex align-items-center justify-content-center rounded-2" @click="isRankOption[1]=1,isRankOption[0]=0,isRankOption[2]=0" :class="{FocusColor:isRankOption[1]%2==1,UnFocusColor:isRankOption[1]%2==0}">그룹</div>
            <div class=" w30 h60 mx-1  color-white fw-bold d-sm-flex align-items-center justify-content-center rounded-2" @click="isRankOption[2]=1,isRankOption[0]=0,isRankOption[1]=0" :class="{FocusColor:isRankOption[2]%2==1,UnFocusColor:isRankOption[2]%2==0}">게시글</div>
          </div>
          <div class="w80 h80 overflow-y-scroll hidden_scroll" v-if="isRankOption[0]==1">
              <div class="w100 h10 d-sm-flex justify-content-lg-start my-1" style="background-color: white" v-for="(val,index) in ranks" :key="index">
                <div class="w20 h100 d-sm-flex align-items-center justify-content-center fs-5 fw-bold">{{index+1}}</div>
                <div class="w35 h100 d-sm-flex align-items-center justify-content-centerjustify-content-center">
                  <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 1.8vw; height: 1.8vw;">
                  <div class="fw-bold fs-5 ms-2">박정빈</div>
                </div>
                <div class="w20 h100 d-sm-flex align-items-center justify-content-center">2523</div>
                <div class="w20 h100 d-sm-flex align-items-center justify-content-center fs-5 fw-bold" :style="ranksColor[index]">{{this.ranks[index]}}</div>
              </div>
          </div>

          <div class="w80 h80 overflow-y-scroll hidden_scroll" v-if="isRankOption[1]==1">
            <div class="w100 h10 d-sm-flex justify-content-lg-start my-1" style="background-color: white" v-for="(val,index) in 15" :key="index">
              <div class="w20 h100 d-sm-flex align-items-center justify-content-center fs-5 fw-bold">1</div>
              <div class="w35 h100 d-sm-flex align-items-center justify-content-centerjustify-content-center">
                <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 1.8vw; height: 1.8vw;">
                <div class="fw-bold fs-5 ms-2">그룹 </div>
              </div>
              <div class="w20 h100 d-sm-flex align-items-center justify-content-center">2523</div>
              <div class="w20 h100 d-sm-flex align-items-center justify-content-center fs-5 fw-bold" style="color: #AD00FF">L1</div>
            </div>
          </div>

          <div class="w80 h80 overflow-y-scroll hidden_scroll" v-if="isRankOption[2]==1">
            <div class="w100 h10 d-sm-flex justify-content-lg-start my-1" style="background-color: white" v-for="(val,index) in 15" :key="index">
              <div class="w20 h100 d-sm-flex align-items-center justify-content-center fs-5 fw-bold">1</div>
              <div class="w35 h100 d-sm-flex align-items-center justify-content-centerjustify-content-center">
                <img :src="require('@/assets/images/profile-user.png')" style="border-radius: 50%; width: 1.8vw; height: 1.8vw;">
                <div class="fw-bold fs-5 ms-2">게시글</div>
              </div>
              <div class="w20 h100 d-sm-flex align-items-center justify-content-center">2523</div>
              <div class="w20 h100 d-sm-flex align-items-center justify-content-center fs-5 fw-bold" style="color: #AD00FF">L1</div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Rank',
  data(){
      return{
        isRankOption:[1,0,0],
        ranks:['L1','M2','D5','P1','G3','S5','B3','N'],
        ranksColor:['color:#AD00FF','color:#C3222E','color:#b9f2ff','color:#00D7CA','color:#FFE24B','color:#C0C0C0','color:#A47C6D','color:#000000'],
      }
  }
}

</script>

<style scoped>
.FocusColor{
  background-color: #012060;
}

.UnFocusColor{
  background-color: #8E8E8E;
}
</style>
