<template>
  <div id="app">
    <!--
      keep-alive,点击分类然后在返回首页不会destory
      exclude="Detail",点击不同的商品详情页不同，所以要加exclude,不然详情页都一样
     -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
