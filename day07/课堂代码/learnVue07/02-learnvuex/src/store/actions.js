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