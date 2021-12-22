/* eslint-disable @typescript-eslint/no-var-requires */
import path from "path";
import { Configuration } from "webpack";
const webpack = require('webpack');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' })
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
const config: Configuration = {
  entry: "./src/index.tsx",
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "build"),
    compress: true,
    port: 4000,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./src/**/*",
      },
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};

export default config;