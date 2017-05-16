var path      = require('path');
var srcPath   = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist', 'web');

module.exports = {
  context: srcPath,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(srcPath, 'index.js')
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: buildPath,
    hot: true
  },
  module: {
    rules: [
      { test: /\.css$/, use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
      ]},
      { test: /\.js$/, exclude: /node_modules/, use: [
        { loader: 'babel-loader' }
      ]},
      { test: /\.jsx$/, exclude: /node_modules/ , use: [
        { loader: 'babel-loader' }
      ]},
      { test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: [
        { loader: "file-loader?limit=1024&name=fonts/[name].[ext]" }
      ]}
    ]
  }
}