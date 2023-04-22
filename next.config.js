/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.html$/,
  //     use: {
  //       loader: 'html-loader?attrs[]=video:src' 
  //     }
  //   }, {
  //     test: /\.mp4$/,
  //     use: {
  //       loader: 'url?limit=10000&mimetype=video/mp4'
  //     }
  //   })
  //   return config
  // },
}

module.exports = nextConfig
