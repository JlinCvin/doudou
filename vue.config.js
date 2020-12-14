module.exports = {
  publicPath: '/miaomiao',
  // assetsDir: 'static',
  //   parallel: false,
    // publicPath: process.env.NODE_ENV === 'production' ? './' : '/' 

  devServer : {
    proxy : {
      '/api2' :{
        target : 'http://localhost:3000',
        changeOrigin :true
      }
    }
  }
}