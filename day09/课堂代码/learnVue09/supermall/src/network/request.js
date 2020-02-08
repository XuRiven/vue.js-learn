import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instace = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  })

  // 2.axios的拦截器(请求拦截)
  instace.interceptors.request.use(config => {
    
    //返回拦截到的config
    return config
  }, err => {
    console.log(err);
  })

  // 响应拦截
  instace.interceptors.response.use(res=>{
    return res
  },err=>{

  })

  // 3.发送真正的网络请求
  return instace(config)
}
