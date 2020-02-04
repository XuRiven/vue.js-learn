/* 
Action 类似于 mutation，不同在于：
Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作。
*/
export default{
    aUpdateInfo(context,payload){
      return new Promise((reslove,reject)=>{
        setTimeout(() => {
          context.commit(UPDATEINFO);
          reslove('kobe')
        }, 1000);
      })
    }
}