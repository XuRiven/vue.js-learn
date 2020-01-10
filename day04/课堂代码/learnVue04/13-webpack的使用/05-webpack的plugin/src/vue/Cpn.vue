<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button>按钮</button>
    <h2>{{name}}</h2>
    <App/>
    </div>
</template>

<script>

/* 
这里面不能简写，要写App.vue
若想简写，需要在webpack.config.js的resolve中配置extensions:['.js'.'.vue']
*/
import App from './App.vue'

export default {
  data() {
    return {
      message: 'kobe',
      name: 'james'
    }
  },
  components: {
    App
  }
}
</script>

<style>
  .title{
    color: green
  }
</style>