const path = require('path');

module.exports = {
  entry: {
    index :"./src/index.ts",
    characterCreation : "./src/characterCreation.ts",
    characterEdit: "./src/characterEdit.ts",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,
};
 