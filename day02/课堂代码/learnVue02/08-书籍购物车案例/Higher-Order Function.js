/* 
编程范式:命令式编程/声明式编程
编程范式:面向对象编程(第一公民:对象)/函数式编程(:第一公民:函数)
filter/map/reduce
*/

/* 
1、filter
filter中的回调函数有一个要求:必须返回一个boolean值
true:当返回true时，函数内部会自动将这次回调的n加入到新的数组中
false:当返回false时，函数内部会过滤掉这次的n

2、map
对回调函数中传入的n进行操作

3、reduce
reduce作用对数组中所有的内容进行汇总
需要传递两个参数:
  1.第一个参数是一个function,里面也有两个参数(可以传递四个参数)，第一个previousValue是上一次函数中获得的值，第二个是数组里遍历的值
  2.第二个参数是传递给函数的初始值
reduce(fun(previousValue,n){
  return preValue + n
},0)

*/



const nums = [30, 20, 50, 190, 800, 50, 223]
let total = nums.filter(function (n) {
  return n < 100
}).map(function (n) {
  return n * 2
}).reduce(function (previousValue, n) {
  return previousValue + n
}, 0)
console.log(total);