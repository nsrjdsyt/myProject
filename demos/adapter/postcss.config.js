module.exports = {
  plugins: [
      require('postcss-px2rem')({remUnit: 50}), //px转rem
      require('autoprefixer'),   //自动给css新属性加浏览器前缀
      require('cssnano')    //压缩css
  ]
}
