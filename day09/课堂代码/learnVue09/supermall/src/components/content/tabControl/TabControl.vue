<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" :key="item"
         :class="{active:currentIndex==index}"
         @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        // 当返回的是对象或者是数组的时候都必须写成函数
        return [];
      }
    }
  },
  data () {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex=index;
      this.$emit("tabClick",index)
    }
  }
};
</script>

<style>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 14xp;
    height: 40px;
    line-height: 40px;
    background-color: white
  }
  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .tab-control-item.active span {
    border-bottom: 2px solid var(--color-high-text);
  }

</style>