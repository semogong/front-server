<template>
  <div class="w100 h100">
      <div class="w25 h100 m-auto d-sm-flex align-items-center">
          <div class="w100 h60">
              <div class="w100">
                  <router-link to="/login">
                      <img class="w100" @click="restFormInfo()" :src="require('@/assets/images/logo.png')">
                  </router-link>
                  <router-view></router-view>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

import {reactive} from "vue";

export default {
  name: 'Login',

  setup(){
    const state = reactive({
      clientMsg:"",
      statusCode:"",
    })

    return{state}
  },

  methods: {
    restFormInfo(){
      this.$store.commit("restFormInfo")
      this.$router.push('/login')
    }

  },
}
</script>

<style scoped>
</style>