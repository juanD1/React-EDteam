const webpack = require('webpack'),
    path = require('path'),
    endPath = path.resolve(__dirname, 'build') // donde comprimira el archivo final 'production'

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    cache: true, //no tardar en la entrada al server
    entry: [ // punto de entrada de archivo
        'react-hot-loader/patch', //Activa Hot Module Reloading HMR para React
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server', //solo estara detectando el Hot Reload, no el bundle final
        './src/index.jsx'
    ],
    output: { //arrojar en bundle, archivo final
        path: endPath,
        filename: 'index.js',
        publicPath: '/' // Necesario para el Hot-Reloading
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: '/node-modules/', //para que solo busque lo importado, omitir node-modules
                use: 'babel-loader'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader:'css-loader',
                        options: {modules: true}
                    }                    
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //activa el Hot-Reloading Global
        new webpack.NamedModulesPlugin() // mensajes en consola Hot.Reloading
    ],
    devtool: 'inline-source-map', //carga en tiempo real de server de prueba
    devServer: { //levantar server Configuracion de sever de webpack
        hot: true, //usar modulo de Hot-Reload
        contentBase: endPath, //posicion de archivo final de la app
        inline: true, // solo recarga la parte que actualice y/o guerde en el server
        compress: true,
        port: 3000,
        publicPath: '/'
    } 
}