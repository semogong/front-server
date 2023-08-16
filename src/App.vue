<template>

  <router-view/>

</template>


<script>
export default {
  name: 'App',
  components: {

  }
}
</script>


<style>

.vw5{
    width: 5vw;
}
.vw10{
    width: 10vw;
}
.vw15{
    width: 15vw;
}
.vw20{
    width: 20vw;
}
.vw25{
    width: 25vw;
}
.vw30{
    width: 30vw;
}
.vw35{
    width: 35vw;
}
.vw40{
    width: 40vw;
}
.vw45{
    width: 45vw;
}
.vw50{
    width: 50vw;
}
.vw55{
    width: 55vw;
}
.vw60{
     width: 60vw;
 }
.vw65{
    width: 65vw;
}
.vw70{
    width: 70vw;
}

.vw75{
    width: 75vw;
}

.vw80{
    width: 80vw;
}

.vw85{
    width: 85vw;
}

.vw90{
    width: 90vw;
}

.vw95{
    width: 95vw;
}

.vw100{
    width: 100vw;
}



.vh5{
    height: 5vh;
}
.vh10{
    height: 10vh;
}
.vh15{
    height: 15vh
}
.vh20{
    height: 20vh;
}
.vh25{
    height: 25vh;
}
.vh30{
    height: 30vh;
}
.vh35{
    height: 35vh;
}
.vh40{
    height: 40vh;
}
.vh45{
    height: 45vh;
}
.vh50{
    height: 50vh;
}
.vh55{
    height: 55vh;
}
.vh60{
    height: 60vh;
}
.vh65{
    height: 65vh;
}
.vh70{
    height: 70vh;
}

.vh75{
    height: 75vh;
}

.vh80{
    height: 80vh;
}

.vh85{
    height: 85vh;
}

.vh90{
    height: 90vh;
}

.vh95{
    height: 95vh;
}

.vh100{
    height: 100vh;
}

 .scroll::-webkit-scrollbar {
     width: 10px;  /* 스크롤바의 너비 */
 }

.scroll::-webkit-scrollbar-thumb {
    background: lightgray; /* 스크롤바의 색상 */
    border-radius: 5px;
}

.scroll::-webkit-scrollbar-track {
    background: #E3E3E3  /*스크롤바 뒷 배경 색상*/
}


.hidden_scroll::-webkit-scrollbar {
  display: none;
}

.hidden_scroll {
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}


@media all and (min-width:1920px) and (max-width:2560px) {
    html{
        font-size: 14px;
    }
}
@media all and (min-width:1600px) and (max-width:1919px) {
    html{
        font-size: 12px;
    }
}
/* 모바일 가로 & 테블릿 세로 (해상도 480px ~ 767px)*/
@media all and (min-width:1366px) and (max-width:1599px) {
    html{
        font-size: 10px;
    }
}
/* 모바일 세로 (해상도 ~ 479px)*/
@media all and (max-width:1365px) {
    html{
        font-size: 8px;
    }
}




</style>