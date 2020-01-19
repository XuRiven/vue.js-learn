//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'


// import Home from '../components/Home';
// import About from '../components/About';
// import User from '../components/User';

//通过懒加载方式导入
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象,配置映射关系
const routes = [

  {
    // 设置路由的默认路径
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children:[
      {
        path:'',
        redirect: 'homeNews'
      },
      {
        // 路由嵌套里的路径不需要加/
        path:'homeNews',
        component:HomeNews
      },
      {
        path:'homeMessage',
        component:HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,

  /* 
    我们前面说过改变路径的方式有两种:
    URL的hash
    HTML5的history
    默认情况下, 路径的改变使用的URL的hash.
    如果希望使用HTML5的history模式, 非常简单, 进行如下配置即可:  
  */
  mode: 'history',
  linkActiveClass: 'active'
})

// 3.将router对象传入到Vue实例
export default router
