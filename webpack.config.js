// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
  entry: {
    accountval: "./src/kolmafia/index.ts",
  },
  mode: "production",
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        //exclude: /node_modules/,
        loader: "babel-loader",
        resolve: {
          fullySpecified: false,
        },
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { rhino: "1.9.1" },
                corejs: "3.49.0",
              },
            ],
            [
              "@babel/preset-typescript",
              {
                targets: { rhino: "1.9.1" },
                corejs: "3.49.0",
              },
            ],
          ],
          retainLines: true,
          compact: false,
        },
      },
      {
        test: /\.txt/,
        type: "asset/source",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",

    path: path.join(__dirname, "./built/scripts/"),
    libraryTarget: "commonjs",
  },
  externals: {
    kolmafia: "commonjs kolmafia",
  },
  optimization: {
    minimize: false,
  },
};
