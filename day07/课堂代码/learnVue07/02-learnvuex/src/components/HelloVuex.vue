<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.greateAges}}</h2>
    <h2>{{$store.getters.greateAgesCount}}</h2>
    <h2>{{$store.getters.moreAgeStu(30)}}</h2>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex"
  }
</script>

<style scoped>

</style>
