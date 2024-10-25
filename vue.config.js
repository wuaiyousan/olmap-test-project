const { defineConfig } = require('@vue/cli-service')
// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // configureWebpack: (config) => {
  //   if (isProduction) {
  //     config.plugins.push(
  //       new CopyWebpackPlugin([
  //         { from: 'node_modules/@basemap/olmap/dist/img', to: 'js/img/' },
  //       ])
  //     )
  //   } else {
  //     config.devtool = 'source-map'
  //     config.plugins.push(
  //       new CopyWebpackPlugin([
  //         { from: 'node_modules/@basemap/olmap/dist/img', to: 'img/' },
  //       ])
  //     )
  //   }
  // },
})
