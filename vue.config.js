module.exports = {
  /*
  * 在设置了vue.config.js之后，就不会生成map文件，map文件的作用在于：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错。也就是说map文件相当于是查看源码的一个东西。如果不需要定位问题，并且不想被看到源码，就把productionSourceMap 置为false，既可以减少包大小，也可以加密源码。
  * */
  productionSourceMap: false,
  publicPath: './', // 解决打包出现空白页的问题
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://172.16.11.32:8081/api',
        target: 'http://10.10.1.65:1002', // 测试
        ws: true, // 代理websockets
        changeOrigin: true, // 虚拟的站点需要更管origin
        pathRewrite: { // 重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc',没用，服务器也会被重写
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 192
          })
        ]
      }
    }
  }
}
