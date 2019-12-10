const BundleTracker = require('webpack-bundle-tracker');
module.exports = {
    output: {
        publicPath: 'static/',
    },
    plugins: [
        new BundleTracker({path: "../", filename: 'webpack-stats.json'}),
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(s[ac]ss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader',],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'img/',
                    publicPath: (url, resourcePath, context) => {
                        // `resourcePath` is original absolute path to asset
                        // `context` is directory where stored asset (`rootContext`) or `context` option

                        // To get relative path you can use
                        // const relativePath = path.relative(context, resourcePath);

                        return `static/img/${url}`;
                    },
                },
            },
        ],
    },
};
