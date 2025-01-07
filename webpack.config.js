// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
  entry: {
    accountval: "./src/AccountVal.ts"
  },
  mode: "production",
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        //exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.txt/,
        type: "asset/source"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "[name].js",
    // eslint-disable-next-line no-undef
    path: path.join(__dirname, "./built/scripts/"),
    libraryTarget: "commonjs"
  },
  externals: {
    kolmafia: "commonjs kolmafia"
  },
  optimization: {
    minimize: false
  }
};
