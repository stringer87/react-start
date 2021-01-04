let babel = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}

let webpack = `const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  target: 'electron-renderer',
  output: {
    path: path.resolve(__dirname + '/public/'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  }
}`

let ignore = `
node_modules
public/app.js
`

module.exports = {
  babel,
  webpack,
  ignore 
}