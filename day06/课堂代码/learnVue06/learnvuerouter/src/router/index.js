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
    // 定义标题
    meta: {
      title: '首页'
    },
    children: [{
        path: '',
        redirect: 'homeNews'
      },
      {
        // 路由嵌套里的路径不需要加/
        path: 'homeNews',
        component: HomeNews
      },
      {
        path: 'homeMessage',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
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


/* 
我们可以利用beforeEach来完成标题的修改.
首先, 我们可以在钩子当中定义一些标题, 可以利用meta来定义
其次, 利用导航守卫,修改我们的标题.

导航钩子的三个参数解析:
to: 即将要进入的目标的路由对象.
from: 当前导航即将要离开的路由对象.
next: 调用该方法后, 才能进入下一个钩子.
*/
// 前置守卫(guard)
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  document.title = to.matched[0].meta.title
  console.log('++++');
  next()
})

// 后置钩子(hook)
router.afterEach( route => {
  console.log('----');
  
})
// 3.将router对象传入到Vue实例
export default router
