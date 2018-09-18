module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
   

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".js"]
    },
    
    // resolve: {
    //     extensions: ['', '.js', '.jsx', '.json']
    // },
    // node: {
    //     fs: 'empty'
    // },

    module: {
        loaders: [
            // All files with a '.js' or '.jsx' extension will be handled by 'babel-loader'.
            {test: /\.jsx??/,
                exclude: /node_modules/, // add this line

                 loader: 'babel-loader'},
        ]
        
            // test: /\.js$/,
            // exclude: [
            //   /node_modules[\\/]react-virtualized-select/,
            // ],
            // loader: 'babel-loader',
           
    },
};
