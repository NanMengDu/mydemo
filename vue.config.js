const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    entry: {},
    module: {},
    devServer: {
      assetsPublicPath:'/',
        historyApiFallback: true,
        proxy: [{
        context: '/login',
        target: 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples/data-gl/asset/data/flights.json', // 代理跨域目标接口
        changeOrigin: true,
        secure: false, // 当代理某些https服务报错时用
        cookieDomainRewrite: 'www.domain1.com' // 可以为false，表示不修改
        }],
        noInfo: true
        }
})
