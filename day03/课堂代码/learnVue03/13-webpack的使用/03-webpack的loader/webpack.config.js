const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 在url前面加上对应的路径
    publicPath:'dist/'
  },
  module: {
    rules: [
      /* 
      css-loader只负责css文件加载
      style-loader负责将样式添加到DOM中
      使用多个loader时，是从右向左读取的 
      */
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }]
      },

      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            /* 
            1.图片大小小于limit:
            发现背景图是通过base64显示出来的
            这也是limit属性的作用，当图片小于13kb时，对图片进行base64编码

            2.图片大小大于limit
            如果大于13kb呢？会通过file-loader进行处理，但是我们的项目中并没有file-loader,所以，我们需要安装file-loader
            */
            limit: 13000,
            name:'img/[name].[hash:8].[ext]'
          }
          
        }]
      }
    ]
  }
}