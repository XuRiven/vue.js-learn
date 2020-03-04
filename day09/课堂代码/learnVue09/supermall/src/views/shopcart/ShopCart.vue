<template>
  <div class="cart">
    <!-- 导航   -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品列表   -->
    <cart-list/>

    <!-- 底部汇总   -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
  //从vuex中导入mapGetters
  import {mapGetters} from 'vuex'
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";

  export default {
    name: 'ShopCart',
    components: {
      CartList,
      NavBar,
      CartBottomBar
    },
    computed: {
      //mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
      ...mapGetters(['cartLength'])

      //如果你想将一个 getter 属性另取一个名字，使用对象形式：
      // ...mapGetters({
      //   length:'cartLength',
      //   list:'cartList'
      // })
    }
  }
</script>

<style>
  .cart{
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
