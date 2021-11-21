/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    API_URI: process.env.API_URI,
    APP_URI: process.env.APP_URI,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { svgoConfig: { plugins: { removeViewBox: false } } },
        },
      ],
    });
    return config;
  },
};
