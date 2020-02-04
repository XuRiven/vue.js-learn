export default{
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
}