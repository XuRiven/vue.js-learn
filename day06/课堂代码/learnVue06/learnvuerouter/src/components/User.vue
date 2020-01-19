<template>
  <div>
    <h2>个人中心</h2>
    <p>你好{{userId}}</p>
    <p>你好{{$route.params.userId}}</p>
  </div>
</template>

<script>
export default {
  name:'User',
  computed: {
    userId(){
      return this.$route.params.userId  
    }
  }
}
</script>

<style>

</style>