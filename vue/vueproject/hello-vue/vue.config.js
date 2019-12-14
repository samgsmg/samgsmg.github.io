module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  devServer: {
    compress: true,
    port: 9000,
    proxy: "http://localhost:4000"
  },
  configureWebpack: {
    devtool: "source-map"
  }
};
