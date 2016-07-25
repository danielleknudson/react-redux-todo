var path = require('path');

module.exports = {
 entry: path.join(__dirname, 'app/index.jsx'),
 output: {
  path: path.join(__dirname, 'build', 'javascripts'),
  filename: '[name].js'
 },
 resolve: {
  // Absolute path that contains modules
  root: __dirname,

  // Directory names to be searched for modules
  modulesDirectories: ['app', 'node_modules'],

  extensions: ['', '.js', '.jsx']
},
 module: {
  loaders: [
    {
      loader: 'babel',
      exclude: /node_modules/,
      test: /\.jsx?$/,
      query: {
        presets: ['react', 'es2015'],
        plugins: ['transform-object-rest-spread']
      }
    }
  ]
 }
};
