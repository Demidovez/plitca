module.exports = {
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: [/\.svg$/, /\.woff$/, /\.jpg$/],
      loader: "file-loader",
      options: {
        name: "[name].[hash:8].[ext]",
        publicPath: `/_next/static/images/`, //specify the base path
        outputPath: "static/images", //and output path
      },
    });

    return config;
  },
  // trailingSlash: false,
};
