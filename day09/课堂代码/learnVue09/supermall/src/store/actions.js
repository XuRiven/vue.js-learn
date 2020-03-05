import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations_types'

export  default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      //1.查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid===payload.iid);
      //2.判断oldProduct
      if (oldProduct){
        // oldProduct.count+=1
        context.commit(ADD_COUNTER,oldProduct)
        resolve('加入购物车成功')
      }else {
        payload.count=1
        context.commit(ADD_TO_CART,payload)
        resolve('加入购物车成功')
        // context.state.cartList.push(payload)
      }
    })
  }
}
