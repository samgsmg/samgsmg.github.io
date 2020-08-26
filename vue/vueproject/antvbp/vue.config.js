const path = require('path')
const webpack = require('webpack')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const GitRevision = new GitRevisionPlugin()

function resolve (dir) {
    return path.join(__dirname, dir)
}
// check Git
function getGitHash () {
    try {
        return GitRevision.version()
    } catch (e) {}
    return 'unknown'
}

const buildDate = JSON.stringify(new Date().toLocaleString())

const vueConfig = {
    configureWebpack: {
        plugins: [
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new webpack.DefinePlugin({
                APP_VERSION: `"${require('./package.json').version}"`,
                GIT_HASH: JSON.stringify(getGitHash()),
                BUILD_DATE: buildDate
            })
        ]
    },
    chainWebpack: (config) => {
        config.resolve.alias.set('@$', resolve('src'))
    },

    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    // less vars，customize ant design theme

                    // 'primary-color': '#F5222D',
                    // 'link-color': '#F5222D',
                    'border-radius-base': '2px'
                },
                // DO NOT REMOVE THIS LINE
                javascriptEnabled: true
            }
        }
    },
    devServer: {
        // development server port 8000
        port: 8000
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        // proxy: {
        //   '/api': {
        //     target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
        //     ws: false,
        //     changeOrigin: true
        //   }
        // }
    },
    productionSourceMap: false,
    lintOnSave: true,
    transpileDependencies: []

}

module.exports = vueConfig
