<template>
  <div class="bottom-menu">
    <CheckButton :is-checked="isSelectAll"
                 class="select-all" @click.native="checkClick"/>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product">去计算({{cartLength}})</span>
  </div>
</template>

<script>
  import CheckButton from "./CheckButton";

  export default {
    name: "CartBottomBar",
    //组件里面data必须是一个函数
    // data:function () {
    //   return{
    //     isSelect:true
    //   }
    // },
    components: {
      CheckButton
    },
    computed: {
      totalPrice() {
        return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((previousValue, item) => {
          return previousValue + item.price * item.count
        }, 0).toFixed(2)
      },
      cartLength(){
        return this.$store.state.cartList.filter(item => item.checked).length
      },
      isSelectAll(){
        if (this.$store.state.cartList.length==0) return false
        //1.使用filter
        // return !(this.$store.state.cartList.filter(item => !item.checked).length)

        //2.使用find(推荐)
        return !(this.$store.state.cartList.find(item => !item.checked))

        //3.普通遍历
        /*for (let item of this.$store.state.cartList){
          if (!item.checked){
            return false
          }
        }
        return true*/
      }
    },
    methods: {
      checkClick() {
       if(this.isSelectAll){
         this.$store.state.cartList.forEach(item => item.checked=false)
       }else {
         this.$store.state.cartList.forEach(item => item.checked=true)
       }
      }
    }
  }
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
