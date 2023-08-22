<template>
    <div style="background-color: #EEEEEE">
        <div class="w-100 vh5 p-3">
            <div class="d-sm-flex justify-content-between align-items-center w-100 h-100" >
                <div @click="isGroupState[0]=1,cotrolGroupMenu(0)"><img :src="require('@/assets/images/return.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
                <div @click="$emit('close-side')"><img  :src="require('@/assets/images/close.png')" class="m-auto" style="width: 1.1vw; height: 1.1vw; filter: invert(84%) sepia(1%) saturate(15%) hue-rotate(314deg) brightness(98%) contrast(96%);"></div>
            </div>
        </div>
      <div v-if="isGroupState[0]==1" class="w-100 vh10 text-center fs-2 fw-bolder">그룹</div>
      <div v-if="isGroupState[1]==1" class="w-100 vh10 text-center fs-2 fw-bolder">맨땅에 헤딩
        <svg @click="isGroupState[2]=1,cotrolGroupMenu(2)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
        </svg>
      </div>
      <div v-if="isGroupState[2]==1" class="w-100 vh10 text-center fs-2 fw-bolder">그룹 설정</div>
      <div v-if="isGroupState[3]==1" class="w-100 vh10 text-center fs-2 fw-bolder">그룹 정보</div>
      <div v-if="isGroupState[4]==1" class="w-100 vh10 text-center fs-2 fw-bolder">그룹 만들기</div>
      <div v-if="isGroupState[5]==1" class="w-100 vh10 text-center fs-2 fw-bolder">그룹 찾기</div>
      <div v-if="isGroupState[6]==1" class="w-100 vh10 text-center fs-2 fw-bolder">그룹 찾기 상세</div>
      <div v-if="isGroupState[7]==1" class="w-100 vh10 text-center fs-2 fw-bolder">그룹 채팅</div>


      <!-- group list -->
      <div class="w100 vh75 overflow-y-scroll hidden_scroll" v-if="isGroupState[0]==1">
        <div class="w100 h100">
          <div class="w100 h15 my-2 d-sm-flex justify-content-center" v-for="(val,index) in 10" :key="index">
            <div class="w90 d-sm-flex justify-content-lg-start" style="background-color: #D9D9D9; border-radius: 10px;">
              <div class="fs-3 fw-bold w20 h100 d-sm-flex align-items-center justify-content-center" style="color: #AD00FF">L1</div>
              <div class="w50 h100 d-sm-flex align-items-center"  @click="isGroupState[1]=1,cotrolGroupMenu(1)">
                <div class="w100">
                <div class="h20 w100 d-sm-flex justify-content-lg-start align-items-center fs-4 fw-bold">맨땅에 헤딩</div>
                <div class="h20 w100 d-sm-flex justify-content-lg-start" style="color: #666666">파브르 1/6명</div>
                </div>
              </div>
              <div class="w30 d-sm-flex justify-content-center align-items-center">
                <svg @click="isGroupState[7]=1,cotrolGroupMenu(7)" xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16" style="color: #B0B0B0">
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- group sel -->
      <div class="w100 vh75 overflow-y-scroll hidden_scroll" v-if="isGroupState[1]==1">
        <div class="w100 d-sm-flex justify-content-center h10 p-2">
          <div class="w80 h90" style="background-color: #D9D9D9">
            <div class="justify-content-center d-sm-flex h100">
              <div class="d-sm-flex align-items-center h100 w10">
                <svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="2vw" fill="currentColor" class="bi bi-volume-down-fill" viewBox="0 0 16 16">
                  <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
                </svg>
              </div>
              <div class="d-sm-flex align-items-center h100 w80 fs-5 fw-bold overflow-hidden marquee-section" @click="isGroupState[3]=1,cotrolGroupMenu(3)" style="white-space: nowrap;">
                <div class="marquee-div">
                  <div class="marquee"> 그냥 열심히 하자!!! 가보즈아아아</div>
                </div>
              </div>
              <div class="d-sm-flex align-items-center h100 w10">
                <svg xmlns="http://www.w3.org/2000/svg" width="1vw" height="1vw" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="w100 p-3 mt-3">
          <div class="h15 w100 fs-5 fw-bold ms-3 mb-3" style="color: #007DC3">열공중</div>
          <div class="w100">
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

        <div class="w100 p-3 mt-3">
          <div class="h15 w100 fs-5 fw-bold ms-3 mb-3" style="color: #4AAF05">공부중</div>
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

        <div class="w100 p-3 mt-3">
          <div class="h15 w100 fs-5 fw-bold ms-3 mb-3" style="color: #FB8832">휴식중</div>
          <div class="w100">
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

        <div class="w100 p-3 mt-3">
          <div class="h15 w100 fs-5 fw-bold ms-3 mb-3" style="color: #FF5756">오프라인</div>
          <div class="w100">
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

      <!-- group set -->
      <div class="w100 vh75 overflow-y-scroll hidden_scroll" v-if="isGroupState[2]==1">
        <div class="w100 h100 d-sm-flex justify-content-center">
          <div class="w70 h100">
            <div class="w100 h25 mb-4">
              <div class="w100 h30 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" placeholder="그룹명"></div>
              <div class="w100 h30 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" placeholder="비밀번호(Optional)"></div>
              <div class="w100 h40 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" placeholder="공지사항"></div>
            </div>
            <div class="w100 h20 mb-4">
              <div class="w100 h30 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" type="number" placeholder="일일 목표 시간"></div>
              <div class="w100 h30 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" type="number" placeholder="모집인원"></div>
              <div class="w100 h30 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" type="datetime-local" placeholder="모집기한"></div>
            </div>

            <div class="w100 h25">
              <div class="w100 h30 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" placeholder="그룹 한줄 소개"></div>
              <div class="w100 h50 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" placeholder="그룹 상세 소개"></div>
            </div>

            <div class="w100 h15">
              <div class="w100 h40 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" placeholder="그룹장 위임"></div>
              <div class="w100 h40 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" placeholder="그룹원 강퇴"></div>
            </div>

            <div class="w100 h5 d-sm-flex justify-content-center">
              <button class="w30 h100 m-auto fw-bold" style="background-color: #960000; color: white; border-radius: 10px; font-size: 1rem">그룹해체</button>
              <button class="w60 h100 m-auto fw-bold" style="background-color: #012060; color: white; border-radius: 10px;">저장하기</button>
            </div>
          </div>
        </div>
      </div>

      <!-- group info -->
      <div class="w100 vh75 overflow-y-scroll hidden_scroll" v-if="isGroupState[3]==1">
        <div class="w100 h80 d-sm-flex justify-content-center">
          <div class="w90 h80 d-sm-flex justify-content-center my-3">
            <div class="w90 h100 p-3" style="background-color: #D9D9D9">
              <div class="w100 h10 d-sm-flex justify-content-lg-start">
                <div class="w20 fw-bold fs-4 d-sm-flex align-items-center justify-content-center" style="color: #AD00FF;" >L1</div>
                <div class="w60 fw-bold fs-4 d-sm-flex align-items-center">맨땅에 헤딩</div>
                <div class="w20 fw-bold d-sm-flex align-items-center" style="color: gray">D-2H</div>
              </div>

              <div class="w100 h10 d-sm-flex justify-content-center">
                <div class="d-sm-flex justify-content-lg-start w50 h100">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center h100" style="color: #848484; font-size: 1.2rem">그룹장</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center text-center" style="font-size: 1.2rem;">파브르</div>
                </div>
                <div class="d-sm-flex justify-content-lg-start w50 h100">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484; font-size: 1.2rem">목표시간</div>
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center text-center mx-3" style="font-size: 1.2rem">8시간</div>
                </div>
              </div>

              <div class="w100 h10 d-sm-flex justify-content-center">
                <div class="d-sm-flex justify-content-lg-start w50">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484; font-size: 1.2rem">출석률</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center text-center" style="font-size: 1.2rem">98%</div>
                </div>
                <div class="d-sm-flex justify-content-lg-start w50">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484; font-size: 1.2rem">공부량</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center text-center" style="font-size: 1.2rem">128시간</div>
                </div>
              </div>

              <div class="w100 h10 d-sm-flex justify-content-center">
                <div class="d-sm-flex justify-content-lg-start w50">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484; font-size: 1.2rem">인원</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center text-center" style="font-size: 1.2rem">10/12명</div>
                </div>
                <div class="d-sm-flex justify-content-lg-start w50">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484; font-size: 1.2rem">시작된지</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center text-center" style="font-size: 1.2rem">364일</div>
                </div>
              </div>

              <div class="w100 h10 fs-5 fw-bold d-sm-flex align-items-center" style="color: #626262;">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" fill="currentColor" class="bi bi-volume-down-fill" viewBox="0 0 16 16">
                  <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
                </svg>
                <div class=" d-sm-flex align-items-center h100 w80 fs-5 fw-bold overflow-hidden marquee-section" @click="isGroupState[3]=1,cotrolGroupMenu(3)" style="white-space: nowrap;">
                  <div class="marquee-div">
                    <div class="marquee"> 그냥 열심히 하자!!! 가보즈아아아</div>
                  </div>
                </div>
              </div>

              <div class="w100 h50">
                <hr>
                <div class="fw-bold" style="font-size: 1.2rem">한줄소개</div>
                <div>같이 열심히하실분 구합니다</div>
                <hr>
                <div class="fw-bold" style="font-size: 1.2rem">상세</div>
                <div>그냥 열심히 공부하자! 행복한 삶에 지름길은 없고
                  미래가 저절로 일어나기를 기다리지 말자.
                  이제는 내가 원하는 미래를 위해 열심히 일 할 때.
                  모두 힘냅시다.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--group find detail -->
      <div class="w100 vh75 overflow-y-scroll hidden_scroll" v-if="isGroupState[6]==1">
        <div class="w100 h80 d-sm-flex justify-content-center">
          <div class="w90 h80 d-sm-flex justify-content-center my-3">
            <div class="w90 h100 p-3" style="background-color: #D9D9D9">
              <div class="w100 h10 d-sm-flex justify-content-lg-start">
                <div class="w20 fw-bold fs-4 d-sm-flex align-items-center justify-content-center" style="color: #AD00FF;" >L1</div>
                <div class="w60 fw-bold fs-4 d-sm-flex align-items-center">맨땅에 헤딩</div>
                <div class="w20 fw-bold d-sm-flex align-items-center" style="color: gray">D-2H</div>
              </div>

              <div class="w100 h10 d-sm-flex justify-content-center">
                <div class="d-sm-flex justify-content-lg-start w50 h100">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center h100" style="color: #848484; font-size: 1.2rem">그룹장</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center text-center" style="font-size: 1.2rem;">파브르</div>
                </div>
                <div class="d-sm-flex justify-content-lg-start w50 h100">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484; font-size: 1.2rem">목표시간</div>
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center text-center mx-3" style="font-size: 1.2rem">8시간</div>
                </div>
              </div>

              <div class="w100 h10 d-sm-flex justify-content-center">
                <div class="d-sm-flex justify-content-lg-start w50">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484; font-size: 1.2rem">출석률</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center text-center" style="font-size: 1.2rem">98%</div>
                </div>
                <div class="d-sm-flex justify-content-lg-start w50">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484; font-size: 1.2rem">공부량</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center text-center" style="font-size: 1.2rem">128시간</div>
                </div>
              </div>

              <div class="w100 h10 d-sm-flex justify-content-center">
                <div class="d-sm-flex justify-content-lg-start w50">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484; font-size: 1.2rem">인원</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center text-center" style="font-size: 1.2rem">10/12명</div>
                </div>
                <div class="d-sm-flex justify-content-lg-start w50">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484; font-size: 1.2rem">시작된지</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center text-center" style="font-size: 1.2rem">364일</div>
                </div>
              </div>

              <div class="w100 h10 fs-5 fw-bold d-sm-flex align-items-center" style="color: #626262;">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" fill="currentColor" class="bi bi-volume-down-fill" viewBox="0 0 16 16">
                  <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z"/>
                </svg>
                <div class=" d-sm-flex align-items-center h100 w80 fs-5 fw-bold overflow-hidden marquee-section" @click="isGroupState[3]=1,cotrolGroupMenu(3)" style="white-space: nowrap;">
                  <div class="marquee-div">
                    <div class="marquee"> 그냥 열심히 하자!!! 가보즈아아아</div>
                  </div>
                </div>
              </div>

              <div class="w100 h50">
                <hr>
                <div class="fw-bold" style="font-size: 1.2rem">한줄소개</div>
                <div>같이 열심히하실분 구합니다</div>
                <hr>
                <div class="fw-bold" style="font-size: 1.2rem">상세</div>
                <div>그냥 열심히 공부하자! 행복한 삶에 지름길은 없고
                  미래가 저절로 일어나기를 기다리지 말자.
                  이제는 내가 원하는 미래를 위해 열심히 일 할 때.
                  모두 힘냅시다.</div>
              </div>
            </div>
          </div>
        </div>
        <div class="w100 h5 d-sm-flex justify-content-center" v-if="isGroupState[6]==1">
          <button class="w50 h100 m-auto fw-bold" style="background-color: #012060; color: white; border-radius: 10px; font-size: 1rem">가입하기</button>
        </div>
      </div>


      <!-- group make -->
      <div class="w100 vh75 overflow-y-scroll hidden_scroll" v-if="isGroupState[4]==1">
        <div class="w100 h100 d-sm-flex justify-content-center">
          <div class="w70 h100">
            <div class="w100 h25 mb-5">
              <div class="w100 h30 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" placeholder="그룹명"></div>
              <div class="w100 h30 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" placeholder="비밀번호(Optional)"></div>
              <div class="w100 h40 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" placeholder="공지사항"></div>
            </div>
            <div class="w100 h20 mb-5">
              <div class="w100 h30 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" type="number" placeholder="일일 목표 시간"></div>
              <div class="w100 h30 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" type="number" placeholder="모집인원"></div>
              <div class="w100 h30 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" type="datetime-local" placeholder="모집기한"></div>
            </div>

            <div class="w100 h25 mb-4">
              <div class="w100 h30 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" placeholder="그룹 한줄 소개"></div>
              <div class="w100 h50 justify-content-center d-sm-flex my-1"><input style="border-radius: 10px; border: 2px gray solid" class="w100 h100 px-3 fw-bold" placeholder="그룹 상세 소개"></div>
            </div>

            <div class="w100 h10 d-sm-flex justify-content-center"><button class="w80 h70" style="background-color: #012060; color: white; border-radius: 10px;">만들기</button></div>
            </div>
        </div>
      </div>


      <!-- group find -->
      <div class="w100 vh75 overflow-y-scroll hidden_scroll" v-if="isGroupState[5]==1">
        <div class="w100 h100">
          <div class="w100 h30 d-sm-flex justify-content-center my-3" v-for="(val,index) in 5" :key="index" @click="isGroupState[6]=1,cotrolGroupMenu(6)">
            <div class="w90 h100 p-3" style="background-color:#D9D9D9; border-radius: 10px;">
              <div class="w100 h25 d-sm-flex justify-content-lg-start">
                <div class="w20 fw-bold fs-4 d-sm-flex align-items-center justify-content-center" style="color: #AD00FF;" >L1</div>
                <div class="w60 fw-bold fs-4 d-sm-flex align-items-center">맨땅에 헤딩</div>
                <div class="w20 fw-bold d-sm-flex align-items-center" style="color: gray">D-2H</div>
              </div>
              <div class="w100 h15 d-sm-flex justify-content-center">
                  <div class="d-sm-flex justify-content-lg-start w50">
                    <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484;">그룹장</div>
                    <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center">파브르</div>
                  </div>
                <div class="d-sm-flex justify-content-lg-start w50">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484;">목표시간</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center">8시간</div>
                </div>
              </div>

              <div class="w100 h15 d-sm-flex justify-content-center">
                <div class="d-sm-flex justify-content-lg-start w50">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484;">출석률</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center">98%</div>
                </div>
                <div class="d-sm-flex justify-content-lg-start w50">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484;">공부량</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center">128시간</div>
                </div>
              </div>
              <div class="w100 h15 d-sm-flex justify-content-center">
                <div class="d-sm-flex justify-content-lg-start w50">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484;">인원</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center">10/12명</div>
                </div>
                <div class="d-sm-flex justify-content-lg-start w50">
                  <div class="fw-bold d-sm-flex align-items-center justify-content-center" style="color: #848484;">시작된지</div>
                  <div class="fw-bold d-sm-flex align-items-center mx-3 justify-content-center">364일</div>
                </div>
              </div>
              <div class="w100 h30 fs-5 fw-bold d-sm-flex align-items-center" style="color: #626262">
                같이 열심히하실분 구합니다
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- group chat -->
      <div class="w100 vh75 overflow-y-scroll hidden_scroll" v-if="isGroupState[7]==1">
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



      <!-- group menu bar -->
      <div class="w100 vh10 d-sm-flex align-items-center justify-content-end px-4" style="background-color: #EEEEEE">
        <transition name="showstaredit"><div v-if="isRotate%2==1" @click="isGroupState[4]=1,cotrolGroupMenu(4)" class="w40 h60 fw-bold d-sm-flex align-items-center justify-content-center me-3" style="background-color: #D9D9D9; border-radius: 10px; font-size: 1.2rem">그룹 만들기</div></transition>
        <transition name="showstaredit"><div v-if="isRotate%2==1" @click="isGroupState[5]=1,cotrolGroupMenu(5)"   class="w35 h60 fw-bold d-sm-flex align-items-center justify-content-center me-3" style="background-color: #D9D9D9; border-radius: 10px; font-size: 1.2rem">그룹 찾기</div></transition>
        <svg @click="isRotate+=1" :class="{Rotate:isRotate%2==1}"  xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vw" fill="currentColor" class="bi bi-plus-circle-fill " viewBox="0 0 16 16" style="color: #012060;">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
        </svg>
      </div>
    </div>

</template>


<script>
export default {
  name: 'Group',
  data() {
    return {
      isRotate: 0,
      isGroupFrom: 0,
      isGroupState: [1, 0, 0, 0, 0, 0, 0, 0],
    }
  },
  methods: {
    cotrolGroupMenu(to) {
      this.isGroupState[this.isGroupFrom] = 0;
      this.isGroupState[to] = 1;
      this.isGroupFrom = to;
    },
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

.marquee-section {
  position: relative;
}

.marquee-section, .marquee-section * {
  overflow: hidden;
}

.marquee {
  white-space: nowrap;
}

.marquee-div {
  position: absolute;
  left: -100%;
  animation: move linear 5s infinite;
  min-width: 100%;
}

@keyframes move {
  from {
    left: -100%;
  }
  to {
    left: 100%;
  }
}
</style>
