const title = require('./src/settings').title

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH ? process.env.VUE_APP_PUBLIC_PATH : '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: process.env.NODE_ENV === 'development',
  assetsDir: 'static',
  configureWebpack: {
    name: title
  }
}
