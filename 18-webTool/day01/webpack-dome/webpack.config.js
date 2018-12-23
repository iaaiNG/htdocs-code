module.exports = {
    mode: 'development',
    entry: __dirname + '/app/main.js',  //项目入口文件
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'  //webpack 打包后生成bundle.js
    },
    devServer: {
        contentBase: './public',  // index.html 路径
        historyApiFallback: true,
        inline: true  // 实时刷新
    }
};