config = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: "./build/scripts"
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js'
    },
    extensions: ['', '.js']
  },
};

module.exports = config;