const appConfig = require('./src/app.config')
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 开启 CSS source maps?
  css: {
    sourceMap: true,
  },
  devServer: {
    ...(process.env.API_BASE_URL
      ? // Proxy API endpoints to the production base URL.
        { proxy: { '/api': { target: process.env.API_BASE_URL } } }
      : // Proxy API endpoints a local mock API.
        { before: require('./tests/mock-api') }),
  },
  chainWebpack: (config) => {
    config.set('name', appConfig.title)
    config.resolve.alias.clear().merge(require('./aliases.config').webpack)
    config.resolve.extensions.delete('.vue')
    config.performance.hints(
      process.env.NODE_ENV === 'production' &&
        !process.env.VUE_APP_TEST &&
        'warning'
    )
  },
}
