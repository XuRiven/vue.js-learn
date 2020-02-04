import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moudleA from './moudles/moudleA'
// 1.安装插件
Vue.use(Vuex)

const state={ 
  counter: 1000,
  students: [{
      id: 1,
      name: 'xuriven',
      age: 23
    },
    {
      id: 2,
      name: 'curry',
      age: 18
    },
    {
      id: 3,
      name: 'kobe',
      age: 24
    },
    {
      id: 4,
      name: 'james',
      age: 34
    },
  ],
  info:{
    name:'Gigi',
    age:14,
    address:'losAngle'
  }
}

// 2.创建插件(这里的Store一定要大写)
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a:moudleA
  }
})

// 3.导出
export default store
