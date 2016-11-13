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
  module:{
      loaders: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
};

module.exports = config;