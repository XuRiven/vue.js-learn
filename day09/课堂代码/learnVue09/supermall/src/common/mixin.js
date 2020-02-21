import {debounce} from "./utils";

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh:null
    }
  },
  mounted() {
    // 监听item中图片加载完成
    // $bus是在main.js中加的原型 Vue.prototype.$bus=new Vue()
    // debounce 防抖动函数，定义在common/utils.js
    this.newRefresh = debounce(this.$refs.scroll.refresh);
    this.itemImgListener = () => {
      this.newRefresh();
    }
    this.$bus.$on("itemImageLoad", this.itemImgListener);
  }
}
