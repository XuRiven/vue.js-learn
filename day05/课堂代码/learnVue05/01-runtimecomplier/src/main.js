import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const cpn={
  template:'<div>{{message}}</div>',
  data () {
    return {
      message:'我是组件message!'
    }
  }
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  /* components: { App },
  template: '<App/>' */
  render: function (createElement, context) {
    // 1.普通用法 createElement('标签',{标签的属性},[''])
    // return createElement('h2', {class: 'box'}, ['helloWorld'])

    // 2.传入组件对象
    return createElement(App)
  }


  /* 
  runtime-compiler和runtime-only比较:
  runtime-compiler(v1)
  template -> ast -> render -> vdom -> UI

  runtime-only(v2)(1.性能更高 2.下面的代码量更少)
  render -> vdom -> UI
   */
})
