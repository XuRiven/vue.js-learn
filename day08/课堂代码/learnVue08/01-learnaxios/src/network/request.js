import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instace = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })

  // 2.axios的拦截器(请求拦截)
  instace.interceptors.request.use(config => {
    console.log(config);
    /*
     拦截器使用：
     1.比如cofig中的一些信息不符合服务器的要求
     2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
     3.某些网络请求(比如登录token)，必须携带一些特殊的信息
    */
    //返回拦截到的config
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截
  instace.interceptors.response.use(res=>{
    console.log(res);
    return res
  },err=>{
    console.log(err);
  })
  // 3.发送真正的网络请求
  /*
   instace(config).then(res=>{
    reslove(res)
  }).catch(err=>{
    reject(err)
  })
   */
  return instace(config)
}
