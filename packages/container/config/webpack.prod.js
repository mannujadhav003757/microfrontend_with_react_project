const { merge } = require('webpack-merge')
const ModuleFederationPlugIn = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        // '[name].[contenhash].js' --
        /* Here ensures that whenever we build some files
           for production all the different files that are
           built are gone a this as a template.
           It figure out how to name them

        - We are going first put down the name of the file that was created
           and then hash of the contents of the file.
       -  This is done for caching issues 
        */
        filename: '[name].[contenhash].js',
        publicPath: '/container/latest/'
    },
    plugins:[
        new ModuleFederationPlugIn({
            name:'container',
            remotes:{
                marketing:`marketing@${domain}/marketing/latest/remoteEntry.js`
            },
            shared:packageJson.dependencies
        })
    ]

}

module.exports = merge(commonConfig,prodConfig)