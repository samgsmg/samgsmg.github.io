module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  devServer: {
    compress: true,
    port: 9001,
    proxy: "http://localhost:4000",
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: {
    devtool: "source-map"
  },
  css: {
    requireModuleExtension: false,
    sourceMap: true
  },
  lintOnSave: process.env.NODE_ENV !== "production"
};
