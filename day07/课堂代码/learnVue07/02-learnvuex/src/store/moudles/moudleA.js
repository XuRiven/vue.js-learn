  /* 
  由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。
  为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。
  每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：
  */
export default {
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