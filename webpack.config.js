
const Path = require('path');

module.exports = {
    entry: './src/api.ts',
    devtool: 'source-map',
    output: {
        path: Path.resolve(__dirname, './lib'),
        filename: 'app.js',
        library: {
            type: 'commonjs2'
        },
        clean: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
                exclude: /node_modules/,
                include: Path.resolve(__dirname, 'src')
            },
            {
                test: /\.ts|\.tsx$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        'react': 'react',
        '@nbsolutions/interfaces': '@nbsolutions/interfaces',
        '@nbsolutions/object': '@nbsolutions/object'
    }
};
