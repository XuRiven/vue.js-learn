// 1.使用commonjs模块化规范
const {add,mul}=require('./mathUtils.js')
console.log(add(10,20));
console.log(mul(10,20));


// 2.使用ES6模块化规范
import {name,age,height} from "./info"
console.log(name);
console.log(age);
