<template>
  <div>
    <h2>主页</h2>
    <p>jordan</p>
    <router-link to="/home/homeNews">新闻</router-link>
    <router-link to="/home/homeMessage">消息</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/news"
    };
  },
  created() {
    console.log("home created");
  },
  destroyed() {
    console.log("home destroyed");
  },

  // activated和deactivated这两个函数只有该组件被保持了状态使用keep-alive时才有效
  activated() {
    this.$router.push(this.path);
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  }
};
</script>

<style>
</style>