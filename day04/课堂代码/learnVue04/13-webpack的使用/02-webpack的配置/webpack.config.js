const path=require('path')
module.exports={
  // 人口:可以是字符串/对象/数组，这里我们入口只有一个，所有写一个字符串即可
  entry:'./src/main.js',
  // 出口:通常是一个对象，里面至少包含两个重要属性，path和filename
  output:{
    path:path.resolve(__dirname,'dist'),//注意:path通常是一个绝对路径
    filename:'bundle.js'
  },
}