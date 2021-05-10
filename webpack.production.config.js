const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin({ /* opções adicionais aqui */ })],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'react-demo.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ]
  },
};