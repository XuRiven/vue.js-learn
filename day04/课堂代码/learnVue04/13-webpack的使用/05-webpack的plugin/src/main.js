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


// document.writeln('<button>按钮</button>')