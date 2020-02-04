/* 
更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：
*/
import {
  INCREMENT,
  DECREMENT,
  INCREMENTCOUNT,
  ADDSTUDENT,
  UPDATEINFO
}from './mutations-types'
export default {
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
  }