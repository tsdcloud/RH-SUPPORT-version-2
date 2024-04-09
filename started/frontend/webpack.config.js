const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // Crucial for enabling hot reloading features
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
      {
        test: /\.(png|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
  ],
  // devServer: {
  //   // ... other devServer options
  //   proxy: [
  //     {
  //       context: '/', // Apply the proxy rule to all requests
  //       target: 'http://localhost:8000/', // Replace with your Django server URL
  //       secure: false, // Adjust if using HTTPS
  //       changeOrigin: true, // Adjust based on your setup
  //     },
  //   ],
  //   hot: true,
  // },
  // devServer: {
  //   static: path.join(__dirname, "./src/components/App.js"),
  //   hot: true, // Enable HMR in devServer
  // },
};
