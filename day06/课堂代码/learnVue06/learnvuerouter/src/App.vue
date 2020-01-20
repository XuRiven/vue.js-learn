<template>
  <div id="app">
    <!-- router-link:
    该标签是一个vue-router中已经内置的组件, 它会被默认渲染成一个<a>标签. 

    <roter-link>还有其他一些属性:
    1.tag: tag可以指定<router-link>之后渲染成什么组件, 比如上面的代码会被渲染成一个<button>元素, 而不是<a>
    2.replace: replace不会留下history记录, 所以指定replace的情况下, 后退键返回不能返回到上一个页面中
    3.active-class: 当<router-link>对应的路由匹配成功时, 会自动给当前元素设置一个router-link-active的class,
    -->

    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
    <router-link :to="'/user/'+userId" tag="button">个人中心</router-link>

    <!-- 通过:to传递参数 -->
    <!-- <router-link :to="{path:'/profile',query:{name:'xuriven',age:23,height:'1.83m'}}" tag="button">档案</router-link> -->

    <!-- 通过代码方式传递参数 -->
    <button @click="profileClick">档案</button>


    <!-- 
      keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。
      它们有两个非常重要的属性:
      include - 字符串或正则表达，只有匹配的组件会被缓存
      exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存,这里写的是Profile.vue中export default的name
      router-view 也是一个组件，如果直接被包在 keep-alive 里面，所有路径匹配到的视图组件都会被缓存：
     -->
    <keep-alive exclude="Profile">
    <!-- router-view:该标签会根据当前的路径, 动态渲染出不同的组件.-->
      <router-view/>
    </keep-alive>
    
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "kobe"
    };
  },
  methods: {
    linkToHome() {
      this.$router.push("/home");
    },
    linkToAbout() {
      this.$router.push("/about");
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "xuriven",
          age: "23",
          height: "1.83m"
        }
      });
    }
  }
};
</script>

<style>
.active {
  color: red;
}
</style>
