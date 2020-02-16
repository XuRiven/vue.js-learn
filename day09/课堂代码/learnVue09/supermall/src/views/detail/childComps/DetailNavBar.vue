<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="title" slot="center">
        <div
          class="title-item"
          @click="btnClick(index)"
          :class="{active:currentIndex==index}"
          v-for="(item,index) in titles"
          :key="item"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  components: {
    NavBar
  },
  methods: {
    btnClick(index) {
      this.currentIndex = index;
    },
    backClick(){
      this.$router.back()
    }
  }
};
</script>

<style>
.title {
  display: flex;
  font-size: 14px;
}
.title-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
.back img{
  margin-top: 13px 
}
</style>