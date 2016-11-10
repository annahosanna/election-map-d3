config = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: "./build/scripts"
  },
  devtool: 'source-map'
};

module.exports = config;