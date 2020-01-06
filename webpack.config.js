const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "vue-cos-widget.min.js",
    library: 'VueCosWidget',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
