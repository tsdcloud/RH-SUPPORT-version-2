const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
    new webpack.HotModuleReplacementPlugin(), // Add this line to enable Hot Module Replacement
  ],
  devServer: {
    contentBase: path.join(__dirname, 'static/frontend'),
    compress: true,
    port: 9000,
    hot: true, // Enable Hot Module Replacement
  },
};












// const path = require("path");
// const webpack = require("webpack");

// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.resolve(__dirname, "./static/frontend"),
//     filename: "[name].js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js|.jsx$/,
//         exclude: /node_modules/,
//         use: "babel-loader",
//       },
//       {
//         test: /\.css$/,
//         exclude: /node_modules/,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   optimization: {
//     minimize: true,
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       "process.env": {
//         NODE_ENV: JSON.stringify("development"),
//       },
//     }),
//   ],
// };