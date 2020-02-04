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