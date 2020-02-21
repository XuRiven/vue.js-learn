<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      @tabClick="tabClick"
      :titles="['流行','新款','精选']"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFlex"
    />
    <Scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper @swiperImageLoad="swiperImageLoad" :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control @tabClick="tabClick" :titles="['流行','新款','精选']" ref="tabControl2"/>
      <goods-list :goods="showGoods"></goods-list>
    </Scroll>
    <back-top @click.native="btnClick" v-show="isShow"/>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";
  import {getHomeMultidata, getHomeGoods} from "network/home";
  import {itemListenerMixin} from "common/mixin";

  export default {
    name: "Home",
    /*
    * 混入 (mixin) 提供了一种非常灵活的方式，
    * 来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。
    * 当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。
    */
    mixins:[itemListenerMixin],
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,

      NavBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []}
        },
        currentType: "pop",
        isShow: false,
        offsetTop: 0,
        isTabFlex: false,
        saveY: 0,
      };
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata();

      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");
    },
    // 进入组件时调用的函数
    activated() {
      // 先刷新再回到顶部，这样detail里面点击返回就能回到当初位置，而不会回到顶部
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
    },
    // 离开组件时调用的函数
    deactivated() {
      //1.保存离开时Y值
      this.saveY = this.$refs.scroll.getScrollY()

      //2.取消全局事件的监听，因为一旦进入其他页面，Home组件就不需要在监听itemImageLoad
      this.$bus.$off("itemImageLoad",this.itemImgListener)
    },
    mounted() {
    //  通过mixin混入传进来
    },
    methods: {
      //事件监听相关方法

      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = "pop";
            break;
          case 1:
            this.currentType = "new";
            break;
          case 2:
            this.currentType = "sell";
            break;
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      btnClick() {
        this.$refs.scroll.scrollTo(0, 0);
      },
      contentScroll(position) {
        // 1.判断backTop是否显示
        this.isShow = -position.y > 1000;
        // 2.决定tabcontrol是否吸顶(position:flex)
        this.isTabFlex = -position.y > this.offsetTop;
      },
      loadMore() {
        this.getHomeGoods(this.currentType);
      },
      swiperImageLoad() {
        this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
      },

      /*
        网络请求相关方法
      */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        });
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          // console.log(res);
          this.goods[type].list = this.goods[type].list.concat(
            res.data.data.list
          );
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        });
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    }
  };
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }

  .fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }
</style>
