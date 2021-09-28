/**
 * @descripition: 配置webpac 图片压缩、js压缩
 * @param {*}
 * @return {*}
 * @Author: liujunqing
 */
const path = require('path');
const resolve = dir => path.join(__dirname, dir)
module.exports = {
    // 基本路径
    publicPath: process.env.NODE_ENV === 'development' ? '/' : '/',
    assetsDir: 'static',
    // 输出文件路径
    outputDir: 'dist',
    lintOnSave: true,
    // webpck配置别名--js文件最小化处理,c处理大小
    chainWebpack: config => {
        // 最小化代码
        config.optimization.minimize(true);
        // 分割代码
        config.optimization.splitChunks({
            chunks: 'all'
        });
        // 压缩图片
        // config.resolve.alias.set('@', resolve('src'));
        // config.module
        //     .rule('images')
        //     .use('image-webpack-loader')
        //     .loader('image-webpack-loader')
        //     .options({
        //         bypassOnDebug: true
        //     })
        //     .end()
        //     .rule('vue')
        //     .use('vue-loader')
        //     .tap(options => {
        //         return options
        //     })
    },
    devServer: {
        host: 'localhost',
        port: 8899,
        open: false,
        proxy: { //  使用代理
            '/api': {
                // 目标代理服务地址
                target: 'baidu.com',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }

            }
        }
    }
}