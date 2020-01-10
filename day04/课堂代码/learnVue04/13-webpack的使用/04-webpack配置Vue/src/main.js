// 1.使用commonjs模块化规范
const {
  add,
  mul
} = require('./js/mathUtils')
console.log(add(10, 20));
console.log(mul(10, 20));


// 2.使用ES6模块化规范
import {
  name,
  age,
  height
} from "./js/info"
console.log(name);
console.log(age);

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')
document.writeln('<h2>hello kobe</h2>')




// 5.使用Vue进行开发
/*
  1.el和template模板的关系是什么呢？
    在我们之前的学习中，我们知道el用于指定Vue要管理的DOM，可以帮助解析其中的指令、事件监听等等。
    而如果Vue实例中同时指定了template，那么template模板的内容会替换掉挂载的对应el的模板。
  2.这样做有什么好处呢？
    这样做之后我们就不需要在以后的开发中再次操作index.html，只需要在template中写入对应的标签即可
 */
import Vue from 'vue'
// import cpn from './vue/cpn'
import cpn from './vue/Cpn.vue'
new Vue({
  template: '<cpn/>',
  el: '#app',
  data: {},
  components: {
    cpn
  }
})