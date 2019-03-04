const isDev = process.env.NODE_ENV === 'development'
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: /node_modules/
  },
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // For all .css files except from node_modules
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', {loader: 'css-loader', options: {modules: true}}]
      },
      {
        // For all .css files in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
