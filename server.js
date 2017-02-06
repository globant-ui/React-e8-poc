var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')
var PORT = process.env.PORT || 8080

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true
})
.listen(PORT, 'localhost', function (err, result) {
  if (err) {
    console.log(err)
  }
  console.log('Listening at localhost:' + PORT)
})
