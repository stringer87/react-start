let babel = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}

let webpack = `const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.jsx',
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
      }
    ]
  }
}`

let ignore = `
node_modules
public/app.js
`
let client = `
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/app.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
`
let clientApp = `
import React from 'react';

function App(){
  return(
    <>Hello World</>
  )
}

export default App
`
let public = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
</head>
<body>
  <div id="app">
  <script type='text/javascript' src="./app.js"></script>
</body>
</html>
`
let server = `
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.listen(port, () => console.log('server running'));
`

module.exports = {
  babel,
  webpack,
  ignore,
  client,
  clientApp,
  public,
  server 
}