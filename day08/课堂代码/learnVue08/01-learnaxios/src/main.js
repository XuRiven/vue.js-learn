import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

/* 
使用全局的axios和对应的配置在进行网络请求

axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res);
})

axios({
  url: 'http://123.207.32.32:8000/home/data',

  //专门针对get请求的参数拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
})




// axios配置相关信息
axios.defaults.baseURL="http://123.207.32.32:8000" 
axios.defaults.timeout=5
// axios发送并发请求
axios.all([axios({
    url: '/home/multidata',
  }), axios({
    url: '/home/data',

    //专门针对get请求的参数拼接
    params: {
      type: 'sell',
      page: 1
    }
  })])
  .then(results => {
    console.log(results);
  })
 */


//  创建对应的axios实例
/*
 const instance1=axios.create({
  baseURL:"http://123.207.32.32:8000",
  timeout:5000
})

instance1({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
})

instance1({
  url:'/home/data',
  params:{
    type:'pop',
    page:1
  }
}).then(res=>{
  console.log(res);
})


const instance2=axios.create({
  baseURL:'http://123.22.22.22:8000',
  timeout:7000
}) 
*/

// 封装request模块
import { request } from './network/request'
request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  console.log(err);
})