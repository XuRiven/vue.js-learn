<template>
  <div id="app">
    <h2>-----------App内容:moudle中的内容--------------</h2>
    <!-- 拿moudle里的属性 -->
    <h2>{{$store.state.a.name}}</h2>
    <!-- 调用moudle里的mutations -->
    <button @click="updateName">修改名字</button>
    <!-- 调用moudle里的getters -->
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <!-- 调用moudle中的actions -->
    <button @click="asyncUpdateName">异步修改名字</button>


    <h2>-----------App内容:info对象的内容是否是响应式--------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
    <h2>-----------App内容--------------</h2>
    <!-- 通过$store.state拿到Vuex中的counter -->
    <h2>{{$store.state.counter}}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent()">添加学生</button>

    <h2>-----------App内容:getters相关信息--------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.greateAges}}</h2>
    <h2>{{$store.getters.greateAgesCount}}</h2>
    <h2>{{$store.getters.moreAgeStu(30)}}</h2>

    <h2>-----------HelloVuex内容--------------</h2>
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import {
  INCREMENT,
  DECREMENT,
  INCREMENTCOUNT,
  ADDSTUDENT,
  UPDATEINFO
} from "./store/mutations-types";
export default {
  name: "App",
  data() {
    return {
      message: "kobe bryant"
    };
  },
  //引用组件
  components: {
    HelloVuex
  },
  methods: {
    add() {
      //通过$store.commit方法调用Vuex中的increment方法
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit(DECREMENT);
    },
    addCount(count) {
      // 1.普通的提交风格
      // this.$store.commit('incrementCount',count)

      // 2.特殊的提交风格
      this.$store.commit({
        type: INCREMENTCOUNT,
        count
      });
    },

    addStudent() {
      const stu = { id: 5, name: "jordan", age: 50 };
      this.$store.commit(ADDSTUDENT, stu);
    },
    updateInfo() {
      // 调用Vuex中mutations方法(同步)  this.$store.commit
      // this.$store.commit(UPDATEINFO)

      // 调用Vuex中actions方法(异步)   this.$store.dispatch
      this.$store.dispatch("aUpdateInfo", "我是携带信息").then(res => {
        console.log("里面已经完成提交");
        console.log(res);
      });
    },
    updateName(){
      this.$store.commit('updateName','gigi')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
};
</script>

<style>
</style>
