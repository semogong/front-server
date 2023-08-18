<template>
  <div class="w100 h100">
      <div class="w25 h100 m-auto d-sm-flex align-items-center">
          <div class="w100 h60">
              <div class="w100">
                  <router-link to="/login">
                      <img class="w100" @click="$router.push('/main')" :src="require('@/assets/images/logo.png')">
                  </router-link>
                  <router-view></router-view>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'LoginFrame'
}
</script>

<style>
a{
  text-decoration: none;
  color: gray;
}
</style>