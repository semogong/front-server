<template>
  <div></div>
</template>
<script>
export default {
  name:'ProfileStatic',
  data(){
    return{
      posts: [
        { id: 1, title: 'Post 1', editor:'박정빈',editTime:"30분전"},
        { id: 2, title: 'Post 2', editor:'박승일',editTime:"1시간전"},
        { id: 3, title: 'Post 3', editor:'이재훈',editTime:"2시간전"},
        { id: 4, title: 'Post 4', editor:'박정빈',editTime:"30분전"},
        { id: 5, title: 'Post 5', editor:'박승일',editTime:"1시간전"},
        { id: 6, title: 'Post 6', editor:'이재훈',editTime:"2시간전"},],
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