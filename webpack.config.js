const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ReactRefreshTypeScript = require('react-refresh-typescript');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  devServer: {
    port: 3000,
    historyApiFallback: {
      disableDotRule: true,
    },
  },
  devtool: "cheap-source-map",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, 'build')
  },
  mode: isDevelopment ? 'development' : 'production',
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {noEmit: false},
              getCustomTransformers: () => ({
                before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
              }),
              transpileOnly: isDevelopment,
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(jpe?g|svg|png|gif|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    ...[isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "public/favicon.ico",
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new WebpackManifestPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "public/",
        },
      ]
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules", "test-utils"],
    alias: {
      "lodash-es": "lodash",
      "lodash.debounce": "lodash/debounce",
    },

    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin()
    ]
  }
};
