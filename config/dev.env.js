'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
var webpack = require('webpack')
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
})
