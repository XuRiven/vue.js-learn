<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  data () {
    return {
      scroll:null
    }
  },
  props: {
    probeType:{
      type:Number,
      default:0
    },
  },
  mounted () {
    // 1.创建BScroll对象
    this.scroll=new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      click:true,
    })

    // 2.监听滚动的位置
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })

    // 3.监听上拉事件
  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll.refresh();
    }
  }
}
</script>

<style>


</style>