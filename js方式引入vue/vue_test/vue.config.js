module.exports = {
  pages: {
    index: {
      //入口
      entry: 'src/main.js',
    },
  },
  lintOnSave: false, //关闭语法检查
  // 开启代理服务器（方式一）
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }

  // 开启代理服务器（方式二）
  devServer: {
    proxy: {
      '/jack': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/jack':''} //用于将前端传来的请求路径去除掉‘/jack’前缀后再向后端服务器发送请求
        // ws: true, // 用于支持websocket
        // changeOrigin: false //在请求后端服务器时将自身端口号改为和后端服务器一样的端口号,用于控制请求头中的host值,不写默认为true
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''} //用于将前端传来的请求路径去除掉‘/jack’前缀后再向后端服务器发送请求
        // ws: true, // 用于支持websocket
        // changeOrigin: false //在请求后端服务器时将自身端口号改为和后端服务器一样的端口号,用于控制请求头中的host值,不写默认为true
      },
    }
  }
}