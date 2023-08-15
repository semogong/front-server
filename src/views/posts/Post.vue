<template>
  <div class="post">
      <div class="overlay" @click="$emit('close-modal')"></div>]
      <div class="modal-card">
          <p>Selected Post ID: {{ selectedPostId }}</p>
          <p>Selected Post ID: {{ msg }}</p>

      </div>
  </div>
</template>

<script>


import axios from "axios";


export default {
    name: 'Post',
    data(){
        return{
            msg:''
        }
    },
    created() {
        const idx = this.$store.getters.selectedPostId;
        const urls = '/api/items/'+idx;
        axios.get(urls).then((res)=>{
            this.msg = res.data;
        })

    },
}</script>

<style scoped>
.post,.overlay{
    width: 100%;
    height: 100%;
    position: fixed;
    left:0px;
    top:0px;

}

.overlay{
    opacity: 0.5;
    background-color: black;
}

.modal-card{
    position:relative;
    background-color: white;
    width: 70vw;
    height: 95vh;
    margin: auto;
}



</style>