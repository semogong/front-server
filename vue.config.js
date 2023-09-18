// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//     transpileDependencies: true
// })

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // Spring Boot 서비스의 주소
                changeOrigin: true,
                pathRewrite: {
                    '^/': '' // URL에서 '/api'를 제거합니다.
                }
            }
        }
    }
}