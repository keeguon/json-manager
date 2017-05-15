const path      = require('path');
const srcPath   = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist', 'electron');

module.exports = {
  context: srcPath,
  entry: [path.join(srcPath, 'index.js')],
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  target: 'electron-renderer',
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