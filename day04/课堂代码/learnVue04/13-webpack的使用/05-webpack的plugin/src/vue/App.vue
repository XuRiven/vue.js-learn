<template>
<div>
  <h2>我是App组件标题</h2>
  <p>我是App组件内容</p>
  <h2>{{name}}</h2>
</div>
</template>

<script>
export default {
  data () {
    return {
      name:'我是App组件name'
    }
  }
}
</script>

<style>

</style>