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