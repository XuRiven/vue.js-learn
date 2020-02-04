import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT,
  DECREMENT,
  INCREMENTCOUNT,
  ADDSTUDENT,
  UPDATEINFO
}from './mutations-types'
// 1.安装插件
Vue.use(Vuex)


// 2.创建插件(这里的Store一定要大写)

const moudleA={
  state:{
    name:'tmac'
  },
  mutations: {
    updateName(state,payload){
      state.name=payload
    }
  },
  getters: {
    fullName(state){
      return state.name+' bryant'
    },
    fullName2(state,getters){
      return getters.fullName+' miss you'
    },

    //moudle中调用store中state的属性 
    fullName3(state,getters,rootState){
      return getters.fullName2 +rootState.counter
    } 
  },
  actions: {
    aUpdateName(context){
      setTimeout(() => {
        context.commit('updateName','DMY')
      }, 1000);
    }
  }
}
const store = new Vuex.Store({
  state: {
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
  },
  mutations: {
    [INCREMENT](state) {
      state.counter++
    },
    [DECREMENT](state) {
      state.counter--
    },

    // 1.普通的提交风格
    // incrementCount(state,count){
    //   state.counter+=count
    // },

    // 2.特殊的提交风格
    [INCREMENTCOUNT](state,payload){
      state.counter+=payload.count
    },
    [ADDSTUDENT](state,stu){
      state.students.push(stu)
    },
    [UPDATEINFO](state){
      Vue.set(state.info,'sex','female')
      Vue.delete(state.info,'age')
    }
  },
  actions: {
    aUpdateInfo(context,payload){
      return new Promise((reslove,reject)=>{
        setTimeout(() => {
          context.commit(UPDATEINFO);
          reslove('kobe')
        }, 1000);
      })
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    greateAges(state) {
      return state.students.filter(s => s.age >= 20)
    },
    greateAgesCount(state, getters) {
      return getters.greateAges.length
    },
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s=>s.age>age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }

  },
  modules: {
    a:moudleA
  }
})

// 3.导出
export default store
