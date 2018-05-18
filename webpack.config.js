const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const package = require('./package.json');
const path = require('path');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const webpack = require('webpack');

const excludeVendors = ['react-scripts-ts','normalize.css'];
const vendors = Object.keys(package.dependencies).filter( d => !excludeVendors.includes(d) );

const PATHS = {
  public: path.join( __dirname, "public" ),
  publicStatic: path.join( __dirname, "public/static" ),
  src: path.join( __dirname, "src" ),
  static: path.join( __dirname, "assets/static" ),
  indexJs : path.join( path.join( __dirname, "src" ), "index.tsx" ),
  indexHtml : path.join( path.join( __dirname, "src" ), "index.html" )
};
const PORTS = { dev: 3000 };

module.exports = {
  context: __dirname,
  mode: "development",
  devServer: {
    compress: true,
    contentBase: PATHS.public,
    // hot: true,
    port: PORTS.dev,
    overlay: { warnings: true, errors: true }
  },
  watch: true,
  entry:{ main: PATHS.indexJs, vendor: vendors },
  output: {
    filename: "[name].[chunkhash].js",
		chunkFilename: "[name].[chunkhash].js",
    path: PATHS.public
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
  resolve:{ "extensions": [ '.ts', '.tsx', '.js', '.json' ] },
  module:{
    rules:[
      { test: /\.tsx?$/, loader: "awesome-typescript-loader", exclude: /node_modules/ },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /.html$/, use: 'raw-loader' },
      { test: /\.json$/, use: 'json-loader' },
      { test: /\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader'] },
      { test: /\.woff(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?.+)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?.+)?$/, use: 'file-loader' },
      { test: /\.eot(\?.+)?$/, use: 'file-loader' },
      { test: /\.(svg|ico)(\?.+)?$/, use: 'file-loader' },
      { test: /\.png$/, use: 'url-loader?mimetype=image/png' },
      { test: /\.gif$/, use: 'url-loader?mimetype=image/gif' },
    ]
  },
  // externals: { "react": "React", "react-dom": "ReactDOM" },
  plugins: [
    new CleanWebpackPlugin([PATHS.public]),
    new CopyWebpackPlugin([ 
      { from: PATHS.static, to: PATHS.public, force: true }, 
    ]),
    new WriteFileWebpackPlugin(),
    new HtmlWebPackPlugin({
      cache: true,
      filename: "index.html",
      hash: true,
      inject: 'body',
      path: PATHS.public,
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
      // always dump manifest
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
    /*new CssBlocksPlugin({
      name: "css-blocks",
      outputCssFile: "my-output-file.css",
      analyzer: analyzerInstance,
      compilationOptions: cssBlocksCompilationOptions,
      optimization: opticssOptimizationOptions
    }),*/
  ],

};
