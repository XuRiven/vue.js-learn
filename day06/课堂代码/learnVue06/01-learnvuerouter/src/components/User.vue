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
   created () {
    console.log('user created');
  },
  destroyed () {
    console.log('user destroyed');
  },
  computed: {
    userId(){
      return this.$route.params.userId  
    }
  }
}
</script>

<style>

</style>