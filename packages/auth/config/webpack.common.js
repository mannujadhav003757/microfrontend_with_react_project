module.exports={
    module:{
        rules:[
            {
                // Tis essentially describes here. whenever we import in a file
                //that ends with an extension of either 'mjs' or just 'js'.
                // We want to be processed by Babel
                test: /\.m?js$/,

                // This essentially describes do not ry to run babel thing on any file
                //out of our node modules directory

                exclude: /node_modules/,

                use:{
                    loader:'babel-loader',
                    options:{

                        // @babel/preset-react - means that bael gonna process all the diffrent jsx tags so we add into our application
                        // @babel/preset-env - Right here is going to transform our code in variety of different ways. So, take all kind of ES2015,16,17 and so on syntax and it converted down to the es5.
                        presets:['@babel/preset-react','@babel/preset-env'],

                        //'@babel/plugin-transform-runtime' - It is going to add in a little bit of additional code .
                        // just enable some diffrent fetures such as async await syntax
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}