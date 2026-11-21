module.exports = {
  mode: "development",
  entry: "./entry.js",
  output: { filename: "main.js", publicPath: "https://static.example.invalid/assets/" },
  module: {
    rules: [{
      test: /echo\.worker\.js$/,
      loader: "worker-rspack-loader",
      options: { worker: "SharedWorker", publicPath: "/workers/", filename: "echo.js" },
    }],
  },
  devServer: {
    host: "127.0.0.1",
    port: 8080,
    client: false,
    hot: false,
    devMiddleware: { publicPath: "/workers/" },
  },
};
