const path = require('path')
const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const UglifyjsWebpackPlugin=require('uglifyjs-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // 在url前面加上对应的路径
    // publicPath:'dist/'
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

            3.图片文件处理 – 修改文件名称
            我们可以在options中添加上如下选项：
            img：文件要打包到的文件夹
            name：获取图片原来的名字，放在该位置
            hash:8：为了防止图片名称冲突，依然使用hash，但是我们只保留8位
            ext：使用图片原来的扩展名

            */
            limit: 13000,
            name:'img/[name].[hash:8].[ext]'
          }
          
        }]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use:['vue-loader']
      }
    ]
  },
  resolve:{
    alias: {
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归XuRiven所有'),
    new HtmlWebpackPlugin({
      template:'index.html'
    }
    ),
    new UglifyjsWebpackPlugin()
  ],
  devServer:{
    contentBase:'./dist',
    inline:true
  }
}