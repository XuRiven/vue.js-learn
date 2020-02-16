<template>
  <div>
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper"
import {getDetail} from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages:[]
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created() {
    // 1.保存传入的id
    (this.iid = this.$route.params.iid),
      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        console.log(res);
        this.topImages=res.data.result.itemInfo.topImages;
      });
  }
};
</script>

<style>
</style>