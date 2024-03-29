const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api1', { // 遇到api1前缀的请求, 就会触发该代理配置
            target: 'http://localhost:5001', // 请求转发给谁
            changeOrigin: true, // 控制服务器响应头中Host字段的值
            pathRewrite: {'^/api1': ''}
        }),
        proxy('/api2', {
            target: 'http://localhost:5002',
            changeOrigin: true,
            pathRewrite: {'^/api2': ''}
        })
    )
}