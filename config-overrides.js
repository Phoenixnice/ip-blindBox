const {
  override,
  adjustStyleLoaders,
  addPostcssPlugins,
  addBabelPlugin,
  addWebpackAlias,
  addWebpackResolve,
  addLessLoader,
  addWebpackModuleRule,
  addWebpackPlugin,
} = require("customize-cra");
const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const rewirePostcss = require("react-app-rewire-postcss");
const px2rem = require("postcss-px2rem");

process.env.GENERATE_SOURCEMAP = "false";

const myFixBabelImport = (libraryName, options, uniqueName) =>
  addBabelPlugin([
    "import",
    Object.assign(
      {},
      {
        libraryName,
      },
      options
    ),
    `fix-${uniqueName || libraryName}-imports`,
  ]);
//delete console.* functions
const dropConsole = () => {
  return (config) => {
    if (config.optimization.minimizer) {
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer.constructor.name === "TerserPlugin") {
          minimizer.options.terserOptions.compress.drop_console = true;
        }
      });
    }
    return config;
  };
};

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      
    },
  }),
  adjustStyleLoaders(({ use: [, , postcss] }) => {
    const postcssOptions = postcss.options;
    postcss.options = { postcssOptions };
  }),

  addWebpackModuleRule({
    test: /\.css$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
      },
    ],
  }),

  addWebpackResolve({
    // alias: {
    //   "@": path.resolve(__dirname, "src"),
    //   "@routes": path.resolve(__dirname, "src/routes"),
    //   "@assets": path.resolve(__dirname, "src/assets")
    // },
    // moduleExtensions: [".css"]
  }),
  // addWebpackExternals({
  //   react: "react",
  //   "react-dom": "react-dom"

  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@components": path.resolve(__dirname, "src/components"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@services": path.resolve(__dirname, "src/services"),
    "@utils": path.resolve(__dirname, "src/utils"),
  }),
  // addWebpackPlugin(
  //   new BundleAnalyzerPlugin({
  //     analyzerPort: 9999,
  //   })
  // ),
  (config, env) => {
    if (process.env.NODE_ENV === "production") {
      // console.log("enter production=====");
      config.mode = "production";
      dropConsole();
    }
    rewirePostcss(config, {
      plugins: () => [
        px2rem({
          remUnit: 192,
          exclude: /node-modules/i,
        }),
      ],
    });
    return config;
  }
);
