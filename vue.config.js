module.exports = {
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
  }
}
