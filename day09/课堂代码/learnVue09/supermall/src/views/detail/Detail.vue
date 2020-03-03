<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <!--      <detail-goods-info :detail-info="detailInfo"  @detailImageLoad="detailImageLoad"/>-->
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommdends" :goods="recommends"/>
    </scroll>
    <back-top @click.native="btnClick" v-show="isShow"/>
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper"
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import GoodsList from "components/content/goods/GoodsList";
  import DetailBottomBar from "./childComps/DetailBottomBar";
  import BackTop from "components/content/backTop/BackTop";
  import Scroll from "components/common/scroll/Scroll"

  import {itemListenerMixin} from "common/mixin";
  import {getDetail, Goods, GoodsParam, getRecommend} from "network/detail";
  import {Shop} from "../../network/detail";

  export default {
    name: "Detail",
    /*
    * 混入 (mixin) 提供了一种非常灵活的方式，
    * 来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。
    * 当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。
    */
    mixins: [itemListenerMixin],
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        isShow: false
      };
    },
    components: {
      DetailParamInfo,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      BackTop,
      Scroll,
    },
    methods: {
      detailImageLoad() {
        this.newRefresh();

        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.param.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommdends.$el.offsetTop);
        console.log(this.themeTopYs);
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
      },
      btnClick() {
        this.$refs.scroll.scrollTo(0, 0);
      },
      contentScroll(position) {
        this.isShow = position.y <= -100
      },
      addToCart(){
        //1.获取购物车需要展示的信息
        const product={}
        product.iid=this.iid
        product.imgUrl=this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice

        //2.将商品添加到购物车
        //this.$store.commit调用Vuex中的mutations里方法
        // this.$store.commit('addCart',product)

        //this.$store.dispatch调用Vuex中的actions里方法
        this.$store.dispatch('addCart',product)
      }
    },
    created() {
      // 1.保存传入的id
      this.iid = this.$route.params.iid,
        // 2.根据iid请求详情数据
        getDetail(this.iid).then(res => {
          const data = res.data.result;

          //3.获取顶部的图片数据
          this.topImages = data.itemInfo.topImages;

          //4.获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

          //5.获取店铺信息
          this.shop = new Shop(data.shopInfo)

          //6.获取商品详情信息
          this.detailInfo = data.detailInfo

          //7.获取参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);

          //8.获取商品评论信息
          if (data.rate.list) {
            this.commentInfo = data.rate.list[0]
          }

          /*
          $nextTick
          将回调延迟到下次 DOM 更新循环之后执行。
          在修改数据之后立即使用它，然后等待 DOM 更新。
          它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
          */
          this.$nextTick(() => {
            //根据最新数据，对于的DOM以及被渲染出来了，但图片依然没有加载完
            //目前这个offsetTop是不包含图片的

          })
        });

      //3.请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.data.list
      });
    },
    mounted() {
      //通过mixin混入传进来
    },
    destroyed() {
      this.$bus.$off("itemImageLoad", this.itemImgListener)
    }
  };
</script>

<style>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px - 49px);
  }
</style>
