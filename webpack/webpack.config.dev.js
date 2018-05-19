const constants = require('./constants');
const PATHS = constants.paths, vendors = constants.vendors, ports = constants.ports;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const webpack = require('webpack');
const excludeVendors = ['normalize.css']
const vendorsArray = vendors(excludeVendors);

module.exports = {
  context: PATHS.root,
  entry:{ main: PATHS.indexJs, vendor: vendorsArray },
  output: {
    filename: "[name].js",
		chunkFilename: "[name].js",
    path: PATHS.build
  },
  optimization: {
    minimize: true,
    noEmitOnErrors: true,
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  },
  devtool: "source-map",
  resolve: { "extensions": [ '.ts', '.tsx', '.js', '.json' ] },
  module:{
    rules:[
      { 
        test: /\.tsx?$/, 
        loader: "awesome-typescript-loader", 
        include: PATHS.src,
        options:{
          useCache: true,
          errorsAsWarnings: true,
          forceIsolatedModules: true,
          reportFiles: [
            "src/**/*.{ts,tsx}",
          ]
        } 
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { enforce: 'pre', test: /\.(jpe?g|png|gif|svg)$/, loader: 'image-webpack-loader'},
      { test: /.html$/, use: 'raw-loader' },
      { test: /\.json$/, use: 'json-loader' },
      { test: /\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader'] },
      { test: /\.woff(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?.+)?$/, use: 'file-loader' },
      { test: /\.eot(\?.+)?$/, use: 'file-loader' },
      { test: /\.svg(\?.+)?$/, loader: 'svg-url-loader', options: { limit: 10 * 1024, noquotes: true } },
      { test: /\.ico(\?.+)?$/, use: 'file-loader' },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png', options: { limit: 10 * 1024, } },
      { test: /\.gif$/, loader: 'url-loader?mimetype=image/gif', options: { limit: 10 * 1024, } },     
    ]
  },
  devServer: {
    publicPath: 'http://localhost:'+ports.dev,
    compress: true,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY'
    },
    hot: true,
    contentBase: PATHS.build,
    port: ports.dev,
    overlay: { warnings: true, errors: true }
  },
  stats: {
    children: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CleanWebpackPlugin(['build']),
    new CopyWebpackPlugin([ 
      { from: PATHS.srcStatic, to: PATHS.build, force: true }, 
    ]),
    new HtmlWebPackPlugin({
      cache: true,
      filename: "index.html",
      hash: true,
      inject: 'body',
      path: PATHS.build,
      showErrors: true,
      template: PATHS.indexHtml,
      minify: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          preserveLineBreaks: true,
          useShortDoctype: true,
          html5: true
      },
    }),
    new WebpackManifestPlugin({
      writeToFileEmit: true,
      seed:{
        "short_name": "HaroldApp",
        "name": "HaroldAraujoWebsite",
        "icons": [
          {
            "src": "favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          }
        ],
        "start_url": "./index.html",
        "display": "standalone",
        "theme_color": "#000000",
        "background_color": "#ffffff"
      }
    }),    
  ],
};
