/*
- merge is a function that we can use to merge together 
two dfferent webpack config objects.
- So, this merge function is what's going to allow us to take 
all the config that we just wrote out, inside that common file and merge it together
*/

const { merge } = require('webpack-merge')

/*
This is going to take some kind of HTML file inside of our project
and inject couple of different script tags inside of it.
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
const devConfig ={
    mode : 'development',
    output : {
        publicPath: "http://localhost:5001/"
    },
    devServer :{
        port: 5001,
        historyApiFallback:{
            index : '/index.html',
        },
    },
        plugins:[
            new ModuleFederationPlugin({
                name:'marketing',
                filename:'remoteEntry.js',
                exposes:{
                    './MarketingApp':'./src/bootstrap'
                },
                shared:packageJson.dependencies
            }),
            new HtmlWebpackPlugin({
                template:'./public/index.html'
            })
        ]
    }


// here is merged both enviornements common & dev
module.exports = merge(commonConfig,devConfig)
