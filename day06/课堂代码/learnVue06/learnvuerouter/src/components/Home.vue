<template>
  <div>
    <h2>主页</h2>
    <p>jordan</p>
    <router-link to='/home/homeNews'>新闻</router-link>
    <router-link to='/home/homeMessage'>消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name :'Home'
}
</script>

<style>

</style>